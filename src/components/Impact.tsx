import { impact } from "@/data/content";
import Reveal from "@/components/Reveal";

function EmphasizedTitle({
  title,
  emphasis,
}: {
  title: string;
  emphasis?: string;
}) {
  if (!emphasis) return title;

  const emphasisIndex = title.indexOf(emphasis);
  if (emphasisIndex === -1) return title;

  return (
    <>
      {title.slice(0, emphasisIndex)}
      <span className="font-bold italic">{emphasis}</span>
      {title.slice(emphasisIndex + emphasis.length)}
    </>
  );
}

export default function Impact() {
  return (
    <section id="impact" className="mx-auto max-w-6xl overflow-hidden px-6 py-20">
      <div>
        <Reveal>
          <h2 className="text-sm font-medium uppercase tracking-widest text-muted">
            {impact.eyebrow}
          </h2>
          <p className="mt-2 max-w-3xl font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Outcomes that moved forward.
          </p>
        </Reveal>

        <div className="mt-14 flex flex-col gap-20 sm:mt-16 sm:gap-24">
          {impact.groups.map((group, gi) => (
            <div key={group.company} className="relative">
              <Reveal delay={gi * 0.05}>
                <div className="mb-8 flex items-baseline justify-between border-b border-border pb-3">
                  <h3 className="font-display text-lg font-semibold tracking-tight sm:text-xl">
                    {group.company}
                  </h3>
                  <span className="text-xs font-semibold tabular-nums text-muted">
                    0{gi + 1}
                  </span>
                </div>
              </Reveal>

              <div className="grid grid-cols-1 gap-x-12 gap-y-14 sm:grid-cols-2">
                {group.stats.map((stat, i) => (
                  <Reveal
                    key={stat.value}
                    delay={gi * 0.05 + i * 0.06}
                    className={i % 2 === 1 ? "sm:pt-20" : ""}
                  >
                    <div className="font-display text-[clamp(3rem,5.5vw,5rem)] font-bold leading-[0.9] tracking-[-0.05em]">
                      {stat.value}
                    </div>
                    <div className="mt-5 max-w-md">
                      {stat.label && (
                        <div className="text-xs font-semibold uppercase tracking-[0.18em]">
                          {stat.label}
                        </div>
                      )}
                      <p
                        className={`text-sm leading-relaxed text-muted ${
                          stat.label ? "mt-2" : ""
                        }`}
                      >
                        {stat.description}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>

              <div
                className={`mt-12 grid grid-cols-1 gap-x-12 gap-y-10 sm:mt-16 ${
                  group.stories.length > 1 ? "sm:grid-cols-2" : ""
                }`}
              >
                {group.stories.map((story, i) => (
                  <Reveal
                    key={story.title}
                    delay={gi * 0.05 + 0.12 + i * 0.06}
                    className="flex max-w-xl flex-col border-l-2 border-foreground pl-5 sm:pl-7"
                  >
                    {"eyebrow" in story && story.eyebrow && (
                      <span className="mb-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted">
                        {story.eyebrow}
                      </span>
                    )}
                    {"metric" in story && story.metric && (
                      <div className="mb-4 font-display text-4xl font-bold leading-none tracking-[-0.04em] sm:text-5xl">
                        {story.metric}
                      </div>
                    )}
                    <h4
                      className={`whitespace-pre-line font-display font-semibold ${
                        "metric" in story && story.metric
                          ? "text-sm uppercase leading-snug tracking-[0.16em]"
                          : "text-xl leading-tight tracking-tight sm:text-2xl"
                      }`}
                    >
                      <EmphasizedTitle
                        title={story.title}
                        emphasis={"emphasis" in story ? story.emphasis : undefined}
                      />
                    </h4>
                    <p className="mt-3 text-sm leading-relaxed text-muted">
                      {story.description}
                    </p>
                  </Reveal>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
