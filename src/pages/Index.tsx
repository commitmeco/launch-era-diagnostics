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
    <div className="min-h-screen bg-background flex flex-col items-center justify-center py-8 sm:py-12 md:p-4 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-20 left-10 w-40 h-40 bg-[hsl(var(--punk-coral))] rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-[hsl(var(--riot-pink))] rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-[hsl(var(--lilac-grit))] rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="w-full max-w-4xl relative z-10 text-center animate-fade-in px-4">
        {/* Brand badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-card rounded-full border border-border mb-6 md:mb-8 shadow-lg">
          <span className="text-xs font-medium tracking-wider uppercase text-muted-foreground">
            Commit Me Co × Riot Girl Design
          </span>
        </div>

        {/* Main heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-typewriter text-foreground mb-4 md:mb-6 leading-tight px-2">
          What's Your{" "}
          <span className="relative inline-block">
            <span className="bg-gradient-to-r from-[hsl(var(--punk-coral))] to-[hsl(var(--riot-pink))] bg-clip-text text-transparent">
              Launch Era
            </span>
            <Sparkles className="absolute -top-3 -right-6 md:-top-4 md:-right-8 w-5 h-5 md:w-6 md:h-6 text-[hsl(var(--riot-pink))] animate-flicker hidden sm:block" />
          </span>
          ?
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl md:text-2xl text-foreground/70 mb-3 md:mb-4 max-w-2xl mx-auto font-medium px-2">
          You've been building something real. Now it's time to show the world.
        </p>

        <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-8 md:mb-12 max-w-xl mx-auto px-2">
          Take the quiz. Discover how you launch best — whether you go big, stay chill, hustle hard, or slip in softly.
        </p>

        {/* CTA Button */}
        <Button
          onClick={() => setStarted(true)}
          size="lg"
          className="bg-[hsl(var(--punk-coral))] text-white hover:bg-[hsl(var(--riot-pink))] transition-all shadow-xl hover:shadow-2xl text-base sm:text-lg px-8 py-5 sm:px-10 sm:py-7 group hover:scale-105 w-full sm:w-auto"
        >
          <Zap className="mr-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:animate-glitch" />
          Discover Your Era
          <Sparkles className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:animate-glitch" />
        </Button>

        {/* Visual decorative elements */}
        <div className="mt-12 md:mt-16 flex items-center justify-center gap-3 opacity-50">
          <div className="w-2 h-2 rounded-full bg-[hsl(var(--punk-coral))] animate-pulse" />
          <div className="w-2 h-2 rounded-full bg-[hsl(var(--riot-pink))] animate-pulse" style={{ animationDelay: '0.3s' }} />
          <div className="w-2 h-2 rounded-full bg-[hsl(var(--lilac-grit))] animate-pulse" style={{ animationDelay: '0.6s' }} />
        </div>
      </div>

      {/* Footer credit */}
      <div className="absolute bottom-4 md:bottom-6 left-0 right-0 text-center px-4">
        <p className="text-xs text-muted-foreground font-typewriter">
          For the ones ready to be seen ✨
        </p>
      </div>
    </div>
  );
};

export default Index;
