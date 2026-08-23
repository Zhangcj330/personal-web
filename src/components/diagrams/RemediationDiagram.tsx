import { FlowNode, FlowArrow } from "./primitives";

export default function RemediationDiagram() {
  return (
    <div className="flex flex-col gap-3 rounded-xl border border-border bg-zinc-50 p-5">
      <div className="flex flex-wrap items-center justify-center gap-2">
        <FlowNode label="ServiceNow Incident" />
        <FlowArrow />
        <FlowNode label="Context Retrieval" />
        <FlowArrow />
        <FlowNode label="Agent Reasoning" emphasis />
      </div>
      <div className="flex flex-wrap items-center justify-center gap-2 border-t border-dashed border-border pt-3">
        <FlowNode label="Move Lat/Long" />
        <FlowNode label="Associate GeoID" />
        <FlowNode label="Create New GeoID" />
        <FlowNode label="Establish Address" />
      </div>
      <div className="flex flex-wrap items-center justify-center gap-2 border-t border-dashed border-border pt-3">
        <FlowNode label="Validate → Human Review" />
      </div>
    </div>
  );
}
