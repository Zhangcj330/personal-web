import { site } from "@/data/content";
import Reveal from "@/components/Reveal";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-20">
      <div className="grid grid-cols-1 gap-10 border-t border-border pt-12 sm:grid-cols-3">
        <Reveal>
          <h2 className="text-sm font-medium uppercase tracking-widest text-muted">
            嗨！
          </h2>
        </Reveal>
        <Reveal delay={0.1} className="col-span-2 flex flex-col gap-5 text-xl leading-relaxed sm:text-2xl">
          {site.bio.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
