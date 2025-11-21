"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, School, User } from "lucide-react";

export function Hero() {
  const [userType, setUserType] = useState<"student" | "institute">("student");

  return (
    <section className="relative overflow-hidden py-20 md:py-32 bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-background">
      <div className="container relative z-10 flex flex-col items-center text-center">
        <Badge variant="outline" className="mb-6 px-4 py-1.5 text-sm border-primary/20 text-primary bg-primary/5">
          <span className="mr-2">✨</span>
          Now supporting JEE Advanced 2025
        </Badge>
        
        <h1 className="max-w-4xl text-4xl font-extrabold tracking-tight lg:text-6xl mb-6">
          Stop Practicing Blindly. <br />
          <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-indigo-600">
            Let AI Design Your Daily Practice Papers.
          </span>
        </h1>
        
        <p className="max-w-2xl text-lg text-muted-foreground mb-10">
          Personalized DPPs for students to crush their weak areas. 
          Automated assessment tools for top institutes to scale excellence.
        </p>

        <div className="flex flex-col items-center gap-8 w-full max-w-md">
          <div className="grid grid-cols-2 p-1 rounded-full bg-slate-100 dark:bg-slate-800 w-full">
            <button
              onClick={() => setUserType("student")}
              className={`flex items-center justify-center gap-2 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                userType === "student"
                  ? "bg-white dark:bg-slate-950 text-primary shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <User className="w-4 h-4" />
              I'm a Student
            </button>
            <button
              onClick={() => setUserType("institute")}
              className={`flex items-center justify-center gap-2 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                userType === "institute"
                  ? "bg-white dark:bg-slate-950 text-primary shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <School className="w-4 h-4" />
              I'm an Institute
            </button>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full">
            {userType === "student" ? (
              <>
                <Button size="lg" className="w-full sm:w-auto text-base px-8">
                  Start Practicing Free <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <Button variant="outline" size="lg" className="w-full sm:w-auto text-base">
                  View Sample DPP
                </Button>
              </>
            ) : (
              <>
                <Button size="lg" className="w-full sm:w-auto text-base px-8">
                  Book a Demo <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <Button variant="outline" size="lg" className="w-full sm:w-auto text-base">
                  Calculate ROI
                </Button>
              </>
            )}
          </div>
          
          <p className="text-sm text-muted-foreground">
            {userType === "student" 
              ? "Join 10,000+ students cracking top exams." 
              : "Trusted by 50+ leading coaching institutes."}
          </p>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -z-10" />
    </section>
  );
}
