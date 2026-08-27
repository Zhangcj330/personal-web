"use client";

import {
  Children,
  cloneElement,
  createRef,
  forwardRef,
  isValidElement,
  useEffect,
  useMemo,
  useRef,
  type HTMLAttributes,
  type ReactElement,
  type ReactNode,
  type RefAttributes,
} from "react";
import gsap from "gsap";
import "./CardSwap.css";

type CardProps = HTMLAttributes<HTMLDivElement> & {
  customClass?: string;
};

type CardElementProps = CardProps & RefAttributes<HTMLDivElement>;

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ customClass, className, ...rest }, ref) => (
    <div
      ref={ref}
      {...rest}
      className={`card-swap-card ${customClass ?? ""} ${className ?? ""}`.trim()}
    />
  ),
);

Card.displayName = "Card";

type CardSwapProps = {
  width?: number | string;
  height?: number | string;
  cardDistance?: number;
  verticalDistance?: number;
  delay?: number;
  pauseOnHover?: boolean;
  onCardClick?: (idx: number) => void;
  skewAmount?: number;
  easing?: "linear" | "elastic";
  children: ReactNode;
};

const makeSlot = (i: number, distX: number, distY: number, total: number) => ({
  x: i * distX,
  y: -i * distY,
  z: -i * distX * 1.5,
  zIndex: total - i,
});

const placeNow = (
  element: HTMLDivElement,
  slot: ReturnType<typeof makeSlot>,
  skew: number,
) =>
  gsap.set(element, {
    x: slot.x,
    y: slot.y,
    z: slot.z,
    xPercent: -50,
    yPercent: -50,
    skewY: skew,
    transformOrigin: "center center",
    zIndex: slot.zIndex,
    force3D: true,
  });

export default function CardSwap({
  width = 500,
  height = 400,
  cardDistance = 60,
  verticalDistance = 70,
  delay = 5000,
  pauseOnHover = false,
  onCardClick,
  skewAmount = 6,
  easing = "elastic",
  children,
}: CardSwapProps) {
  const config = useMemo(
    () =>
      easing === "elastic"
        ? {
            ease: "elastic.out(0.6,0.9)",
            durDrop: 2,
            durMove: 2,
            durReturn: 2,
            promoteOverlap: 0.9,
            returnDelay: 0.05,
          }
        : {
            ease: "power1.inOut",
            durDrop: 0.8,
            durMove: 0.8,
            durReturn: 0.8,
            promoteOverlap: 0.45,
            returnDelay: 0.2,
          },
    [easing],
  );
  const childArray = useMemo(() => Children.toArray(children), [children]);
  const refs = useMemo(
    () => childArray.map(() => createRef<HTMLDivElement>()),
    [childArray.length],
  );
  const order = useRef(Array.from({ length: childArray.length }, (_, i) => i));
  const timelineRef = useRef<gsap.core.Timeline | null>(null);
  const intervalRef = useRef<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const total = refs.length;

    refs.forEach((ref, i) => {
      if (ref.current) {
        placeNow(
          ref.current,
          makeSlot(i, cardDistance, verticalDistance, total),
          skewAmount,
        );
      }
    });

    const clearSwapInterval = () => {
      if (intervalRef.current !== null) {
        window.clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };

    const swap = () => {
      if (order.current.length < 2) return;

      const [front, ...rest] = order.current;
      const frontElement = refs[front].current;
      if (!frontElement) return;

      const timeline = gsap.timeline();
      timelineRef.current = timeline;

      timeline.to(frontElement, {
        y: "+=500",
        duration: config.durDrop,
        ease: config.ease,
      });

      timeline.addLabel(
        "promote",
        `-=${config.durDrop * config.promoteOverlap}`,
      );

      rest.forEach((idx, i) => {
        const element = refs[idx].current;
        if (!element) return;

        const slot = makeSlot(i, cardDistance, verticalDistance, refs.length);
        timeline.set(element, { zIndex: slot.zIndex }, "promote");
        timeline.to(
          element,
          {
            x: slot.x,
            y: slot.y,
            z: slot.z,
            duration: config.durMove,
            ease: config.ease,
          },
          `promote+=${i * 0.15}`,
        );
      });

      const backSlot = makeSlot(
        refs.length - 1,
        cardDistance,
        verticalDistance,
        refs.length,
      );

      timeline.addLabel(
        "return",
        `promote+=${config.durMove * config.returnDelay}`,
      );
      timeline.call(
        () => gsap.set(frontElement, { zIndex: backSlot.zIndex }),
        undefined,
        "return",
      );
      timeline.to(
        frontElement,
        {
          x: backSlot.x,
          y: backSlot.y,
          z: backSlot.z,
          duration: config.durReturn,
          ease: config.ease,
        },
        "return",
      );
      timeline.call(() => {
        order.current = [...rest, front];
      });
    };

    const startSwapInterval = () => {
      clearSwapInterval();
      intervalRef.current = window.setInterval(swap, delay);
    };

    swap();
    startSwapInterval();

    const container = containerRef.current;
    const pause = () => {
      timelineRef.current?.pause();
      clearSwapInterval();
    };
    const resume = () => {
      timelineRef.current?.play();
      startSwapInterval();
    };

    if (pauseOnHover && container) {
      container.addEventListener("mouseenter", pause);
      container.addEventListener("mouseleave", resume);
    }

    return () => {
      clearSwapInterval();
      timelineRef.current?.kill();
      if (pauseOnHover && container) {
        container.removeEventListener("mouseenter", pause);
        container.removeEventListener("mouseleave", resume);
      }
    };
  }, [
    cardDistance,
    config,
    delay,
    pauseOnHover,
    refs,
    skewAmount,
    verticalDistance,
  ]);

  const rendered = childArray.map((child, i) => {
    if (!isValidElement<CardElementProps>(child)) return child;

    return cloneElement(child as ReactElement<CardElementProps>, {
      key: i,
      ref: refs[i],
      style: { width, height, ...child.props.style },
      onClick: (event) => {
        child.props.onClick?.(event);
        onCardClick?.(i);
      },
    });
  });

  return (
    <div
      ref={containerRef}
      className="card-swap-container"
      style={{ width, height }}
    >
      {rendered}
    </div>
  );
}
