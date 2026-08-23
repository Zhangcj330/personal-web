import { testimonials } from "@/data/content";
import Reveal from "@/components/Reveal";

export default function Testimonials() {
  return (
    <section id="testimonials" className="mx-auto max-w-6xl px-6 py-20">
      <div className="border-t border-border pt-12">
        <Reveal>
          <h2 className="mb-10 text-sm font-medium uppercase tracking-widest text-muted">
            推荐语
          </h2>
        </Reveal>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.08}>
              <figure className="flex h-full flex-col justify-between gap-6 rounded-2xl border border-border p-6 transition-transform duration-300 hover:-translate-y-1">
                <blockquote className="text-lg leading-relaxed">
                  “{t.quote}”
                </blockquote>
                <figcaption>
                  <div className="font-semibold">{t.name}</div>
                  <div className="text-sm text-muted">{t.role}</div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
