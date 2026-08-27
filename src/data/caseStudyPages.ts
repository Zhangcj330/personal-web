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
  subheading?: string;
  paragraphs: string[];
  stats?: CaseStudyStat[];
  steps?: CaseStudyStep[];
  features?: CaseStudyFeature[];
  gallery?: CaseStudyImage[];
  galleryCaption?: string;
  galleryBare?: boolean;
  galleryAtmosphere?: boolean;
  galleryHeight?: number;
  galleryPrimary?: boolean;
  galleryStackedSecondary?: boolean;
  techStack?: string[];
  // single visual (photo or GIF) shown beside the text in a colored panel
  sideImage?: CaseStudyImage;
  sideImageCaption?: string;
  sideImageBare?: boolean;
  sideVisual?: "brick-ai-chat" | "brick-ai-suburb-insights";
  interactiveShowcase?: "brick-ai-interfaces";
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
  closing?: { heading: string[]; paragraph: string };
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
      { label: "Category", value: "Property Risk Platform" },
      { label: "Role", value: "Backend & Integration Lead" },
      { label: "Year", value: "2026" },
      { label: "Company", value: "IAG · NRMA" },
    ],
    lead: "An AI-powered tool that helps NRMA customers proactively protect their homes — turning trusted risk data into simple, ongoing actions.",
    heroImage: {
      src: "/projects/work/home-health-check/hero-v2.png",
      alt: "Home Health Check report with an all-clear result and aerial property imagery — NRMA / IAG",
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
            src: "/projects/work/home-health-check/issues-v4.png",
            alt: "Detected property issues and aerial evidence",
            width: 2304,
            height: 1100,
          },
          {
            src: "/projects/work/home-health-check/missing-roof.png",
            alt: "Missing roof material finding with customer guidance and recommended next steps",
            width: 1616,
            height: 1778,
          },
        ],
        galleryAtmosphere: true,
        galleryBare: true,
        galleryHeight: 420,
        galleryPrimary: true,
        galleryCaption:
          "Real Home Health Check screens — detected issues, aerial evidence, and clear guidance on what customers can do next.",
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
            src: "/projects/work/home-health-check/weather.png",
            alt: "Extreme weather risks with per-peril guidance",
            width: 2880,
            height: 1418,
          },
          {
            src: "/projects/work/home-health-check/bushfire.png",
            alt: "Bushfire risk details and preparation guidance",
            width: 1488,
            height: 594,
          },
          {
            src: "/projects/work/home-health-check/flood.png",
            alt: "Flood risk preparation guidance",
            width: 1488,
            height: 558,
          },
          {
            src: "/projects/work/home-health-check/cyclone.png",
            alt: "Cyclone risk preparation guidance",
            width: 1488,
            height: 558,
          },
        ],
        galleryAtmosphere: true,
        galleryBare: true,
        galleryHeight: 410,
        galleryPrimary: true,
        galleryStackedSecondary: true,
        galleryCaption:
          "Real screen — the extreme-weather severity scale across bushfire, flood, cyclone, storm/hail and storm surge.",
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
    lead: "An autonomous analyst that turns a location fix ticket into validated, ready-to-run SQL — with a human always in the loop.",
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
          "When a property is geocoded to the wrong spot, IAG's pricing and exposure models see the wrong risk. Fixing it means a location fix request in ServiceNow — and, until now, a slow manual trail through multiple databases, satellite imagery and hand-written SQL for every single ticket.",
          "The Location Fix Agent automates that investigation. It pools tickets automatically, traces the GeoID across databases, cross-validates the new coordinates against multiple data sources — satellite imagery, address data and spatial context — and generates ready-to-copy REPORTING and PROD SQL — every finding backed by the exact query that proves it, and nothing executed without a human.",
        ],
      },
      {
        heading: ["From a ticket to", "reviewed SQL"],
        paragraphs: [
          "The agent pools tickets automatically and does the legwork an analyst would — the lookups, the branching decisions, the multi-source coordinate validation — then hands back a structured report and the exact SQL, staged for a human to run.",
        ],
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
            body: "SELECT-only queries across databases confirm the GeoID type and current record, then choose Path A, B or C.",
          },
          {
            no: "02",
            title: "Validate the move",
            body: "Satellite imagery, address data and spatial context are combined to confirm the new point lands on the right building.",
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
            body: "Every finding is accompanied by the exact SELECT that proves it — GeoID type, coordinates, mappings, all shown.",
          },
          {
            icon: "🛰️",
            title: "Multi-source validation",
            body: "Satellite imagery, address data and spatial context are combined to cross-validate the new coordinates — not just a single screenshot check.",
          },
          {
            icon: "👁️",
            title: "Vision LLM",
            body: "LLM vision analyses satellite imagery as the first layer of judgement — identifying the correct location before a human is involved.",
          },
          {
            icon: "📋",
            title: "Rules-based skills",
            body: "Every operation and decision step is encoded as an explicit skill — structured reasoning the agent follows, not improvised logic.",
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
          "The agent is wired to IAG's geo systems through Model Context Protocol servers — live database access, satellite imagery, address lookups and a browser — so it can cross-validate coordinates against multiple sources while staying strictly read-only.",
        ],
        galleryCaption:
          "Read-only investigation across geo databases; Athena / EDH used to verify the change after a human runs it.",
      },
      {
        heading: ["My Role"],
        paragraphs: [
          "I identified the geo-correction workflow as a high-friction, high-volume problem — analysts spending hours on repetitive investigation work that followed the same logical steps every time. I designed and built the agent to automate that entirely.",
          "That meant encoding the full investigation logic as explicit, rules-based skills; wiring the agent to live geo systems through MCP servers; and building in the guardrails that make it safe to trust — evidence at every step, read-only access, and a clear handoff to humans when it matters.",
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
      { label: "Category", value: "AI PropTech" },
      { label: "Role", value: "Founder & Full-Stack Engineer" },
      { label: "Year", value: "2026" },
      { label: "Stack", value: "Next.js · Supabase · LLM" },
    ],
    lead: "Australia's AI buyer's agent for first-home buyers — giving buyers the clarity, data and negotiation edge to buy right, without the guesswork.",
    heroImage: {
      src: "/projects/work/brick-ai/hero-v3.png",
      alt: "Brick AI — AI buyer's agent, live product",
      width: 2320,
      height: 1588,
    },
    sections: [
      {
        heading: ["About the Project"],
        paragraphs: [
          "Buying a first home in Australia is overwhelming — unclear pricing, hidden property issues, scattered information, and agents working for the seller. Unless you're a property expert, it's hard to know what to look for, what you're missing, and how to avoid costly mistakes. Brick AI is an AI buyer's agent on your side, helping you turn messy property data into clear, confident decisions.",
          "Ask Brick anything in plain English — a suburb, a budget, a specific listing — and it answers with comparable sales, suburb trends, grant eligibility, hidden costs and a negotiation strategy, in seconds. No forms, no filters, no jargon.",
        ],
      },
      {
        heading: ["A conversation,", "not a search"],
        paragraphs: [
          "Instead of endless filters, Brick understands intent. It replies with generative UI — rich, interactive cards rendered live in the chat: suburb stats, grant eligibility, comparable sales, affordability, risk and an interactive map.",
          "The answer is the interface — data shaped around the exact question a buyer just asked.",
        ],
        sideVisual: "brick-ai-chat",
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
        interactiveShowcase: "brick-ai-interfaces",
      },
      {
        heading: ["My Role"],
        paragraphs: [
          "I designed and built Brick AI end-to-end — product and brand, the full front-end, the conversational AI layer and its generative-UI system, the property-data pipeline, maps, and authentication.",
          "From the first prompt to the settlement checklist, every part of the experience is something I shaped: the interaction model, the LLM orchestration, and the engineering that makes it fast and reliable.",
        ],
      },
    ],
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
      { label: "Category", value: "Geospatial Risk" },
      { label: "Role", value: "Data & Geospatial Engineering" },
      { label: "Year", value: "2026" },
      { label: "Company", value: "IAG" },
    ],
    lead: "One live map connecting active natural perils with insurance exposure — so IAG can see who's affected, protect customers, and deploy the right people and support where they're needed most.",
    heroImage: {
      src: "/projects/work/situational-awareness-map/hero-v2.png",
      alt: "Situational Awareness Map — live cyclone map with AI agent",
      width: 1160,
      height: 800,
    },
    sections: [
      {
        heading: ["About the Project"],
        paragraphs: [
          "During major events, operational teams need to make fast decisions — but the information they need is scattered across weather, hazard, property and policy data. Building a clear picture of what's happening, who's affected, and where resources are needed most takes critical time they don't have.",
          "The Situational Awareness Map closes that gap — bringing live peril data and insurance exposure into one shared view, so teams can understand impact, protect customers and coordinate the response faster.",
        ],
      },
      {
        heading: ["From hazard", "to exposure"],
        paragraphs: [
          "Live feeds from fire and weather agencies are joined, in space and time, to the portfolio — turning \"Where is the fire?\" into \"Who is affected — and how much exposure is inside the footprint right now?\"",
          "What took hours of manual GIS work now updates continuously, on its own.",
        ],
        stats: [
          { value: "6", label: "Major events supported since launch" },
          { value: "1M+", label: "Policy exposures analysed" },
          { value: "30 min", label: "Data refresh cadence" },
        ],
      },
      {
        heading: ["Built for the", "command center"],
        paragraphs: [
          "Designed as a calm, dark command dashboard — dense with signal, easy to read under pressure.",
        ],
        features: [
          {
            icon: "🔥",
            title: "Live event feed",
            body: "Bushfire, flood, storm, hail and cyclone feeds — toggle on and off, colour-coded by type.",
          },
          {
            icon: "🏠",
            title: "Exposure overlay",
            body: "Policy and dollar exposure rendered spatially, so concentration is visible at a glance.",
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
        ],
      },
      {
        heading: ["Understanding", "the response"],
        paragraphs: [
          "Before building the map, I worked with claims and operational teams to understand how decisions are made during a major event — what they need to know, where the information comes from, and what slows the response down.",
        ],
        steps: [
          {
            no: "01",
            title: "What's happening?",
            body: "Where is the event moving? How severe is it, and which areas are in its path?",
          },
          {
            no: "02",
            title: "Who's affected?",
            body: "Which customers and properties are exposed? How much of the portfolio is inside the footprint?",
          },
          {
            no: "03",
            title: "What do we do next?",
            body: "Who needs to be alerted, and where should people and support be deployed?",
          },
        ],
      },
      {
        heading: ["When it", "became real"],
        subheading: "260108 · VIC Longwood Bushfire",
        paragraphs: [
          "During the Longwood Bushfire, the map brought together live government fire data with IAG's property exposure to identify properties potentially in the affected area.",
          "As the event developed, we went beyond the fire footprint — bringing in post-event aerial imagery from a third-party provider to assess visible property damage, reviewing around 2,000 potentially affected properties and supporting the analysis of around 900 claims.",
          "This gave response and claims teams a faster, shared picture of where the fire was, which properties may have been damaged, and where attention was needed most.",
        ],
        stats: [
          { value: "2,000+", label: "Properties reviewed for potential damage" },
          { value: "900+", label: "Claims supported in analysis" },
        ],
      },
      {
        heading: ["My Role"],
        paragraphs: [
          "I worked across the full journey — understanding how operational teams make decisions during major events, shaping the product around those needs, and building the geospatial capability that brought it to life.",
          "That meant working across users, hazard data, spatial modelling, policy exposure and the map experience — turning a complex operational problem into a tool teams could actually use under pressure.",
        ],
        steps: [
          {
            no: "01",
            title: "Hazard Feeds",
            body: "Live peril data from NSW RFS, BoM and other government sources, ingested continuously.",
          },
          {
            no: "02",
            title: "Ingestion & Processing",
            body: "Python pipeline cleans, normalises and spatially joins hazard data in the cloud.",
          },
          {
            no: "03",
            title: "Policy Exposure",
            body: "Spatial join against IAG's full policy and claims portfolio to calculate exposure inside each footprint.",
          },
          {
            no: "04",
            title: "CARTO Map",
            body: "Interactive, map-first dashboard served to response, claims and customer teams.",
          },
        ],
        techStack: [
          "CARTO",
          "Python",
          "Spatial SQL",
          "Cloud Data Pipeline",
          "NSW RFS",
          "BoM",
          "Policy & Claims Data",
        ],
      },
    ],
    footer: {
      headline: ["Know your risk,", "as it happens."],
      meta: "Situational Awareness Map · IAG · Geospatial Risk Intelligence",
    },
  },
];

export function getCaseStudyPage(slug: string): CaseStudyPage | undefined {
  return caseStudyPages.find((page) => page.slug === slug);
}
