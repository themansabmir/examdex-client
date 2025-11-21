import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BarChart3, BrainCircuit, CheckCircle2, FileText, Layers, Zap } from "lucide-react";

export function FeatureTabs() {
  return (
    <section id="features" className="py-20 bg-slate-50 dark:bg-slate-900/50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Tailored for Excellence
          </h2>
          <p className="text-lg text-muted-foreground">
            Whether you are a student aiming for a top rank or an institute managing thousands of aspirants, 
            ExamDex adapts to your needs.
          </p>
        </div>

        <Tabs defaultValue="students" className="w-full max-w-5xl mx-auto">
          <div className="flex justify-center mb-8">
            <TabsList className="grid w-full max-w-md grid-cols-2">
              <TabsTrigger value="students">For Students</TabsTrigger>
              <TabsTrigger value="institutes">For Institutes</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="students" className="space-y-8">
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <BrainCircuit className="w-10 h-10 text-primary mb-4" />
                  <CardTitle>Weakness Analysis</CardTitle>
                  <CardDescription>
                    AI identifies your weak topics and generates questions specifically to improve them.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500" /> Topic-level granularity
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500" /> Difficulty progression
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Zap className="w-10 h-10 text-amber-500 mb-4" />
                  <CardTitle>Streak Gamification</CardTitle>
                  <CardDescription>
                    Build consistency with daily streaks. Earn rewards for maintaining your practice habit.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500" /> Daily goals
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500" /> Leaderboards
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <FileText className="w-10 h-10 text-blue-500 mb-4" />
                  <CardTitle>Instant Solutions</CardTitle>
                  <CardDescription>
                    Get detailed, step-by-step explanations immediately after attempting a question.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500" /> Video solutions
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500" /> Concept mapping
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="institutes" className="space-y-8">
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <Layers className="w-10 h-10 text-primary mb-4" />
                  <CardTitle>Batch DPP Generation</CardTitle>
                  <CardDescription>
                    Generate unique or standardized practice papers for entire batches in one click.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500" /> Syllabus aligned
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500" /> Difficulty control
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Badge variant="secondary" className="w-fit mb-4">Enterprise</Badge>
                  <CardTitle>Whitelabel Branding</CardTitle>
                  <CardDescription>
                    Your brand, your platform. Custom domain, logo, and color themes for your institute.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500" /> Custom domain
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500" /> Mobile app
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <BarChart3 className="w-10 h-10 text-indigo-500 mb-4" />
                  <CardTitle>Aggregate Analytics</CardTitle>
                  <CardDescription>
                    View batch-level performance. Identify struggling students and top performers instantly.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500" /> Exportable reports
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500" /> Parent dashboard
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
