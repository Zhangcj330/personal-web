import Image from "next/image";
import CardSwap, { Card } from "@/components/CardSwap";
import Reveal from "@/components/Reveal";
import { impact } from "@/data/content";

const companyLogos: Record<string, { src: string; alt: string }> = {
  "IAG · NRMA": {
    src: "/logos/IAG.png",
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
  return (
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
              skewAmount={4}
              easing="elastic"
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
                        card.company === "IAG · NRMA" ? "rounded-full bg-white" : "rounded-lg"
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
  );
}
