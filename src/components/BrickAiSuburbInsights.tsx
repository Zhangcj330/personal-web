const metrics = [
  ["$1.45M", "Median price"],
  ["↑ 7.3%", "Annual growth", "text-[#19c37d]"],
  ["74%", "Clearance rate"],
  ["3.2%", "Rental yield"],
  ["22d", "Days on market"],
  ["1.4%", "Vacancy rate"],
  ["161", "Stock on market"],
  ["Low", "Crime rate"],
];

const insights = [
  {
    icon: "briefcase",
    label: "Economic",
    status: "Strong",
    statusClass: "text-[#0d0d0d]",
    dotClass: "bg-[#16a34a]",
    description:
      "Walking distance to Sydney CBD employment hub; planned light rail expansion and tech precinct increasing job density.",
  },
  {
    icon: "dollar",
    label: "Affordability",
    status: "Challenging",
    statusClass: "text-[#d97706]",
    dotClass: "bg-[#d97706]",
    description:
      "Median price-to-income ratio sits above the affordability threshold; high rental costs also strain first-home buyers.",
  },
  {
    icon: "education",
    label: "Lifestyle & Education",
    status: "Strong",
    statusClass: "text-[#0d0d0d]",
    dotClass: "bg-[#16a34a]",
    description:
      "Excellent walkability, thriving cafe and arts culture, strong schools and public transport connectivity.",
  },
  {
    icon: "building",
    label: "Supply Risk",
    description:
      "Inner-city land scarcity and constrained new supply support resilient long-term demand.",
  },
];

function LineIcon({ type }: { type: string }) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
      {type === "trend" && (
        <>
          <path d="M16 7h6v6" {...common} />
          <path d="m22 7-8.5 8.5-5-5L2 17" {...common} />
        </>
      )}
      {type === "activity" && (
        <path
          d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"
          {...common}
        />
      )}
      {type === "briefcase" && (
        <>
          <path d="M9 6V4h6v2" {...common} />
          <rect x="3" y="6" width="18" height="14" rx="2" {...common} />
          <path d="M3 11h18" {...common} />
        </>
      )}
      {type === "dollar" && (
        <>
          <path d="M12 2v20" {...common} />
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" {...common} />
        </>
      )}
      {type === "education" && (
        <>
          <path d="m2 10 10-5 10 5-10 5Z" {...common} />
          <path d="M6 12v5c3 2 9 2 12 0v-5" {...common} />
        </>
      )}
      {type === "building" && (
        <>
          <rect x="5" y="3" width="14" height="18" rx="2" {...common} />
          <path d="M9 7h2M13 7h2M9 11h2M13 11h2M10 21v-5h4v5" {...common} />
        </>
      )}
    </svg>
  );
}

export default function BrickAiSuburbInsights() {
  return (
    <div className="overflow-hidden rounded-xl border border-[#f0f0f0] bg-white p-4 text-[#0d0d0d] shadow-sm">
      <div className="text-base font-bold tracking-[-0.01em]">
        Surry Hills <span className="ml-1 text-[#8a8a8a]">NSW</span>
      </div>

      <div className="mt-3 flex gap-2.5">
        {[
          {
            icon: "trend",
            label: "1–5 Year Growth",
            body: "Low vacancy and tight days-on-market signal strong renter and buyer demand.",
          },
          {
            icon: "activity",
            label: "6–15 Year Growth",
            body: "Strong five-year growth and inner-city land scarcity underpin long-term appreciation.",
          },
        ].map((growth) => (
          <div
            key={growth.label}
            className="flex-1 rounded-[10px] border border-[#f0f0f0] bg-white p-4"
          >
            <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-[#0d0d0d] text-white">
              <LineIcon type={growth.icon} />
            </div>
            <div className="mb-1 text-[11px] font-semibold uppercase tracking-[0.06em] text-[#8a8a8a]">
              {growth.label}
            </div>
            <div className="text-[22px] font-black leading-none tracking-[-0.03em]">
              Strong
            </div>
            <div className="mt-2 text-[11px] leading-[1.4] text-[#8a8a8a]">
              {growth.body}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-3.5 grid grid-cols-2 overflow-hidden rounded-md border border-[#f0f0f0] sm:grid-cols-4">
        {metrics.map(([value, label, valueClass], index) => (
          <div
            key={label}
            className={`p-3 text-center ${
              index < 4 ? "border-b border-[#f0f0f0]" : ""
            } ${index % 4 !== 3 ? "sm:border-r sm:border-[#f0f0f0]" : ""}`}
          >
            <div
              className={`text-lg font-bold leading-none tracking-[-0.02em] ${
                valueClass ?? ""
              }`}
            >
              {value}
            </div>
            <div className="mt-1 text-[10px] text-[#8a8a8a]">{label}</div>
          </div>
        ))}
      </div>

      <div className="mt-2.5 divide-y divide-[#f0f0f0] border-t border-[#f0f0f0]">
        {insights.map((insight) => (
          <div key={insight.label} className="flex items-start gap-3 py-3">
            <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#f4f4f4]">
              <LineIcon type={insight.icon} />
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-semibold">{insight.label}</span>
                {insight.status && (
                  <span
                    className={`flex items-center gap-1 text-[11px] font-semibold ${insight.statusClass}`}
                  >
                    <span className={`h-1.5 w-1.5 rounded-full ${insight.dotClass}`} />
                    {insight.status}
                  </span>
                )}
              </div>
              <p className="mt-0.5 text-[11px] leading-[1.4] text-[#8a8a8a]">
                {insight.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-3.5 border-t border-[#f0f0f0] pt-3 text-xs text-[#8a8a8a]">
        Popular with young professionals and first-home buyers seeking inner-city
        lifestyle.
      </div>
    </div>
  );
}
