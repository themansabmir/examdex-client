import { Check, X } from "lucide-react";

export function ProblemSolution() {
  return (
    <section className="py-20">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Problem */}
          <div className="rounded-2xl border bg-red-50/50 dark:bg-red-950/10 p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-full bg-red-100 dark:bg-red-900/20 text-red-600">
                <X className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-red-950 dark:text-red-200">Static Textbooks</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-muted-foreground">
                <X className="w-5 h-5 text-red-400 mt-0.5 shrink-0" />
                <span>Generic questions for everyone, ignoring individual weaknesses.</span>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <X className="w-5 h-5 text-red-400 mt-0.5 shrink-0" />
                <span>Repetitive drills that waste time on concepts you already know.</span>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <X className="w-5 h-5 text-red-400 mt-0.5 shrink-0" />
                <span>Outdated patterns that don't match current exam trends.</span>
              </li>
            </ul>
          </div>

          {/* Solution */}
          <div className="rounded-2xl border border-primary/20 bg-primary/5 p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 bg-primary text-primary-foreground text-xs font-bold rounded-bl-xl">
              THE EXAMDEX WAY
            </div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-full bg-primary/10 text-primary">
                <Check className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-primary">AI-Adaptive Practice</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-foreground">
                <Check className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <span>Dynamic questions targeting your specific weak areas.</span>
              </li>
              <li className="flex items-start gap-3 text-foreground">
                <Check className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <span>Exam-level difficulty that adapts as you improve.</span>
              </li>
              <li className="flex items-start gap-3 text-foreground">
                <Check className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <span>Real-time syllabus updates matching latest notifications.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
