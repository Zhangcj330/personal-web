// Content model + data for the 4 individual case-study "work" detail
// pages (src/app/work/[slug]/page.tsx), styled after the reference site's
// individual work page (majd-portfolio.framer.website/work/damas):
// big title, a Category/Role/Year/Company meta row next to a short lead
// paragraph, a large hero image, then a sequence of content sections
// (each an H2 + paragraphs, optionally paired with a stat row, a step
// row, a feature-card grid, an image gallery, or a tech-stack chip list),
// and a closing statement + footer-style "more projects" section.
//
// Source content adapted from the standalone case-study HTML pages the
// user already wrote at /Users/s131059/Adhoc/HHC/{index,geo-agent,brick,sam}.html.

export interface CaseStudyStat {
  value: string;
  label: string;
}

export interface CaseStudyStep {
  no: string;
  title: string;
  body: string;
}

export interface CaseStudyFeature {
  icon: string;
  title: string;
  body: string;
}

export interface CaseStudyImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface CaseStudySection {
  heading: string[];
  paragraphs: string[];
  stats?: CaseStudyStat[];
  steps?: CaseStudyStep[];
  features?: CaseStudyFeature[];
  gallery?: CaseStudyImage[];
  galleryCaption?: string;
  techStack?: string[];
}

export interface ChatMessage {
  from: "ai" | "user";
  text: string;
}

export interface ChatCardRow {
  label: string;
  value: string;
  badge?: string;
}

export interface CaseStudyPage {
  slug: string;
  title: string[];
  tagline: string;
  accent: string;
  accentBg: string;
  facts: { label: string; value: string }[];
  lead: string;
  heroImage: CaseStudyImage;
  sections: CaseStudySection[];
  chatMock?: {
    messages: ChatMessage[];
    cards: ChatCardRow[][];
  };
  closing: { heading: string[]; paragraph: string };
  footer: { headline: string[]; meta: string; liveUrl?: string };
}

export const caseStudyPages: CaseStudyPage[] = [
  {
    slug: "home-health-check",
    title: ["Home Health", "Check"],
    tagline: "AI Property Risk Platform",
    accent: "#16a34a",
    accentBg: "#e7f6ec",
    facts: [
      { label: "Category", value: "AI Property Risk Platform" },
      { label: "Role", value: "API & Integration Lead" },
      { label: "Year", value: "2026" },
      { label: "Company", value: "IAG · NRMA" },
    ],
    lead: "An AI-powered tool that helps NRMA customers proactively protect their homes — turning trusted risk data into simple, ongoing actions. Co-built with Google, launching for NRMA's centenary.",
    heroImage: {
      src: "/projects/work/home-health-check/hero.png",
      alt: "Home Health Check detailed report with AI-detected roof issues — NRMA / IAG",
      width: 2880,
      height: 1986,
    },
    sections: [
      {
        heading: ["About the Project"],
        paragraphs: [
          "Home Health Check is a web- and app-based tool for NRMA customers that detects property-specific exposure to natural perils — bushfire, storm and flood — from aerial imagery, then delivers a personalised report and action plan.",
          "At its core, the product is about turning complex risk data into clear, confident next steps. It blends IAG's extensive risk data with external expert sources to help homeowners protect what matters most.",
        ],
      },
      {
        heading: ["Designing for Impact,", "Built for Scale"],
        paragraphs: [
          "Every screen is intentionally structured to guide attention and support storytelling without overwhelming the user — from a single property scan to a full, shareable report. The result feels confident, clean and trustworthy.",
        ],
        gallery: [
          {
            src: "/projects/work/home-health-check/issues.png",
            alt: "Detected issues flagged on aerial imagery",
            width: 2880,
            height: 1051,
          },
          {
            src: "/projects/work/home-health-check/findings.png",
            alt: "Risk findings and aerial imagery",
            width: 584,
            height: 488,
          },
        ],
        galleryCaption:
          "Real Home Health Check screens — detected issues flagged on the aerial image, and the \"all clear\" result.",
      },
      {
        heading: ["Scan · Assess · Act"],
        paragraphs: [
          "The product follows a simple three-step framework. Scan locates the property and pulls aerial imagery and IAG risk data. Assess lets AI evaluate the perils and surface property-specific findings. Act delivers a personalised action plan with recommended next steps.",
          "This structure ensures customers don't just see risks — they understand them and know exactly what to do next.",
        ],
      },
      {
        heading: ["Risk, Made Visible"],
        paragraphs: [
          "Beyond a checklist, the report turns raw risk data into something people can read at a glance — a clear severity scale across bushfire, storm, flood, hail and storm surge, with detailed guidance for every peril that matters.",
        ],
        gallery: [
          {
            src: "/projects/work/home-health-check/surge.png",
            alt: "Extreme weather risk severity chart",
            width: 2880,
            height: 1228,
          },
          {
            src: "/projects/work/home-health-check/weather.png",
            alt: "Extreme weather risks with per-peril guidance",
            width: 2880,
            height: 1418,
          },
        ],
        galleryCaption:
          "Real screens — the extreme-weather severity scale and per-peril preparation guidance.",
      },
      {
        heading: ["My Role"],
        paragraphs: [
          "I drove the service through to launch readiness for NRMA's centenary. I designed and built a production-grade architecture and API — the core service behind every report and action plan, integrating multiple external data providers — and acted as the bridge between platform, product and delivery teams.",
          "As first point of contact, I facilitated several squads — Online Account & Mobile front-ends and the loyalty/rewards BFF — to ship the same experience across web and mobile, for faster delivery and a consistent experience for every customer.",
        ],
      },
      {
        heading: ["Engineered for Scale"],
        paragraphs: [
          "Under the hood, the service runs on Python with an AI-native workflow, deployed on Google Cloud Run. Firestore and Cloud Tasks handle report generation asynchronously, so nothing blocks the user — and stale reports refresh automatically as conditions change.",
          "The architecture is built to grow: new perils, data sources or delivery channels can be added without reworking the core.",
        ],
        techStack: [
          "Python",
          "Google Cloud Run",
          "Firestore",
          "Cloud Tasks",
        ],
      },
    ],
    closing: {
      heading: ["Impact that Scales"],
      paragraph:
        "Home Health Check turns design, data and engineering into one system: homeowners get clear, confident guidance on protecting their homes, and NRMA gains a scalable, trusted way to stay close to every customer.",
    },
    footer: {
      headline: ["Protecting Homes,", "at Scale."],
      meta: "Home Health Check · IAG / NRMA · Solution & API Design",
    },
  },
  {
    slug: "location-fix-agent",
    title: ["Location", "Fix Agent"],
    tagline: "AI agent · Geospatial data operations",
    accent: "#0d9488",
    accentBg: "#d7efec",
    facts: [
      { label: "Category", value: "AI Agent · Geo Data Ops" },
      { label: "Role", value: "Agent Design & Data Engineering" },
      { label: "Year", value: "2026" },
      { label: "Company", value: "IAG" },
    ],
    lead: "An autonomous analyst that turns a \"move this location\" ticket into validated, ready-to-run SQL — with a human always in the loop.",
    heroImage: {
      src: "/projects/work/location-fix-agent/hero.png",
      alt: "Move LatLong panel map with old and new coordinate markers",
      width: 1113,
      height: 696,
    },
    sections: [
      {
        heading: ["About the Project"],
        paragraphs: [
          "When a property is geocoded to the wrong spot, IAG's pricing and exposure models see the wrong risk. Fixing it means a \"Move LatLong\" request in ServiceNow — and, until now, a slow manual trail through multiple databases, satellite imagery and hand-written SQL for every single ticket.",
          "The Location Fix Agent automates that investigation. It reads the RITM ticket, traces the GeoID across Helios and CRODS, validates the new coordinates against satellite imagery, and generates ready-to-copy REPORTING and PROD SQL — every claim backed by the exact query that proves it, and nothing executed without a human.",
        ],
      },
      {
        heading: ["From a ticket to", "reviewed SQL"],
        paragraphs: [
          "Paste the ticket, and the agent does the legwork an analyst would — the lookups, the branching decisions, the satellite check — then hands back a structured report and the exact SQL, staged for a human to run.",
        ],
        stats: [
          { value: "3", label: "Decision paths auto-selected" },
          { value: "100%", label: "Claims backed by a query" },
          { value: "2", label: "Environments: REPORTING & PROD" },
          { value: "0", label: "Auto-writes — human runs it" },
        ],
        galleryCaption:
          "Investigate → validate → generate SQL → human review. The agent never writes to a database itself.",
      },
      {
        heading: ["How it works"],
        paragraphs: [
          "A disciplined workflow that mirrors how a geo operations analyst thinks — but runs in minutes, and shows its evidence at every step.",
        ],
        steps: [
          {
            no: "01",
            title: "Investigate & branch",
            body: "SELECT-only queries in Helios and CRODS confirm the GeoID type and current record, then choose Path A, B or C.",
          },
          {
            no: "02",
            title: "Validate the move",
            body: "Satellite screenshots compare the old and new coordinates and measure the distance — the point must land on a rooftop centroid.",
          },
          {
            no: "03",
            title: "Generate SQL",
            body: "Ready-to-copy REPORTING and PROD statements, with every factual claim embedded as its supporting query.",
          },
          {
            no: "04",
            title: "Human review",
            body: "A verdict — approved or flagged — and a next-steps checklist. A person runs the SQL and closes the ticket.",
          },
        ],
      },
      {
        heading: ["Built to be", "trusted"],
        paragraphs: [
          "Every design choice pushes toward evidence, safety and reviewability — the things that matter when the output touches production risk data.",
        ],
        features: [
          {
            icon: "🔎",
            title: "Evidence-backed",
            body: "No claim without the exact SELECT that proves it — GeoID type, coordinates, mappings, all shown.",
          },
          {
            icon: "🛰️",
            title: "Satellite validation",
            body: "Old-vs-new imagery comparison and distance check confirm the new point sits on the building.",
          },
          {
            icon: "🔀",
            title: "Three decision paths",
            body: "Move LatLong, associate an existing GeoID, or create a new one — chosen from the data, not the ticket.",
          },
          {
            icon: "📋",
            title: "Ready-to-copy SQL",
            body: "Structured REPORTING and PROD scripts with an investigate block a reviewer can re-run.",
          },
          {
            icon: "🛡️",
            title: "SELECT-only guardrails",
            body: "The agent never runs DML or DDL. It reads, reasons and drafts — humans execute.",
          },
          {
            icon: "⛔",
            title: "Human escalation",
            body: "Ambiguous, contradictory or high-risk cases stop and route back to the geo operations team.",
          },
        ],
      },
      {
        heading: ["Engineered on", "MCP tooling"],
        paragraphs: [
          "The agent is wired to IAG's geo systems through Model Context Protocol servers — live database access, satellite imagery and a browser — so it can investigate and validate against real data while staying strictly read-only.",
        ],
        techStack: [
          "Custom agent (.agent.md)",
          "MCP servers",
          "Helios · CRODS replica",
          "screenshot-mcp",
          "GeoID · MGRS addressing",
          "SQL · Db2",
          "Playwright",
          "ServiceNow RITM",
        ],
        galleryCaption:
          "Read-only investigation across Helios and CRODS; Athena / EDH used to verify the change after a human runs it.",
      },
      {
        heading: ["My Role"],
        paragraphs: [
          "I designed and authored the agent end to end — the branching investigation logic, the evidence-first rules, the satellite validation step and the SQL generation — and wired it to IAG's geo databases through MCP servers.",
          "The hardest part wasn't automation; it was trust: shaping guardrails so the agent proves every statement, refuses to write to production, and knows exactly when to hand a decision back to a person.",
        ],
      },
    ],
    closing: {
      heading: ["Precise locations,", "at a fraction of the effort"],
      paragraph:
        "The Location Fix Agent turns a slow, manual geo-correction workflow into minutes of reviewed, evidence-backed work — helping IAG keep property risk data accurate, one ticket at a time.",
    },
    footer: {
      headline: ["Right place,", "right risk."],
      meta: "Location Fix Agent · IAG · Geospatial Data Operations",
    },
  },
  {
    slug: "brick-ai",
    title: ["Brick AI"],
    tagline: "Now live · thebrickai.com",
    accent: "#16a34a",
    accentBg: "#e7f6ec",
    facts: [
      { label: "Category", value: "AI PropTech · Consumer" },
      { label: "Role", value: "Founder & Full-Stack Engineer" },
      { label: "Year", value: "2026" },
      { label: "Stack", value: "Next.js · Supabase · LLM" },
    ],
    lead: "Australia's AI buyer's agent for first-home buyers — giving buyers the clarity, data and negotiation edge to buy right, without the guesswork.",
    heroImage: {
      src: "/projects/work/brick-ai/hero.png",
      alt: "Brick AI — AI buyer's agent, live product",
      width: 1160,
      height: 800,
    },
    sections: [
      {
        heading: ["About the Project"],
        paragraphs: [
          "Buying a first home in Australia is overwhelming — opaque prices, confusing grants, and agents who work for the seller. Brick AI is a conversational buyer's agent that turns messy property data into clear, confident decisions.",
          "Ask Brick anything in plain English — a suburb, a budget, a specific listing — and it answers with comparable sales, suburb trends, grant eligibility, hidden costs and a negotiation strategy, in seconds. No forms, no filters, no jargon.",
        ],
      },
      {
        heading: ["A conversation,", "not a search"],
        paragraphs: [
          "Instead of endless filters, Brick understands intent. It replies with generative UI — rich, interactive cards rendered live in the chat: suburb stats, grant eligibility, comparable sales, affordability, risk and an interactive map.",
          "The answer is the interface — data shaped around the exact question a buyer just asked.",
        ],
      },
      {
        heading: ["How it works"],
        paragraphs: [
          "From first question to settlement, Brick guides buyers through the whole journey — replacing guesswork with data at every step.",
        ],
        steps: [
          {
            no: "01",
            title: "Tell Brick what you want",
            body: "Share your suburb, budget and must-haves in plain English. No forms, no filters.",
          },
          {
            no: "02",
            title: "Brick runs the numbers",
            body: "Comparable sales, suburb trends, grant eligibility and hidden costs — in seconds.",
          },
          {
            no: "03",
            title: "Get your negotiation edge",
            body: "Walk into every inspection and auction knowing your exact ceiling and offer strategy.",
          },
          {
            no: "04",
            title: "Stay on track to settlement",
            body: "A personalised checklist from deposit to keys, with deadline reminders at every step.",
          },
        ],
      },
      {
        heading: ["The answer", "is the interface"],
        paragraphs: [
          "Every reply can render a purpose-built component — the AI decides which data matters and shapes the UI around it.",
        ],
        features: [
          {
            icon: "📊",
            title: "Suburb intelligence",
            body: "Medians, clearance rates, days-on-market and trend signals for any suburb.",
          },
          {
            icon: "🏷️",
            title: "Grant eligibility",
            body: "Stamp-duty relief, FHOG and First Home Guarantee — matched to the buyer's situation.",
          },
          {
            icon: "🧮",
            title: "True affordability",
            body: "Models stamp duty, LMI and council rates so there are no surprises at settlement.",
          },
          {
            icon: "🏠",
            title: "Listing analysis",
            body: "Comparable sales, flood zones, school ratings and price history in one view.",
          },
          {
            icon: "🗺️",
            title: "Interactive map",
            body: "Live property markers and street view, powered by Leaflet, right inside the chat.",
          },
          {
            icon: "⚖️",
            title: "Negotiation strategy",
            body: "Comparable-driven ceiling price and an offer plan for inspections and auctions.",
          },
        ],
      },
      {
        heading: ["Engineered to scale"],
        paragraphs: [
          "Brick AI is a modern, full-stack product: a Next.js 16 / React 19 app with an LLM-powered conversational core that streams generative-UI components, backed by Supabase for auth and data and Leaflet for interactive maps.",
          "LLM calls are traced and evaluated with Langfuse for reliability and cost control, animations are handled with Framer Motion, and the whole app ships on Vercel with analytics.",
        ],
        techStack: [
          "Next.js 16",
          "React 19",
          "TypeScript",
          "LLM · Generative UI",
          "Langfuse",
          "Supabase",
          "Leaflet",
          "Framer Motion",
          "Tailwind CSS",
          "Vercel",
        ],
      },
      {
        heading: ["My Role"],
        paragraphs: [
          "I designed and built Brick AI end-to-end — product and brand, the full front-end, the conversational AI layer and its generative-UI system, the property-data pipeline, maps, and authentication.",
          "From the first prompt to the settlement checklist, every part of the experience is something I shaped: the interaction model, the LLM orchestration, and the engineering that makes it fast and reliable.",
        ],
      },
    ],
    chatMock: {
      messages: [
        { from: "ai", text: "Hi! I'm Brick. What home are you looking for?" },
        { from: "user", text: "3 bed in Dee Why, budget $2M" },
        {
          from: "ai",
          text: "Found 8 matches in Dee Why. Median $1.94M — you're right at market. Clearance rate 74%.",
        },
      ],
      cards: [
        [
          { label: "Suburb median", value: "$1.94M" },
          { label: "Clearance rate", value: "74%", badge: "🔥 Active" },
          { label: "Your budget", value: "$2.0M" },
        ],
        [
          { label: "First Home Buyer Assist", value: "$0 duty", badge: "✓ Eligible" },
          { label: "FHOG (new builds)", value: "$10,000" },
          { label: "First Home Guarantee", value: "5% deposit" },
        ],
      ],
    },
    closing: {
      heading: ["Buying a home,", "with confidence"],
      paragraph:
        "Brick AI turns Australia's most stressful purchase into a guided, data-backed conversation — giving first-home buyers the same edge that, until now, only professional buyer's agents had.",
    },
    footer: {
      headline: ["Buy right,", "without the guesswork."],
      meta: "Brick AI · AI buyer's agent for first-home buyers",
      liveUrl: "https://www.thebrickai.com/",
    },
  },
  {
    slug: "situational-awareness-map",
    title: ["Situational", "Awareness Map"],
    tagline: "Geospatial risk intelligence",
    accent: "#7c5ce0",
    accentBg: "#ece7fb",
    facts: [
      { label: "Category", value: "Geospatial Risk · Insurance" },
      { label: "Role", value: "Data & Geospatial Engineering" },
      { label: "Year", value: "2026" },
      { label: "Company", value: "IAG" },
    ],
    lead: "One live view of active natural perils and the insurance exposure in their path — so teams can respond faster when it matters most.",
    heroImage: {
      src: "/projects/work/situational-awareness-map/hero.png",
      alt: "Situational Awareness Map — live cyclone map with AI agent",
      width: 1160,
      height: 800,
    },
    sections: [
      {
        heading: ["About the Project"],
        paragraphs: [
          "When bushfires, floods, storms or cyclones strike, an insurer needs to know — instantly — which perils are active, where they're heading, and how much of the portfolio sits in their path. That intelligence is usually scattered across hazard feeds, spreadsheets and GIS tools.",
          "The Situational Awareness Map brings it together: a real-time geospatial dashboard that fuses live peril data with IAG's policy exposure into a single, shared operating picture.",
        ],
      },
      {
        heading: ["One live picture", "of risk"],
        paragraphs: [
          "Live feeds from fire and weather agencies are joined, in space and time, to the portfolio — turning \"where is the fire?\" into \"how many of our policies, and how much exposure, is in the footprint right now?\"",
        ],
        stats: [
          { value: "12", label: "Active events tracked live" },
          { value: "8,432", label: "Policies in event footprints" },
          { value: "$2.14B", label: "Exposure at risk, in real time" },
          { value: "< 1 min", label: "Data refresh cadence" },
        ],
        galleryCaption:
          "Live peril layers, policy-exposure overlay and an event feed — one shared operating picture.",
      },
      {
        heading: ["See exposure the", "moment it matters"],
        paragraphs: [
          "Every active event carries its own footprint. The map instantly counts the policies and dollar exposure inside it, ranks events by severity, and surfaces the ones that need attention first — so response, claims and customer teams work from the same facts.",
          "What took hours of manual GIS work now updates continuously, on its own.",
        ],
      },
      {
        heading: ["Built for the", "operating room"],
        paragraphs: [
          "Designed as a calm, dark command dashboard — dense with signal, easy to read under pressure.",
        ],
        features: [
          {
            icon: "🔥",
            title: "Live peril layers",
            body: "Bushfire, flood, storm, hail and cyclone feeds — toggle on and off, colour-coded by type.",
          },
          {
            icon: "🏠",
            title: "Exposure overlay",
            body: "Policy and dollar exposure rendered spatially, so concentration is visible at a glance.",
          },
          {
            icon: "📟",
            title: "Live event feed",
            body: "Every active event ranked by severity, with policies and exposure in its footprint.",
          },
          {
            icon: "🎯",
            title: "Footprint analytics",
            body: "Spatial joins count policies and exposure inside each hazard footprint in real time.",
          },
          {
            icon: "📈",
            title: "Portfolio concentration",
            body: "See where risk clusters across the portfolio before, during and after an event.",
          },
          {
            icon: "⟳",
            title: "Always current",
            body: "Sub-minute refresh keeps the operating picture live as events evolve.",
          },
        ],
      },
      {
        heading: ["Engineered for", "real time"],
        paragraphs: [
          "Under the hood, the map is a spatial data pipeline: live hazard feeds from fire and weather agencies are ingested, cleaned and spatially joined against the policy portfolio in the cloud, then served to an interactive, map-first front end.",
        ],
        techStack: [
          "CARTO · spatial analytics",
          "Interactive web map",
          "NSW RFS · BoM feeds",
          "Spatial joins",
          "Python",
          "Cloud data pipeline",
          "Policy & exposure data",
        ],
      },
      {
        heading: ["My Role"],
        paragraphs: [
          "I designed and built the situational-awareness capability — from the spatial data pipeline that fuses live peril feeds with policy exposure, to the map-first dashboard that turns it into a decision tool.",
          "I shaped how hazard and exposure data come together spatially, and how that complexity is distilled into a single, calm view teams can trust in the middle of an event.",
        ],
      },
    ],
    closing: {
      heading: ["Faster answers,", "when it counts"],
      paragraph:
        "The Situational Awareness Map turns fragmented hazard data into one shared, live picture of risk — helping IAG protect customers and respond with confidence when severe weather hits.",
    },
    footer: {
      headline: ["Know your risk,", "as it happens."],
      meta: "Situational Awareness Map · IAG · Geospatial Risk Intelligence",
    },
  },
];

export function getCaseStudyPage(slug: string): CaseStudyPage | undefined {
  return caseStudyPages.find((page) => page.slug === slug);
}
