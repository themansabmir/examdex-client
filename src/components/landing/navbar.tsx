import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BookOpen } from "lucide-react";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2 font-bold text-xl text-primary">
          <BookOpen className="h-6 w-6" />
          <span>ExamDex</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
          <Link href="#features" className="hover:text-primary transition-colors">Features</Link>
          <Link href="#pricing" className="hover:text-primary transition-colors">Pricing</Link>
          <Link href="#success-stories" className="hover:text-primary transition-colors">Success Stories</Link>
        </nav>

        <div className="flex items-center gap-4">
          <Button variant="secondary" size="sm" className="hidden sm:flex">
            Student Login
          </Button>
          <Button size="sm">
            Institute Partner
          </Button>
        </div>
      </div>
    </header>
  );
}
