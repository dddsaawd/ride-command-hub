import { useEffect, useState } from "react";
import {
  ArrowRight,
  Bluetooth,
  Check,
  ChevronDown,
  Clock3,
  CloudRain,
  type LucideIcon,
  Map,
  Music4,
  PhoneCall,
  PlayCircle,
  ShieldCheck,
  Smartphone,
  Star,
  SunMedium,
  TriangleAlert,
  X,
  Zap,
} from "lucide-react";

import heroImage from "@/assets/autobike-hero.jpg";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

/* ── DATA ── */

type IconItem = { icon: LucideIcon; title: string; description: string };

const heroBullets = [
  "Funciona com iFood, Uber, 99 e qualquer app",
  "CarPlay e Android Auto sem fio",
  "Instala em minutos em qualquer moto",
];

const painPoints: IconItem[] = [
  { icon: Smartphone, title: "Parar toda hora pra olhar o celular", description: "Cada parada quebra seu ritmo, atrasa a entrega e te faz perder corrida." },
  { icon: TriangleAlert, title: "Se arriscar no trânsito tentando ver rota", description: "Olhar pro celular em movimento aumenta o risco exatamente na hora do corre." },
  { icon: Clock3, title: "Perder corrida por atraso", description: "Quando você chega depois do prazo, o prejuízo bate no bolso no mesmo dia." },
  { icon: ShieldCheck, title: "Ficar vulnerável a roubo", description: "Com o celular mais guardado, você trabalha com mais discrição e segurança." },
];

const productBenefits: IconItem[] = [
  { icon: Map, title: "Waze, Maps, iFood, Uber e 99 direto na tela", description: "Tudo aparece no guidão para você navegar e aceitar corridas sem improviso." },
  { icon: Music4, title: "Música e chamadas sem tirar a mão", description: "Controle o áudio e siga no fluxo sem precisar mexer no celular." },
  { icon: Bluetooth, title: "Conexão com capacete Bluetooth", description: "Perfeito pra ouvir rota, atender e manter o foco na rua." },
  { icon: SunMedium, title: "Tela visível até no sol", description: "Leitura clara mesmo rodando no meio do dia em avenida aberta." },
  { icon: CloudRain, title: "Resistente à chuva (IP65)", description: "Feito para uso externo e rotina intensa de quem vive em cima da moto." },
  { icon: ShieldCheck, title: "Compatível com qualquer moto", description: "Instala rápido e transforma sua moto em ferramenta de trabalho." },
];

const proofCards: IconItem[] = [
  { icon: Map, title: "GPS sempre aberto", description: "Waze e Maps ficam visíveis o tempo inteiro, sem parar pra conferir a rota." },
  { icon: Music4, title: "Música rodando na tela", description: "Mostra praticidade e deixa o produto com cara de central premium." },
  { icon: PhoneCall, title: "Chamadas sem interromper o corre", description: "Atenda no capacete Bluetooth e continue a rota sem perder tempo." },
];

const faqs = [
  { question: "Funciona com iFood, Uber e 99?", answer: "Sim. Você conecta seu celular e usa qualquer aplicativo normalmente." },
  { question: "Vai cair com a moto em movimento?", answer: "Não. O sistema de fixação é reforçado para uso em estrada e rotina intensa." },
  { question: "E chuva?", answer: "Totalmente resistente, feito para uso externo e dias corridos na rua." },
  { question: "É difícil instalar?", answer: "Não. A instalação leva poucos minutos em praticamente qualquer moto." },
];

const testimonials = [
  { name: "Rafael • motoboy iFood", quote: "Antes eu parava toda hora pra olhar a rota. Agora faço mais entregas no dia sem me enrolar." },
  { name: "Camila • corridas urbanas", quote: "Atender chamada pelo capacete e seguir a navegação faz muita diferença na correria." },
  { name: "Diego • entregas 99/Uber", quote: "Produto com cara de profissional. Instalou rápido e já virou item fixo da moto." },
];

/* ── COMPONENTS ── */

const SectionHeading = ({
  kicker, title, description, inverse = false, center = false,
}: {
  kicker: string; title: string; description: string; inverse?: boolean; center?: boolean;
}) => (
  <div className={`max-w-3xl space-y-2.5 ${center ? "mx-auto text-center" : ""}`}>
    <span className="inline-flex rounded-full bg-primary/12 px-3 py-1 text-[10px] font-extrabold uppercase tracking-[0.22em] text-primary">
      {kicker}
    </span>
    <h2 className={`text-[22px] font-bold leading-tight tracking-[-0.03em] sm:text-3xl md:text-4xl ${inverse ? "text-surface-foreground" : "text-foreground"}`}>
      {title}
    </h2>
    <p className={`max-w-2xl text-[14px] leading-relaxed ${inverse ? "text-surface-foreground/65" : "text-muted-foreground"}`}>
      {description}
    </p>
  </div>
);

/* ── PAGE ── */

const Index = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    document.title = "MotoPlay Pro | Painel Inteligente para Moto";
    let meta = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }
    meta.content = "Transforme qualquer moto em um painel inteligente com GPS, chamadas, música e apps. Compatível com iFood, Uber, 99.";
  }, []);

  return (
    <main className="overflow-x-hidden bg-background text-foreground pb-[72px] md:pb-0">
      {/* ═══════ HERO ═══════ */}
      <section id="topo" className="relative isolate overflow-hidden bg-surface text-surface-foreground">
        <div className="absolute inset-0 bg-hero" />

        {/* Desktop image */}
        <div className="absolute inset-y-0 right-0 hidden w-[52%] lg:block">
          <img src={heroImage} alt="Moto com painel inteligente no guidão" className="h-full w-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/85 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-surface/80 via-transparent to-transparent" />
        </div>

        <div className="container relative flex min-h-[100svh] flex-col justify-center px-5 py-10 sm:px-6 md:min-h-[90vh] md:py-20">
          <div className="max-w-2xl space-y-4">
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-surface-foreground/10 bg-surface-foreground/5 px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.24em] text-primary backdrop-blur">
              🔥 Estoque limitado no Brasil
            </div>

            <h1 className="max-w-xl text-balance text-[26px] font-bold leading-[1.1] tracking-[-0.03em] sm:text-4xl md:text-5xl lg:text-6xl">
              Sua moto não precisa ser cara pra trabalhar como uma profissional.
            </h1>

            <p className="max-w-xl text-[14px] leading-relaxed text-surface-foreground/70 sm:text-[15px] md:text-lg">
              Transforme qualquer moto em um painel inteligente com GPS, chamadas, música e apps funcionando direto no guidão.
            </p>

            <ul className="grid gap-2">
              {heroBullets.map((item) => (
                <li key={item} className="flex items-center gap-2.5 rounded-xl border border-surface-foreground/10 bg-surface-foreground/5 px-3 py-2.5 text-[13px] font-semibold leading-snug text-surface-foreground/90">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <Button asChild size="lg" className="h-[50px] w-full rounded-full text-[14px] font-extrabold shadow-cta sm:w-auto sm:px-8">
              <a href="#oferta">
                QUERO TRANSFORMAR MINHA MOTO AGORA
                <ArrowRight className="h-5 w-5" />
              </a>
            </Button>

            <div className="flex flex-wrap items-center gap-2.5 border-t border-surface-foreground/10 pt-4 text-[12px] text-surface-foreground/60">
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-3 w-3 fill-primary text-primary" />
                ))}
                <span className="ml-1 font-semibold text-surface-foreground">4,9/5</span>
              </div>
              <span className="h-1 w-1 rounded-full bg-primary" />
              <span>iFood • Uber • 99 • Qualquer app</span>
            </div>
          </div>

          {/* Mobile hero image */}
          <div className="relative mt-6 overflow-hidden rounded-2xl border border-surface-foreground/10 lg:hidden">
            <img src={heroImage} alt="Painel inteligente instalado em moto" className="h-[220px] w-full object-cover sm:h-[280px]" loading="eager" />
            <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/30 to-transparent" />
          </div>

          <div className="mt-5 flex justify-center lg:hidden">
            <ChevronDown className="h-5 w-5 animate-bounce text-surface-foreground/30" />
          </div>
        </div>
      </section>

      {/* ═══════ DOR REAL ═══════ */}
      <section className="py-12 sm:py-16 md:py-24">
        <div className="container px-5 sm:px-6">
          <SectionHeading
            kicker="Dor real"
            title="Se você usa moto no dia a dia, sabe como é."
            description="Isso não é só desconforto — isso te faz perder dinheiro todos os dias."
          />

          <div className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {painPoints.map(({ icon: Icon, title, description }) => (
              <Card key={title} className="rounded-2xl border-border/80 bg-card/95 p-4 shadow-sm">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="h-[18px] w-[18px]" />
                </div>
                <h3 className="mt-3 text-[15px] font-bold leading-snug">{title}</h3>
                <p className="mt-1.5 text-[13px] leading-relaxed text-muted-foreground">{description}</p>
              </Card>
            ))}
          </div>

          <div className="mt-5 rounded-2xl bg-primary px-4 py-4 text-primary-foreground shadow-cta sm:px-6 md:flex md:items-center md:justify-between md:py-5">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-primary-foreground/75">Impacto real</p>
              <p className="mt-1 text-[16px] font-bold leading-tight sm:text-lg md:text-xl">
                Cada parada desnecessária vira atraso, risco e corrida perdida.
              </p>
            </div>
            <div className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-primary-foreground/10 px-3 py-1.5 text-[12px] font-semibold md:mt-0">
              <Zap className="h-3.5 w-3.5" /> Ferramenta de trabalho
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ TRANSFORMAÇÃO ═══════ */}
      <section className="bg-surface py-12 text-surface-foreground sm:py-16 md:py-24">
        <div className="container px-5 sm:px-6">
          <SectionHeading
            inverse
            kicker="Transformação"
            title="Antes é improviso, depois é produtividade."
            description="Com o painel no guidão, você para menos, enxerga mais e roda com uma experiência profissional."
          />

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl border border-surface-foreground/10 bg-surface-foreground/5 p-4 sm:p-5">
              <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-surface-foreground/50">Antes</p>
              <ul className="mt-3 space-y-2.5">
                {["Celular no bolso", "Atraso", "Risco"].map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-[15px] font-semibold">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-destructive/15 text-destructive">
                      <X className="h-3.5 w-3.5" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-primary/20 bg-panel p-4 sm:p-5">
              <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-primary">Depois</p>
              <ul className="mt-3 space-y-2.5">
                {["GPS sempre aberto", "Apps rodando na tela", "Chamadas sem parar", "Mais entregas no dia"].map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-[15px] font-semibold text-surface-foreground">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-success/15 text-success">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-[16px] font-bold leading-tight text-surface-foreground sm:text-lg">
                Isso muda completamente sua rotina.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ PRODUTO ═══════ */}
      <section className="py-12 sm:py-16 md:py-24">
        <div className="container px-5 sm:px-6">
          <SectionHeading
            kicker="Produto"
            title="O Painel Inteligente transforma sua moto em uma central completa."
            description="Reduz atrito, acelera decisão e deixa sua operação profissional todos os dias."
          />

          <div className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
            {productBenefits.map(({ icon: Icon, title, description }) => (
              <Card key={title} className="rounded-2xl border-border/80 bg-card p-4 shadow-sm active:scale-[0.98] transition-transform duration-150">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-secondary text-primary">
                  <Icon className="h-[18px] w-[18px]" />
                </div>
                <h3 className="mt-3 text-[15px] font-bold leading-snug">{title}</h3>
                <p className="mt-1.5 text-[13px] leading-relaxed text-muted-foreground">{description}</p>
              </Card>
            ))}
          </div>

          {/* CTA intermediário — mobile only */}
          <div className="mt-6 sm:hidden">
            <Button asChild size="lg" className="h-[50px] w-full rounded-full text-[14px] font-extrabold shadow-cta">
              <a href="#oferta">
                QUERO O MEU AGORA
                <ArrowRight className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* ═══════ PROVA VISUAL ═══════ */}
      <section id="prova" className="py-12 sm:py-16 md:py-24">
        <div className="container px-5 sm:px-6">
          <SectionHeading
            kicker="Prova visual"
            title="Veja funcionando na prática 👇"
            description="GPS, música e chamadas — os três momentos que mostram o valor em segundos."
          />

          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            <div className="relative overflow-hidden rounded-2xl border border-border bg-surface sm:col-span-2">
              <img src={heroImage} alt="Painel mostrando navegação" className="absolute inset-0 h-full w-full object-cover opacity-40" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/80 to-surface/30" />
              <div className="relative flex min-h-[220px] flex-col justify-end p-5 text-surface-foreground sm:min-h-[280px] sm:p-7">
                <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-surface-foreground/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
                  <PlayCircle className="h-3.5 w-3.5" /> Waze rodando
                </span>
                <h3 className="mt-3 max-w-xl text-[18px] font-bold leading-tight sm:text-xl md:text-2xl">
                  GPS aberto, rota visível e menos parada desnecessária.
                </h3>
              </div>
            </div>

            {proofCards.slice(1).map(({ icon: Icon, title, description }) => (
              <div key={title} className="rounded-2xl border border-primary/15 bg-panel p-4 text-surface-foreground sm:p-5">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-surface-foreground/10 text-primary">
                  <Icon className="h-[18px] w-[18px]" />
                </div>
                <h3 className="mt-3 text-[16px] font-bold leading-tight">{title}</h3>
                <p className="mt-1.5 text-[13px] leading-relaxed text-surface-foreground/65">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ PROVA SOCIAL ═══════ */}
      <section className="bg-secondary/50 py-12 sm:py-16">
        <div className="container px-5 sm:px-6">
          <SectionHeading kicker="Prova social" title="Quem usa, recomenda." description="Avaliações de quem vive na rua e já testou na rotina real." center />

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {testimonials.map((item) => (
              <Card key={item.name} className="rounded-2xl border-border/80 bg-card p-4 shadow-sm">
                <div className="flex items-center gap-0.5 text-primary">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-3 w-3 fill-primary text-primary" />
                  ))}
                </div>
                <p className="mt-2.5 text-[13px] leading-relaxed text-foreground">"{item.quote}"</p>
                <p className="mt-3 text-[10px] font-bold uppercase tracking-[0.18em] text-muted-foreground">{item.name}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ FAQ ═══════ */}
      <section className="py-12 sm:py-16 md:py-24">
        <div className="container grid gap-6 px-5 sm:px-6 lg:grid-cols-[1fr_1.1fr] lg:gap-12">
          <SectionHeading kicker="Dúvidas" title="Dúvidas? A gente responde." description="FAQ direto pra quem trabalha de moto." />

          <div className="space-y-2.5">
            {faqs.map((item, idx) => (
              <button
                key={item.question}
                type="button"
                className="w-full rounded-2xl border border-border bg-card p-4 text-left shadow-sm transition-colors active:bg-secondary/30"
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="text-[14px] font-bold leading-snug">{item.question}</span>
                  <span className={`shrink-0 text-lg text-primary transition-transform duration-200 ${openFaq === idx ? "rotate-45" : ""}`}>+</span>
                </div>
                {openFaq === idx && (
                  <p className="mt-2.5 text-[13px] leading-relaxed text-muted-foreground">{item.answer}</p>
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ ANCORAGEM DE VALOR ═══════ */}
      <section className="bg-secondary/50 py-12 sm:py-16">
        <div className="container px-5 sm:px-6">
          <SectionHeading kicker="Valor" title="Quanto custa ficar sem uma solução assim?" description="Junta celular + painel por uma fração do preço." center />

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            <Card className="rounded-2xl border-border/80 bg-card p-4 text-center shadow-sm">
              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-muted-foreground">Celular novo</p>
              <p className="mt-2 text-2xl font-bold tracking-[-0.04em] sm:text-3xl">R$2.000+</p>
              <p className="mt-1 text-[12px] text-muted-foreground">E continua exposto no trânsito.</p>
            </Card>
            <Card className="rounded-2xl border-border/80 bg-card p-4 text-center shadow-sm">
              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-muted-foreground">Painel original</p>
              <p className="mt-2 text-2xl font-bold tracking-[-0.04em] sm:text-3xl">R$3.000+</p>
              <p className="mt-1 text-[12px] text-muted-foreground">Caro demais pra rotina real.</p>
            </Card>
            <Card className="rounded-2xl border-primary/20 bg-primary p-4 text-center text-primary-foreground shadow-cta">
              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-primary-foreground/75">MotoPlay Pro</p>
              <p className="mt-2 text-2xl font-bold tracking-[-0.04em] sm:text-3xl">R$297</p>
              <p className="mt-1 text-[12px] text-primary-foreground/75">GPS + apps + chamadas.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* ═══════ OFERTA ═══════ */}
      <section id="oferta" className="py-12 sm:py-16 md:py-24">
        <div className="container px-5 sm:px-6">
          <div className="overflow-hidden rounded-2xl border border-primary/15 bg-surface bg-panel text-surface-foreground shadow-cta sm:rounded-3xl">
            <div className="grid gap-6 p-5 sm:p-7 md:p-10 lg:grid-cols-[1fr_0.95fr]">
              <div className="space-y-3">
                <p className="text-[10px] font-bold uppercase tracking-[0.26em] text-primary">Oferta especial</p>
                <h2 className="max-w-xl text-[22px] font-bold leading-none tracking-[-0.04em] sm:text-3xl md:text-4xl">
                  De R$497 por <span className="text-primary">R$297</span> hoje.
                </h2>
                <p className="max-w-lg text-[14px] leading-relaxed text-surface-foreground/65">
                  Ou em até 12x. Frete grátis. Garantia de 7 dias.
                </p>
                <ul className="space-y-2.5 pt-1">
                  {["Frete grátis", "Garantia de 7 dias", "Instala em minutos"].map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-[13px] font-semibold">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                        <Check className="h-3.5 w-3.5" />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-surface-foreground/10 bg-surface-foreground/5 p-5 text-center">
                <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-surface-foreground/50">Lote liberado hoje</p>
                <p className="mt-3 text-[15px] font-semibold text-surface-foreground/50 line-through">De R$497</p>
                <p className="mt-0.5 text-4xl font-bold leading-none tracking-[-0.05em] text-primary sm:text-5xl">R$297</p>
                <p className="mt-1 text-[14px] text-surface-foreground/60">ou em até 12x</p>

                <Button asChild size="lg" className="mt-5 h-[50px] w-full rounded-full text-[14px] font-extrabold shadow-cta">
                  <a href="#oferta">
                    GARANTIR O MEU AGORA
                    <ArrowRight className="h-5 w-5" />
                  </a>
                </Button>
                <p className="mt-3 text-[11px] text-surface-foreground/45">
                  Pagamento facilitado · Envio grátis · Garantia real
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ URGÊNCIA ═══════ */}
      <section className="pb-12 sm:pb-16 md:pb-24">
        <div className="container px-5 sm:px-6">
          <div className="rounded-2xl border border-primary/15 bg-primary/10 p-4 sm:p-6 md:flex md:items-center md:justify-between md:p-7">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-primary">🚨 Urgência</p>
              <h2 className="mt-1 text-[18px] font-bold leading-tight sm:text-xl md:text-2xl">
                Devido à alta demanda, estamos liberando poucas unidades por lote.
              </h2>
              <p className="mt-1.5 text-[13px] text-muted-foreground">Pode esgotar a qualquer momento.</p>
            </div>
            <Button asChild size="lg" className="mt-3 h-[50px] w-full rounded-full text-[14px] font-extrabold shadow-cta sm:w-auto sm:px-7 md:mt-0">
              <a href="#oferta">
                Quero garantir agora
                <ArrowRight className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* ═══════ CTA FINAL ═══════ */}
      <section className="bg-surface py-12 text-surface-foreground sm:py-16 md:py-20">
        <div className="container px-5 sm:px-6">
          <div className="max-w-3xl space-y-3">
            <p className="text-[10px] font-bold uppercase tracking-[0.26em] text-primary">CTA final</p>
            <h2 className="text-[22px] font-bold leading-none tracking-[-0.04em] sm:text-3xl md:text-4xl">
              Se você trabalha com moto… isso aqui não é acessório.
            </h2>
            <p className="text-[18px] font-bold tracking-[-0.02em] text-surface-foreground/75 sm:text-xl">
              É ferramenta de trabalho.
            </p>
            <Button asChild size="lg" className="h-[50px] w-full rounded-full text-[14px] font-extrabold shadow-cta sm:w-auto sm:px-8">
              <a href="#oferta">
                QUERO TRANSFORMAR MINHA MOTO AGORA
                <ArrowRight className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* ═══════ STICKY CTA MOBILE ═══════ */}
      <div className="fixed inset-x-0 bottom-0 z-50 bg-gradient-to-t from-background via-background/95 to-transparent px-4 pb-3 pt-5 md:hidden">
        <Button asChild size="lg" className="h-[50px] w-full rounded-full text-[14px] font-extrabold shadow-cta">
          <a href="#oferta">
            GARANTIR O MEU AGORA 🔥
            <ArrowRight className="h-5 w-5" />
          </a>
        </Button>
      </div>
    </main>
  );
};

export default Index;
