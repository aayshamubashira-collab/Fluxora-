/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Service, Project, Testimonial, ProcessStep, FeatureReason } from "./types";

export const SERVICES_DATA: Service[] = [
  {
    id: "seo",
    title: "SEO",
    description: "Improve search rankings and increase organic traffic through advanced SEO strategies, keyword optimization, technical SEO, and content marketing.",
    iconName: "Search",
    features: [
      "Technical SEO Auditing",
      "In-Depth Keyword Research",
      "Strategic Content Optimization",
      "High-Authority Backlink Acquisition"
    ]
  },
  {
    id: "dropshipping",
    title: "Dropshipping Solutions",
    description: "Build and scale profitable e-commerce businesses with complete dropshipping management, store optimization, and product sourcing strategies.",
    iconName: "ShoppingBag",
    features: [
      "Custom Store Setup",
      "Trending Product Sourcing",
      "Conversion Rate Optimization (CRO)",
      "Automated Order Fulfillment Setup"
    ]
  },
  {
    id: "video-editing",
    title: "Video Editing",
    description: "Professional video editing designed to capture attention on social media, advertisements, YouTube content, and high-impact brand promotions.",
    iconName: "Video",
    features: [
      "Short-Form Video (Reels/TikToks)",
      "High-Conversion Promo Ads",
      "Color Grading & Sound Design",
      "Dynamic Motion Graphics"
    ]
  },
  {
    id: "graphic-design",
    title: "Graphic Design",
    description: "Creative logos, striking social media posts, comprehensive branding guidelines, advertisements, and stunning visual content that defines your brand.",
    iconName: "Palette",
    features: [
      "Strategic Logo & Brand Identity",
      "Engaging Social Post Asset Packs",
      "Commercial Banner Ads",
      "Packaging & Collateral Work"
    ]
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    description: "Full-scale social media marketing, high-performance paid ads, expert lead generation campaigns, content marketing, and performance analysis.",
    iconName: "Megaphone",
    features: [
      "Meta & Google Ads Strategy",
      "High-Quality Lead Generation",
      "Data-Driven Campaign Scaling",
      "Brand Awareness Campaigns"
    ]
  }
];

export const FEATURES_DATA: FeatureReason[] = [
  {
    id: "expert-team",
    title: "Expert Digital Marketing Team",
    description: "Our diverse group of marketing strategists, conversion copywriters, video editors, and designers collaborate to deliver exceptional results.",
    iconName: "Users"
  },
  {
    id: "data-driven",
    title: "Data-Driven Strategies",
    description: "We don't guess — we analyze. Every recommendation, layout change, and campaign budget is guided by rigid market data and user telemetry.",
    iconName: "BarChart3"
  },
  {
    id: "custom-solutions",
    title: "Customized Business Solutions",
    description: "No templated formulas. We construct customized funnels tailored specifically to your niche, audience profile, and growth targets.",
    iconName: "Cpu"
  },
  {
    id: "creative-content",
    title: "Creative Content Production",
    description: "From scroll-stopping reels to premium graphic assets, our content builds high dwell-time and drives organic viral potential.",
    iconName: "Sparkles"
  },
  {
    id: "affordable-scalable",
    title: "Affordable & Scalable Services",
    description: "Start custom and upscale as you build revenue. Our flexible tier models fit expanding companies of all development sizes.",
    iconName: "TrendingUp"
  },
  {
    id: "client-support",
    title: "Dedicated Client Support",
    description: "Weekly syncs, clear transparent reports, and an online client hub keep you continually updated and confident in progress.",
    iconName: "Clock"
  },
  {
    id: "result-oriented",
    title: "Result-Oriented Approach",
    description: "We measure success in ROI, sales uplifts, and clean cost-per-lead drops. Our focus remains entirely on your business bottom line.",
    iconName: "Target"
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: 1,
    title: "Strategy & Planning",
    description: "We dive deep into your market positioning, competitor funnels, and customer persona profiles to design a granular project roadmap.",
    details: ["Audit existing assets", "Define clear KPIs", "Identify high-yield opportunities"]
  },
  {
    step: 2,
    title: "Design & Development",
    description: "Our creative team builds high-converting visual storefronts, compelling copy, structured SEO landing pages, and creative video hooks.",
    details: ["Wireframing & UI layout", "High-retention video assembly", "Graphic concept feedback"]
  },
  {
    step: 3,
    title: "Marketing & Optimization",
    description: "We launch custom campaigns, index fresh web content, trigger ads, and continuously run split testing or keyword optimizations.",
    details: ["A/B landing page tests", "Bidding optimizations", "Daily analytics monitoring"]
  },
  {
    step: 4,
    title: "Growth & Scaling",
    description: "With stable conversions achieved, we scale budgets, expand targeting coordinates, tap companion channels, and boost overall brand volume.",
    details: ["Establish remarketing paths", "Incorporate fresh service products", "Quarterly growth forecasts"]
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: "proj-1",
    title: "Apex E-Commerce Storefront",
    description: "A comprehensive Shopify rebuild with high conversion architecture, automated supplier pipelines, and fluid speed optimized design.",
    category: "Website Design",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    metrics: "+45% Conversion Speed",
    tags: ["UI/UX", "Vite", "Commerce Flow", "Conversion Focus"]
  },
  {
    id: "proj-2",
    title: "SaaS SEO Hyper-Growth",
    description: "Engineered high-intent keyword strategies, structured content siloing, and fixed indexing bugs to skyrocket visibility from zero.",
    category: "SEO Campaign",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    metrics: "+210% Organic Traffic",
    tags: ["Keywords", "Technical SEO", "Sitemap Design", "Organic Growth"]
  },
  {
    id: "proj-3",
    title: "Omni-Channel Lead Engine",
    description: "A dual-funnel Meta and Google Ads lead capture framework delivering ready-to-close leads to an expanding real-estate enterprise.",
    category: "Social Media Marketing",
    imageUrl: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80",
    metrics: "12,400+ Qualified Leads",
    tags: ["Meta Ads", "A/B Testing", "Lead Forms", "Retargeting Pipelines"]
  },
  {
    id: "proj-4",
    title: "Cinematic Product Reels Suite",
    description: "High-retention ads and promotional hooks that went viral on Instagram Reels and TikTok, securing dramatic drops in ad costs.",
    category: "Video Production",
    imageUrl: "https://images.unsplash.com/photo-1622737133809-d95047b9e673?auto=format&fit=crop&w=800&q=80",
    metrics: "1.8 Million Organic Views",
    tags: ["Editing Focus", "Engaging Motion", "Social Hooking", "Audio Syncing"]
  },
  {
    id: "proj-5",
    title: "Vanguard Corporate Rebrand",
    description: "Reset a legacy logistics company's corporate identity with dynamic visual suites, premium vector guidelines, and professional assets.",
    category: "Branding Project",
    imageUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
    metrics: "100% Cohesive Rebranding",
    tags: ["Brand Guide", "Vector Assets", "Typography System", "Style Sheets"]
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: "test-1",
    name: "Alex Sterling",
    role: "Founder & CEO",
    company: "Apex Tech Brands",
    quote: "Fluxora has redefined what it means to work with a digital marketing agency. Their custom dropshipping solution and modern design patterns boosted our sales by nearly 50% in the first quarter of going live. They are pure conversion experts.",
    rating: 5,
    avatarUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150&q=80"
  },
  {
    id: "test-2",
    name: "Neha Nair",
    role: "Marketing Director",
    company: "Zeta Med Group",
    quote: "The SEO campaign coordinated by Fluxora was flawless. For two years, we struggled to rank locally for high-intent keywords. Fluxora systematically resolved our site's technical issues and rebuilt our content. Our traffic matches our record ambitions.",
    rating: 5,
    avatarUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&h=150&q=80"
  },
  {
    id: "test-3",
    name: "Marcus Vance",
    role: "Digital Executive",
    company: "Nova Apparel Store",
    quote: "Their video editing skills are premier. Our ad CTR doubled after we integrated their cinematic, fast-paced Instagram reels format into our campaigns. Highly cooperative, transparent, and ultra-professional.",
    rating: 5,
    avatarUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=150&h=150&q=80"
  }
];
