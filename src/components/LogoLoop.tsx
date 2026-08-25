"use client";

// Adapted from the official React Bits LogoLoop component
// (https://reactbits.dev/animations/logo-loop), which drives the marquee
// with requestAnimationFrame + ResizeObserver instead of a plain CSS
// `@keyframes` transform. The CSS-only version we had before could glitch
// once per loop (a logo vanishing near the seam, then reappearing after a
// delay) because the animation's "-50%" offset assumed the two duplicated
// copies were always exactly the same width, which briefly wasn't true
// while individual logo images were still loading in and reflowing the
// track. This version re-measures the real sequence width after every
// logo loads/resizes and renders exactly as many copies as needed to
// always fill the container, so there's no reliance on a hard-coded seam.
import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type RefObject,
} from "react";
import "./LogoLoop.css";

interface LogoLoopItem {
  name: string;
  logo: string;
}

const ANIMATION_CONFIG = {
  SMOOTH_TAU: 0.25,
  MIN_COPIES: 2,
  COPY_HEADROOM: 2,
} as const;

function useResizeObserver(
  callback: () => void,
  elements: Array<RefObject<Element | null>>,
  dependencies: React.DependencyList
) {
  useEffect(() => {
    if (typeof window === "undefined" || !window.ResizeObserver) {
      const handleResize = () => callback();
      window.addEventListener("resize", handleResize);
      callback();
      return () => window.removeEventListener("resize", handleResize);
    }

    const observers = elements.map((ref) => {
      if (!ref.current) return null;
      const observer = new ResizeObserver(callback);
      observer.observe(ref.current);
      return observer;
    });

    callback();

    return () => {
      observers.forEach((observer) => observer?.disconnect());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies);
}

function useImageLoader(
  seqRef: RefObject<HTMLUListElement | null>,
  onLoad: () => void,
  dependencies: React.DependencyList
) {
  useEffect(() => {
    const images = seqRef.current?.querySelectorAll("img") ?? [];

    if (images.length === 0) {
      onLoad();
      return;
    }

    let remainingImages = images.length;
    const handleImageLoad = () => {
      remainingImages -= 1;
      if (remainingImages === 0) onLoad();
    };

    images.forEach((img) => {
      const htmlImg = img as HTMLImageElement;
      if (htmlImg.complete) {
        handleImageLoad();
      } else {
        htmlImg.addEventListener("load", handleImageLoad, { once: true });
        htmlImg.addEventListener("error", handleImageLoad, { once: true });
      }
    });

    return () => {
      images.forEach((img) => {
        img.removeEventListener("load", handleImageLoad);
        img.removeEventListener("error", handleImageLoad);
      });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies);
}

function useAnimationLoop(
  trackRef: RefObject<HTMLDivElement | null>,
  targetVelocity: number,
  seqWidth: number,
  isHovered: boolean,
  hoverSpeed: number | undefined
) {
  const rafRef = useRef<number | null>(null);
  const lastTimestampRef = useRef<number | null>(null);
  const offsetRef = useRef(0);
  const velocityRef = useRef(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (seqWidth > 0) {
      offsetRef.current = ((offsetRef.current % seqWidth) + seqWidth) % seqWidth;
      track.style.transform = `translate3d(${-offsetRef.current}px, 0, 0)`;
    }

    if (prefersReduced) {
      track.style.transform = "translate3d(0, 0, 0)";
      return () => {
        lastTimestampRef.current = null;
      };
    }

    const animate = (timestamp: number) => {
      if (lastTimestampRef.current === null) lastTimestampRef.current = timestamp;
      const deltaTime = Math.max(0, timestamp - lastTimestampRef.current) / 1000;
      lastTimestampRef.current = timestamp;

      const target = isHovered && hoverSpeed !== undefined ? hoverSpeed : targetVelocity;
      const easingFactor = 1 - Math.exp(-deltaTime / ANIMATION_CONFIG.SMOOTH_TAU);
      velocityRef.current += (target - velocityRef.current) * easingFactor;

      if (seqWidth > 0) {
        let nextOffset = offsetRef.current + velocityRef.current * deltaTime;
        nextOffset = ((nextOffset % seqWidth) + seqWidth) % seqWidth;
        offsetRef.current = nextOffset;
        track.style.transform = `translate3d(${-offsetRef.current}px, 0, 0)`;
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
      lastTimestampRef.current = null;
    };
  }, [targetVelocity, seqWidth, isHovered, hoverSpeed, trackRef]);
}

export default function LogoLoop({ items }: { items: LogoLoopItem[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const seqRef = useRef<HTMLUListElement>(null);

  const [seqWidth, setSeqWidth] = useState(0);
  const [copyCount, setCopyCount] = useState<number>(ANIMATION_CONFIG.MIN_COPIES);
  const [isHovered, setIsHovered] = useState(false);

  const speed = 60; // px/s, leftward
  const hoverSpeed = 0; // pause on hover

  const updateDimensions = useCallback(() => {
    const containerWidth = containerRef.current?.clientWidth ?? 0;
    const sequenceWidth = seqRef.current?.getBoundingClientRect?.().width ?? 0;
    // The track's own flex `gap` only applies *between* the repeated
    // sequence copies (not within one), so the true loop period is the
    // sequence width plus that gap - otherwise the last item of one copy
    // and the first item of the next would end up touching with no space.
    const trackGap = trackRef.current
      ? parseFloat(getComputedStyle(trackRef.current).columnGap || "0") || 0
      : 0;
    if (sequenceWidth > 0) {
      const period = sequenceWidth + trackGap;
      setSeqWidth(Math.ceil(period));
      const copiesNeeded = Math.ceil(containerWidth / period) + ANIMATION_CONFIG.COPY_HEADROOM;
      setCopyCount(Math.max(ANIMATION_CONFIG.MIN_COPIES, copiesNeeded));
    }
  }, []);

  useResizeObserver(updateDimensions, [containerRef, seqRef], [items]);
  useImageLoader(seqRef, updateDimensions, [items]);
  useAnimationLoop(trackRef, speed, seqWidth, isHovered, hoverSpeed);

  const handleMouseEnter = useCallback(() => setIsHovered(true), []);
  const handleMouseLeave = useCallback(() => setIsHovered(false), []);

  const renderLogoItem = (item: LogoLoopItem, key: string) => {
    const slug = item.name.toLowerCase().replace(/\s+/g, "-");
    return (
      <li key={key} role="listitem" className={`logo-loop__item logo-loop__item--${slug}`}>
        {/* eslint-disable-next-line @next/next/no-img-element -- decorative
            logo strip; a plain <img> avoids next/image's fixed sizing
            requirements for a variable-width marquee. */}
        <img
          src={item.logo}
          alt={item.name}
          title={item.name}
          className="logo-loop__logo"
          loading="lazy"
          decoding="async"
          draggable={false}
        />
      </li>
    );
  };

  const logoLists = useMemo(
    () =>
      Array.from({ length: copyCount }, (_, copyIndex) => (
        <ul
          className="logo-loop__sequence"
          key={`copy-${copyIndex}`}
          role="list"
          aria-hidden={copyIndex > 0}
          ref={copyIndex === 0 ? seqRef : undefined}
        >
          {items.map((item, itemIndex) => renderLogoItem(item, `${copyIndex}-${itemIndex}`))}
        </ul>
      )),
    [copyCount, items]
  );

  return (
    <div ref={containerRef} className="logo-loop" role="region" aria-label="Companies I've built for">
      <div
        ref={trackRef}
        className="logo-loop__track"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {logoLists}
      </div>
    </div>
  );
}
