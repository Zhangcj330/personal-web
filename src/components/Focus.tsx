import { focusAreas } from "@/data/content";
import Reveal from "@/components/Reveal";

export default function Focus() {
  return (
    <section id="focus" className="mx-auto max-w-6xl px-6 py-20">
      <div className="border-t border-border pt-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {focusAreas.map((area, i) => (
            <Reveal key={area.title} delay={i * 0.1} className="flex flex-col gap-3">
              <span className="font-display text-sm text-muted">{area.number}</span>
              <h3 className="font-display text-2xl font-semibold tracking-tight">
                {area.title}
              </h3>
              <p className="text-muted">{area.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
