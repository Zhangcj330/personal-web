import { FlowNode, FlowArrow } from "./primitives";

export default function HomeHealthDiagram() {
  return (
    <div className="flex flex-col gap-3 rounded-xl border border-border bg-zinc-50 p-5">
      <div className="flex flex-wrap items-center justify-center gap-2">
        <FlowNode label="Customer" />
        <FlowArrow />
        <FlowNode label="IAG API" />
        <FlowArrow />
        <FlowNode label="Cloud Run" emphasis />
        <FlowArrow />
        <FlowNode label="Vendors" sub="Nearmap / Vexcel" />
      </div>
      <div className="flex flex-wrap items-center justify-center gap-2 border-t border-dashed border-border pt-3 text-center">
        <FlowNode label="Async layer" sub="Cloud Tasks · retry · rate limit" />
        <FlowNode label="Secure delivery" sub="signed URL · HMAC" />
      </div>
    </div>
  );
}
