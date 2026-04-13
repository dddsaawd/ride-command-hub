import heroProduct from "@/assets/hero-product.png";
import CtaButton from "@/components/CtaButton";
import { Check, Flame } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative bg-background overflow-hidden pt-8 pb-16 md:pt-16 md:pb-24 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          {/* Copy */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-destructive/10 text-destructive px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Flame className="w-4 h-4" />
              Estoque limitado no Brasil
            </div>

            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold leading-tight text-foreground mb-6 text-balance">
              Sua moto não precisa ser cara pra trabalhar como uma{" "}
              <span className="text-primary">profissional.</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0">
              Transforme qualquer moto em um painel inteligente com GPS, chamadas, música e apps funcionando direto no guidão.
            </p>

            <ul className="space-y-3 mb-10 text-left inline-block">
              {[
                "Funciona com iFood, Uber, 99 e qualquer app",
                "CarPlay e Android Auto sem fio",
                "Instala em minutos em qualquer moto",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-foreground">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                    <Check className="w-4 h-4 text-primary" />
                  </span>
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>

            <div>
              <CtaButton size="lg" onClick={() => document.getElementById("oferta")?.scrollIntoView({ behavior: "smooth" })}>
                QUERO TRANSFORMAR MINHA MOTO AGORA
              </CtaButton>
            </div>
          </div>

          {/* Image */}
          <div className="flex-1 flex justify-center">
            <img
              src={heroProduct}
              alt="Painel inteligente AutoBike montado no guidão de uma moto mostrando GPS"
              width={1024}
              height={1024}
              className="w-full max-w-md lg:max-w-lg drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
