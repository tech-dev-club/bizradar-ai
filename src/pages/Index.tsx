import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search, TrendingUp, MapPin, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { searchCities } from "@/lib/indianCities";
import { getAllCategories } from "@/lib/businessCategories";

const Index = () => {
  const navigate = useNavigate();
  const [citySearch, setCitySearch] = useState("");
  const [cityResults, setCityResults] = useState<any[]>([]);
  const [selectedCity, setSelectedCity] = useState<any>(null);
  const [selectedCategory, setSelectedCategory] = useState("");

  const categories = getAllCategories();

  const handleCitySearch = (query: string) => {
    setCitySearch(query);
    if (query.length > 1) {
      const results = searchCities(query);
      setCityResults(results.slice(0, 8));
    } else {
      setCityResults([]);
    }
  };

  const handleCitySelect = (city: any) => {
    setSelectedCity(city);
    setCitySearch(city.name);
    setCityResults([]);
  };

  const handleAnalyze = () => {
    if (selectedCity && selectedCategory) {
      navigate(`/opportunities?city=${selectedCity.id}&category=${selectedCategory}`);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-secondary/20" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjAzIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40" />
        
        <div className="relative container mx-auto px-4 py-24">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center gap-2 bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border border-border">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm text-muted-foreground">AI-Powered Business Intelligence</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              Discover Your Perfect
              <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Business Opportunity
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              BizRadar analyzes 4,000+ Indian cities to tell you WHAT to start, WHERE to start it, and WHY it will succeed.
            </p>

            {/* Search Interface */}
            <Card className="p-8 space-y-6 bg-card/50 backdrop-blur-sm border-border shadow-card">
              <div className="grid md:grid-cols-2 gap-4">
                {/* City Search */}
                <div className="space-y-2">
                  <label className="text-sm font-medium flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-primary" />
                    Select City
                  </label>
                  <div className="relative">
                    <Input
                      placeholder="Search 4,000+ Indian cities..."
                      value={citySearch}
                      onChange={(e) => handleCitySearch(e.target.value)}
                      className="bg-background/50"
                    />
                    {cityResults.length > 0 && (
                      <Card className="absolute z-10 w-full mt-2 max-h-64 overflow-y-auto">
                        {cityResults.map((city) => (
                          <button
                            key={city.id}
                            onClick={() => handleCitySelect(city)}
                            className="w-full px-4 py-3 text-left hover:bg-muted transition-colors flex justify-between items-center"
                          >
                            <div>
                              <div className="font-medium">{city.name}</div>
                              <div className="text-sm text-muted-foreground">{city.state}</div>
                            </div>
                            <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                              Tier {city.tier}
                            </span>
                          </button>
                        ))}
                      </Card>
                    )}
                  </div>
                </div>

                {/* Category Selection */}
                <div className="space-y-2">
                  <label className="text-sm font-medium flex items-center gap-2">
                    <TrendingUp className="h-4 w-4 text-primary" />
                    Business Category
                  </label>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full h-10 px-3 rounded-md border border-input bg-background/50 text-foreground"
                  >
                    <option value="">Choose category...</option>
                    {categories.map((cat) => (
                      <option key={cat.id} value={cat.id}>
                        {cat.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <Button
                onClick={handleAnalyze}
                disabled={!selectedCity || !selectedCategory}
                size="lg"
                className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity"
              >
                <Search className="mr-2 h-5 w-5" />
                Analyze Opportunity
              </Button>
            </Card>

            {/* Features */}
            <div className="grid md:grid-cols-3 gap-6 pt-12">
              <Card className="p-6 bg-card/30 backdrop-blur-sm border-border hover:bg-card/50 transition-colors">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">4,000+ Cities</h3>
                <p className="text-sm text-muted-foreground">
                  Complete coverage of Indian cities with real-time intelligence
                </p>
              </Card>

              <Card className="p-6 bg-card/30 backdrop-blur-sm border-border hover:bg-card/50 transition-colors">
                <div className="h-12 w-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="font-semibold mb-2">AI Forecasting</h3>
                <p className="text-sm text-muted-foreground">
                  6 & 12 month demand predictions with trend analysis
                </p>
              </Card>

              <Card className="p-6 bg-card/30 backdrop-blur-sm border-border hover:bg-card/50 transition-colors">
                <div className="h-12 w-12 rounded-lg bg-info/10 flex items-center justify-center mb-4">
                  <Sparkles className="h-6 w-6 text-info" />
                </div>
                <h3 className="font-semibold mb-2">Full Reports</h3>
                <p className="text-sm text-muted-foreground">
                  SWOT, financials, competition analysis & recommendations
                </p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
