import { focus, focusAreas } from "@/data/content";
import BorderGlow from "@/components/BorderGlow";
import Reveal from "@/components/Reveal";

export default function Focus() {
  return (
    <section id="focus" className="mx-auto max-w-6xl px-6 pt-20 pb-12">
      <div className="border-t border-border pt-12">
        <Reveal>
          <h2 className="text-sm font-medium uppercase tracking-widest text-muted">
            {focus.eyebrow}
          </h2>
          <p className="mt-2 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            {focus.heading[0]}
            <br />
            {focus.heading[1]}
          </p>
        </Reveal>
        <div className="mt-10 grid auto-rows-fr grid-cols-1 gap-2 sm:grid-cols-2">
          {focusAreas.map((area, i) => (
            <Reveal key={area.title} delay={i * 0.06} className="h-full">
              <BorderGlow
                className="focus-border-glow h-full"
                edgeSensitivity={42}
                glowColor="0 0 15"
                backgroundColor="#ffffff"
                borderRadius={16}
                glowRadius={10}
                glowIntensity={0.25}
                coneSpread={16}
                animated={false}
                colors={["#111111", "#777777", "#333333"]}
                fillOpacity={0}
              >
                <div className="flex flex-col gap-2">
                  <span className="font-display text-sm text-muted">{area.number}</span>
                  <h3 className="text-lg font-semibold">{area.title}</h3>
                  <p className="font-medium">{area.lead}</p>
                  <p className="text-muted">{area.description}</p>
                </div>
              </BorderGlow>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
