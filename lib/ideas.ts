import type { BusinessIdea, BusinessModel, Difficulty, StartupCost } from "@/data/businessIdeas";
import { businessIdeas } from "@/data/businessIdeas";
import type { Hobby } from "@/data/hobbies";

export type IdeaFilters = {
  difficulty?: Difficulty | "All";
  startupCost?: StartupCost | "All";
  businessModel?: BusinessModel | "All";
};

export function getIdeasForHobby(hobby: Hobby | undefined, filters: IdeaFilters = {}): BusinessIdea[] {
  if (!hobby) return [];

  return businessIdeas.filter((idea) => {
    const matchesHobby = idea.hobbyIds.includes(hobby.id) || idea.categories.includes(hobby.category);
    const matchesDifficulty = !filters.difficulty || filters.difficulty === "All" || idea.difficulty === filters.difficulty;
    const matchesCost = !filters.startupCost || filters.startupCost === "All" || idea.startupCost === filters.startupCost;
    const matchesModel = !filters.businessModel || filters.businessModel === "All" || idea.businessModel === filters.businessModel;

    return matchesHobby && matchesDifficulty && matchesCost && matchesModel;
  });
}

export const difficulties = ["All", "Easy", "Medium", "Hard"] as const;
export const startupCosts = ["All", "Low", "Medium", "High"] as const;
export const businessModels = ["All", "Service", "Digital Product", "Content", "Community", "Physical Product"] as const;
