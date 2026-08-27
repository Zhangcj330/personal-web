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
};

export const focusAreas = [
  {
    number: "01",
    title: "FIND THE RIGHT PROBLEM",
    lead: "I start with the problem, not technology.",
    description:
      "Talk to customers. Understand workflows. Research the domain. Find pain points. Separate the real problem from the symptoms.",
  },
  {
    number: "02",
    title: "TURN AMBIGUITY INTO A PRODUCT",
    lead: "I turn problems into something buildable.",
    description:
      "Define the opportunity. Form hypotheses. Explore solutions. Make trade-offs. Turn an unclear problem into a clear product direction.",
  },
  {
    number: "03",
    title: "BUILD ACROSS THE STACK",
    lead: "I build whatever the problem requires.",
    description:
      "AI, data, maps, APIs, backend, cloud — I can move across disciplines and connect the pieces needed to make the product work.",
  },
  {
    number: "04",
    title: "SHIP, LEARN, ITERATE",
    lead: "A working prototype isn't the finish line.",
    description:
      "Get it into users' hands. Work through integration and production constraints. Learn from real usage and feedback. Make the next version better.",
  },
];

// Real screenshots + case-study links shown in the homepage "Case
// Studies" section, styled as a 2x2 "Featured Projects" grid. Each
// `slug` maps to a full case-study detail page at /work/[slug]
// (see src/data/caseStudyPages.ts and src/app/work/[slug]/page.tsx).
export const featuredProjects = [
  {
    slug: "brick-ai",
    index: "01",
    title: "Brick AI",
    category: "AI PropTech · Founder & Full-Stack Engineer",
    image: "/projects/work/brick-ai/hero-v3.png",
    imageWidth: 1160,
    imageHeight: 800,
    imageBackground:
      "radial-gradient(circle at 18% 16%, #ffffff 0%, transparent 36%), radial-gradient(circle at 82% 14%, #d9e3ec 0%, transparent 40%), radial-gradient(circle at 76% 92%, #8d99a6 0%, transparent 42%), linear-gradient(135deg, #f7f8f9 0%, #dfe4e8 46%, #b5bec7 74%, #7c8792 100%)",
    imageGlow:
      "radial-gradient(circle at 18% 20%, #f7fbff 0%, transparent 38%), radial-gradient(circle at 82% 76%, #66bfff 0%, transparent 44%)",
  },
  {
    slug: "home-health-check",
    index: "02",
    title: "Home Health Check",
    category: "AI Property Risk Platform · IAG / NRMA",
    image: "/projects/work/home-health-check/hero-v2.png",
    imageWidth: 2880,
    imageHeight: 1986,
    imageBackground:
      "linear-gradient(118deg, transparent 8%, rgba(255,244,203,0.82) 24%, transparent 39%), linear-gradient(62deg, transparent 40%, rgba(255,224,151,0.58) 54%, transparent 68%), radial-gradient(ellipse at 76% 18%, #fff0bd 0%, transparent 38%), radial-gradient(ellipse at 14% 84%, #8e541d 0%, transparent 42%), linear-gradient(135deg, #9b5e1d 0%, #d89b3e 38%, #f0ce83 64%, #a76725 100%)",
    imageGlow:
      "linear-gradient(112deg, transparent 12%, rgba(255,249,221,0.9) 30%, transparent 43%), radial-gradient(ellipse at 72% 20%, #ffe8a3 0%, transparent 40%), radial-gradient(ellipse at 84% 82%, #d9973b 0%, transparent 46%)",
    imageTexture: "satin",
  },
  {
    slug: "situational-awareness-map",
    index: "03",
    title: "Situational Awareness Map",
    category: "Geospatial Risk Intelligence · IAG",
    image: "/projects/work/situational-awareness-map/hero-v2.png",
    imageWidth: 1160,
    imageHeight: 800,
    imageBackground:
      "radial-gradient(circle at 28% 8%, #df70ed 0%, transparent 34%), radial-gradient(circle at 72% 18%, #7652d8 0%, transparent 40%), radial-gradient(circle at 92% 88%, #e66bd2 0%, transparent 42%), linear-gradient(140deg, #24145c 0%, #452483 42%, #6040a5 70%, #271852 100%)",
    imageGlow:
      "radial-gradient(circle at 28% 10%, #f08cff 0%, transparent 38%), radial-gradient(circle at 90% 82%, #ff87df 0%, transparent 44%)",
  },
  {
    slug: "location-fix-agent",
    index: "04",
    title: "Location Fix Agent",
    category: "AI Agent · Geospatial Data Ops · IAG",
    image: "/projects/work/location-fix-agent/hero.png",
    imageWidth: 1600,
    imageHeight: 1000,
    imageBackground:
      "radial-gradient(circle at 28% 10%, #f1efbf 0%, transparent 32%), radial-gradient(circle at 72% 24%, #b9e3ce 0%, transparent 38%), radial-gradient(circle at 12% 88%, #1596a3 0%, transparent 42%), linear-gradient(135deg, #07594f 0%, #08766f 40%, #319488 68%, #133f38 100%)",
    imageGlow:
      "radial-gradient(circle at 30% 12%, #fff7c8 0%, transparent 36%), radial-gradient(circle at 78% 72%, #8de3c8 0%, transparent 44%)",
    imageFrame: "browser",
  },
];

export const impact = {
  eyebrow: "Impact",
  groups: [
    {
      company: "IAG · NRMA",
      stats: [
        {
          value: "200K+",
          label: "Customers",
          description:
            "First rollout of Home Health Check, bringing property intelligence to 200K+ customers.",
        },
        {
          value: "8×",
          label: "Faster",
          description:
            "Reduced a half-day operational workflow to ~30 minutes with an AI-assisted process.",
        },
      ],
      stories: [
        {
          title: "A First\nFor IAG",
          emphasis: "First",
          description:
            "Brought property condition and risk insights directly to customers for the first time — helping them understand what's happening with their home, the risks around it, and what they can do about it.",
        },
        {
          metric: "15+",
          title: "Major Events in 12 Months",
          description:
            "Provided situational intelligence for bushfires, floods, hail and cyclones — supporting time-critical operational and workforce decisions in the command centre.",
        },
        {
          eyebrow: "at the Actuaries Summit 2025",
          title: "Speaker",
          description:
            "Presented at Actuaries Summit 2025, sharing a practical ReAct agent for deep research and how agentic workflows can plan, use tools and synthesise complex findings.",
        },
      ],
    },
    {
      company: "Brick AI",
      stats: [
        {
          value: "50+",
          label: "Customer Conversations",
          description:
            "Spoke directly with 50+ home buyers and property investors while shaping Brick AI — learning how people search, evaluate properties and make buying decisions.",
        },
        {
          value: "0 → 1",
          label: "Founder-Built",
          description:
            "Took Brick AI from customer research and an early idea to a working AI-native property product.",
        },
      ],
      stories: [
        {
          eyebrow: "Selected",
          title: "USYD Startup Program",
          description:
            "Brick AI was selected for a University of Sydney startup program — external validation for an idea I'd taken from research to product.",
        },
      ],
    },
  ],
};
