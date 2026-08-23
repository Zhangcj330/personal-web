import { closing } from "@/data/content";
import Reveal from "@/components/Reveal";

export default function Closing() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <Reveal className="border-t border-border pt-12">
        <span className="text-xs uppercase tracking-widest text-muted">
          {closing.eyebrow}
        </span>
        <p className="mt-3 max-w-3xl font-display text-3xl font-semibold leading-snug tracking-tight sm:text-5xl">
          {closing.statement}
        </p>
        <p className="mt-4 max-w-2xl text-lg text-muted">{closing.description}</p>
      </Reveal>
    </section>
  );
}
