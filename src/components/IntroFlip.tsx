"use client";

import Image from "next/image";
import PixelSwap from "@/components/PixelSwap";
import Reveal from "@/components/Reveal";
import { caseStudies, founderWork, iagWork, site } from "@/data/content";

const brickAi = caseStudies.find((study) => study.key === "brickAi")!;

export default function IntroFlip() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-16">
      <Reveal>
        {/* Full-width hover card: front is the day-job intro, back reveals
            the founder side. Photo lives at public/photos/choosie-brickai.jpg. */}
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
                  <span className="relative flex h-24 w-24 items-center justify-center overflow-hidden rounded-full bg-foreground">
                    <Image
                      src="/photos/choosie-brickai.jpg"
                      alt={site.name}
                      fill
                      sizes="96px"
                      className="object-cover"
                    />
                  </span>
                  <span className="text-sm font-medium text-muted">
                    Hover to see the other side →
                  </span>
                </div>
                <div className="flex max-w-2xl flex-col gap-4 overflow-y-auto">
                  <span className="text-xs font-semibold uppercase tracking-widest text-muted">
                    By day
                  </span>
                  <h3 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
                    {iagWork.heading}
                  </h3>
                  <p className="text-base text-muted sm:text-lg">{iagWork.lead}</p>
                  <div className="flex flex-col gap-3">
                    {iagWork.items.map((item) => (
                      <div key={item.title}>
                        <h4 className="text-sm font-semibold text-foreground">
                          {item.title}
                        </h4>
                        <p className="text-sm text-muted">{item.description}</p>
                      </div>
                    ))}
                  </div>
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
                  <span className="relative flex h-24 w-24 items-center justify-center overflow-hidden rounded-full bg-white">
                    <Image
                      src="/photos/choosie-brickai.jpg"
                      alt={site.name}
                      fill
                      sizes="96px"
                      className="object-cover"
                    />
                  </span>
                  <span className="text-sm font-medium text-white/60">
                    Also a founder
                  </span>
                </div>
                <div className="flex max-w-2xl flex-col gap-4 overflow-y-auto">
                  <span className="text-xs font-semibold uppercase tracking-widest text-white/60">
                    {founderWork.label}
                  </span>
                  <p className="text-base text-white/80 sm:text-lg">{founderWork.lead}</p>
                  <div className="flex flex-col gap-3">
                    {founderWork.items.map((item) => (
                      <div key={item.title}>
                        <h4 className="text-sm font-semibold text-white">
                          {item.title}
                        </h4>
                        <p className="text-sm text-white/80">
                          {item.highlight
                            ? item.description
                                .split(item.highlight)
                                .flatMap((part, i, arr) =>
                                  i < arr.length - 1
                                    ? [
                                        part,
                                        <strong key={item.title} className="text-white">
                                          {item.highlight}
                                        </strong>,
                                      ]
                                    : [part]
                                )
                            : item.description}
                        </p>
                      </div>
                    ))}
                  </div>
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
