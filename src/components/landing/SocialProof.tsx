import SectionWrapper from "@/components/SectionWrapper";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  { name: "Carlos M.", city: "São Paulo, SP", text: "Melhor investimento que fiz. Faço 30% mais entregas agora com o GPS sempre na tela.", rating: 5 },
  { name: "Rodrigo S.", city: "Rio de Janeiro, RJ", text: "Instala em 5 minutos. Uso iFood e Waze ao mesmo tempo sem problema nenhum.", rating: 5 },
  { name: "Amanda L.", city: "Belo Horizonte, MG", text: "Parei de usar suporte de celular. Muito mais seguro e prático. Super recomendo!", rating: 5 },
  { name: "João P.", city: "Curitiba, PR", text: "Funciona até na chuva. Tela boa, som no capacete bluetooth. Perfeito pra quem roda todo dia.", rating: 5 },
];

const SocialProof = () => (
  <SectionWrapper>
    <div className="text-center mb-16">
      <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-6">Depoimentos</p>
      <h2 className="font-serif text-3xl md:text-5xl font-medium text-foreground leading-tight mb-4">
        Quem usa, recomenda
      </h2>
      <p className="text-muted-foreground tracking-wide">
        Mais de <span className="font-medium text-foreground">2.300 motoboys</span> já transformaram sua rotina.
      </p>
    </div>

    <div className="grid sm:grid-cols-2 gap-0 border border-border max-w-4xl mx-auto">
      {reviews.map(({ name, city, text, rating }, i) => (
        <motion.div
          key={name}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          className="p-8 border-b border-r border-border last:border-b-0 [&:nth-last-child(2)]:border-b-0"
        >
          <div className="flex items-center gap-0.5 mb-4">
            {Array.from({ length: rating }).map((_, j) => (
              <Star key={j} className="w-3.5 h-3.5 fill-highlight text-highlight" />
            ))}
          </div>
          <p className="text-foreground mb-6 text-sm leading-relaxed italic">"{text}"</p>
          <div>
            <p className="font-medium text-foreground text-sm">{name}</p>
            <p className="text-muted-foreground text-xs tracking-wide">{city}</p>
          </div>
        </motion.div>
      ))}
    </div>
  </SectionWrapper>
);

export default SocialProof;
