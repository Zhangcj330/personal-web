// All copy for the site lives here. Edit this file to update content
// without touching component/layout code.

export const site = {
  name: "Choosie Zhang",
  eyebrow: "AI Systems Portfolio",
  eyebrowSecondary: "Financial Services",
  role: "AI Engineer",
  headline: "Choosie is building Brick AI",
  intro:
    "Hands-on engineering, agentic AI, and 0→1 product thinking — from ambiguous problem to production system.",
  tags: ["Hands-on Engineering", "Agentic AI", "Founder Mindset", "Financial Services"],
  email: "choosiezhang@gmail.com",
};

// Day-job content shown on the front face of the IntroFlip card.
// Founder-side content shown on the back face of the IntroFlip card.
export const founderWork = {
  label: "FOUNDER / BUILDER",
  heading: "Founder / Builder at Brick AI",
  lead: "Turning ideas into products with AI.",
  tags: ["Founder Mindset", "Product Discovery"],
  items: [
    {
      title: "Brick AI",
      description:
        "Building an AI-powered property platform that helps people discover, understand and evaluate homes through conversation — built end-to-end from product and UX to data, maps, backend and AI.",
      highlight: "discover, understand and evaluate homes through conversation",
    },
    {
      title: "Multi Agents",
      description:
        "Building a multi-agent system that turn multi-step research and operational workflows into automated systems.",
    },
    {
      title: "Experiments",
      description:
        "Rapidly turning ideas into working products — designing, coding, testing and shipping them myself.",
    },
  ],
};

export const iagWork = {
  heading: "AI/Data Engineer at IAG",
  lead: "Building property intelligence for insurers and customers.",
  tags: ["Hands-on Engineering", "AI Native"],
  items: [
    {
      title: "Home Health Check",
      description:
        "Led the backend and API architecture powering AI-driven property insights and recommendations for 200,000+ customers, helping homeowners better understand and manage their property risks.",
    },
    {
      title: "Situational Awareness Map",
      description:
        "Built real-time geospatial intelligence that helps claims teams identify properties impacted by major weather events and respond faster.",
    },
    {
      title: "AI Automation",
      description:
        "Transformed a half-day manual location-fix workflow into an AI-agent-driven process.",
    },
  ],
};

// Logos referenced here should be dropped into public/logos/ (see filename
// in each `logo` field). LogoLoop falls back to a text badge with the
// company name until the real file exists at that path.
export const companies = [
  { name: "IAG", logo: "/logos/IAG.png" },
  { name: "Westpac", logo: "/logos/Wpc.png" },
  { name: "NewsCorp", logo: "/logos/News-Corp-650x350.webp" },
  { name: "Servian", logo: "/logos/servian.png" },
  { name: "Suncorp", logo: "/logos/suncorp.webp" },
  { name: "Brick AI", logo: "/logos/brickai.svg" },
];


export const focusAreas = [
  {
    number: "01",
    title: "BUILD",
    description:
      "Production APIs, cloud systems, data pipelines, security and enterprise integration.",
  },
  {
    number: "02",
    title: "AGENT",
    description:
      "Tool use, orchestration, evaluation, guardrails and human-in-the-loop workflows.",
  },
  {
    number: "03",
    title: "CREATE",
    description:
      "0→1 product discovery, rapid prototyping, architecture, deployment and iteration.",
  },
];

export const caseStudies = [
  {
    key: "remediation",
    index: "01",
    category: "Agentic AI",
    title: "AI Remediation Agent",
    description:
      "Turning a multi-system manual investigation process into a guided agentic workflow with tool use, classification, validation and human review.",
    flowLabel: "Incident → context → decision → action",
    impactLabel: "Impact",
    impactValue: "0.5 day → <1 hr",
    note: "Designed the workflow around four remediation pathways, combining context retrieval, reasoning, deterministic checks and human oversight for ambiguous cases.",
    tags: ["Tool Use", "Agent Workflow", "Evaluation", "Human-in-the-loop"],
  },
  {
    key: "homeHealth",
    index: "02",
    category: "Production Engineering",
    title: "Home Health Check",
    description:
      "Shipping a customer-facing property intelligence capability across cloud services, vendor systems and enterprise security boundaries.",
    flowLabel: "Production path",
    impactLabel: "Scale",
    impactValue: "50,000 customers",
    note: "Built for customer-facing delivery with async processing, rate limiting, retries, signed URLs and gateway controls.",
    tags: ["Cloud Run", "Cloud Tasks", "API Gateway", "HMAC", "Nearmap / Vexcel"],
  },
  {
    key: "situational",
    index: "03",
    category: "Real-time Intelligence",
    title: "Situational Awareness Map",
    description:
      "Combining catastrophe observations and forecasts with property and policy exposure to support operational decisions during major events.",
    flowLabel: "Cyclone / Flood / Hail — forecast + observed → exposure",
    impactLabel: "Question",
    impactValue: "What is impacted — now and next?",
    note: "Built around near-real-time event data, geospatial processing, observation-vs-forecast logic and exposure matching across internal and external datasets.",
    tags: ["Geospatial", "Catastrophe", "Near Real-time", "Decision Support"],
  },
  {
    key: "brickAi",
    index: "04",
    category: "Founder Mindset",
    title: "Brick AI",
    description:
      "A 0→1 AI property intelligence product built across user discovery, product design, data quality, conversational AI and deployment.",
    flowLabel: "Founder Journey",
    impactLabel: "Founder Journey",
    impactValue: "0 → 1",
    note: "No predefined ticket. No fixed spec. I owned the problem, product hypothesis, architecture, implementation, evaluation and iteration.",
    tags: ["LLM Product", "Property Data", "Evaluation", "Product Discovery"],
  },
  {
    key: "newsRec",
    index: "05",
    category: "Production ML",
    title: "News Recommendation",
    description:
      "Earlier production ML work connecting recommendation logic, data pipelines and cloud services — showing continuity from ML systems into GenAI.",
    flowLabel: "Personalised news feed",
    impactLabel: "Why it matters",
    impactValue: "ML → GenAI",
    note: "Production recommendation experience provides the foundation: data quality, serving, product feedback loops and real-world system constraints.",
    tags: ["Recommendation", "ML Pipelines", "Cloud", "Production"],
  },
];

export const process = [
  { number: "01", title: "Discover", description: "Find the real business problem." },
  { number: "02", title: "Prototype", description: "Build the smallest useful solution." },
  { number: "03", title: "Integrate", description: "Connect APIs, data and systems." },
  { number: "04", title: "Evaluate", description: "Accuracy, safety, latency, value." },
  { number: "05", title: "Productionise", description: "Security, reliability, observability." },
  { number: "06", title: "Scale", description: "Turn patterns into reusable capability." },
];

export const closing = {
  eyebrow: "Forward Deployed Engineering",
  statement: "AI is only useful when it survives the real world.",
  description:
    "I build at the intersection of AI, software engineering and messy enterprise problems — especially in financial services.",
};
