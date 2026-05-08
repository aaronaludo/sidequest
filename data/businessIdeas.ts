import type { HobbyCategory } from "./hobbies";

export type Difficulty = "Easy" | "Medium" | "Hard";
export type StartupCost = "Low" | "Medium" | "High";
export type BusinessModel = "Service" | "Digital Product" | "Content" | "Community" | "Physical Product";

export type BusinessIdea = {
  id: string;
  hobbyIds: string[];
  categories: HobbyCategory[];
  title: string;
  summary: string;
  targetCustomer: string;
  monetization: string;
  businessModel: BusinessModel;
  difficulty: Difficulty;
  startupCost: StartupCost;
};

export const businessIdeas: BusinessIdea[] = [
  {
    id: "product-photo-sprint",
    hobbyIds: ["photography", "design"],
    categories: ["creative"],
    title: "Product Photo Sprint",
    summary: "A fixed-price shoot package for small brands that need premium visuals fast.",
    targetCustomer: "Shopify sellers, makers, cafés, and local boutiques.",
    monetization: "Charge per sprint with add-ons for retouching and social crops.",
    businessModel: "Service",
    difficulty: "Medium",
    startupCost: "Medium",
  },
  {
    id: "creator-template-shop",
    hobbyIds: ["design", "writing", "ai-tools"],
    categories: ["creative", "technical"],
    title: "Creator Template Shop",
    summary: "Sell polished Notion, Canva, or prompt templates for creators and solo founders.",
    targetCustomer: "Content creators, freelancers, and early-stage founders.",
    monetization: "One-time digital downloads and bundled template packs.",
    businessModel: "Digital Product",
    difficulty: "Easy",
    startupCost: "Low",
  },
  {
    id: "niche-newsletter-studio",
    hobbyIds: ["writing", "ai-tools"],
    categories: ["creative", "technical", "lifestyle"],
    title: "Niche Newsletter Studio",
    summary: "Curate useful weekly insights around one hobby, then monetize once trust builds.",
    targetCustomer: "People who want a shortcut to the best ideas, gear, and tactics.",
    monetization: "Sponsorships, affiliate links, paid archives, and premium reports.",
    businessModel: "Content",
    difficulty: "Medium",
    startupCost: "Low",
  },
  {
    id: "micro-saas-automation",
    hobbyIds: ["coding", "ai-tools"],
    categories: ["technical"],
    title: "Micro-SaaS Automation",
    summary: "Build one tiny workflow tool that saves a specific audience hours every week.",
    targetCustomer: "Freelancers, agencies, operators, or creators with repetitive tasks.",
    monetization: "Monthly subscription with a free trial.",
    businessModel: "Digital Product",
    difficulty: "Hard",
    startupCost: "Low",
  },
  {
    id: "gaming-community-events",
    hobbyIds: ["gaming"],
    categories: ["technical", "lifestyle"],
    title: "Gaming Community Events",
    summary: "Run themed online tournaments, coaching nights, or challenge ladders for a niche game.",
    targetCustomer: "Casual competitive players and small streamer communities.",
    monetization: "Entry fees, memberships, sponsorships, and merch drops.",
    businessModel: "Community",
    difficulty: "Medium",
    startupCost: "Low",
  },
  {
    id: "personal-fitness-reset",
    hobbyIds: ["fitness", "running"],
    categories: ["fitness"],
    title: "30-Day Fitness Reset",
    summary: "A lightweight accountability program with simple workouts, habits, and check-ins.",
    targetCustomer: "Busy beginners who want structure without intimidating gym culture.",
    monetization: "Cohort fee, monthly accountability membership, or 1:1 upsells.",
    businessModel: "Service",
    difficulty: "Medium",
    startupCost: "Low",
  },
  {
    id: "running-route-guides",
    hobbyIds: ["running", "travel"],
    categories: ["fitness", "lifestyle"],
    title: "Local Running Route Guides",
    summary: "Curated route packs with maps, difficulty notes, cafés, parking, and safety tips.",
    targetCustomer: "Traveling runners, new residents, and local running clubs.",
    monetization: "Paid route packs, club partnerships, and affiliate gear links.",
    businessModel: "Digital Product",
    difficulty: "Easy",
    startupCost: "Low",
  },
  {
    id: "meal-prep-playbooks",
    hobbyIds: ["cooking", "fitness"],
    categories: ["food", "fitness"],
    title: "Meal Prep Playbooks",
    summary: "Sell practical weekly meal plans for specific goals, budgets, or dietary preferences.",
    targetCustomer: "Busy professionals, students, and fitness beginners.",
    monetization: "Digital playbooks, monthly meal plan subscription, and grocery affiliates.",
    businessModel: "Digital Product",
    difficulty: "Easy",
    startupCost: "Low",
  },
  {
    id: "home-coffee-club",
    hobbyIds: ["coffee"],
    categories: ["food", "lifestyle"],
    title: "Home Coffee Club",
    summary: "Teach people to make better coffee at home through kits, guides, and tasting sessions.",
    targetCustomer: "Remote workers and coffee lovers upgrading from instant or pod machines.",
    monetization: "Workshops, affiliate equipment, bean subscriptions, and tasting boxes.",
    businessModel: "Community",
    difficulty: "Medium",
    startupCost: "Medium",
  },
  {
    id: "small-space-garden-kits",
    hobbyIds: ["gardening"],
    categories: ["lifestyle"],
    title: "Small-Space Garden Kits",
    summary: "Bundle beginner-friendly balcony or desk garden kits with simple care guides.",
    targetCustomer: "Apartment dwellers, remote workers, and gift buyers.",
    monetization: "Physical kits, refills, and seasonal bundles.",
    businessModel: "Physical Product",
    difficulty: "Hard",
    startupCost: "High",
  },
  {
    id: "weekend-itinerary-service",
    hobbyIds: ["travel", "photography", "coffee"],
    categories: ["lifestyle", "creative", "food"],
    title: "Weekend Itinerary Service",
    summary: "Create personalized 48-hour plans built around taste, budget, photos, and food stops.",
    targetCustomer: "Couples, solo travelers, and friend groups planning quick trips.",
    monetization: "Fixed-fee itinerary packages and affiliate bookings.",
    businessModel: "Service",
    difficulty: "Medium",
    startupCost: "Low",
  },
  {
    id: "ai-workflow-audits",
    hobbyIds: ["ai-tools", "coding"],
    categories: ["technical"],
    title: "AI Workflow Audits",
    summary: "Review a solo founder's daily workflow and install practical AI automations.",
    targetCustomer: "Founders, consultants, creators, and small teams.",
    monetization: "Audit fee, setup package, and monthly optimization retainer.",
    businessModel: "Service",
    difficulty: "Medium",
    startupCost: "Low",
  },
];
