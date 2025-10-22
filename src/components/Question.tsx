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
      <div className="mb-8 text-center">
        <div className="inline-flex items-center gap-2 mb-4">
          <Sparkles className="w-5 h-5 text-[hsl(var(--riot-pink))] animate-flicker" />
          <span className="text-sm font-medium text-muted-foreground tracking-wider uppercase">
            Question {questionNumber}
          </span>
          <Sparkles className="w-5 h-5 text-[hsl(var(--punk-coral))] animate-flicker" />
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-typewriter text-foreground leading-tight mb-2">
          {question.question}
        </h2>
      </div>

      <div className="grid gap-4">
        {question.options.map((option, index) => (
          <Button
            key={option.value}
            onClick={() => onAnswer(option.value)}
            variant="outline"
            className="h-auto py-6 px-6 text-left justify-start text-base md:text-lg font-sans font-medium transition-all duration-300 hover:scale-[1.02] hover:shadow-lg border-2 hover:border-[hsl(var(--punk-coral))] hover:bg-accent hover:text-accent-foreground group relative overflow-hidden"
            style={{
              animationDelay: `${index * 100}ms`,
            }}
          >
            <span className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--punk-coral))]/10 to-[hsl(var(--riot-pink))]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative z-10 flex items-start gap-3">
              <span className="font-typewriter text-[hsl(var(--punk-coral))] text-xl mt-0.5 group-hover:animate-glitch">
                {option.value}.
              </span>
              <span className="flex-1">{option.text}</span>
            </span>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Question;
