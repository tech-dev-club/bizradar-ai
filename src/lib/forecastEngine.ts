import { City } from "./indianCities";
import { BusinessCategory } from "./businessCategories";

export interface ForecastResult {
  sixMonth: {
    demand: number;
    competition: number;
    growth: number;
  };
  twelveMonth: {
    demand: number;
    competition: number;
    growth: number;
  };
  trendData: {
    month: string;
    demand: number;
    competition: number;
  }[];
}

export const generateForecast = (
  city: City,
  category: BusinessCategory,
  currentDemand: number,
  currentCompetition: number
): ForecastResult => {
  // Growth factors
  const tierGrowthFactor = city.tier === 1 ? 1.15 : city.tier === 2 ? 1.12 : city.tier === 3 ? 1.08 : 1.05;
  const categoryGrowthFactor = category.demandMultiplier;
  const populationGrowthFactor = 1.02; // 2% annual growth

  // Base growth rate
  const baseGrowthRate = (tierGrowthFactor * categoryGrowthFactor * populationGrowthFactor - 1) * 100;

  // Monthly trend data
  const trendData = [];
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  
  for (let i = 0; i < 12; i++) {
    const monthlyGrowth = (baseGrowthRate / 12) * (i + 1);
    const seasonalFactor = 1 + Math.sin((i / 12) * Math.PI * 2) * 0.1; // Seasonal variation
    
    trendData.push({
      month: months[i],
      demand: Math.round(currentDemand * (1 + monthlyGrowth / 100) * seasonalFactor),
      competition: Math.round(currentCompetition * (1 + (monthlyGrowth / 100) * 0.5)) // Competition grows slower
    });
  }

  // 6-month forecast
  const sixMonthGrowth = baseGrowthRate / 2;
  const sixMonthDemand = Math.round(currentDemand * (1 + sixMonthGrowth / 100));
  const sixMonthCompetition = Math.round(currentCompetition * (1 + (sixMonthGrowth / 100) * 0.5));

  // 12-month forecast
  const twelveMonthGrowth = baseGrowthRate;
  const twelveMonthDemand = Math.round(currentDemand * (1 + twelveMonthGrowth / 100));
  const twelveMonthCompetition = Math.round(currentCompetition * (1 + (twelveMonthGrowth / 100) * 0.5));

  return {
    sixMonth: {
      demand: sixMonthDemand,
      competition: sixMonthCompetition,
      growth: Math.round(sixMonthGrowth * 10) / 10
    },
    twelveMonth: {
      demand: twelveMonthDemand,
      competition: twelveMonthCompetition,
      growth: Math.round(twelveMonthGrowth * 10) / 10
    },
    trendData
  };
};
