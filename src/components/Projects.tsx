import Link from "next/link";
import { projects } from "@/data/content";
import Reveal from "@/components/Reveal";

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-20">
      <div className="border-t border-border pt-12">
        <Reveal className="mb-10 flex items-center justify-between">
          <h2 className="text-sm font-medium uppercase tracking-widest text-muted">
            精选项目
          </h2>
          <a href="#projects" className="text-sm font-medium underline underline-offset-4">
            查看全部作品
          </a>
        </Reveal>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={i * 0.08}>
              <Link
                href={project.href}
                className="group flex flex-col gap-4 rounded-2xl border border-border p-6 transition-colors hover:border-foreground"
              >
                <div className="flex aspect-video items-center justify-center overflow-hidden rounded-xl bg-zinc-100 text-sm text-muted">
                  <span className="transition-transform duration-500 ease-out group-hover:scale-110">
                    项目预览图
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold group-hover:underline">
                    {project.title}
                  </h3>
                  <span className="text-xs uppercase tracking-widest text-muted">
                    {project.tag}
                  </span>
                </div>
                <p className="text-muted">{project.description}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
