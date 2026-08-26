"use client";

// Adapted from React Bits (https://reactbits.dev) — PixelTransition,
// MIT licensed. The official technique is simple: plain solid-color
// squares stagger on to fully cover the content, the content is swapped
// once while hidden, then the squares stagger back off. This file used
// to reimplement it by deep-cloning the entire card into every pixel and
// animating scale/rotation per clone, which was needlessly expensive
// (200+ full DOM clones and WAAPI animations on every hover) and caused
// jank/flicker elsewhere on the page. Kept simple on purpose.
import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";
import "./PixelSwap.css";

const MAX_PIXELS = 140;

type PatternName =
  | "random"
  | "center"
  | "edges"
  | "left-to-right"
  | "right-to-left"
  | "top-to-bottom"
  | "bottom-to-top"
  | "diagonal"
  | "spiral";

const PATTERNS: Record<PatternName, (x: number, y: number) => number | null> = {
  random: () => null,
  center: (x, y) => Math.hypot(x - 0.5, y - 0.5) / Math.SQRT1_2,
  edges: (x, y) => Math.min(x, 1 - x, y, 1 - y) * 2,
  "left-to-right": (x) => x,
  "right-to-left": (x) => 1 - x,
  "top-to-bottom": (_x, y) => y,
  "bottom-to-top": (_x, y) => 1 - y,
  diagonal: (x, y) => (x + y) / 2,
  spiral: (x, y) => {
    const angle = (Math.atan2(y - 0.5, x - 0.5) + Math.PI) / (Math.PI * 2);
    const radius = Math.hypot(x - 0.5, y - 0.5) / Math.SQRT1_2;
    return (angle + radius) % 1;
  },
};

const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);

const noise = (seed: number) => {
  const value = Math.sin(seed * 127.1 + 311.7) * 43758.5453;
  return value - Math.floor(value);
};

interface Pixel {
  id: number;
  left: number;
  top: number;
  offset: number;
}

interface Grid {
  pixels: Pixel[];
  size: number;
  gap: number;
}

const buildGrid = ({
  width,
  height,
  pixelSize,
  gap,
  pattern,
  randomness,
}: {
  width: number;
  height: number;
  pixelSize: number;
  gap: number;
  pattern: PatternName;
  randomness: number;
}): Grid => {
  let size = pixelSize;
  let columns = Math.max(1, Math.ceil((width + gap) / (size + gap)));
  let rows = Math.max(1, Math.ceil((height + gap) / (size + gap)));

  if (columns * rows > MAX_PIXELS) {
    size = Math.ceil(size * Math.sqrt((columns * rows) / MAX_PIXELS));
    columns = Math.max(1, Math.ceil((width + gap) / (size + gap)));
    rows = Math.max(1, Math.ceil((height + gap) / (size + gap)));
  }

  const stride = size + gap;
  const originX = (width - (columns * stride - gap)) / 2;
  const originY = (height - (rows * stride - gap)) / 2;
  const order = PATTERNS[pattern] ?? PATTERNS.random;
  const mix = clamp(randomness, 0, 1);
  const pixels: Pixel[] = [];

  for (let row = 0; row < rows; row += 1) {
    for (let column = 0; column < columns; column += 1) {
      const index = row * columns + column;
      const x = columns <= 1 ? 0.5 : column / (columns - 1);
      const y = rows <= 1 ? 0.5 : row / (rows - 1);
      const base = order(x, y);
      const random = noise(index + 1);

      pixels.push({
        id: index,
        left: originX + column * stride,
        top: originY + row * stride,
        offset: base === null ? random : base * (1 - mix) + random * mix,
      });
    }
  }

  return { pixels, size, gap };
};

export interface PixelSwapProps {
  firstContent: ReactNode;
  secondContent: ReactNode;
  pixelSize?: number;
  gap?: number;
  pixelColor?: string;
  duration?: number;
  pixelDuration?: number;
  pattern?: PatternName;
  randomness?: number;
  trigger?: "hover" | "click" | "manual";
  initialActive?: boolean;
  active?: boolean;
  onActiveChange?: (active: boolean) => void;
  onComplete?: (active: boolean) => void;
  aspectRatio?: string;
  className?: string;
  style?: CSSProperties;
}

function PixelSwap({
  firstContent,
  secondContent,
  pixelSize = 64,
  gap = 0,
  pixelColor = "currentColor",
  duration = 1100,
  pixelDuration = 350,
  pattern = "random",
  randomness = 0,
  trigger = "hover",
  initialActive = false,
  active,
  onActiveChange,
  onComplete,
  aspectRatio = "16 / 10",
  className = "",
  style,
}: PixelSwapProps) {
  const [internalActive, setInternalActive] = useState(initialActive);
  const [shownActive, setShownActive] = useState(active ?? initialActive);
  const [transitioning, setTransitioning] = useState(false);
  const [box, setBox] = useState({ width: 0, height: 0 });

  const containerRef = useRef<HTMLDivElement | null>(null);
  const pixelRefs = useRef<(HTMLDivElement | null)[]>([]);
  const timersRef = useRef<number[]>([]);
  const leaveTimerRef = useRef(0);
  const transitionToRef = useRef<boolean | null>(null);

  const desiredActive = active ?? internalActive;

  const grid = useMemo(
    () =>
      buildGrid({
        width: box.width,
        height: box.height,
        pixelSize: Math.max(8, Math.round(pixelSize)),
        gap: Math.max(0, Math.round(gap)),
        pattern,
        randomness,
      }),
    [box.width, box.height, pixelSize, gap, pattern, randomness]
  );

  const config = { duration, pixelDuration, onComplete };
  const configRef = useRef(config);
  const gridRef = useRef(grid);

  useEffect(() => {
    configRef.current = config;
    gridRef.current = grid;
  });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const measure = () => {
      const width = container.clientWidth;
      const height = container.clientHeight;
      if (!width || !height) return;
      setBox((current) => (current.width === width && current.height === height ? current : { width, height }));
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  const clearTimers = useCallback(() => {
    timersRef.current.forEach((id) => window.clearTimeout(id));
    timersRef.current = [];
  }, []);

  useEffect(
    () => () => {
      clearTimers();
      if (leaveTimerRef.current) window.clearTimeout(leaveTimerRef.current);
    },
    [clearTimers]
  );

  const runTransition = useCallback((to: boolean) => {
    clearTimers();
    transitionToRef.current = to;
    setTransitioning(true);

    const settings = configRef.current;
    const currentGrid = gridRef.current;
    const pixels = currentGrid.pixels;

    const finish = () => {
      if (transitionToRef.current !== to) return; // superseded by a newer transition
      setTransitioning(false);
      configRef.current.onComplete?.(to);
    };

    if (!pixels.length || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setShownActive(to);
      finish();
      return;
    }

    const total = Math.max(200, settings.duration);
    const half = total / 2;
    const pixelMs = clamp(settings.pixelDuration, 60, half);
    const spread = Math.max(0, half - pixelMs);

    // Cover: stagger the pixels on in pattern order.
    pixels.forEach((pixel, index) => {
      const id = window.setTimeout(() => {
        const el = pixelRefs.current[index];
        if (el) el.style.opacity = "1";
      }, pixel.offset * spread);
      timersRef.current.push(id);
    });

    // Swap the actual content once fully covered, then uncover.
    const swapId = window.setTimeout(() => {
      setShownActive(to);
      pixels.forEach((pixel, index) => {
        const id = window.setTimeout(() => {
          const el = pixelRefs.current[index];
          if (el) el.style.opacity = "0";
        }, pixel.offset * spread);
        timersRef.current.push(id);
      });
    }, half);
    timersRef.current.push(swapId);

    const finishId = window.setTimeout(finish, total);
    timersRef.current.push(finishId);
  }, [clearTimers]);

  useEffect(() => {
    if (desiredActive === shownActive) return;
    if (transitioning && transitionToRef.current === desiredActive) return;
    runTransition(desiredActive);
    // Interrupting an in-flight transition mid-way and starting the
    // reverse one right away (instead of queuing it behind the current
    // ~1s dissolve) is what actually stops the flicker: a large card
    // means ordinary mouse movement crosses its edge often, and without
    // this, reversed hovers would pile up full-length animations back
    // to back.
  }, [desiredActive, shownActive, transitioning, runTransition]);

  const requestActive = useCallback(
    (next: boolean) => {
      if (active === undefined) setInternalActive(next);
      onActiveChange?.(next);
    },
    [active, onActiveChange]
  );

  const interactionProps = useMemo(() => {
    if (trigger === "hover") {
      const clearLeaveTimer = () => {
        if (leaveTimerRef.current) {
          window.clearTimeout(leaveTimerRef.current);
          leaveTimerRef.current = 0;
        }
      };
      return {
        onMouseEnter: () => {
          clearLeaveTimer();
          requestActive(true);
        },
        // Debounce leaving: a mouse crossing the card's edge while moving
        // up/down can fire enter/leave rapidly. Waiting briefly lets a
        // quick re-entry cancel the pending deactivation instead of
        // restarting the transition.
        onMouseLeave: () => {
          clearLeaveTimer();
          leaveTimerRef.current = window.setTimeout(() => {
            requestActive(false);
            leaveTimerRef.current = 0;
          }, 180);
        },
        onFocus: () => {
          clearLeaveTimer();
          requestActive(true);
        },
        onBlur: () => requestActive(false),
        tabIndex: 0,
      };
    }

    if (trigger === "click") {
      return {
        onClick: () => requestActive(!desiredActive),
        onKeyDown: (event: React.KeyboardEvent) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            requestActive(!desiredActive);
          }
        },
        role: "button" as const,
        tabIndex: 0,
      };
    }

    return {};
  }, [desiredActive, requestActive, trigger]);

  const renderLayer = (content: ReactNode, index: number) => {
    const isShown = index === (shownActive ? 1 : 0);
    return (
      <div
        key={index}
        className="pixel-swap__layer"
        data-visible={isShown}
        style={{ zIndex: isShown ? 2 : 1 }}
        aria-hidden={!isShown}
      >
        {content}
      </div>
    );
  };

  return (
    <div
      ref={containerRef}
      className={`pixel-swap ${className}`.trim()}
      style={{ aspectRatio, color: pixelColor, ...style }}
      data-active={shownActive}
      data-transitioning={transitioning}
      {...interactionProps}
    >
      {renderLayer(firstContent, 0)}
      {renderLayer(secondContent, 1)}

      {transitioning && (
        <div className="pixel-swap__grid" aria-hidden="true">
          {grid.pixels.map((pixel, index) => (
            <div
              key={pixel.id}
              ref={(element) => {
                pixelRefs.current[index] = element;
              }}
              className="pixel-swap__pixel"
              style={{
                left: pixel.left,
                top: pixel.top,
                width: grid.size,
                height: grid.size,
                transitionDuration: `${clamp(pixelDuration, 60, duration / 2)}ms`,
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default PixelSwap;
