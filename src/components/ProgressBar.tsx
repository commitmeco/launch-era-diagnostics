interface ProgressBarProps {
  current: number;
  total: number;
}

const ProgressBar = ({ current, total }: ProgressBarProps) => {
  const percentage = (current / total) * 100;

  return (
    <div className="mb-8 md:mb-12">
      <div className="flex justify-between items-center mb-2">
        <span className="text-xs sm:text-sm font-medium text-muted-foreground">
          {current} of {total}
        </span>
        <span className="text-xs sm:text-sm font-typewriter text-[hsl(var(--riot-pink))]">
          {Math.round(percentage)}%
        </span>
      </div>
      <div className="h-2 bg-muted rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-[hsl(var(--punk-coral))] to-[hsl(var(--riot-pink))] transition-all duration-500 ease-out"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
