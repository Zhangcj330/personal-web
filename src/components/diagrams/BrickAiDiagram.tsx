import { FlowNode, FlowArrow } from "./primitives";

export default function BrickAiDiagram() {
  return (
    <div className="flex flex-col gap-3 rounded-xl border border-border bg-zinc-50 p-5">
      <div className="flex flex-wrap items-center justify-center gap-2 text-center text-sm font-medium italic">
        &ldquo;Is this a good investment?&rdquo;
      </div>
      <div className="flex flex-wrap items-center justify-center gap-2 border-t border-dashed border-border pt-3">
        <FlowNode label="Ask about a property" />
        <FlowArrow />
        <FlowNode label="Property intelligence" sub="data · imagery · location · reasoning" emphasis />
        <FlowArrow />
        <FlowNode label="Buy / Invest" sub="conversational decision support" />
      </div>
    </div>
  );
}
