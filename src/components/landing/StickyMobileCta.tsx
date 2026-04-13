import { useEffect, useState } from "react";

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
        className="w-full bg-cta text-cta-foreground font-bold py-4 rounded-xl text-base shadow-lg active:scale-95 transition-transform cursor-pointer"
      >
        GARANTIR O MEU AGORA →
      </button>
    </div>
  );
};

export default StickyMobileCta;
