import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  alt?: boolean;
  id?: string;
}

const SectionWrapper = ({ children, className, alt = false, id }: SectionWrapperProps) => {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={cn(
        "py-20 md:py-32 px-6 lg:px-8",
        alt ? "bg-foreground text-background" : "bg-background text-foreground",
        className
      )}
    >
      <div className="mx-auto max-w-6xl">{children}</div>
    </motion.section>
  );
};

export default SectionWrapper;
