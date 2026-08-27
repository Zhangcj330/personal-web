import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import ProjectCardVisual from "@/components/ProjectCardVisual";
import type { CaseStudyPage } from "@/data/caseStudyPages";
import { featuredProjects } from "@/data/content";

// Detail page for a single project, styled after the reference site's
// individual work page (majd-portfolio.framer.website/work/damas): a big
// title, a Category/Role/Year/Company meta row next to a short lead
// paragraph, a large hero image, a sequence of H2 sections (each
// optionally paired with a stat row / step row / feature grid / image
// gallery / tech-stack chip list), a closing statement, and a "more
// projects" style footer linking back to the other 3 case studies.
export default function WorkPage({ page }: { page: CaseStudyPage }) {
  const otherProjects = featuredProjects
    .filter((project) => project.slug !== page.slug)
    .slice(0, 2);
  const featuredProject = featuredProjects.find((project) => project.slug === page.slug);

  return (
    <article>
      {/* HERO */}
      <header className="mx-auto max-w-6xl px-6 pt-36 pb-12 sm:pt-44">
        <Reveal>
          <span
            className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3.5 py-1.5 text-xs font-semibold text-muted"
            style={{ color: page.accent }}
          >
            <span
              className="h-2 w-2 rounded-full"
              style={{ backgroundColor: page.accent }}
            />
            {page.tagline}
          </span>
        </Reveal>
        <Reveal delay={0.05}>
          <h1 className="mt-6 font-display text-6xl font-bold leading-[0.98] tracking-tight sm:text-7xl lg:text-8xl">
            {page.title.map((line, i) => (
              <span key={i} className="block">
                {line}
              </span>
            ))}
          </h1>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="mt-10 flex flex-col justify-between gap-8 lg:flex-row lg:items-start">
            <div className="flex flex-wrap gap-x-12 gap-y-6">
              {page.facts.map((fact) => (
                <div key={fact.label}>
                  <div className="text-xs font-semibold uppercase tracking-widest text-muted">
                    {fact.label}
                  </div>
                  <div className="mt-1.5 text-[15.5px] font-semibold">{fact.value}</div>
                </div>
              ))}
            </div>
            <p className="max-w-md text-[15.5px] leading-relaxed text-muted">{page.lead}</p>
          </div>
        </Reveal>
        <Reveal delay={0.15}>
          <div
            className="relative isolate mt-10 overflow-hidden rounded-[2.5rem] p-4 sm:p-8"
            style={{ background: featuredProject?.imageBackground ?? page.accentBg }}
          >
            {featuredProject && (
              <>
                <Image
                  src={page.heroImage.src}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 1152px, 100vw"
                  quality={45}
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 z-0 scale-[1.25] object-cover opacity-60 blur-[40px] saturate-[1.6] brightness-75"
                />
                <div
                  className="pointer-events-none absolute inset-0 z-0 opacity-65"
                  style={{ background: featuredProject.imageBackground }}
                />
                <div
                  className="pointer-events-none absolute inset-0 z-0 opacity-75 mix-blend-screen"
                  style={{ background: featuredProject.imageGlow }}
                />
                <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,transparent_34%,rgba(0,0,0,0.38)_100%)]" />
              </>
            )}
            <div className="relative z-10 overflow-hidden rounded-3xl shadow-2xl shadow-black/20">
              <Image
                src={page.heroImage.src}
                alt={page.heroImage.alt}
                width={page.heroImage.width}
                height={page.heroImage.height}
                sizes="(min-width: 1024px) 1152px, 100vw"
                quality={90}
                className="w-full"
                priority
              />
            </div>
          </div>
        </Reveal>
      </header>

      {/* CONTENT SECTIONS */}
      <div className="mx-auto max-w-6xl px-6">
        {page.sections.map((section, i) => (
          <section key={i} className="border-t border-border py-14 sm:py-16">
            <div
              className={
                section.sideImage
                  ? "grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14"
                  : undefined
              }
            >
              <Reveal>
                <div className="max-w-2xl">
                  <h2 className="font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
                    {section.heading.map((line, j) => (
                      <span key={j} className="block">
                        {line}
                      </span>
                    ))}
                  </h2>
                  {section.subheading && (
                    <p
                      className="mt-2 font-mono text-xs font-semibold uppercase tracking-widest"
                      style={{ color: page.accent }}
                    >
                      {section.subheading}
                    </p>
                  )}
                  <div className="mt-5 space-y-4">
                    {section.paragraphs.map((p, k) => (
                      <p key={k} className="text-[15.5px] leading-relaxed text-muted">
                        {p}
                      </p>
                    ))}
                  </div>
                </div>
              </Reveal>

              {section.sideImage && (
                <Reveal delay={0.1}>
                  <div
                    className="rounded-[2rem] p-4 sm:p-6"
                    style={{ backgroundColor: page.accentBg }}
                  >
                    <div className="mx-auto max-w-[420px] overflow-hidden rounded-2xl shadow-xl shadow-black/10">
                      <Image
                        src={section.sideImage.src}
                        alt={section.sideImage.alt}
                        width={section.sideImage.width}
                        height={section.sideImage.height}
                        unoptimized={section.sideImage.src.endsWith(".gif")}
                        className="w-full"
                      />
                    </div>
                  </div>
                  {section.sideImageCaption && (
                    <p className="mt-4 text-center text-[13px] text-muted">
                      {section.sideImageCaption}
                    </p>
                  )}
                </Reveal>
              )}
            </div>

            {section.stats && (
              <Reveal delay={0.05}>
                <div className="mt-9 grid grid-cols-2 gap-4 sm:grid-cols-4">
                  {section.stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-2xl border border-border bg-background p-5"
                    >
                      <div className="text-2xl font-bold tracking-tight sm:text-3xl">
                        {stat.value}
                      </div>
                      <div className="mt-1 text-[13px] text-muted">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </Reveal>
            )}

            {section.steps && (
              <Reveal delay={0.05}>
                <div className="mt-9 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {section.steps.map((step) => (
                    <div
                      key={step.no}
                      className="rounded-2xl border border-border bg-background p-5"
                    >
                      <div
                        className="font-mono text-xs font-semibold"
                        style={{ color: page.accent }}
                      >
                        {step.no}
                      </div>
                      <h4 className="mt-3 text-[15px] font-semibold tracking-tight">
                        {step.title}
                      </h4>
                      <p className="mt-1.5 text-[13px] leading-relaxed text-muted">{step.body}</p>
                    </div>
                  ))}
                </div>
              </Reveal>
            )}

            {section.features && (
              <Reveal delay={0.05}>
                <div
                  className={`mt-9 grid grid-cols-1 gap-4 sm:grid-cols-2 ${
                    section.features.length % 3 === 0 ? "lg:grid-cols-3" : ""
                  }`}
                >
                  {section.features.map((feature) => (
                    <div
                      key={feature.title}
                      className="rounded-2xl border border-border bg-background p-5"
                    >
                      <div
                        className="flex h-9 w-9 items-center justify-center rounded-[11px] text-[19px]"
                        style={{ backgroundColor: page.accentBg }}
                      >
                        {feature.icon}
                      </div>
                      <h4 className="mt-3.5 text-[15px] font-semibold tracking-tight">
                        {feature.title}
                      </h4>
                      <p className="mt-1.5 text-[13.5px] leading-relaxed text-muted">
                        {feature.body}
                      </p>
                    </div>
                  ))}
                </div>
              </Reveal>
            )}

            {section.gallery && (
              <Reveal delay={0.05}>
                <div className="mt-9 grid grid-cols-1 gap-6 sm:grid-cols-2">
                  {section.gallery.map((img) => (
                    <div
                      key={img.src}
                      className={`overflow-hidden rounded-2xl border border-border shadow-lg shadow-black/5 ${
                        section.gallery!.length === 1 ? "sm:col-span-2" : ""
                      }`}
                    >
                      <Image
                        src={img.src}
                        alt={img.alt}
                        width={img.width}
                        height={img.height}
                        sizes={
                          section.gallery!.length === 1
                            ? "(min-width: 640px) 1128px, 100vw"
                            : "(min-width: 640px) 552px, 100vw"
                        }
                        quality={90}
                        className="w-full"
                      />
                    </div>
                  ))}
                </div>
              </Reveal>
            )}

            {section.techStack && (
              <Reveal delay={0.05}>
                <div className="mt-8 flex flex-wrap gap-2.5">
                  {section.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-border px-3.5 py-2 text-[13.5px] font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </Reveal>
            )}

            {(section.galleryCaption) && (
              <p className="mt-4 text-[13px] text-muted">{section.galleryCaption}</p>
            )}
          </section>
        ))}

        {/* CLOSING */}
        {page.closing && (
        <section className="border-t border-border py-14 sm:py-16">
          <Reveal>
            <div className="max-w-2xl">
              <h2 className="font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
                {page.closing.heading.map((line, i) => (
                  <span key={i} className="block">
                    {line}
                  </span>
                ))}
              </h2>
              <p className="mt-5 text-[15.5px] leading-relaxed text-muted">
                {page.closing.paragraph}
              </p>
            </div>
          </Reveal>
        </section>
        )}
      </div>

      {/* MORE PROJECTS */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-14 sm:py-16">
          <Reveal>
            <h2 className="font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
              More Projects
            </h2>
          </Reveal>
          <div className="mt-9 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2">
            {otherProjects.map((project, i) => (
              <Reveal delay={0.05 * (i + 1)} key={project.slug}>
                <Link href={`/work/${project.slug}`} className="group block">
                  <ProjectCardVisual project={project} />
                  <div className="mt-5 flex items-baseline justify-between gap-4">
                    <div className="font-display text-xl font-semibold tracking-tight sm:text-2xl">
                      {project.title}
                    </div>
                    <span className="text-xs font-medium text-muted">{project.index}</span>
                  </div>
                  <div className="mt-1 text-sm text-muted">{project.category}</div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECT FOOTER */}
      <footer className="bg-[#111111] text-[#eceae4]">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.4fr_1fr_1fr]">
            <div>
              <h3 className="font-display text-4xl font-bold leading-[1.0] tracking-tight sm:text-5xl">
                {page.footer.headline.map((line, i) => (
                  <span key={i} className="block">
                    {line}
                  </span>
                ))}
              </h3>
            </div>
            <div>
              <div className="mb-4 text-sm text-[#9a988f]">/Links</div>
              <div className="flex flex-wrap gap-2.5">
                {page.footer.liveUrl && (
                  <a
                    href={page.footer.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-[#2c2c28] bg-[#1f1f1c] px-4 py-2 text-sm hover:bg-[#2a2a26]"
                  >
                    Live site
                  </a>
                )}
                <Link
                  href="/"
                  className="rounded-full border border-[#2c2c28] bg-[#1f1f1c] px-4 py-2 text-sm hover:bg-[#2a2a26]"
                >
                  Back home
                </Link>
                <Link
                  href="/#case-studies"
                  className="rounded-full border border-[#2c2c28] bg-[#1f1f1c] px-4 py-2 text-sm hover:bg-[#2a2a26]"
                >
                  All projects
                </Link>
              </div>
            </div>
            <div>
              <div className="mb-4 text-sm text-[#9a988f]">/Contact</div>
              <a
                href="mailto:chaojie.zhang@iag.com.au"
                className="border-b border-[#4a4a44] pb-0.5 text-[15px] hover:text-white"
              >
                chaojie.zhang@iag.com.au
              </a>
            </div>
          </div>
          <div className="mt-14 flex flex-wrap items-center justify-between gap-3 border-t border-[#262622] pt-5 text-[12.5px] text-[#7d7b74]">
            <div>{page.footer.meta}</div>
            <div>© {new Date().getFullYear()} Chaojie Zhang</div>
          </div>
        </div>
        <div className="overflow-hidden pb-2">
          <div className="-mx-2 select-none whitespace-nowrap font-display text-[17vw] font-bold leading-none tracking-tight text-[#1a1a17]">
            CHAOJIE ZHANG
          </div>
        </div>
      </footer>
    </article>
  );
}
