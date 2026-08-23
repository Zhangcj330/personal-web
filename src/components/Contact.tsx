import { site } from "@/data/content";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-20">
      <div className="flex flex-col gap-10 rounded-3xl border border-border p-10 sm:p-16">
        <div>
          <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            聊一聊。
          </h2>
          <p className="mt-4 max-w-xl text-lg text-muted">
            有项目想法或者需要帮助？填写下方表单，我会尽快回复你。
          </p>
        </div>
        <form className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <input
            type="text"
            placeholder="你的名字"
            className="rounded-xl border border-border bg-transparent px-4 py-3 outline-none focus:border-foreground"
          />
          <input
            type="email"
            placeholder="你的邮箱"
            className="rounded-xl border border-border bg-transparent px-4 py-3 outline-none focus:border-foreground"
          />
          <textarea
            placeholder="项目信息"
            rows={5}
            className="col-span-1 rounded-xl border border-border bg-transparent px-4 py-3 outline-none focus:border-foreground sm:col-span-2"
          />
          <button
            type="submit"
            className="col-span-1 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90 sm:col-span-2 sm:w-fit"
          >
            发送消息
          </button>
        </form>
        <p className="text-sm text-muted">
          或直接发邮件到{" "}
          <a href={`mailto:${site.email}`} className="underline underline-offset-4">
            {site.email}
          </a>
        </p>
      </div>
    </section>
  );
}
