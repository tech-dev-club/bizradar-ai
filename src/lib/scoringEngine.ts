import { City } from "./indianCities";
import { BusinessCategory } from "./businessCategories";

export interface BizScoreResult {
  overall: number;
  demand: number;
  competition: number;
  demographics: number;
  forecast: number;
  categoryFit: number;
  breakdown: {
    population: number;
    tier: number;
    demandMultiplier: number;
    competitionPenalty: number;
    categoryEase: number;
    forecastBonus: number;
  };
}

export const calculateBizScore = (
  city: City,
  category: BusinessCategory,
  competitorCount: number,
  forecastGrowth: number
): BizScoreResult => {
  // Population score (0-25)
  const populationScore = Math.min(25, (city.population / 1000000) * 10);

  // Tier bonus (0-15)
  const tierBonus = city.tier === 1 ? 15 : city.tier === 2 ? 10 : city.tier === 3 ? 5 : 2;

  // Demand score based on category multiplier (0-20)
  const demandScore = Math.min(20, category.demandMultiplier * 15);

  // Competition penalty (0-20 deduction)
  const expectedCompetitors = (city.population / 100000) * 2;
  const competitionRatio = competitorCount / Math.max(1, expectedCompetitors);
  const competitionPenalty = Math.min(20, competitionRatio * 10);

  // Category ease bonus (0-10)
  const difficultyMap = { low: 10, medium: 6, high: 3 };
  const categoryEase = difficultyMap[category.difficulty];

  // Forecast growth bonus (0-10)
  const forecastBonus = Math.min(10, (forecastGrowth / 100) * 10);

  // Calculate component scores
  const demographicsScore = populationScore + tierBonus;
  const competitionScore = Math.max(0, 20 - competitionPenalty);
  const categoryFitScore = categoryEase + demandScore;
  const forecastScore = forecastBonus;

  // Overall score (0-100)
  const overallScore = Math.min(
    100,
    demographicsScore + demandScore + competitionScore + categoryEase + forecastBonus - competitionPenalty
  );

  return {
    overall: Math.round(overallScore * 10) / 10,
    demand: Math.round(demandScore * 10) / 10,
    competition: Math.round(competitionScore * 10) / 10,
    demographics: Math.round(demographicsScore * 10) / 10,
    forecast: Math.round(forecastScore * 10) / 10,
    categoryFit: Math.round(categoryFitScore * 10) / 10,
    breakdown: {
      population: Math.round(populationScore * 10) / 10,
      tier: tierBonus,
      demandMultiplier: Math.round(demandScore * 10) / 10,
      competitionPenalty: Math.round(competitionPenalty * 10) / 10,
      categoryEase,
      forecastBonus: Math.round(forecastBonus * 10) / 10
    }
  };
};

export const getScoreRating = (score: number): { label: string; color: string } => {
  if (score >= 80) return { label: "Excellent", color: "success" };
  if (score >= 65) return { label: "Good", color: "info" };
  if (score >= 50) return { label: "Moderate", color: "warning" };
  return { label: "Challenging", color: "destructive" };
};
