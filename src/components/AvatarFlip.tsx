"use client";

import PixelSwap from "@/components/PixelSwap";
import { site } from "@/data/content";

const initials = site.name
  .split(" ")
  .map((part) => part[0])
  .join("")
  .slice(0, 2)
  .toUpperCase();

export default function AvatarFlip() {
  return (
    <div className="w-40 sm:w-48">
      <PixelSwap
        className="rounded-2xl border border-border"
        aspectRatio="1 / 1"
        pixelSize={20}
        pixelScale={0.3}
        duration={900}
        pixelDuration={320}
        pattern="random"
        trigger="hover"
        firstContent={
          <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-zinc-100">
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-foreground text-xl font-semibold text-white">
              {initials}
            </span>
            <span className="text-sm font-medium">{site.name}</span>
          </div>
        }
        secondContent={
          <div className="flex h-full w-full flex-col items-center justify-center gap-1 bg-foreground px-4 text-center text-white">
            <span className="text-xs uppercase tracking-widest text-white/60">
              Also building
            </span>
            <span className="text-lg font-semibold">Founder of Brick AI</span>
          </div>
        }
      />
    </div>
  );
}
