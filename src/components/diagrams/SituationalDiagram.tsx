import { FlowNode, FlowArrow } from "./primitives";

export default function SituationalDiagram() {
  return (
    <div className="flex flex-col gap-3 rounded-xl border border-border bg-zinc-50 p-5">
      <div className="flex flex-wrap items-center justify-center gap-2">
        <FlowNode label="Cyclone / Flood / Hail" sub="forecast + observed" />
        <FlowArrow />
        <FlowNode label="Exposure" emphasis />
      </div>
      <div className="flex flex-wrap items-center justify-center gap-2 border-t border-dashed border-border pt-3">
        <FlowNode label="Policy impact intelligence" sub="near real-time operational view" />
      </div>
      <div className="flex flex-wrap items-center justify-center gap-2 border-t border-dashed border-border pt-3 text-center text-sm font-medium">
        What is impacted — now and next?
      </div>
    </div>
  );
}
