import { City } from "./indianCities";
import { BusinessCategory } from "./businessCategories";
import { CompetitionAnalysis } from "./competitionScanner";

export interface SWOTAnalysis {
  strengths: string[];
  weaknesses: string[];
  opportunities: string[];
  threats: string[];
}

export const generateSWOT = (
  city: City,
  category: BusinessCategory,
  competition: CompetitionAnalysis,
  bizScore: number
): SWOTAnalysis => {
  const strengths: string[] = [];
  const weaknesses: string[] = [];
  const opportunities: string[] = [];
  const threats: string[] = [];

  // STRENGTHS
  if (city.tier <= 2) {
    strengths.push(`Located in ${city.tier === 1 ? 'Tier 1' : 'Tier 2'} city with strong economic growth`);
  }
  if (city.population > 1000000) {
    strengths.push("Large customer base with high population density");
  }
  if (category.nicheFriendly) {
    strengths.push("High potential for niche differentiation and brand building");
  }
  if (competition.densityScore < 40) {
    strengths.push("Low competition allows for easier market entry");
  }
  if (category.difficulty === "low") {
    strengths.push("Simple operations with manageable complexity");
  }
  if (bizScore >= 70) {
    strengths.push("High BizScore indicates strong overall feasibility");
  }
  if (category.demandMultiplier > 1.2) {
    strengths.push("High market demand for this category");
  }

  // WEAKNESSES
  if (category.capitalIntensity === "high") {
    weaknesses.push("High initial capital requirement increases financial risk");
  }
  if (category.operationalComplexity === "high") {
    weaknesses.push("Complex operations require experienced staff and management");
  }
  if (city.tier >= 3) {
    weaknesses.push("Lower-tier city may have limited access to resources and talent");
  }
  if (competition.densityScore > 60) {
    weaknesses.push("High competition requires significant differentiation effort");
  }
  if (category.difficulty === "high") {
    weaknesses.push("High difficulty level demands expertise and experience");
  }
  if (bizScore < 50) {
    weaknesses.push("Moderate BizScore suggests several challenges ahead");
  }

  // OPPORTUNITIES
  if (city.tier === 2 || city.tier === 3) {
    opportunities.push("Emerging market with growth potential and rising purchasing power");
  }
  if (category.nicheFriendly) {
    opportunities.push("Opportunity to create unique positioning and loyal customer base");
  }
  if (competition.marketSaturation === "low") {
    opportunities.push("Untapped market with room for multiple players");
  }
  opportunities.push("Digital marketing and online presence can expand reach");
  opportunities.push("Government schemes and MSME support available for small businesses");
  if (category.demandMultiplier > 1.1) {
    opportunities.push("Growing demand trends indicate expanding market");
  }
  if (city.population > 500000) {
    opportunities.push("Large population base enables diverse customer segments");
  }

  // THREATS
  if (competition.densityScore > 50) {
    threats.push("Intense competition may lead to price wars and margin pressure");
  }
  if (category.capitalIntensity === "high") {
    threats.push("High setup costs create barriers if business doesn't scale");
  }
  threats.push("Economic downturns can impact consumer spending");
  threats.push("Changing regulations and compliance requirements");
  if (category.operationalComplexity === "high") {
    threats.push("Operational challenges can lead to service quality issues");
  }
  if (competition.competitors.some(c => c.rating >= 4.5)) {
    threats.push("Established competitors with strong brand loyalty");
  }
  threats.push("Digital disruption and evolving customer preferences");

  return {
    strengths,
    weaknesses,
    opportunities,
    threats
  };
};
