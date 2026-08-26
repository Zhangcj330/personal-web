import { focus, focusAreas } from "@/data/content";
import Reveal from "@/components/Reveal";

export default function Focus() {
  return (
    <section id="focus" className="mx-auto max-w-4xl px-6 py-24">
      <div className="border-t border-border pt-12">
        <Reveal>
          <h2 className="text-sm font-medium uppercase tracking-widest text-muted">
            {focus.eyebrow}
          </h2>
          <p className="mt-2 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            {focus.heading[0]}
            <br />
            {focus.heading[1]}
          </p>
          <p className="mt-4 max-w-xl text-muted">{focus.lead}</p>
        </Reveal>

        <div className="mt-16 flex flex-col">
          {focusAreas.map((area, i) => (
            <Reveal
              key={area.title}
              delay={i * 0.08}
              className="border-t border-border py-12 first:pt-0 last:pb-0"
            >
              <span className="font-mono text-xs font-semibold text-muted">
                {area.number}
              </span>
              <h3 className="mt-4 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
                {area.title}
              </h3>
              <p className="mt-4 max-w-lg text-lg text-muted">{area.lead}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {area.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-border px-3 py-1.5 text-[13px] font-medium text-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
