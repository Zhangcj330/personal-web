import { site } from "@/data/content";
import Reveal from "@/components/Reveal";

export default function Hero() {
  return (
    <section
      id="hero"
      className="mx-auto flex max-w-6xl flex-col gap-6 px-6 pb-16 pt-20 sm:pt-28"
    >
      <Reveal className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-widest text-muted">
        <span>{site.eyebrow}</span>
        <span className="text-border">·</span>
        <span>{site.eyebrowSecondary}</span>
      </Reveal>
      <Reveal delay={0.1}>
        <h1 className="max-w-4xl font-display text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
          {site.headline}
        </h1>
      </Reveal>
      <Reveal delay={0.2}>
        <p className="max-w-2xl text-lg text-muted sm:text-xl">{site.intro}</p>
      </Reveal>
      <Reveal delay={0.3} className="flex flex-wrap gap-2 pt-2">
        {site.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-border px-4 py-1.5 text-sm text-muted"
          >
            {tag}
          </span>
        ))}
      </Reveal>
      <Reveal delay={0.4} className="flex flex-wrap gap-4 pt-4">
        <a
          href="#case-studies"
          className="rounded-full bg-foreground px-6 py-3 text-sm font-medium text-white transition-transform duration-300 hover:-translate-y-0.5 hover:opacity-90"
        >
          View Case Studies
        </a>
        <a
          href="#contact"
          className="rounded-full border border-border px-6 py-3 text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 hover:border-foreground"
        >
          Get in Touch
        </a>
      </Reveal>
    </section>
  );
}
