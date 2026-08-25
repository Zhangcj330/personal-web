import { site } from "@/data/content";
import Reveal from "@/components/Reveal";

export default function Hero() {
  return (
    <section
      id="hero"
      className="mx-auto flex max-w-6xl flex-col gap-6 px-6 pb-16 pt-20 sm:pt-28"
    >
      <Reveal className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-widest text-muted">
        <span className="font-semibold text-foreground">{site.name}</span>
        <span className="text-border">·</span>
        <span>{site.role}</span>
        <span className="text-border">·</span>
        <span>{site.eyebrow}</span>
        <span className="text-border">·</span>
        <span>{site.eyebrowSecondary}</span>
      </Reveal>
      <Reveal delay={0.1}>
        <h1 className="max-w-4xl font-display text-5xl font-semibold leading-tight tracking-tight sm:text-7xl">
          Choosie is making{" "}
          <span className="underline decoration-4 underline-offset-8">
            Brick AI
          </span>
        </h1>
      </Reveal>
    </section>
  );
}
