// Business category definitions with intelligence metrics
export interface BusinessCategory {
  id: string;
  name: string;
  subcategories: string[];
  difficulty: "low" | "medium" | "high";
  capitalIntensity: "low" | "medium" | "high";
  operationalComplexity: "low" | "medium" | "high";
  customerProfile: string;
  pricingBias: string;
  nicheFriendly: boolean;
  avgSetupCost: number;
  avgMonthlyOperatingCost: number;
  demandMultiplier: number; // Affects base demand scores
}

export const businessCategories: BusinessCategory[] = [
  {
    id: "food-beverage",
    name: "Food & Beverage",
    subcategories: [
      "Restaurant",
      "Café",
      "Cloud Kitchen",
      "Food Truck",
      "Bakery",
      "Sweet Shop",
      "Juice Bar",
      "Quick Service Restaurant",
      "Fine Dining",
      "Catering Service"
    ],
    difficulty: "medium",
    capitalIntensity: "medium",
    operationalComplexity: "high",
    customerProfile: "Mass market, high frequency",
    pricingBias: "competitive",
    nicheFriendly: true,
    avgSetupCost: 500000,
    avgMonthlyOperatingCost: 150000,
    demandMultiplier: 1.3
  },
  {
    id: "retail",
    name: "Retail & E-commerce",
    subcategories: [
      "Grocery Store",
      "Pharmacy",
      "Clothing Store",
      "Electronics Shop",
      "Bookstore",
      "Gift Shop",
      "Department Store",
      "Convenience Store",
      "Specialty Store",
      "Online Marketplace"
    ],
    difficulty: "medium",
    capitalIntensity: "high",
    operationalComplexity: "medium",
    customerProfile: "Mass market, varying frequency",
    pricingBias: "value-based",
    nicheFriendly: true,
    avgSetupCost: 800000,
    avgMonthlyOperatingCost: 200000,
    demandMultiplier: 1.2
  },
  {
    id: "health-fitness",
    name: "Health & Fitness",
    subcategories: [
      "Gym",
      "Yoga Studio",
      "Spa",
      "Salon",
      "Clinic",
      "Diagnostic Center",
      "Physiotherapy Center",
      "Nutrition Center",
      "Wellness Center",
      "Sports Academy"
    ],
    difficulty: "medium",
    capitalIntensity: "medium",
    operationalComplexity: "medium",
    customerProfile: "Middle to upper class, recurring",
    pricingBias: "premium",
    nicheFriendly: true,
    avgSetupCost: 600000,
    avgMonthlyOperatingCost: 120000,
    demandMultiplier: 1.1
  },
  {
    id: "education",
    name: "Education & Training",
    subcategories: [
      "Tutoring Center",
      "Preschool",
      "Skill Development Center",
      "Computer Training",
      "Language School",
      "Dance Academy",
      "Music School",
      "Competitive Exam Coaching",
      "Professional Training",
      "Online Education Platform"
    ],
    difficulty: "low",
    capitalIntensity: "low",
    operationalComplexity: "low",
    customerProfile: "Families, students, professionals",
    pricingBias: "premium",
    nicheFriendly: true,
    avgSetupCost: 300000,
    avgMonthlyOperatingCost: 80000,
    demandMultiplier: 1.4
  },
  {
    id: "professional-services",
    name: "Professional Services",
    subcategories: [
      "Accounting Firm",
      "Legal Services",
      "Consulting",
      "Real Estate Agency",
      "Insurance Agency",
      "Digital Marketing Agency",
      "Event Management",
      "Travel Agency",
      "Recruitment Firm",
      "Business Advisory"
    ],
    difficulty: "medium",
    capitalIntensity: "low",
    operationalComplexity: "medium",
    customerProfile: "B2B and affluent B2C",
    pricingBias: "premium",
    nicheFriendly: true,
    avgSetupCost: 200000,
    avgMonthlyOperatingCost: 100000,
    demandMultiplier: 0.9
  },
  {
    id: "automotive",
    name: "Automotive",
    subcategories: [
      "Car Wash",
      "Auto Repair",
      "Bike Service Center",
      "Car Accessories",
      "Auto Detailing",
      "Tire Shop",
      "Auto Parts Store",
      "Vehicle Inspection",
      "Bike Rental",
      "Car Rental"
    ],
    difficulty: "medium",
    capitalIntensity: "medium",
    operationalComplexity: "high",
    customerProfile: "Vehicle owners, recurring",
    pricingBias: "competitive",
    nicheFriendly: false,
    avgSetupCost: 700000,
    avgMonthlyOperatingCost: 180000,
    demandMultiplier: 1.0
  },
  {
    id: "technology",
    name: "Technology & IT",
    subcategories: [
      "Software Development",
      "Web Development",
      "Mobile App Development",
      "IT Support Services",
      "Cloud Solutions",
      "Cybersecurity Services",
      "Data Analytics",
      "AI/ML Solutions",
      "IoT Solutions",
      "Tech Startup"
    ],
    difficulty: "high",
    capitalIntensity: "low",
    operationalComplexity: "high",
    customerProfile: "B2B, tech-savvy consumers",
    pricingBias: "premium",
    nicheFriendly: true,
    avgSetupCost: 400000,
    avgMonthlyOperatingCost: 150000,
    demandMultiplier: 1.5
  },
  {
    id: "home-services",
    name: "Home Services",
    subcategories: [
      "Plumbing",
      "Electrical",
      "Cleaning Service",
      "Pest Control",
      "Home Repair",
      "Interior Design",
      "Painting",
      "Carpentry",
      "Appliance Repair",
      "Landscaping"
    ],
    difficulty: "low",
    capitalIntensity: "low",
    operationalComplexity: "low",
    customerProfile: "Homeowners, recurring needs",
    pricingBias: "competitive",
    nicheFriendly: false,
    avgSetupCost: 150000,
    avgMonthlyOperatingCost: 50000,
    demandMultiplier: 1.2
  },
  {
    id: "entertainment",
    name: "Entertainment & Recreation",
    subcategories: [
      "Gaming Cafe",
      "Movie Theater",
      "Event Venue",
      "Amusement Park",
      "Photography Studio",
      "Party Planning",
      "Adventure Sports",
      "Kids Play Area",
      "Bowling Alley",
      "Karaoke Bar"
    ],
    difficulty: "high",
    capitalIntensity: "high",
    operationalComplexity: "high",
    customerProfile: "Mass market, leisure spending",
    pricingBias: "premium",
    nicheFriendly: true,
    avgSetupCost: 1500000,
    avgMonthlyOperatingCost: 300000,
    demandMultiplier: 0.8
  },
  {
    id: "hospitality",
    name: "Hospitality & Tourism",
    subcategories: [
      "Hotel",
      "Guest House",
      "Hostel",
      "Resort",
      "Bed & Breakfast",
      "Tour Operator",
      "Tourist Guide Service",
      "Adventure Tourism",
      "Eco-Tourism",
      "Heritage Tourism"
    ],
    difficulty: "high",
    capitalIntensity: "high",
    operationalComplexity: "high",
    customerProfile: "Tourists, travelers, vacationers",
    pricingBias: "seasonal-premium",
    nicheFriendly: true,
    avgSetupCost: 2000000,
    avgMonthlyOperatingCost: 400000,
    demandMultiplier: 0.7
  }
];

export const getCategoryById = (id: string): BusinessCategory | undefined => {
  return businessCategories.find(cat => cat.id === id);
};

export const getAllCategories = (): BusinessCategory[] => {
  return businessCategories;
};

export const getSubcategoriesByCategoryId = (categoryId: string): string[] => {
  const category = getCategoryById(categoryId);
  return category ? category.subcategories : [];
};
