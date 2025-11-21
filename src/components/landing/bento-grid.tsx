import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, Target, TrendingUp } from "lucide-react";

export function BentoGrid() {
  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-900/50">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight">Your Personal Growth Engine</h2>
          <p className="text-muted-foreground mt-2">Visualize your progress and stay on track.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto h-[500px]">
          {/* Large Main Card */}
          <Card className="md:col-span-2 md:row-span-2 bg-gradient-to-br from-white to-slate-50 dark:from-slate-900 dark:to-slate-950 border-primary/10">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-primary" />
                Performance Trajectory
              </CardTitle>
            </CardHeader>
            <CardContent className="flex items-center justify-center h-[350px]">
              {/* Placeholder for a chart */}
              <div className="w-full h-full bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center justify-center border border-dashed">
                <span className="text-muted-foreground text-sm">Interactive Graph Placeholder</span>
              </div>
            </CardContent>
          </Card>

          {/* Side Card 1 */}
          <Card className="bg-primary text-primary-foreground">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Target className="w-5 h-5" />
                Daily Goal
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold mb-2">85%</div>
              <p className="text-primary-foreground/80 text-sm">Probability of clearing cutoff based on current pace.</p>
            </CardContent>
          </Card>

          {/* Side Card 2 */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Activity className="w-5 h-5 text-green-500" />
                Active Streak
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold mb-2">12 Days</div>
              <p className="text-muted-foreground text-sm">Keep it up! You're in the top 5% of students.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
