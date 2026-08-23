import { process } from "@/data/content";
import Reveal from "@/components/Reveal";

export default function Process() {
  return (
    <section id="process" className="mx-auto max-w-6xl px-6 py-20">
      <div className="border-t border-border pt-12">
        <Reveal>
          <h2 className="text-sm font-medium uppercase tracking-widest text-muted">
            How I Build
          </h2>
          <p className="mt-2 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            My FDE operating model.
          </p>
        </Reveal>
        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {process.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.06} className="flex flex-col gap-2">
              <span className="font-display text-sm text-muted">{step.number}</span>
              <h3 className="text-lg font-semibold">{step.title}</h3>
              <p className="text-muted">{step.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
