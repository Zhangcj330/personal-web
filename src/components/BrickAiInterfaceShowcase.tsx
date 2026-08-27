"use client";

import { useEffect, useState } from "react";
import BrickAiSuburbInsights from "@/components/BrickAiSuburbInsights";

const interfaces = [
  {
    id: "suburb",
    title: "Suburb intelligence",
    description: "Growth, demand, lifestyle and supply signals.",
  },
  {
    id: "grants",
    title: "Grant eligibility",
    description: "Government support matched to the buyer.",
  },
  {
    id: "affordability",
    title: "True affordability",
    description: "Purchase price, upfront costs and repayments.",
  },
  {
    id: "listing",
    title: "Listing analysis",
    description: "Property facts, risks and comparable evidence.",
  },
  {
    id: "map",
    title: "Interactive map",
    description: "Live listings and local context in one view.",
  },
] as const;

type InterfaceId = (typeof interfaces)[number]["id"];

function GrantEligibility() {
  const grants = [
    {
      name: "First Home Owner Grant",
      description: "New builds under $750k",
      value: "$10,000",
      eligible: true,
    },
    {
      name: "First Home Buyer Assistance",
      description: "Stamp duty exemption under $800k",
      value: "$24,740",
      eligible: true,
    },
    {
      name: "Help to Buy Scheme",
      description: "Income under $90k single / $120k couple",
      value: "Equity top-up",
      eligible: true,
    },
    {
      name: "First Home Super Saver",
      description: "Voluntary super contributions released",
      value: "Up to $50,000",
      eligible: true,
    },
    {
      name: "Foreign Investor Surcharge",
      description: "Not applicable — Australian citizen",
      value: "—",
      eligible: false,
    },
  ];

  return (
    <div className="w-full overflow-hidden rounded-xl border border-[#f0f0f0] bg-white p-4 text-[#0d0d0d] shadow-sm">
      <div className="mb-3 text-xs text-[#8a8a8a]">first home buyer · NSW</div>
      <div className="flex flex-col">
        {grants.map((grant) => (
          <div
            key={grant.name}
            className={`flex items-center gap-3 border-b border-[#f9f9f9] py-3 last:border-0 ${
              grant.eligible ? "" : "opacity-50"
            }`}
          >
            <div
              className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-md ${
                grant.eligible
                  ? "bg-[#0d0d0d] text-white"
                  : "bg-[#f9f9f9] text-[#8a8a8a]"
              }`}
            >
              <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" aria-hidden="true">
                <path
                  d={grant.eligible ? "M20 6 9 17l-5-5" : "M18 6 6 18M6 6l12 12"}
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </svg>
            </div>
            <div className="min-w-0 flex-1">
              <div className="text-[13px] font-semibold">{grant.name}</div>
              <div className="mt-px text-xs text-[#8a8a8a]">{grant.description}</div>
            </div>
            <div className="shrink-0 whitespace-nowrap text-right text-[clamp(11px,2.4cqw,13px)] font-bold">
              {grant.value}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-1 border-t border-[#f0f0f0] pt-3 text-[13px] text-[#8a8a8a]">
        Total savings: <strong className="text-[#0d0d0d]">$34,740</strong>
      </div>
    </div>
  );
}

function Affordability() {
  const [showLvr, setShowLvr] = useState(false);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => setShowLvr(true));
    return () => window.cancelAnimationFrame(frame);
  }, []);

  return (
    <div className="w-full overflow-hidden rounded-xl border border-[#f0f0f0] bg-white p-4 text-[#0d0d0d] shadow-sm">
      <div className="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-3">
        {[
          ["Purchase price", "$1.20M"],
          ["Deposit", "$240,000"],
          ["Monthly repayment", "$5.8K/mo"],
          ["Loan amount", "$960,000"],
        ].map(([label, value]) => (
          <div key={label} className="rounded-md bg-[#f9f9f9] p-3">
            <div className="text-xs text-[#8a8a8a]">{label}</div>
            <div className="mt-1 text-xl font-bold tracking-[-0.02em]">{value}</div>
          </div>
        ))}
      </div>

      <div className="mt-3.5">
        <div className="mb-1.5 flex items-center justify-between gap-3 text-[13px]">
          <span>Loan to value ratio</span>
          <span className="font-bold">80% LVR</span>
        </div>
        <div className="h-2 overflow-hidden rounded-full bg-[#f0f0f0]">
          <div
            className="h-full rounded-full bg-[#0d0d0d] transition-[width] duration-700 ease-out"
            style={{ width: showLvr ? "80%" : "0%" }}
          />
        </div>
        <div className="mt-1.5 text-xs text-[#8a8a8a]">
          No LMI is expected at this LVR.
        </div>
      </div>

      <div className="mt-3.5 border-t border-[#f0f0f0] pt-3.5">
        {[
          ["Stamp duty", "$48,500"],
          ["Upfront costs", "$310,000"],
          ["Annual income required", "$145,000"],
        ].map(([label, value]) => (
          <div
            key={label}
            className="flex items-center justify-between gap-3 border-b border-[#f9f9f9] py-2 last:border-0"
          >
            <span className="text-[13px] text-[#8a8a8a]">{label}</span>
            <span className="text-right text-sm font-semibold">{value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ListingAnalysis() {
  const listingImages = [
    "https://images.allhomes.com.au/property/photo/3128381b4e0d0b5db3ee48d16340b05c_hd.jpg",
    "https://images.allhomes.com.au/property/photo/7899dc7c7875fd29f806971043355d72_hd.jpg",
    "https://images.allhomes.com.au/property/photo/c0a6d3dff427d960fb135ecb4260c461_hd.jpg",
    "https://images.allhomes.com.au/property/photo/5fe9d43b44ee37ab22c3092921d2f695_hd.jpg",
  ];
  const [activeImage, setActiveImage] = useState(0);
  const moveImage = (direction: number) => {
    setActiveImage(
      (current) => (current + direction + listingImages.length) % listingImages.length,
    );
  };

  return (
    <div className="w-full overflow-hidden rounded-xl border border-[#f0f0f0] bg-white p-4 shadow-sm">
      <div className="relative aspect-[4/3] overflow-hidden bg-[#f0f0f0]">
        <div
          className="h-full w-full bg-cover bg-center transition-[background-image] duration-300"
          style={{ backgroundImage: `url("${listingImages[activeImage]}")` }}
          role="img"
          aria-label="22 Addison Avenue"
        />
        <button
          type="button"
          onClick={() => moveImage(-1)}
          className="absolute left-2 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm transition-colors hover:bg-black/70"
          aria-label="Previous image"
        >
          <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
            <path
              d="m15 18-6-6 6-6"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </svg>
        </button>
        <button
          type="button"
          onClick={() => moveImage(1)}
          className="absolute right-2 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm transition-colors hover:bg-black/70"
          aria-label="Next image"
        >
          <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
            <path
              d="m9 18 6-6-6-6"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </svg>
        </button>
        <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-1">
          {listingImages.map((image, index) => (
            <button
              key={image}
              type="button"
              onClick={() => setActiveImage(index)}
              aria-label={`Show image ${index + 1}`}
              className={`h-1.5 rounded-full bg-white transition-all ${
                activeImage === index ? "w-4" : "w-1.5 opacity-50"
              }`}
            />
          ))}
        </div>
        <div className="absolute bottom-2 left-2 flex gap-2">
          <span className="rounded bg-black/65 px-2 py-1 font-mono text-[10px] font-medium text-white backdrop-blur-sm">
            $2,450,000
          </span>
          <span className="rounded bg-black/65 px-2 py-1 font-mono text-[10px] font-medium uppercase tracking-[0.04em] text-white backdrop-blur-sm">
            House
          </span>
        </div>
      </div>

      <div className="mt-3.5">
        <div className="text-base font-bold tracking-[-0.01em]">22 Addison Avenue</div>
        <div className="mt-1 text-[13px] text-[#8a8a8a]">House</div>
      </div>

      <div className="mt-3 flex flex-wrap gap-2">
        {[
          ["4", "bed"],
          ["2", "bath"],
          ["2", "car"],
          ["612m²", "land"],
        ].map(([value, label]) => (
          <div
            key={label}
            className="flex items-center gap-1.5 rounded-md border border-[#f0f0f0] bg-[#f9f9f9] px-2.5 py-1.5"
          >
            <span className="text-[13px] font-semibold">{value}</span>
            <span className="text-[11px] text-[#8a8a8a]">{label}</span>
          </div>
        ))}
      </div>

      <div className="mt-3 border-t border-[#f0f0f0] pt-3">
        <div className="mb-1 text-[11px] font-semibold uppercase tracking-[0.06em] text-[#8a8a8a]">
          Street
        </div>
        <div className="divide-y divide-[#f0f0f0]">
          {[
            ["Main road", "No"],
            ["Powerlines", "No"],
            ["T-junction", "No"],
            ["Orientation", "North"],
          ].map(([label, value]) => (
            <div key={label} className="flex items-center py-1.5 text-xs">
              <span>{label}</span>
              <span className="ml-auto font-semibold">{value}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-3 border-t border-[#f0f0f0] pt-3">
        <div className="mb-2 text-[11px] font-semibold uppercase tracking-[0.06em] text-[#8a8a8a]">
          Condition
        </div>
        <div className="flex gap-2">
          {[
            ["Kitchen", "Fair"],
            ["Bathroom", "Poor"],
          ].map(([room, condition]) => (
            <div key={room} className="flex-1 rounded-md border border-[#e5e7eb] px-3 py-2.5">
              <div className="text-[10px] font-semibold uppercase tracking-[0.06em] text-[#8a8a8a]">
                {room}
              </div>
              <div className="mt-0.5 text-[13px] font-semibold">{condition}</div>
              <div className="mt-1 text-[11px] text-[#8a8a8a]">Renovation needed</div>
            </div>
          ))}
        </div>
        <p className="mt-2 text-[11px] leading-[1.4] text-[#8a8a8a]">
          Original 1970s bathroom tiles and dated kitchen — budget $60–90k for
          full refresh.
        </p>
      </div>

      <div className="mt-3.5 flex items-center gap-2.5 border-t border-[#f0f0f0] pt-3.5">
        <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-[#f9f9f9]">
          <span aria-hidden="true">→</span>
        </div>
        <div className="min-w-0 flex-1">
          <div className="text-[13px] font-semibold">Listing available</div>
          <div className="mt-px text-xs text-[#8a8a8a]">allhomes.com.au</div>
        </div>
        <a
          href="https://www.allhomes.com.au/22-addison-avenue-roseville-nsw-2069"
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 text-[13px] font-semibold hover:underline"
        >
          View listing
        </a>
      </div>
    </div>
  );
}

function InteractiveMap() {
  const filters = ["All", "Owner-occupier", "Investment"] as const;
  const listings = [
    {
      price: "$2,450,000",
      position: "left-[48%] top-[50%]",
      type: "Owner-occupier",
      address: "22 Addison Ave, Roseville",
      beds: 4,
      baths: 2,
      growth: "+6.2% YoY",
      rating: "Strong buy",
    },
    {
      price: "$1,880,000",
      position: "left-[56%] top-[56%]",
      type: "Investment",
      address: "8 Shirley Rd, Roseville",
      beds: 3,
      baths: 2,
      growth: "+4.8% YoY",
      rating: "Good value",
    },
    {
      price: "$3,100,000",
      position: "left-[39%] top-[43%]",
      type: "Owner-occupier",
      address: "41 Victoria St, Roseville",
      beds: 5,
      baths: 3,
      growth: "+7.1% YoY",
      rating: "Premium",
    },
  ] as const;
  const mapTiles = [
    "https://a.basemaps.cartocdn.com/light_all/14/15071/9825@2x.png",
    "https://b.basemaps.cartocdn.com/light_all/14/15072/9825@2x.png",
    "https://c.basemaps.cartocdn.com/light_all/14/15073/9825@2x.png",
    "https://b.basemaps.cartocdn.com/light_all/14/15071/9826@2x.png",
    "https://c.basemaps.cartocdn.com/light_all/14/15072/9826@2x.png",
    "https://d.basemaps.cartocdn.com/light_all/14/15073/9826@2x.png",
    "https://c.basemaps.cartocdn.com/light_all/14/15071/9827@2x.png",
    "https://d.basemaps.cartocdn.com/light_all/14/15072/9827@2x.png",
    "https://a.basemaps.cartocdn.com/light_all/14/15073/9827@2x.png",
  ];
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const [selectedPrice, setSelectedPrice] = useState<string>(listings[0].price);
  const [showDetails, setShowDetails] = useState(true);
  const [zoom, setZoom] = useState(1);
  const selectedListing =
    listings.find((listing) => listing.price === selectedPrice) ?? listings[0];

  return (
    <div className="w-full overflow-hidden rounded-xl border border-[#f0f0f0] bg-white p-3 shadow-sm sm:p-4">
      <div className="relative h-[clamp(420px,70cqw,520px)] overflow-hidden rounded-2xl bg-[#eceeea] shadow-md">
        <div
          className="absolute -inset-[18%] grid grid-cols-3 grid-rows-3 transition-transform duration-300"
          style={{ transform: `scale(${zoom})` }}
        >
          {mapTiles.map((tile) => (
            <div
              key={tile}
              className="bg-cover bg-center"
              style={{ backgroundImage: `url("${tile}")` }}
            />
          ))}
        </div>

        <div className="absolute left-3 top-3 z-20 flex max-w-[calc(100%-72px)] gap-2 overflow-x-auto">
          {filters.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setFilter(item)}
              className={`whitespace-nowrap rounded-full border px-3 py-1.5 text-xs font-semibold shadow-sm backdrop-blur-sm transition-colors ${
                filter === item
                  ? "border-black bg-black text-white"
                  : "border-[#e2e2e2] bg-white/90 text-black"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="absolute right-3 top-3 z-20 overflow-hidden rounded-lg border border-[#ddd] bg-white shadow-sm">
          <button
            type="button"
            onClick={() => setZoom((current) => Math.min(1.3, current + 0.1))}
            className="flex h-8 w-8 items-center justify-center border-b border-[#ddd] text-lg hover:bg-[#f6f6f6]"
            aria-label="Zoom in"
          >
            +
          </button>
          <button
            type="button"
            onClick={() => setZoom((current) => Math.max(0.9, current - 0.1))}
            className="flex h-8 w-8 items-center justify-center text-lg hover:bg-[#f6f6f6]"
            aria-label="Zoom out"
          >
            −
          </button>
        </div>

        {listings
          .filter((listing) => filter === "All" || listing.type === filter)
          .map((listing) => {
            const selected = listing.price === selectedPrice;
            return (
              <button
                key={listing.price}
                type="button"
                onClick={() => {
                  setSelectedPrice(listing.price);
                  setShowDetails(true);
                }}
                className={`absolute z-10 ${listing.position} -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full px-3 py-1.5 text-xs font-bold shadow-md transition-colors ${
                  selected
                    ? "bg-black text-white"
                    : "border border-[#e2e2e2] bg-white text-black"
                }`}
              >
                {listing.price}
              </button>
            );
          })}

        {showDetails && (
          <div className="absolute inset-x-4 bottom-4 z-20 rounded-2xl bg-white p-4 shadow-xl">
            <div className="mb-3 flex items-start justify-between">
              <div className="flex min-w-0 flex-1 items-start gap-3">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#f6f6f6] text-2xl">
                  🏠
                </div>
                <div className="min-w-0 flex-1">
                  <div className="truncate text-sm font-bold">
                    {selectedListing.address}
                  </div>
                  <div className="mt-0.5 text-xs text-[#6b6b6b]">
                    {selectedListing.beds} bed · {selectedListing.baths} bath
                  </div>
                  <span className="mt-1.5 inline-block rounded-full bg-[#e8f5e9] px-2 py-0.5 text-[11px] font-bold text-[#1b5e20]">
                    {selectedListing.rating}
                  </span>
                </div>
              </div>
              <div className="ml-2 flex shrink-0 items-start gap-2">
                <div className="text-right">
                  <div className="text-base font-bold tracking-tight">
                    {selectedListing.price}
                  </div>
                  <div className="mt-0.5 text-[11px] text-[#6b6b6b]">
                    {selectedListing.growth}
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setShowDetails(false)}
                  className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#f6f6f6] text-xs text-[#6b6b6b] hover:bg-[#e2e2e2]"
                  aria-label="Close listing details"
                >
                  ✕
                </button>
              </div>
            </div>
            <div className="my-3 h-px bg-[#eee]" />
            <div className="grid grid-cols-3 gap-2 text-center">
              {[
                ["Suburb median", "$2.1M"],
                ["Clearance rate", "74%"],
                ["Days on market", "18 days"],
              ].map(([label, value]) => (
                <div key={label}>
                  <div className="text-[10px] uppercase tracking-wide text-[#6b6b6b]">
                    {label}
                  </div>
                  <div className="mt-0.5 text-sm font-bold">{value}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="absolute bottom-1 right-2 z-10 text-[9px] text-[#6b6b6b]">
          © OpenStreetMap © CARTO
        </div>
      </div>
    </div>
  );
}

export default function BrickAiInterfaceShowcase() {
  const [activeInterface, setActiveInterface] = useState<InterfaceId>("suburb");

  return (
    <div className="mt-10 grid gap-6 lg:grid-cols-[260px_minmax(0,1fr)]">
      <div className="flex flex-col">
        {interfaces.map((item, index) => {
          const active = item.id === activeInterface;
          return (
            <button
              key={item.id}
              type="button"
              aria-pressed={active}
              onClick={() => setActiveInterface(item.id)}
              className={`border-b border-border py-5 text-left transition-colors first:border-t ${
                active ? "text-foreground" : "text-muted hover:text-foreground"
              }`}
            >
              <div className="flex items-center justify-between gap-4">
                <span className="font-semibold">{item.title}</span>
                <span className="text-xs tabular-nums">0{index + 1}</span>
              </div>
              <p className="mt-1.5 text-xs leading-relaxed text-muted">
                {item.description}
              </p>
            </button>
          );
        })}
      </div>

      <div className="h-[620px] overflow-hidden rounded-3xl border border-[#eee] bg-[#f7f7f5] p-[clamp(12px,3cqw,28px)] [container-type:inline-size]">
        <div className="h-full overflow-y-auto overscroll-contain">
          {activeInterface === "suburb" && <BrickAiSuburbInsights />}
          {activeInterface === "grants" && <GrantEligibility />}
          {activeInterface === "affordability" && <Affordability />}
          {activeInterface === "listing" && <ListingAnalysis />}
          {activeInterface === "map" && <InteractiveMap />}
        </div>
      </div>
    </div>
  );
}
