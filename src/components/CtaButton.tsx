import { cn } from "@/lib/utils";

interface CtaButtonProps {
  children: React.ReactNode;
  className?: string;
  size?: "default" | "lg" | "xl";
  onClick?: () => void;
}

const CtaButton = ({ children, className, size = "default", onClick }: CtaButtonProps) => {
  const sizeClasses = {
    default: "px-8 py-4 text-base",
    lg: "px-10 py-5 text-lg",
    xl: "px-12 py-6 text-xl",
  };

  return (
    <button
      onClick={onClick}
      className={cn(
        "bg-cta text-cta-foreground font-bold rounded-xl shadow-lg hover:bg-cta-hover transition-all duration-300 animate-pulse-glow hover:scale-105 active:scale-95 cursor-pointer",
        sizeClasses[size],
        className
      )}
    >
      {children}
    </button>
  );
};

export default CtaButton;
