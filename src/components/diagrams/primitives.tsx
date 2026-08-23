export function FlowNode({
  label,
  sub,
  emphasis = false,
}: {
  label: string;
  sub?: string;
  emphasis?: boolean;
}) {
  return (
    <div
      className={`flex min-w-[110px] flex-col items-center gap-0.5 rounded-lg border px-3 py-2 text-center text-xs font-medium ${
        emphasis
          ? "border-foreground bg-foreground text-white"
          : "border-border bg-white text-foreground"
      }`}
    >
      <span>{label}</span>
      {sub && <span className="text-[10px] font-normal text-muted">{sub}</span>}
    </div>
  );
}

export function FlowArrow({ vertical = false }: { vertical?: boolean }) {
  return (
    <span
      className={`text-muted ${vertical ? "rotate-90" : ""}`}
      aria-hidden
    >
      →
    </span>
  );
}
