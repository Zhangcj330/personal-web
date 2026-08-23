import { FlowNode, FlowArrow } from "./primitives";

export default function NewsRecDiagram() {
  return (
    <div className="flex flex-col gap-3 rounded-xl border border-border bg-zinc-50 p-5">
      <div className="flex flex-wrap items-center justify-center gap-2">
        <FlowNode label="User signals" />
        <FlowArrow />
        <FlowNode label="Content" />
        <FlowArrow />
        <FlowNode label="Ranking" emphasis />
        <FlowArrow />
        <FlowNode label="Pipeline" />
        <FlowArrow />
        <FlowNode label="Serving" />
      </div>
      <div className="flex flex-wrap items-center justify-center gap-2 border-t border-dashed border-border pt-3">
        <FlowNode label="Recommended story 01" />
        <FlowNode label="Recommended story 02" />
        <FlowNode label="Recommended story 03" />
      </div>
      <div className="text-center text-xs text-muted">Personalised news feed</div>
    </div>
  );
}
