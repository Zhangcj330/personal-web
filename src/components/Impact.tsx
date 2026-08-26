import { impact } from "@/data/content";
import Reveal from "@/components/Reveal";

export default function Impact() {
  return (
    <section id="impact" className="mx-auto max-w-6xl px-6 py-20">
      <div className="border-t border-border pt-12">
        <Reveal>
          <h2 className="text-sm font-medium uppercase tracking-widest text-muted">
            {impact.eyebrow}
          </h2>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {impact.stats.map((stat, i) => (
            <Reveal
              key={stat.value}
              delay={i * 0.06}
              className="rounded-2xl border border-border bg-background p-5"
            >
              <div className="text-2xl font-bold tracking-tight sm:text-3xl">
                {stat.value}
              </div>
              {stat.label && (
                <div className="mt-1 text-[13px] font-semibold uppercase tracking-wide text-muted">
                  {stat.label}
                </div>
              )}
              <p className="mt-2 text-[13px] leading-relaxed text-muted">
                {stat.description}
              </p>
            </Reveal>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {impact.stories.map((story, i) => (
            <Reveal
              key={story.title}
              delay={0.2 + i * 0.06}
              className="flex flex-col gap-2"
            >
              {story.eyebrow && (
                <span className="text-xs font-semibold uppercase tracking-widest text-muted">
                  {story.eyebrow}
                </span>
              )}
              <h3 className="text-lg font-semibold">{story.title}</h3>
              <p className="text-muted">{story.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
