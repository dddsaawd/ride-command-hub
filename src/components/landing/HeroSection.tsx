import heroProduct from "@/assets/hero-product.png";
import CtaButton from "@/components/CtaButton";
import { motion } from "framer-motion";
import { Check, Flame } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col lg:flex-row">
      {/* Left sidebar accent */}
      <div className="hidden lg:flex bg-foreground items-center justify-center w-[8%]">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-background -rotate-90 whitespace-nowrap"
        >
          <span className="text-xs tracking-[0.3em] uppercase font-light">MotoPlay Pro — 2026</span>
        </motion.div>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col lg:flex-row items-center">
        {/* Copy */}
        <div className="flex-1 flex flex-col justify-center px-6 lg:px-16 py-20 lg:py-0">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 border border-destructive/30 text-destructive px-4 py-2 text-xs tracking-[0.15em] uppercase font-medium mb-8">
              <Flame className="w-3.5 h-3.5" />
              Estoque limitado no Brasil
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-medium leading-[1.1] text-foreground mb-8 text-balance">
              Sua moto não precisa ser cara pra trabalhar como uma{" "}
              <span className="italic">profissional.</span>
            </h1>

            <p className="text-base lg:text-lg text-muted-foreground mb-10 max-w-lg leading-relaxed tracking-wide">
              Transforme qualquer moto em um painel inteligente com GPS, chamadas, música e apps funcionando direto no guidão.
            </p>

            <ul className="space-y-4 mb-12">
              {[
                "Funciona com iFood, Uber, 99 e qualquer app",
                "CarPlay e Android Auto sem fio",
                "Instala em minutos em qualquer moto",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-foreground">
                  <Check className="w-4 h-4 text-cta flex-shrink-0" strokeWidth={2.5} />
                  <span className="text-sm tracking-wide">{item}</span>
                </li>
              ))}
            </ul>

            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <CtaButton
                size="lg"
                showArrow
                onClick={() => document.getElementById("oferta")?.scrollIntoView({ behavior: "smooth" })}
              >
                Quero transformar minha moto
              </CtaButton>
            </motion.div>
          </motion.div>
        </div>

        {/* Product image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="flex-1 flex items-center justify-center px-6 pb-12 lg:pb-0 lg:pr-16"
        >
          <img
            src={heroProduct}
            alt="Painel inteligente AutoBike montado no guidão de uma moto mostrando GPS"
            width={1024}
            height={1024}
            className="w-full max-w-md lg:max-w-xl"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
