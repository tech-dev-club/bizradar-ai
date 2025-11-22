import { City, calculateDistance, indianCities } from "./indianCities";
import { BusinessCategory } from "./businessCategories";

export interface Competitor {
  id: string;
  name: string;
  distance: number;
  category: string;
  rating: number;
  type: string;
}

export interface CompetitionAnalysis {
  totalCompetitors: number;
  nearbyCompetitors: number;
  densityScore: number;
  competitors: Competitor[];
  marketSaturation: "low" | "medium" | "high";
  competitiveAdvantage: string[];
  threats: string[];
}

export const scanCompetition = (
  city: City,
  category: BusinessCategory,
  radiusKm: number = 5
): CompetitionAnalysis => {
  // Generate mock competitors based on city population and category
  const baseCompetitorCount = Math.floor((city.population / 100000) * 3);
  const categoryMultiplier = category.demandMultiplier;
  const totalCompetitors = Math.floor(baseCompetitorCount * categoryMultiplier);

  // Generate competitor data
  const competitors: Competitor[] = [];
  const subcategories = category.subcategories;

  for (let i = 0; i < Math.min(totalCompetitors, 50); i++) {
    const randomDistance = Math.random() * radiusKm * 2;
    const randomSubcategory = subcategories[Math.floor(Math.random() * subcategories.length)];
    const randomRating = 3 + Math.random() * 2; // 3.0 to 5.0

    competitors.push({
      id: `comp-${i}`,
      name: `${randomSubcategory} ${i + 1}`,
      distance: Math.round(randomDistance * 10) / 10,
      category: randomSubcategory,
      rating: Math.round(randomRating * 10) / 10,
      type: category.name
    });
  }

  // Sort by distance
  competitors.sort((a, b) => a.distance - b.distance);

  // Calculate nearby competitors (within radius)
  const nearbyCompetitors = competitors.filter(c => c.distance <= radiusKm).length;

  // Calculate density score (0-100, higher = more saturated)
  const expectedDensity = (city.population / 50000) * categoryMultiplier;
  const densityScore = Math.min(100, (nearbyCompetitors / Math.max(1, expectedDensity)) * 50);

  // Determine market saturation
  let marketSaturation: "low" | "medium" | "high";
  if (densityScore < 30) marketSaturation = "low";
  else if (densityScore < 60) marketSaturation = "medium";
  else marketSaturation = "high";

  // Generate competitive advantages
  const competitiveAdvantage: string[] = [];
  if (densityScore < 40) {
    competitiveAdvantage.push("Low competition - first-mover advantage");
  }
  if (city.tier <= 2) {
    competitiveAdvantage.push("Growing urban market with increasing demand");
  }
  if (category.nicheFriendly) {
    competitiveAdvantage.push("Opportunity for niche differentiation");
  }
  if (category.capitalIntensity === "low") {
    competitiveAdvantage.push("Lower barriers to entry allow for quick setup");
  }

  // Generate threats
  const threats: string[] = [];
  if (densityScore > 60) {
    threats.push("High market saturation - need strong differentiation");
  }
  if (category.operationalComplexity === "high") {
    threats.push("Complex operations require experienced management");
  }
  if (competitors.some(c => c.rating >= 4.5)) {
    threats.push("Established high-rated competitors in the area");
  }
  if (category.capitalIntensity === "high") {
    threats.push("High initial investment increases financial risk");
  }

  return {
    totalCompetitors,
    nearbyCompetitors,
    densityScore: Math.round(densityScore * 10) / 10,
    competitors: competitors.slice(0, 20), // Return top 20
    marketSaturation,
    competitiveAdvantage,
    threats
  };
};

// Get competition in nearby cities
export const getNearbyMarketAnalysis = (city: City, radiusKm: number = 50): City[] => {
  return indianCities
    .filter(c => c.id !== city.id)
    .map(c => ({
      ...c,
      distance: calculateDistance(city.lat, city.lng, c.lat, c.lng)
    }))
    .filter(c => c.distance <= radiusKm)
    .sort((a, b) => a.distance - b.distance)
    .slice(0, 10);
};
