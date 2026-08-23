import { services } from "@/data/content";
import Reveal from "@/components/Reveal";

export default function Services() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-6 py-20">
      <div className="border-t border-border pt-12">
        <Reveal>
          <h2 className="mb-10 text-sm font-medium uppercase tracking-widest text-muted">
            服务
          </h2>
        </Reveal>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={i * 0.08} className="flex flex-col gap-4">
              <h3 className="text-xl font-semibold">{service.title}</h3>
              <ul className="flex flex-col gap-1 text-muted">
                {service.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
