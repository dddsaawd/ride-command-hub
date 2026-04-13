import SectionWrapper from "@/components/SectionWrapper";
import heroProduct from "@/assets/hero-product.png";
import { Map, Music, Phone, Sun, Droplets, Bike } from "lucide-react";

const features = [
  { icon: Map, title: "Waze, Maps, iFood, Uber e 99", desc: "Todos os apps direto na tela" },
  { icon: Music, title: "Música e chamadas", desc: "Sem tirar a mão do guidão" },
  { icon: Phone, title: "Capacete Bluetooth", desc: "Conexão direta com seu capacete" },
  { icon: Sun, title: "Tela visível no sol", desc: "Brilho alto para uso externo" },
  { icon: Droplets, title: "Resistente à chuva", desc: "Certificação IP65" },
  { icon: Bike, title: "Compatível com qualquer moto", desc: "Instalação universal" },
];

const ProductSection = () => (
  <SectionWrapper alt>
    <h2 className="font-display text-2xl md:text-4xl font-bold text-center text-foreground mb-4">
      O Painel Inteligente <span className="text-primary">AutoBike</span>
    </h2>
    <p className="text-center text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
      Transforma sua moto em uma central completa de trabalho e entretenimento.
    </p>

    <div className="flex flex-col lg:flex-row items-center gap-12">
      <div className="flex-1 flex justify-center">
        <img
          src={heroProduct}
          alt="Painel AutoBike com GPS ativo"
          width={1024}
          height={1024}
          loading="lazy"
          className="w-full max-w-sm drop-shadow-xl"
        />
      </div>

      <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-5">
        {features.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="flex items-start gap-4 bg-background rounded-xl p-5 border border-border">
            <span className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <Icon className="w-5 h-5 text-primary" />
            </span>
            <div>
              <h4 className="font-semibold text-foreground text-sm">{title}</h4>
              <p className="text-muted-foreground text-sm">{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </SectionWrapper>
);

export default ProductSection;
