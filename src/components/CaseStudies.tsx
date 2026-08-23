import { caseStudies } from "@/data/content";
import Reveal from "@/components/Reveal";
import RemediationDiagram from "@/components/diagrams/RemediationDiagram";
import HomeHealthDiagram from "@/components/diagrams/HomeHealthDiagram";
import SituationalDiagram from "@/components/diagrams/SituationalDiagram";
import BrickAiDiagram from "@/components/diagrams/BrickAiDiagram";
import NewsRecDiagram from "@/components/diagrams/NewsRecDiagram";

const diagrams: Record<string, React.ComponentType> = {
  remediation: RemediationDiagram,
  homeHealth: HomeHealthDiagram,
  situational: SituationalDiagram,
  brickAi: BrickAiDiagram,
  newsRec: NewsRecDiagram,
};

export default function CaseStudies() {
  return (
    <section id="case-studies" className="mx-auto max-w-6xl px-6 py-20">
      <div className="border-t border-border pt-12">
        <h2 className="mb-10 text-sm font-medium uppercase tracking-widest text-muted">
          Case Studies
        </h2>
        <div className="flex flex-col gap-16">
          {caseStudies.map((study) => {
            const Diagram = diagrams[study.key];
            return (
              <Reveal key={study.key}>
                <article className="grid grid-cols-1 gap-8 rounded-2xl border border-border p-6 sm:p-10 lg:grid-cols-2">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-muted">
                      <span>Case Study {study.index}</span>
                      <span className="text-border">·</span>
                      <span>{study.category}</span>
                    </div>
                    <h3 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
                      {study.title}
                    </h3>
                    <p className="text-muted">{study.description}</p>
                    <p className="text-sm text-muted">{study.flowLabel}</p>
                    <div className="rounded-xl border border-border bg-zinc-50 px-4 py-3">
                      <div className="text-xs uppercase tracking-widest text-muted">
                        {study.impactLabel}
                      </div>
                      <div className="font-display text-lg font-semibold">
                        {study.impactValue}
                      </div>
                    </div>
                    <p className="text-sm leading-relaxed text-muted">{study.note}</p>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {study.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-border px-3 py-1 text-xs text-muted"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Diagram />
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
