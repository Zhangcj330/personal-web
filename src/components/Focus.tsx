import { focus, focusAreas } from "@/data/content";
import Reveal from "@/components/Reveal";

export default function Focus() {
  return (
    <section id="focus" className="mx-auto max-w-6xl px-6 py-20">
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
          <p className="mt-4 max-w-2xl text-muted">{focus.lead}</p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {focusAreas.map((area, i) => (
            <Reveal
              key={area.title}
              delay={i * 0.08}
              className="rounded-2xl border border-border bg-background p-7"
            >
              <span className="font-mono text-xs font-semibold text-muted">
                {area.number}
              </span>
              <h3 className="mt-3 font-display text-lg font-semibold tracking-tight sm:text-xl">
                {area.title}
              </h3>
              <p className="mt-3 font-medium">{area.lead}</p>
              <p className="mt-2 text-muted">{area.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
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
