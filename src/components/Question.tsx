import { Answer } from "./Quiz";
import { Button } from "./ui/button";
import { Sparkles } from "lucide-react";

interface QuestionProps {
  question: {
    id: number;
    question: string;
    options: {
      value: Answer;
      text: string;
    }[];
  };
  onAnswer: (answer: Answer) => void;
  questionNumber: number;
}

const Question = ({ question, onAnswer, questionNumber }: QuestionProps) => {
  return (
    <div className="animate-fade-in">
      <div className="mb-6 md:mb-8 text-center">
        <div className="inline-flex items-center gap-2 mb-3 md:mb-4">
          <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-[hsl(var(--riot-pink))] animate-flicker" />
          <span className="text-xs md:text-sm font-medium text-muted-foreground tracking-wider uppercase">
            Question {questionNumber}
          </span>
          <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-[hsl(var(--punk-coral))] animate-flicker" />
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-typewriter text-foreground leading-tight mb-2 px-2">
          {question.question}
        </h2>
      </div>

      <div className="grid gap-3 md:gap-4">
        {question.options.map((option, index) => (
          <Button
            key={option.value}
            onClick={() => onAnswer(option.value)}
            variant="outline"
            className="!whitespace-normal h-auto min-h-[60px] py-4 px-4 sm:py-5 sm:px-5 md:py-6 md:px-6 text-left justify-start text-sm sm:text-base md:text-lg font-sans font-medium transition-all duration-300 hover:scale-[1.02] hover:shadow-lg border-2 hover:border-[hsl(var(--punk-coral))] hover:bg-accent hover:text-accent-foreground group relative overflow-visible active:scale-[0.98] w-full"
            style={{
              animationDelay: `${index * 100}ms`,
            }}
          >
            <span className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--punk-coral))]/10 to-[hsl(var(--riot-pink))]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 overflow-hidden rounded-[inherit]" />
            <span className="relative z-10 flex items-start gap-2 sm:gap-3 w-full min-w-0">
              <span className="font-typewriter text-[hsl(var(--punk-coral))] text-lg sm:text-xl mt-0.5 group-hover:animate-glitch flex-shrink-0">
                {option.value}.
              </span>
              <span className="flex-1 leading-relaxed break-words word-break min-w-0">{option.text}</span>
            </span>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Question;
