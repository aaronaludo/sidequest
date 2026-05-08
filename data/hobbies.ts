export type HobbyCategory = "creative" | "technical" | "fitness" | "food" | "lifestyle";

export type Hobby = {
  id: string;
  name: string;
  category: HobbyCategory;
  description: string;
};

export const hobbies: Hobby[] = [
  { id: "photography", name: "Photography", category: "creative", description: "Capturing portraits, products, events, and visual stories." },
  { id: "writing", name: "Writing", category: "creative", description: "Turning ideas into essays, scripts, newsletters, or guides." },
  { id: "design", name: "Design", category: "creative", description: "Creating visuals, brands, layouts, and polished experiences." },
  { id: "coding", name: "Coding", category: "technical", description: "Building tools, automations, websites, and digital products." },
  { id: "gaming", name: "Gaming", category: "technical", description: "Strategy, streaming, communities, mods, and interactive content." },
  { id: "ai-tools", name: "AI Tools", category: "technical", description: "Exploring prompts, workflows, automations, and productivity systems." },
  { id: "fitness", name: "Fitness", category: "fitness", description: "Training, coaching, habit-building, and movement routines." },
  { id: "running", name: "Running", category: "fitness", description: "Road runs, race prep, gear, recovery, and local communities." },
  { id: "cooking", name: "Cooking", category: "food", description: "Recipes, meal prep, private dining, and kitchen experiments." },
  { id: "coffee", name: "Coffee", category: "food", description: "Brewing, tasting, equipment, cafés, and home rituals." },
  { id: "gardening", name: "Gardening", category: "lifestyle", description: "Plants, small-space growing, sustainability, and outdoor calm." },
  { id: "travel", name: "Travel Planning", category: "lifestyle", description: "Itineraries, local finds, budgets, and memorable experiences." },
];
