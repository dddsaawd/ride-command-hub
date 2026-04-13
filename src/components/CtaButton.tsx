import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

interface CtaButtonProps {
  children: React.ReactNode;
  className?: string;
  size?: "default" | "lg" | "xl";
  onClick?: () => void;
  showArrow?: boolean;
}

const CtaButton = ({ children, className, size = "default", onClick, showArrow = false }: CtaButtonProps) => {
  const sizeClasses = {
    default: "px-8 py-4 text-xs tracking-[0.2em]",
    lg: "px-10 py-5 text-xs tracking-[0.2em]",
    xl: "px-12 py-6 text-sm tracking-[0.2em]",
  };

  return (
    <button
      onClick={onClick}
      className={cn(
        "bg-cta text-cta-foreground font-medium uppercase transition-all duration-300 animate-pulse-glow hover:bg-cta-hover hover:scale-[1.02] active:scale-[0.98] cursor-pointer inline-flex items-center gap-3 group",
        sizeClasses[size],
        className
      )}
    >
      {children}
      {showArrow && (
        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
      )}
    </button>
  );
};

export default CtaButton;
