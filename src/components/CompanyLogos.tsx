import Reveal from "@/components/Reveal";
import LogoLoop from "@/components/LogoLoop";
import { companies } from "@/data/content";

export default function CompanyLogos() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-12">
      <Reveal className="flex flex-col gap-6">
        <span className="text-xs font-semibold uppercase tracking-widest text-muted">
          Companies I&apos;ve built for
        </span>
        <LogoLoop items={companies} />
      </Reveal>
    </section>
  );
}
