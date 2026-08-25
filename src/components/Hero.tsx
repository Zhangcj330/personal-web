import { site } from "@/data/content";
import Reveal from "@/components/Reveal";
import TextType from "@/components/TextType";

export default function Hero() {
  return (
    <section
      id="hero"
      className="mx-auto flex max-w-6xl flex-col gap-6 px-6 pb-16 pt-20 sm:pt-28"
    >
      <Reveal className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-widest text-muted">
        <span className="font-semibold text-foreground">{site.name}</span>
      </Reveal>
      <Reveal delay={0.1}>
        <h1 className="max-w-5xl font-display text-5xl font-semibold leading-tight tracking-tight sm:text-7xl">
          Choosie is building{" "}
          <TextType
            as="span"
            text={["Brick AI"]}
            typingSpeed={90}
            initialDelay={300}
            loop={false}
            showCursor
            cursorCharacter="_"
            className="underline decoration-4 decoration-gray-300 underline-offset-8"
            style={{ display: "inline" }}
          />
        </h1>
      </Reveal>
    </section>
  );
}
