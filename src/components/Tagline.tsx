import { site } from "@/data/content";

export default function Tagline() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <p className="border-t border-border pt-12 text-3xl font-medium leading-snug tracking-tight sm:text-5xl">
        {site.tagline}
      </p>
    </section>
  );
}
