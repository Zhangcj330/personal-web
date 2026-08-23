import Link from "next/link";
import { site } from "@/data/content";

const navItems = [
  { label: "关于", href: "#about" },
  { label: "服务", href: "#services" },
  { label: "作品", href: "#projects" },
  { label: "推荐语", href: "#testimonials" },
  { label: "博客", href: "#blog" },
  { label: "联系", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-white/80 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="#" className="text-sm font-semibold tracking-tight">
          {site.name}
        </Link>
        <ul className="hidden items-center gap-8 text-sm text-muted md:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="group relative py-1 transition-colors hover:text-foreground"
              >
                {item.label}
                <span className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-foreground transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="rounded-full border border-foreground px-4 py-2 text-sm font-medium transition-colors duration-300 hover:bg-foreground hover:text-white"
        >
          联系我
        </a>
      </nav>
    </header>
  );
}
