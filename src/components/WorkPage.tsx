import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import type { CaseStudyPage } from "@/data/caseStudyPages";
import { caseStudyPages } from "@/data/caseStudyPages";

// Detail page for a single project, styled after the reference site's
// individual work page (majd-portfolio.framer.website/work/damas): a big
// title, a Category/Role/Year/Company meta row next to a short lead
// paragraph, a large hero image, a sequence of H2 sections (each
// optionally paired with a stat row / step row / feature grid / image
// gallery / tech-stack chip list), a closing statement, and a "more
// projects" style footer linking back to the other 3 case studies.
export default function WorkPage({ page }: { page: CaseStudyPage }) {
  const otherPages = caseStudyPages.filter((p) => p.slug !== page.slug);

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
            className="mt-10 rounded-[2.5rem] p-4 sm:p-8"
            style={{ backgroundColor: page.accentBg }}
          >
            <div className="overflow-hidden rounded-3xl shadow-2xl shadow-black/10">
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

            {page.chatMock && section.heading[0] === "A conversation," && (
              <Reveal delay={0.1}>
                <ChatMock page={page} />
              </Reveal>
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
      <section className="border-t border-border bg-[#fafafa]">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-widest text-muted">
              More Projects
            </span>
          </Reveal>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {otherPages.slice(0, 2).map((other, i) => (
              <Reveal delay={0.05 * (i + 1)} key={other.slug}>
                <Link
                  href={`/work/${other.slug}`}
                  className="group block overflow-hidden rounded-2xl border border-border bg-background transition-shadow hover:shadow-xl hover:shadow-black/5"
                >
                  <div className="overflow-hidden">
                    <Image
                      src={other.heroImage.src}
                      alt={other.heroImage.alt}
                      width={other.heroImage.width}
                      height={other.heroImage.height}
                      sizes="(min-width: 640px) 552px, 100vw"
                      quality={90}
                      className="aspect-[16/11] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="p-6">
                    <div className="text-lg font-semibold tracking-tight">
                      {other.title.join(" ")}
                    </div>
                    <div className="mt-1 text-sm text-muted">{other.tagline}</div>
                  </div>
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
      </footer>
    </article>
  );
}

function ChatMock({ page }: { page: CaseStudyPage }) {
  if (!page.chatMock) return null;
  const { messages, cards } = page.chatMock;

  return (
    <div className="mt-9 max-w-md overflow-hidden rounded-[22px] border border-border shadow-xl shadow-black/10">
      <div className="flex items-center gap-2 border-b border-border px-4 py-3">
        <span
          className="h-2 w-2 rounded-full"
          style={{ backgroundColor: page.accent }}
        />
        <b className="text-xs font-bold">Brick AI</b>
        <span className="ml-auto text-[10px] text-muted">Online</span>
      </div>
      <div className="flex flex-col gap-3 p-4">
        <Bubble from={messages[0].from} text={messages[0].text} />
        <Bubble from={messages[1].from} text={messages[1].text} />
        <Bubble from={messages[2].from} text={messages[2].text} />
        <MiniCard rows={cards[0]} accentBg={page.accentBg} accent={page.accent} />
        <Bubble from="user" text="What grants am I eligible for?" />
        <MiniCard rows={cards[1]} accentBg={page.accentBg} accent={page.accent} />
        <div className="mt-0.5 flex items-center gap-2">
          <span className="flex-1 rounded-full bg-[#f4f4f3] px-3.5 py-2 text-xs text-[#afafaf]">
            Ask about suburbs, budgets, grants…
          </span>
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#111111] text-xs text-white">
            →
          </span>
        </div>
      </div>
    </div>
  );
}

function Bubble({ from, text }: { from: "ai" | "user"; text: string }) {
  return (
    <div
      className={
        from === "ai"
          ? "max-w-[86%] self-start rounded-2xl rounded-tl-[5px] bg-[#f4f4f3] px-3 py-2.5 text-[13px] leading-snug text-[#111111]"
          : "max-w-[86%] self-end rounded-2xl rounded-tr-[5px] bg-[#111111] px-3 py-2.5 text-[13px] leading-snug text-white"
      }
    >
      {text}
    </div>
  );
}

function MiniCard({
  rows,
  accentBg,
  accent,
}: {
  rows: { label: string; value: string; badge?: string }[];
  accentBg: string;
  accent: string;
}) {
  return (
    <div className="flex flex-col gap-2 self-start rounded-xl border border-border p-3">
      {rows.map((row) => (
        <div key={row.label} className="flex items-center justify-between text-xs">
          <span className="text-muted">{row.label}</span>
          <span className="flex items-center gap-2">
            <span className="font-bold">{row.value}</span>
            {row.badge && (
              <span
                className="rounded-full px-2 py-0.5 text-[10px] font-bold"
                style={{ backgroundColor: accentBg, color: accent }}
              >
                {row.badge}
              </span>
            )}
          </span>
        </div>
      ))}
    </div>
  );
}
