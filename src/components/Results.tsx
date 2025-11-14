import { Answer } from "./Quiz";
import { Button } from "./ui/button";
import { Sparkles, Star, Zap, Heart, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

interface ResultsProps {
  answers: Answer[];
}

interface Era {
  name: string;
  tagline: string;
  description: string;
  color: string;
  icon: typeof Star;
  gradient: string;
}

const eras: Record<string, Era> = {
  A: {
    name: "Headliner Era",
    tagline: "Big, Bold, Unmissable",
    description: "Big, bold visuals. Sleek UX. Major energy. You're not here to whisper — you're here to make a scene, and people love you for it.",
    color: "magenta",
    icon: Star,
    gradient: "from-magenta to-cobalt",
  },
  B: {
    name: "Chill Drop Queen Era",
    tagline: "Effortless, Exclusive, Elite",
    description: "Effortless, minimal, but still vibey. You don't chase hype — you set the tone.",
    color: "cobalt",
    icon: Sparkles,
    gradient: "from-cobalt to-blush",
  },
  C: {
    name: "Hustlecore Hero Era",
    tagline: "Grit, Heart, High Impact",
    description: "Grit, heart, and high impact. You're all in — scrappy, strategic, and wildly creative.",
    color: "magenta",
    icon: Zap,
    gradient: "from-magenta via-cobalt to-magenta",
  },
  D: {
    name: "Soft-Launch Siren Era",
    tagline: "Subtle, Strategic, Sneaky-Effective",
    description: "Subtle, strategic, and sneaky-effective. You lure, you don't announce.",
    color: "blush",
    icon: Heart,
    gradient: "from-blush to-beige",
  },
};

const Confetti = ({ delay }: { delay: number }) => (
  <div
    className="absolute w-2 h-2 rounded-full animate-confetti-fall"
    style={{
      left: `${Math.random() * 100}%`,
      animationDelay: `${delay}ms`,
      backgroundColor: ["hsl(328 100% 54%)", "hsl(214 100% 50%)", "hsl(340 100% 85%)"][
        Math.floor(Math.random() * 3)
      ],
    }}
  />
);

const Results = ({ answers }: ResultsProps) => {
  const [showConfetti, setShowConfetti] = useState(true);
  
  useEffect(() => {
    const timer = setTimeout(() => setShowConfetti(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  // Calculate most common answer
  const counts = answers.reduce((acc, answer) => {
    acc[answer] = (acc[answer] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const result = Object.entries(counts).sort((a, b) => b[1] - a[1])[0][0];
  const era = eras[result];
  const Icon = era.icon;

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center py-8 sm:py-12 px-4 relative overflow-hidden">
      {/* Confetti */}
      {showConfetti && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(30)].map((_, i) => (
            <Confetti key={i} delay={i * 100} />
          ))}
        </div>
      )}

      {/* Background gradient */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className={`absolute inset-0 bg-gradient-to-br ${era.gradient}`} />
      </div>

      <div className="w-full max-w-3xl relative z-10 animate-slide-up">
        {/* Badge */}
        <div className="text-center mb-4 md:mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-card rounded-full border-2 border-primary shadow-lg">
            <Sparkles className="w-3 h-3 md:w-4 md:h-4 text-primary" />
            <span className="text-xs md:text-sm font-medium tracking-wider uppercase">Your Result</span>
            <Sparkles className="w-3 h-3 md:w-4 md:h-4 text-primary" />
          </div>
        </div>

        {/* Main Result Card */}
        <div className="bg-card border-2 border-primary rounded-lg p-6 sm:p-8 md:p-12 shadow-2xl mb-6 md:mb-8">
          <div className="text-center mb-6 md:mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-magenta to-cobalt rounded-full mb-4 md:mb-6 shadow-lg">
              <Icon className="w-8 h-8 md:w-10 md:h-10 text-white" />
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-typewriter text-foreground mb-3 md:mb-4 leading-tight px-2">
              {era.name}
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl font-medium text-primary mb-4 md:mb-6 px-2">
              {era.tagline}
            </p>

            <div className="max-w-2xl mx-auto">
              <p className="text-base sm:text-lg md:text-xl text-foreground/80 leading-relaxed px-2">
                {era.description}
              </p>
            </div>
          </div>

          {/* Decorative divider */}
          <div className="flex items-center gap-4 my-8">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
            <div className="flex gap-1">
              <div className="w-1.5 h-1.5 rounded-full bg-magenta" />
              <div className="w-1.5 h-1.5 rounded-full bg-cobalt" />
              <div className="w-1.5 h-1.5 rounded-full bg-blush" />
            </div>
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
          </div>

          {/* CTA */}
          <div className="text-center">
            <h3 className="text-xl sm:text-2xl font-typewriter mb-3 md:mb-4 text-foreground px-2">
              Ready to launch in your era?
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground mb-4 md:mb-6 px-2">
              Get your free Launch Era Kit with custom strategies for your style
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-magenta to-cobalt text-white hover:opacity-90 transition-opacity shadow-lg hover:shadow-xl text-base sm:text-lg px-6 py-5 sm:px-8 sm:py-6 group w-full sm:w-auto"
            >
              Get Your Free Launch Era Kit
              <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>

        {/* Share prompt */}
        <div className="text-center text-xs sm:text-sm text-muted-foreground">
          <p className="font-typewriter px-4">
            Share your era with the squad 💅✨
          </p>
        </div>
      </div>
    </div>
  );
};

export default Results;
