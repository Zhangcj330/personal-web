import { site } from "@/data/content";
import Reveal from "@/components/Reveal";

export default function Tagline() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <div className="border-t border-border pt-12">
        <Reveal>
          <p className="font-display text-3xl font-medium leading-snug tracking-tight sm:text-5xl">
            {site.tagline}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
