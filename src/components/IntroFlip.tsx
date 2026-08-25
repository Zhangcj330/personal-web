"use client";

import PixelSwap from "@/components/PixelSwap";
import Reveal from "@/components/Reveal";
import { caseStudies, site } from "@/data/content";

const initials = site.name
  .split(" ")
  .map((part) => part[0])
  .join("")
  .slice(0, 2)
  .toUpperCase();

const brickAi = caseStudies.find((study) => study.key === "brickAi")!;

export default function IntroFlip() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-16">
      <Reveal>
        {/* Full-width hover card: front is the day-job intro, back reveals
            the founder side. Swap the initials avatar below for a real
            photo once one is available. */}
        <div className="h-[640px] sm:h-[480px] lg:h-[420px]">
          <PixelSwap
            className="h-full rounded-3xl border border-border"
            pixelSize={28}
            pixelScale={0.3}
            duration={1100}
            pixelDuration={380}
            pattern="random"
            trigger="hover"
            firstContent={
              <div className="flex h-full w-full flex-col justify-center gap-6 bg-zinc-50 p-8 sm:p-12 lg:flex-row lg:items-start lg:justify-start lg:gap-12">
                <div className="flex shrink-0 flex-col items-center gap-3 lg:w-40 lg:items-start lg:pt-1">
                  <span className="flex h-24 w-24 items-center justify-center rounded-full bg-foreground text-3xl font-semibold text-white">
                    {initials}
                  </span>
                  <span className="text-sm font-medium text-muted">
                    Hover to see the other side →
                  </span>
                </div>
                <div className="flex max-w-2xl flex-col gap-4">
                  <span className="text-xs font-semibold uppercase tracking-widest text-muted">
                    By day
                  </span>
                  <h3 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
                    {site.name} — {site.role} at IAG
                  </h3>
                  <p className="text-base text-muted sm:text-lg">
                    {site.intro} I work across production APIs, cloud data
                    pipelines and agentic AI workflows inside a large
                    financial services organisation — from incident
                    remediation agents to real-time risk intelligence.
                  </p>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {site.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-border bg-white px-3 py-1 text-xs text-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            }
            secondContent={
              <div className="flex h-full w-full flex-col justify-center gap-6 bg-foreground p-8 text-white sm:p-12 lg:flex-row lg:items-start lg:justify-start lg:gap-12">
                <div className="flex shrink-0 flex-col items-center gap-3 lg:w-40 lg:items-start lg:pt-1">
                  <span className="flex h-24 w-24 items-center justify-center rounded-full bg-white text-3xl font-semibold text-foreground">
                    {initials}
                  </span>
                  <span className="text-sm font-medium text-white/60">
                    Also a founder
                  </span>
                </div>
                <div className="flex max-w-2xl flex-col gap-4">
                  <span className="text-xs font-semibold uppercase tracking-widest text-white/60">
                    By night
                  </span>
                  <h3 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
                    Founder of Brick AI
                  </h3>
                  <p className="text-base text-white/80 sm:text-lg">
                    {brickAi.description} {brickAi.note}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {brickAi.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/30 px-3 py-1 text-xs text-white/80"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href="#case-studies"
                    className="mt-2 inline-flex w-fit items-center gap-1 text-sm font-medium text-white underline underline-offset-4 transition-opacity hover:opacity-80"
                  >
                    See the Brick AI case study →
                  </a>
                </div>
              </div>
            }
          />
        </div>
      </Reveal>
    </section>
  );
}
