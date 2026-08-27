"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import CardSwap, { Card } from "@/components/CardSwap";
import Reveal from "@/components/Reveal";
import { impact } from "@/data/content";

const companyLogos: Record<string, { src: string; alt: string }> = {
  "IAG · NRMA": {
    src: "/logos/IAG-circle.png",
    alt: "IAG",
  },
  "Brick AI": {
    src: "/logos/brickai.svg",
    alt: "Brick AI",
  },
};

const impactCards = impact.groups.flatMap((group) => [
  ...group.stats.map((stat) => ({
    company: group.company,
    value: stat.value,
    label: stat.label,
    description: stat.description,
    eyebrow: undefined,
  })),
  ...group.stories.map((story) => ({
    company: group.company,
    value: "metric" in story ? story.metric : undefined,
    label: story.title,
    description: story.description,
    eyebrow: "eyebrow" in story ? story.eyebrow : undefined,
  })),
]);

export default function Impact() {
  const [selectedCard, setSelectedCard] = useState<number | null>(null);

  useEffect(() => {
    if (selectedCard === null) return;

    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedCard(null);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [selectedCard]);

  const detailCard = selectedCard === null ? null : impactCards[selectedCard];
  const detailCardIsLight = selectedCard !== null && selectedCard % 2 === 1;

  return (
    <>
      <section
        id="impact"
        className="mx-auto max-w-6xl overflow-hidden px-6 pt-20 pb-12"
      >
        <div className="border-t border-border pt-12">
          <div className="grid items-center gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:gap-10">
          <Reveal className="relative z-10 lg:pb-8">
            <h2 className="text-sm font-medium uppercase tracking-widest text-muted">
              {impact.eyebrow}
            </h2>
            <p className="mt-2 max-w-md font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              Outcomes that moved forward.
            </p>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted">
              Product outcomes across customer experience, operations, AI, and
              geospatial intelligence.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {impact.groups.map((group) => (
                <span
                  key={group.company}
                  className="rounded-full border border-border px-3 py-1.5 text-xs font-semibold"
                >
                  {group.company}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal
            delay={0.08}
            className="relative h-[500px] sm:h-[540px] lg:h-[500px]"
          >
            <CardSwap
              width="min(88vw, 480px)"
              height={320}
              cardDistance={22}
              verticalDistance={30}
              delay={3000}
              pauseOnHover
              skewAmount={6}
              easing="elastic"
              onCardClick={setSelectedCard}
            >
              {impactCards.map((card, index) => (
                <Card key={`${card.company}-${card.label}`} customClass="impact-swap-card">
                  <div className="flex items-center justify-between gap-4">
                    <Image
                      src={companyLogos[card.company].src}
                      alt={companyLogos[card.company].alt}
                      width={40}
                      height={40}
                      className={`h-10 w-10 object-contain ${
                        card.company === "IAG · NRMA" ? "rounded-full" : "rounded-lg"
                      }`}
                    />
                    <span className="text-[11px] font-semibold tabular-nums opacity-45">
                      0{index + 1}
                    </span>
                  </div>

                  <div>
                    {card.eyebrow && (
                      <div className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] opacity-60">
                        {card.eyebrow}
                      </div>
                    )}
                    {card.value && (
                      <div className="font-display text-5xl font-bold leading-none tracking-[-0.05em] sm:text-6xl">
                        {card.value}
                      </div>
                    )}
                    <h3
                      className={`whitespace-pre-line font-display font-semibold leading-tight tracking-tight ${
                        card.value ? "mt-4 text-xl" : "text-3xl"
                      }`}
                    >
                      {card.label}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed opacity-65">
                      {card.description}
                    </p>
                  </div>
                </Card>
              ))}
            </CardSwap>
          </Reveal>
          </div>
        </div>
      </section>

      {detailCard && selectedCard !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/55 p-5 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="impact-detail-title"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setSelectedCard(null);
          }}
        >
          <div
            className={`relative flex min-h-[360px] w-full max-w-xl flex-col justify-between overflow-hidden rounded-[24px] border p-8 shadow-2xl sm:p-10 ${
              detailCardIsLight
                ? "border-black/10 text-[#111]"
                : "border-white/20 text-white"
            }`}
            style={{
              background: detailCardIsLight
                ? "radial-gradient(circle at 14% 10%, rgba(255,255,255,0.85), transparent 38%), linear-gradient(135deg, #f7f3ea, #e8e0d2)"
                : "radial-gradient(circle at 85% 10%, rgba(255,255,255,0.14), transparent 35%), #111",
            }}
          >
            <button
              type="button"
              onClick={() => setSelectedCard(null)}
              className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full border border-current/15 bg-current/5 text-xl leading-none transition-opacity hover:opacity-55"
              aria-label="Close impact detail"
            >
              ×
            </button>

            <div className="flex items-center justify-between gap-4 pr-12">
              <Image
                src={companyLogos[detailCard.company].src}
                alt={companyLogos[detailCard.company].alt}
                width={48}
                height={48}
                className={`h-12 w-12 object-contain ${
                  detailCard.company === "IAG · NRMA" ? "rounded-full" : "rounded-xl"
                }`}
              />
              <span className="text-xs font-semibold tabular-nums opacity-45">
                0{selectedCard + 1}
              </span>
            </div>

            <div className="mt-16">
              {detailCard.eyebrow && (
                <div className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] opacity-60">
                  {detailCard.eyebrow}
                </div>
              )}
              {detailCard.value && (
                <div className="font-display text-6xl font-bold leading-none tracking-[-0.05em]">
                  {detailCard.value}
                </div>
              )}
              <h3
                id="impact-detail-title"
                className={`whitespace-pre-line font-display font-semibold leading-tight tracking-tight ${
                  detailCard.value ? "mt-5 text-3xl" : "text-4xl"
                }`}
              >
                {detailCard.label}
              </h3>
              <p className="mt-4 max-w-lg text-base leading-relaxed opacity-70">
                {detailCard.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
