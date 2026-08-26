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
        </Reveal>
        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2">
          {focusAreas.map((area, i) => (
            <Reveal key={area.title} delay={i * 0.06} className="flex flex-col gap-2">
              <span className="font-display text-sm text-muted">{area.number}</span>
              <h3 className="text-lg font-semibold">{area.title}</h3>
              <p className="font-medium">{area.lead}</p>
              <p className="text-muted">{area.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
