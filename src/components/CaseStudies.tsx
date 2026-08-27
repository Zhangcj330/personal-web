import Link from "next/link";
import { featuredProjects } from "@/data/content";
import ProjectCardVisual from "@/components/ProjectCardVisual";
import Reveal from "@/components/Reveal";

// A 2x2 "Featured Projects" grid using real product/report screenshots,
// styled after the reference site's work grid: a big rounded-corner
// image on top, title and category caption below. Each card links to
// its full case-study detail page at /work/[slug].
export default function CaseStudies() {
  return (
    <section id="case-studies" className="mx-auto max-w-6xl px-6 pt-20 pb-12">
      <div className="border-t border-border pt-12">
        <h2 className="mb-10 text-sm font-medium uppercase tracking-widest text-muted">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2">
          {featuredProjects.map((project, i) => (
            <Reveal key={project.slug} delay={0.05 * i}>
              <Link href={`/work/${project.slug}`} className="group block">
                <ProjectCardVisual project={project} />
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
