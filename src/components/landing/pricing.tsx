import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

export function Pricing() {
  return (
    <section id="pricing" className="py-20">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight">Simple, Transparent Pricing</h2>
          <p className="text-muted-foreground mt-2">Invest in your future without breaking the bank.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Free Student Starter */}
          <Card>
            <CardHeader>
              <CardTitle>Student Starter</CardTitle>
              <CardDescription>For beginners testing the waters.</CardDescription>
              <div className="text-3xl font-bold mt-4">Free</div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-green-500" /> 10 Daily Questions</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-green-500" /> Basic Analytics</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-green-500" /> 1 Mock Test/Month</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full" variant="outline">Get Started</Button>
            </CardFooter>
          </Card>

          {/* Pro Student */}
          <Card className="border-primary shadow-lg relative">
            <div className="absolute top-0 right-0 -mt-3 -mr-3 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-bold">
              POPULAR
            </div>
            <CardHeader>
              <CardTitle>Pro Student</CardTitle>
              <CardDescription>For serious aspirants.</CardDescription>
              <div className="text-3xl font-bold mt-4">$9<span className="text-lg font-normal text-muted-foreground">/mo</span></div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-green-500" /> Unlimited AI Questions</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-green-500" /> Advanced Weakness Analysis</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-green-500" /> Video Solutions</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-green-500" /> Priority Support</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Upgrade Now</Button>
            </CardFooter>
          </Card>

          {/* Institute Enterprise */}
          <Card className="bg-slate-950 text-slate-50 dark:bg-slate-50 dark:text-slate-950">
            <CardHeader>
              <CardTitle className="text-slate-50 dark:text-slate-950">Institute</CardTitle>
              <CardDescription className="text-slate-400 dark:text-slate-500">For coaching centers & schools.</CardDescription>
              <div className="text-3xl font-bold mt-4">Custom</div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-green-500" /> Bulk Student Management</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-green-500" /> Whitelabel Platform</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-green-500" /> API Access</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-green-500" /> Dedicated Account Manager</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full" variant="secondary">Contact Sales</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
}
