import Link from "next/link";
import { site } from "@/data/content";
import Reveal from "@/components/Reveal";
import TextType from "@/components/TextType";

export default function Hero() {
  return (
    <section
      id="hero"
      className="mx-auto flex max-w-6xl flex-col gap-6 px-6 pb-16 pt-20 sm:pt-28"
    >
      <div className="h-4" aria-hidden="true" />
      <Reveal delay={0.1}>
        <h1 className="max-w-5xl font-display text-5xl font-semibold leading-tight tracking-tight sm:text-7xl">
          Choosie is building{" "}
          <Link href="/work/brick-ai" className="transition-opacity hover:opacity-60">
            <TextType
              as="span"
              text={["Brick AI"]}
              typingSpeed={90}
              initialDelay={300}
              loop={false}
              showCursor
              cursorCharacter="_"
              className="hero-brick-link"
              style={{ display: "inline" }}
            />
          </Link>
        </h1>
      </Reveal>
    </section>
  );
}
