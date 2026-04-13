import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  alt?: boolean;
  id?: string;
}

const SectionWrapper = ({ children, className, alt = false, id }: SectionWrapperProps) => {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id={id}
      ref={ref}
      className={cn(
        "py-16 md:py-24 px-4",
        alt ? "bg-surface" : "bg-background",
        visible ? "animate-fade-up" : "opacity-0",
        className
      )}
    >
      <div className="container mx-auto max-w-5xl">{children}</div>
    </section>
  );
};

export default SectionWrapper;
