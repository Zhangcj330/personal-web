import Image from "next/image";
import Link from "next/link";
import { featuredProjects } from "@/data/content";
import Reveal from "@/components/Reveal";

// A 2x2 "Featured Projects" grid using real product/report screenshots,
// styled after the reference site's work grid: a big rounded-corner
// image on top, title and category caption below. Each card links to
// its full case-study detail page at /work/[slug].
export default function CaseStudies() {
  return (
    <section id="case-studies" className="mx-auto max-w-6xl px-6 py-20">
      <div className="border-t border-border pt-12">
        <h2 className="mb-10 text-sm font-medium uppercase tracking-widest text-muted">
          Case Studies
        </h2>
        <div className="grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2">
          {featuredProjects.map((project, i) => (
            <Reveal key={project.slug} delay={0.05 * i}>
              <Link href={`/work/${project.slug}`} className="group block">
                <div className="overflow-hidden rounded-2xl border border-border shadow-lg shadow-black/5 transition-shadow group-hover:shadow-xl group-hover:shadow-black/10">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={project.imageWidth}
                    height={project.imageHeight}
                    sizes="(min-width: 640px) 552px, 100vw"
                    quality={90}
                    className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                </div>
                <div className="mt-5 flex items-baseline justify-between gap-4">
                  <h3 className="font-display text-xl font-semibold tracking-tight sm:text-2xl">
                    {project.title}
                  </h3>
                  <span className="text-xs font-medium text-muted">{project.index}</span>
                </div>
                <p className="mt-1 text-sm text-muted">{project.category}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
