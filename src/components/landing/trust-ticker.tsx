export function TrustTicker() {
  const exams = ["JEE Advanced", "NEET UG", "BITSAT", "CAT", "GATE", "SAT", "CUET"];

  return (
    <section className="border-y bg-slate-50/50 dark:bg-slate-900/50 py-8">
      <div className="container flex flex-col items-center gap-4 text-center md:flex-row md:text-left">
        <p className="text-sm font-semibold text-muted-foreground whitespace-nowrap">
          Trusted for top exams:
        </p>
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 md:justify-start opacity-70 grayscale transition-all hover:grayscale-0 hover:opacity-100">
          {exams.map((exam) => (
            <span key={exam} className="text-xl font-bold text-slate-600 dark:text-slate-400">
              {exam}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
