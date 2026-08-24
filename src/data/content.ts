// All copy for the site lives here. Edit this file to update content
// without touching component/layout code.

export const site = {
  name: "Choosie Zhang",
  eyebrow: "AI Systems Portfolio",
  eyebrowSecondary: "Financial Services",
  role: "AI Engineer",
  headline: "I build AI systems that work in the real world.",
  intro:
    "Hands-on engineering, agentic AI, and 0→1 product thinking — from ambiguous problem to production system.",
  tags: ["Hands-on Engineering", "Agentic AI", "Founder Mindset", "Financial Services"],
  email: "choosiezhang@gmail.com",
};

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
