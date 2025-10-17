import { useState } from "react";
import { Button } from "@/components/ui/button";
import Quiz from "@/components/Quiz";
import { Sparkles, Zap } from "lucide-react";

const Index = () => {
  const [started, setStarted] = useState(false);

  if (started) {
    return <Quiz />;
  }

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-20 left-10 w-40 h-40 bg-magenta rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-cobalt rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-blush rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="w-full max-w-4xl relative z-10 text-center animate-fade-in">
        {/* Brand badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-card rounded-full border border-border mb-8 shadow-lg">
          <span className="text-xs font-medium tracking-wider uppercase text-muted-foreground">
            Commit Me Co × Riot Girl Design
          </span>
        </div>

        {/* Main heading */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-typewriter text-foreground mb-6 leading-tight">
          What's Your{" "}
          <span className="relative inline-block">
            <span className="bg-gradient-to-r from-magenta to-cobalt bg-clip-text text-transparent">
              Launch Era
            </span>
            <Sparkles className="absolute -top-4 -right-8 w-6 h-6 text-magenta animate-flicker hidden md:block" />
          </span>
          ?
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-foreground/70 mb-4 max-w-2xl mx-auto font-medium">
          Bold, feminine-rebellious quiz for small business owners & solo entrepreneurs
        </p>

        <p className="text-base md:text-lg text-muted-foreground mb-12 max-w-xl mx-auto">
          5 quick questions to diagnose your launch personality — are you a Headliner, Chill Drop Queen, Hustlecore Hero, or Soft-Launch Siren?
        </p>

        {/* CTA Button */}
        <Button
          onClick={() => setStarted(true)}
          size="lg"
          className="bg-gradient-to-r from-magenta to-cobalt text-white hover:opacity-90 transition-all shadow-xl hover:shadow-2xl text-lg px-10 py-7 group hover:scale-105"
        >
          <Zap className="mr-2 w-5 h-5 group-hover:animate-glitch" />
          Discover Your Era
          <Sparkles className="ml-2 w-5 h-5 group-hover:animate-glitch" />
        </Button>

        {/* Visual decorative elements */}
        <div className="mt-16 flex items-center justify-center gap-3 opacity-50">
          <div className="w-2 h-2 rounded-full bg-magenta animate-pulse" />
          <div className="w-2 h-2 rounded-full bg-cobalt animate-pulse" style={{ animationDelay: '0.3s' }} />
          <div className="w-2 h-2 rounded-full bg-blush animate-pulse" style={{ animationDelay: '0.6s' }} />
        </div>
      </div>

      {/* Footer credit */}
      <div className="absolute bottom-6 left-0 right-0 text-center">
        <p className="text-xs text-muted-foreground font-typewriter">
          90s zine meets modern brand strategy ✨
        </p>
      </div>
    </div>
  );
};

export default Index;
