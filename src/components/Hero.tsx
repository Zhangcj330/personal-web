import { site } from "@/data/content";

export default function Hero() {
  return (
    <section
      id="hero"
      className="mx-auto flex max-w-6xl flex-col gap-6 px-6 pb-16 pt-20 sm:pt-28"
    >
      <div className="flex items-center justify-between text-xs uppercase tracking-widest text-muted">
        <span>{site.role}</span>
        <span>{site.since}</span>
      </div>
      <h1 className="max-w-4xl text-5xl font-semibold leading-tight tracking-tight sm:text-7xl">
        {site.role.toUpperCase()}
      </h1>
      <p className="max-w-2xl text-lg text-muted sm:text-xl">
        {site.intro}
      </p>
      <div className="flex flex-wrap gap-4 pt-4">
        <a
          href="#contact"
          className="rounded-full bg-foreground px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
        >
          开始联系
        </a>
        <a
          href="#projects"
          className="rounded-full border border-border px-6 py-3 text-sm font-medium transition-colors hover:border-foreground"
        >
          查看作品
        </a>
      </div>
    </section>
  );
}
