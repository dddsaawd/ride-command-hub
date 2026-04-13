import SectionWrapper from "@/components/SectionWrapper";
import heroProduct from "@/assets/hero-product.png";
import { motion } from "framer-motion";
import { Map, Music, Phone, Sun, Droplets, Bike } from "lucide-react";

const features = [
  { icon: Map, title: "Waze, Maps, iFood, Uber e 99", desc: "Todos os apps direto na tela" },
  { icon: Music, title: "Música e chamadas", desc: "Sem tirar a mão do guidão" },
  { icon: Phone, title: "Capacete Bluetooth", desc: "Conexão direta com seu capacete" },
  { icon: Sun, title: "Tela visível no sol", desc: "Brilho alto para uso externo" },
  { icon: Droplets, title: "Resistente à chuva (IP65)", desc: "Feito para uso externo" },
  { icon: Bike, title: "Compatível com qualquer moto", desc: "Instalação universal" },
];

const ProductSection = () => (
  <SectionWrapper>
    <div className="text-center mb-16">
      <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-6">O produto</p>
      <h2 className="font-serif text-3xl md:text-5xl font-medium text-foreground leading-tight mb-4">
        Painel Inteligente <span className="italic">AutoBike</span>
      </h2>
      <p className="text-muted-foreground tracking-wide max-w-lg mx-auto">
        Transforma sua moto em uma central completa de trabalho e entretenimento.
      </p>
    </div>

    <div className="flex flex-col lg:flex-row items-center gap-16">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex-1 flex justify-center"
      >
        <img
          src={heroProduct}
          alt="Painel AutoBike com GPS ativo"
          width={1024}
          height={1024}
          loading="lazy"
          className="w-full max-w-sm"
        />
      </motion.div>

      <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-0 border border-border">
        {features.map(({ icon: Icon, title, desc }, i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="flex items-start gap-4 p-6 border-b border-r border-border last:border-b-0 [&:nth-last-child(2)]:border-b-0"
          >
            <Icon className="w-5 h-5 text-cta flex-shrink-0 mt-0.5" strokeWidth={1.5} />
            <div>
              <h4 className="font-medium text-foreground text-sm mb-1">{title}</h4>
              <p className="text-muted-foreground text-xs tracking-wide">{desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </SectionWrapper>
);

export default ProductSection;
