import { Navbar } from "@/components/landing/navbar";
import { Hero } from "@/components/landing/hero";
import { TrustTicker } from "@/components/landing/trust-ticker";
import { ProblemSolution } from "@/components/landing/problem-solution";
import { FeatureTabs } from "@/components/landing/feature-tabs";
import { BentoGrid } from "@/components/landing/bento-grid";
import { Pricing } from "@/components/landing/pricing";
import { FAQ } from "@/components/landing/faq";
import { Footer } from "@/components/landing/footer";

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <TrustTicker />
        <ProblemSolution />
        <FeatureTabs />
        <BentoGrid />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
