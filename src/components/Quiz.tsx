import { useState } from "react";
import Question from "./Question";
import Results from "./Results";
import ProgressBar from "./ProgressBar";

export type Answer = "A" | "B" | "C" | "D";

interface QuestionData {
  id: number;
  question: string;
  options: {
    value: Answer;
    text: string;
  }[];
}

const questions: QuestionData[] = [
  {
    id: 1,
    question: "You've got something big coming. What's your dream launch moment?",
    options: [
      { value: "A", text: "The crowd goes wild. Big reveal, big reaction." },
      { value: "B", text: 'Casual drop, like "oh this old thing?"' },
      { value: "C", text: "A gritty teaser video and a waitlist built in Notion." },
      { value: "D", text: "A carefully-timed text to the group chat." },
    ],
  },
  {
    id: 2,
    question: "Your ideal aesthetic in three words?",
    options: [
      { value: "A", text: "Bold, iconic, scroll-stopping" },
      { value: "B", text: "Clean, breezy, chill" },
      { value: "C", text: "Raw, real, loud" },
      { value: "D", text: "Warm, minimal, clever" },
    ],
  },
  {
    id: 3,
    question: "Pick your launch fuel:",
    options: [
      { value: "A", text: "Matcha and adrenaline" },
      { value: "B", text: "Iced oat latte, always" },
      { value: "C", text: "Energy drink and Spotify on blast" },
      { value: "D", text: "Chamomile tea and a Notion calendar" },
    ],
  },
  {
    id: 4,
    question: "What's your ideal promo timeline?",
    options: [
      { value: "A", text: "3-week countdown with hype teasers" },
      { value: "B", text: "3-second caption with a vibey photo" },
      { value: "C", text: "Build it in public, baby" },
      { value: "D", text: "A sneaky link and a soft whisper" },
    ],
  },
  {
    id: 5,
    question: "How do you want people to feel when they see your launch?",
    options: [
      { value: "A", text: "Like they're front row at a sold-out show" },
      { value: "B", text: "Like they stumbled on something cool and exclusive" },
      { value: "C", text: "Like they just discovered an underground legend" },
      { value: "D", text: "Like they're in on a secret before it blows up" },
    ],
  },
];

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (answer: Answer) => {
    const newAnswers = [...answers, answer];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  if (showResults) {
    return <Results answers={answers} />;
  }

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center py-8 sm:py-12 px-4 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-magenta rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-cobalt rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-blush rounded-full blur-2xl" />
      </div>

      <div className="w-full max-w-2xl relative z-10 px-2">
        <ProgressBar current={currentQuestion + 1} total={questions.length} />

        <Question
          question={questions[currentQuestion]}
          onAnswer={handleAnswer}
          questionNumber={currentQuestion + 1}
        />
      </div>
    </div>
  );
};

export default Quiz;
