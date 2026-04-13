import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

const StickyMobileCta = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-3 bg-background/90 backdrop-blur-md border-t border-border md:hidden">
      <button
        onClick={() => document.getElementById("oferta")?.scrollIntoView({ behavior: "smooth" })}
        className="w-full bg-cta text-cta-foreground font-medium py-4 text-xs tracking-[0.2em] uppercase shadow-lg active:scale-[0.98] transition-transform cursor-pointer inline-flex items-center justify-center gap-2"
      >
        Garantir o meu agora
        <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  );
};

export default StickyMobileCta;
