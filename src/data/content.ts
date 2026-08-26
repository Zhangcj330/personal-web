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


export const focus = {
  eyebrow: "What I Bring",
  heading: ["From customer problems", "to working products."],
  lead: "I work across the full 0→1 journey — understanding users, finding the real problem, shaping the solution, and building what it takes to ship.",
};

export const focusAreas = [
  {
    number: "01",
    title: "FIND THE RIGHT PROBLEM",
    description:
      "Talk to customers. Understand workflows. Research the domain. Find pain points. Separate the real problem from the symptoms.",
    tags: ["Customer Research", "Domain Research", "Problem Discovery"],
  },
  {
    number: "02",
    title: "TURN AMBIGUITY INTO A PRODUCT",
    description:
      "Define the opportunity. Form hypotheses. Explore solutions. Make trade-offs. Turn an unclear problem into a clear product direction.",
    tags: ["Product Thinking", "UX", "Prototyping", "Prioritisation"],
  },
  {
    number: "03",
    title: "BUILD ACROSS THE STACK",
    description:
      "AI, data, maps, APIs, backend, cloud — I can move across disciplines and connect the pieces needed to make the product work.",
    tags: ["AI", "Data", "Geospatial", "Backend", "APIs", "Cloud"],
  },
  {
    number: "04",
    title: "SHIP, LEARN, ITERATE",
    description:
      "Get it into users' hands. Work through integration and production constraints. Learn from real usage and feedback. Make the next version better.",
    tags: ["Delivery", "Production", "Feedback", "Iteration"],
  },
];

// Real screenshots + case-study links shown in the homepage "Case
// Studies" section, styled as a 2x2 "Featured Projects" grid. Each
// `slug` maps to a full case-study detail page at /work/[slug]
// (see src/data/caseStudyPages.ts and src/app/work/[slug]/page.tsx).
export const featuredProjects = [
  {
    slug: "home-health-check",
    index: "01",
    title: "Home Health Check",
    category: "AI Property Risk Platform · IAG / NRMA",
    image: "/projects/work/home-health-check/hero.png",
    imageWidth: 738,
    imageHeight: 794,
  },
  {
    slug: "situational-awareness-map",
    index: "02",
    title: "Situational Awareness Map",
    category: "Geospatial Risk Intelligence · IAG",
    image: "/projects/work/situational-awareness-map/hero.png",
    imageWidth: 1160,
    imageHeight: 800,
  },
  {
    slug: "location-fix-agent",
    index: "03",
    title: "Location Fix Agent",
    category: "AI Agent · Geospatial Data Ops · IAG",
    image: "/projects/work/location-fix-agent/hero.png",
    imageWidth: 1600,
    imageHeight: 1000,
  },
  {
    slug: "brick-ai",
    index: "04",
    title: "Brick AI",
    category: "AI PropTech · Founder & Full-Stack Engineer",
    image: "/projects/work/brick-ai/hero.png",
    imageWidth: 1160,
    imageHeight: 800,
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
