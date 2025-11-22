import { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { ArrowLeft, Download, TrendingUp, Users, Target, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { getCityByName } from "@/lib/indianCities";
import { getCategoryById } from "@/lib/businessCategories";
import { calculateBizScore, getScoreRating } from "@/lib/scoringEngine";
import { scanCompetition } from "@/lib/competitionScanner";
import { generateForecast } from "@/lib/forecastEngine";
import { generateFinancialProjection } from "@/lib/financialEngine";
import { generateSWOT } from "@/lib/swotEngine";

const Opportunities = () => {
  const [searchParams] = useSearchParams();
  const [analysis, setAnalysis] = useState<any>(null);

  useEffect(() => {
    const cityId = searchParams.get("city");
    const categoryId = searchParams.get("category");

    if (cityId && categoryId) {
      const city = getCityByName(cityId);
      const category = getCategoryById(categoryId);

      if (city && category) {
        const competition = scanCompetition(city, category);
        const forecast = generateForecast(city, category, 100, competition.nearbyCompetitors);
        const bizScore = calculateBizScore(city, category, competition.nearbyCompetitors, forecast.twelveMonth.growth);
        const financials = generateFinancialProjection(city, category);
        const swot = generateSWOT(city, category, competition, bizScore.overall);

        setAnalysis({ city, category, competition, forecast, bizScore, financials, swot });
      }
    }
  }, [searchParams]);

  if (!analysis) return <div className="min-h-screen flex items-center justify-center">Loading...</div>;

  const { city, category, bizScore, competition, forecast, financials, swot } = analysis;
  const rating = getScoreRating(bizScore.overall);

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-6xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <Link to="/">
            <Button variant="outline" size="sm">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back
            </Button>
          </Link>
          <Button>
            <Download className="mr-2 h-4 w-4" />
            Download Report
          </Button>
        </div>

        <Card className="p-8 bg-gradient-to-br from-card to-card/50">
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2">{category.name} in {city.name}</h1>
              <p className="text-muted-foreground">{city.state} • Tier {city.tier} City</p>
            </div>
            <div className="text-right">
              <div className="text-5xl font-bold text-primary">{bizScore.overall}</div>
              <div className={`text-sm font-medium text-${rating.color}`}>{rating.label}</div>
            </div>
          </div>
        </Card>

        <div className="grid md:grid-cols-3 gap-4">
          <Card className="p-6">
            <div className="flex items-center gap-3 mb-3">
              <TrendingUp className="h-5 w-5 text-primary" />
              <h3 className="font-semibold">Demand Score</h3>
            </div>
            <div className="text-3xl font-bold mb-2">{bizScore.demand}</div>
            <Progress value={bizScore.demand} className="h-2" />
          </Card>

          <Card className="p-6">
            <div className="flex items-center gap-3 mb-3">
              <Users className="h-5 w-5 text-secondary" />
              <h3 className="font-semibold">Competition</h3>
            </div>
            <div className="text-3xl font-bold mb-2">{competition.nearbyCompetitors}</div>
            <p className="text-sm text-muted-foreground">competitors nearby</p>
          </Card>

          <Card className="p-6">
            <div className="flex items-center gap-3 mb-3">
              <DollarSign className="h-5 w-5 text-success" />
              <h3 className="font-semibold">Setup Cost</h3>
            </div>
            <div className="text-3xl font-bold mb-2">₹{(financials.setupCosts.total / 100000).toFixed(1)}L</div>
            <p className="text-sm text-muted-foreground">initial investment</p>
          </Card>
        </div>

        <Card className="p-6">
          <h2 className="text-xl font-bold mb-4">SWOT Analysis</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-success mb-2">Strengths</h3>
              <ul className="space-y-1 text-sm">
                {swot.strengths.map((s, i) => <li key={i}>• {s}</li>)}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-warning mb-2">Weaknesses</h3>
              <ul className="space-y-1 text-sm">
                {swot.weaknesses.map((w, i) => <li key={i}>• {w}</li>)}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-info mb-2">Opportunities</h3>
              <ul className="space-y-1 text-sm">
                {swot.opportunities.slice(0, 3).map((o, i) => <li key={i}>• {o}</li>)}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-destructive mb-2">Threats</h3>
              <ul className="space-y-1 text-sm">
                {swot.threats.slice(0, 3).map((t, i) => <li key={i}>• {t}</li>)}
              </ul>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Opportunities;
