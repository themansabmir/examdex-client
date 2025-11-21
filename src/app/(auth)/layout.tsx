import Link from "next/link";
import { BookOpen } from "lucide-react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen w-full grid lg:grid-cols-2">
      {/* Left Side - Form Container */}
      <div className="flex flex-col justify-center items-center p-8 md:p-12 lg:p-16 bg-background">
        <div className="w-full max-w-[400px] space-y-6">
          {/* Logo for Mobile/Desktop */}
          <Link href="/" className="flex items-center gap-2 font-bold text-xl text-primary mb-8 lg:hidden">
            <BookOpen className="h-6 w-6" />
            <span>ExamDex</span>
          </Link>
          
          {children}
          
          <div className="mt-8 text-center text-sm text-muted-foreground">
            <p>
              By continuing, you agree to our{" "}
              <Link href="/terms" className="underline underline-offset-4 hover:text-primary">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link href="/privacy" className="underline underline-offset-4 hover:text-primary">
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>
      </div>

      {/* Right Side - Visual Hero */}
      <div className="hidden lg:flex flex-col justify-between bg-slate-900 text-white p-12 relative overflow-hidden">
        {/* Abstract Background Pattern */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent"></div>

        {/* Logo */}
        <div className="relative z-10 flex items-center gap-2 font-bold text-xl">
          <BookOpen className="h-6 w-6" />
          <span>ExamDex</span>
        </div>

        {/* Testimonial / Quote */}
        <div className="relative z-10 max-w-lg">
          <blockquote className="space-y-2">
            <p className="text-lg font-medium leading-relaxed">
              "ExamDex helped me identify my weak areas in Physics just 2 months before JEE Advanced. The daily practice papers were a game changer."
            </p>
            <footer className="text-sm text-slate-300">
              — Arjun Mehta, IIT Bombay (Batch of '24)
            </footer>
          </blockquote>
        </div>
      </div>
    </div>
  );
}
