import Image from "next/image";
import { featuredProjects } from "@/data/content";

type FeaturedProject = (typeof featuredProjects)[number];

export default function ProjectCardVisual({
  project,
  sizes = "(min-width: 640px) 552px, 100vw",
}: {
  project: FeaturedProject;
  sizes?: string;
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-border shadow-lg shadow-black/5 transition-shadow group-hover:shadow-xl group-hover:shadow-black/10">
      <div
        className="relative isolate flex aspect-[4/3] items-center justify-center overflow-hidden p-5 sm:p-8"
        style={{ background: project.imageBackground }}
      >
        <Image
          src={project.image}
          alt=""
          fill
          sizes={sizes}
          quality={45}
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0 scale-[1.25] object-cover opacity-60 blur-[32px] saturate-[1.6] brightness-75"
        />
        <div
          className="pointer-events-none absolute inset-0 z-0 opacity-65"
          style={{ background: project.imageBackground }}
        />
        <div
          className="pointer-events-none absolute inset-0 z-0 opacity-75 mix-blend-screen"
          style={{ background: project.imageGlow }}
        />
        <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,transparent_34%,rgba(0,0,0,0.38)_100%)]" />

        {"imageFrame" in project && project.imageFrame === "browser" ? (
          <div className="relative z-10 w-full overflow-hidden rounded-xl border border-black/15 bg-white shadow-xl shadow-black/20 transition-transform duration-500 group-hover:scale-[1.02]">
            <div className="flex h-6 items-center gap-1.5 border-b border-black/10 bg-[#f2f3f4] px-2.5">
              <div className="flex shrink-0 gap-1">
                <span className="h-2 w-2 rounded-full border border-black/10 bg-[#ff5f57]" />
                <span className="h-2 w-2 rounded-full border border-black/10 bg-[#febc2e]" />
                <span className="h-2 w-2 rounded-full border border-black/10 bg-[#28c840]" />
              </div>
              <div className="ml-1 flex shrink-0 items-center gap-1 text-[#73777c]">
                <svg viewBox="0 0 16 16" className="h-2.5 w-2.5" aria-hidden="true">
                  <path
                    d="M10 3 5 8l5 5"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                  />
                </svg>
                <svg
                  viewBox="0 0 16 16"
                  className="h-2.5 w-2.5 opacity-40"
                  aria-hidden="true"
                >
                  <path
                    d="m6 3 5 5-5 5"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                  />
                </svg>
              </div>
              <div className="mx-auto flex h-4 min-w-0 max-w-[58%] flex-1 items-center justify-center gap-1 rounded border border-black/8 bg-white px-2 text-[6px] font-medium text-[#6f7377] shadow-sm shadow-black/5">
                <svg viewBox="0 0 16 16" className="h-2 w-2 shrink-0" aria-hidden="true">
                  <rect
                    x="4"
                    y="7"
                    width="8"
                    height="6"
                    rx="1.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.3"
                  />
                  <path
                    d="M6 7V5a2 2 0 0 1 4 0v2"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.3"
                  />
                </svg>
                <span className="truncate">app.location-fix.internal</span>
              </div>
              <div className="flex shrink-0 gap-0.5">
                <span className="h-0.5 w-0.5 rounded-full bg-[#777b80]" />
                <span className="h-0.5 w-0.5 rounded-full bg-[#777b80]" />
                <span className="h-0.5 w-0.5 rounded-full bg-[#777b80]" />
              </div>
            </div>
            <Image
              src={project.image}
              alt={project.title}
              width={project.imageWidth}
              height={project.imageHeight}
              sizes={sizes}
              quality={90}
              className="w-full"
            />
          </div>
        ) : (
          <Image
            src={project.image}
            alt={project.title}
            width={project.imageWidth}
            height={project.imageHeight}
            sizes={sizes}
            quality={90}
            className="relative z-10 w-full rounded-xl shadow-xl shadow-black/15 transition-transform duration-500 group-hover:scale-[1.02]"
          />
        )}
      </div>
    </div>
  );
}
