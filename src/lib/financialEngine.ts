import { BusinessCategory } from "./businessCategories";
import { City } from "./indianCities";

export interface FinancialProjection {
  setupCosts: {
    total: number;
    breakdown: {
      item: string;
      amount: number;
    }[];
  };
  monthlyOperating: {
    total: number;
    breakdown: {
      item: string;
      amount: number;
    }[];
  };
  revenueProjection: {
    conservative: number;
    realistic: number;
    optimistic: number;
  };
  profitability: {
    breakEvenMonths: number;
    yearOneProfit: number;
    roi: number;
  };
  funding: {
    recommended: number;
    sources: string[];
  };
}

export const generateFinancialProjection = (
  city: City,
  category: BusinessCategory
): FinancialProjection => {
  // Setup costs
  const baseCost = category.avgSetupCost;
  const tierMultiplier = city.tier === 1 ? 1.5 : city.tier === 2 ? 1.2 : city.tier === 3 ? 1.0 : 0.8;
  const totalSetupCost = Math.round(baseCost * tierMultiplier);

  const setupBreakdown = [
    { item: "Rent Deposit & Advance", amount: Math.round(totalSetupCost * 0.15) },
    { item: "Interior & Renovation", amount: Math.round(totalSetupCost * 0.25) },
    { item: "Equipment & Fixtures", amount: Math.round(totalSetupCost * 0.30) },
    { item: "Initial Inventory/Stock", amount: Math.round(totalSetupCost * 0.15) },
    { item: "Licenses & Permits", amount: Math.round(totalSetupCost * 0.05) },
    { item: "Marketing & Branding", amount: Math.round(totalSetupCost * 0.07) },
    { item: "Contingency", amount: Math.round(totalSetupCost * 0.03) }
  ];

  // Monthly operating costs
  const baseMonthly = category.avgMonthlyOperatingCost;
  const monthlyMultiplier = city.tier === 1 ? 1.4 : city.tier === 2 ? 1.15 : city.tier === 3 ? 1.0 : 0.85;
  const totalMonthly = Math.round(baseMonthly * monthlyMultiplier);

  const monthlyBreakdown = [
    { item: "Rent", amount: Math.round(totalMonthly * 0.35) },
    { item: "Staff Salaries", amount: Math.round(totalMonthly * 0.30) },
    { item: "Utilities & Maintenance", amount: Math.round(totalMonthly * 0.10) },
    { item: "Inventory/Supplies", amount: Math.round(totalMonthly * 0.15) },
    { item: "Marketing", amount: Math.round(totalMonthly * 0.05) },
    { item: "Miscellaneous", amount: Math.round(totalMonthly * 0.05) }
  ];

  // Revenue projection
  const baseRevenue = totalMonthly * 2.5; // Revenue should be 2.5x operating cost for sustainability
  const demandMultiplier = category.demandMultiplier;
  const conservativeRevenue = Math.round(baseRevenue * demandMultiplier * 0.7);
  const realisticRevenue = Math.round(baseRevenue * demandMultiplier);
  const optimisticRevenue = Math.round(baseRevenue * demandMultiplier * 1.4);

  // Profitability
  const monthlyProfit = realisticRevenue - totalMonthly;
  const breakEvenMonths = monthlyProfit > 0 ? Math.ceil(totalSetupCost / monthlyProfit) : 24;
  const yearOneProfit = (monthlyProfit * 12) - totalSetupCost;
  const roi = totalSetupCost > 0 ? (yearOneProfit / totalSetupCost) * 100 : 0;

  // Funding recommendation
  const recommendedFunding = totalSetupCost + (totalMonthly * 3); // Setup + 3 months buffer
  const fundingSources = [];
  
  if (recommendedFunding < 500000) {
    fundingSources.push("Personal Savings", "Family & Friends", "Microfinance");
  } else if (recommendedFunding < 2000000) {
    fundingSources.push("Personal Savings + Bank Loan", "MSME Loans", "Startup India Schemes");
  } else {
    fundingSources.push("Bank Loans", "Angel Investors", "Venture Capital", "Government Schemes");
  }

  return {
    setupCosts: {
      total: totalSetupCost,
      breakdown: setupBreakdown
    },
    monthlyOperating: {
      total: totalMonthly,
      breakdown: monthlyBreakdown
    },
    revenueProjection: {
      conservative: conservativeRevenue,
      realistic: realisticRevenue,
      optimistic: optimisticRevenue
    },
    profitability: {
      breakEvenMonths,
      yearOneProfit,
      roi: Math.round(roi * 10) / 10
    },
    funding: {
      recommended: recommendedFunding,
      sources: fundingSources
    }
  };
};
