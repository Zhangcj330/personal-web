import { site } from "@/data/content";
import Reveal from "@/components/Reveal";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-20">
      <Reveal className="flex flex-col gap-10 rounded-3xl border border-border p-10 sm:p-16">
        <div>
          <h2 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            Let&apos;s talk.
          </h2>
          <p className="mt-4 max-w-xl text-lg text-muted">
            Have a project, a problem worth solving, or a role in mind? Fill out
            the form and I&apos;ll get back to you soon.
          </p>
        </div>
        <form className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <input
            type="text"
            placeholder="Your name"
            className="rounded-xl border border-border bg-transparent px-4 py-3 outline-none transition-colors focus:border-foreground"
          />
          <input
            type="email"
            placeholder="Your email"
            className="rounded-xl border border-border bg-transparent px-4 py-3 outline-none transition-colors focus:border-foreground"
          />
          <textarea
            placeholder="Tell me about the project"
            rows={5}
            className="col-span-1 rounded-xl border border-border bg-transparent px-4 py-3 outline-none transition-colors focus:border-foreground sm:col-span-2"
          />
          <button
            type="submit"
            className="col-span-1 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-white transition-transform duration-300 hover:-translate-y-0.5 hover:opacity-90 sm:col-span-2 sm:w-fit"
          >
            Send Message
          </button>
        </form>
        <p className="text-sm text-muted">
          Or email me directly at{" "}
          <a href={`mailto:${site.email}`} className="underline underline-offset-4">
            {site.email}
          </a>
        </p>
      </Reveal>
    </section>
  );
}
