import Link from "next/link";
import { posts } from "@/data/content";
import Reveal from "@/components/Reveal";

export default function Blog() {
  return (
    <section id="blog" className="mx-auto max-w-6xl px-6 py-20">
      <div className="border-t border-border pt-12">
        <Reveal>
          <h2 className="mb-10 text-sm font-medium uppercase tracking-widest text-muted">
            随笔 / 博客
          </h2>
        </Reveal>
        <div className="flex flex-col divide-y divide-border">
          {posts.map((post, i) => (
            <Reveal key={post.title} delay={i * 0.08}>
              <Link
                href={post.href}
                className="group flex flex-col gap-2 py-6 sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <div className="text-sm text-muted">{post.date}</div>
                  <h3 className="text-xl font-semibold transition-colors group-hover:underline">
                    {post.title}
                  </h3>
                  <p className="text-muted">{post.summary}</p>
                </div>
                <span className="text-sm font-medium underline underline-offset-4 transition-transform duration-300 group-hover:translate-x-1 sm:whitespace-nowrap">
                  阅读更多 →
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
