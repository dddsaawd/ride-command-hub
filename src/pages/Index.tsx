import { useEffect, useState, useCallback } from "react";
import MotoSelector from "@/components/MotoSelector";
import {
  ArrowRight,
  Bluetooth,
  Check,
  ChevronDown,
  Clock3,
  CloudRain,
  type LucideIcon,
  Map,
  Monitor,
  Music4,
  Package,
  PhoneCall,
  PlayCircle,
  Power,
  Shield,
  ShieldCheck,
  Smartphone,
  Star,
  SunMedium,
  Truck,
  TriangleAlert,
  Users,
  Wrench,
  X,
  Zap,
  Eye,
  Gauge,
  Camera,
  Box,
  FileText,
  Cable,
  Settings,
  MessageSquare,
  Heart,
  Lock,
  CreditCard,
} from "lucide-react";

import logoMotoplay from "@/assets/logo.png";
import heroImg from "@/assets/motoplay-hero.jpg";
import entregadorImg from "@/assets/motoplay-entregador.jpg";
import logoIfood from "@/assets/logo-ifood.png";
import logoUber from "@/assets/logo-uber.png";
import logo99 from "@/assets/logo-99.png";
import logoWaze from "@/assets/logo-waze.png";
import logoGmaps from "@/assets/logo-gmaps.png";
import logoSpotify from "@/assets/logo-spotify.png";
import logoWhatsapp from "@/assets/logo-whatsapp.png";
import logoYoutube from "@/assets/logo-youtube.png";
import logoZe from "@/assets/logo-ze.png";
import logoKeeta from "@/assets/logo-keeta.png";

import produtoProvaDagua from "@/assets/produto-prova-dagua.png";
import produtoAppsEntregas from "@/assets/produto-apps-entregas.png";
import produtoInstalacao from "@/assets/produto-instalacao.png";
import produtoSuporteRotativo from "@/assets/produto-suporte-rotativo.png";
import produtoUnidadeCompleta from "@/assets/produto-unidade-completa.png";
import produtoCarplayAndroid from "@/assets/produto-carplay-android.webp";
import produtoAntiReflexo from "@/assets/produto-anti-reflexo.webp";
import produtoSuporteMaleavel from "@/assets/produto-suporte-maleavel.webp";
import produtoMotoBmw from "@/assets/produto-moto-bmw.webp";
import produtoKitCompleto from "@/assets/produto-kit-completo.webp";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

/* ── helpers ── */
const CTA_LINK = "#compatibilidade";

const appLogos = [
  { src: logoIfood, alt: "iFood" },
  { src: logoUber, alt: "Uber" },
  { src: logo99, alt: "99" },
  { src: logoKeeta, alt: "Keeta" },
  { src: logoWaze, alt: "Waze" },
  { src: logoGmaps, alt: "Google Maps" },
  { src: logoSpotify, alt: "Spotify" },
  { src: logoWhatsapp, alt: "WhatsApp" },
  { src: logoYoutube, alt: "YouTube" },
  { src: logoZe, alt: "Zé Delivery" },
];

const faqs = [
  { q: "Funciona com iFood, Uber e 99?", a: "Sim. Você conecta seu celular via CarPlay ou Android Auto e usa qualquer aplicativo normalmente — iFood, Uber, 99, Rappi, Waze, tudo." },
  { q: "É resistente à chuva?", a: "Sim! Classificação IP67 — totalmente resistente a chuva, poeira e sol intenso. Feito para a rotina real." },
  { q: "Liga automaticamente?", a: "Sim. O MotoPlay Pro liga e desliga junto com a ignição da moto. Zero botão, zero espera." },
  { q: "Vai funcionar na minha moto?", a: "99% de compatibilidade. Funciona com Honda, Yamaha, BMW, Kawasaki, Suzuki e praticamente qualquer outra marca." },
  { q: "É difícil instalar?", a: "Não. Kit completo incluso — instala em poucos minutos sem ferramentas especiais." },
  { q: "A tela é visível no sol?", a: "Sim. Tela IPS HD com alta luminosidade, visível mesmo sob luz solar direta." },
  { q: "Tem garantia?", a: "Sim. Garantia de satisfação de 90 dias — se não gostar, devolvemos seu dinheiro." },
  { q: "Qual o prazo de entrega?", a: "Envio rápido para todo o Brasil com frete grátis. Prazo médio de 3-6 dias." },
];

const testimonials = [
  { name: "Carlos M.", role: "Entregador iFood", quote: "Melhor investimento que fiz pra trabalhar. Não perco mais corrida e faço mais entregas no dia. A tela é nítida até no sol forte." },
  { name: "Rafael S.", role: "Motoboy Uber", quote: "Instalei em 10 minutos. Liga junto com a moto. Funciona perfeito com iFood e Uber. Outro nível." },
  { name: "Amanda L.", role: "Esposa de entregador", quote: "Meu marido parou de usar o celular no suporte. Mais seguro, mais prático. A gente sente a diferença." },
  { name: "Lucas F.", role: "Motociclista urbano", quote: "Achei que não ia funcionar na minha moto, mas encaixou perfeitamente. Parece que saiu de fábrica assim." },
];



/* ── PAGE ── */
const Index = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [showStickyLogo, setShowStickyLogo] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.title = "MotoPlay Pro | Painel Inteligente para Moto";
    let meta = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    if (!meta) { meta = document.createElement("meta"); meta.name = "description"; document.head.appendChild(meta); }
    meta.content = "Chuva, vibração, roubo — quantos celulares você já perdeu? MotoPlay Pro: tela própria no guidão com GPS, apps de entrega, música e chamadas.";
  }, []);

  useEffect(() => {
    const onScroll = () => setShowStickyLogo(window.scrollY < 80);
    setShowStickyLogo(true);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const menuLinks = [
    { label: "Início", href: "#" },
    { label: "Benefícios", href: "#beneficios" },
    { label: "Para Entregadores", href: "#entregadores" },
    { label: "Compatibilidade", href: "#compatibilidade" },
    { label: "FAQ", href: "#faq" },
    { label: "Oferta", href: "#oferta" },
  ];

  return (
    <main className="overflow-x-hidden bg-background text-foreground pb-[72px] md:pb-0">

      {/* ═══════ FIXED HEADER ═══════ */}
      <div
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between bg-transparent px-4 py-3 transition-all duration-300 ${showStickyLogo ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"}`}
      >
        <img src={logoMotoplay} alt="MotoPlay Pro" className="h-16 w-auto -ml-1" />
        <button onClick={() => setMenuOpen(true)} className="flex flex-col gap-[5px] p-1" aria-label="Abrir menu">
          <span className="block h-[2px] w-6 bg-white rounded-full" />
          <span className="block h-[2px] w-6 bg-white rounded-full" />
          <span className="block h-[2px] w-4 bg-white rounded-full" />
        </button>
      </div>

      {/* ═══════ MOBILE SIDE MENU ═══════ */}
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-[60] bg-black/50 transition-opacity duration-300 ${menuOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        onClick={() => setMenuOpen(false)}
      />
      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 z-[70] h-full w-[280px] bg-white shadow-2xl transition-transform duration-300 ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex items-center justify-between px-5 py-4 border-b border-border">
          <img src={logoMotoplay} alt="MotoPlay Pro" className="h-7 w-auto" />
          <button onClick={() => setMenuOpen(false)} className="p-1" aria-label="Fechar menu">
            <X className="h-6 w-6 text-foreground" />
          </button>
        </div>
        <nav className="flex flex-col px-5 py-6 gap-1">
          {menuLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="rounded-xl px-4 py-3 text-[14px] font-semibold text-foreground hover:bg-secondary transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href={CTA_LINK}
            onClick={() => setMenuOpen(false)}
            className="mt-4 flex items-center justify-center gap-2 rounded-full bg-primary px-4 py-3 text-[14px] font-bold text-primary-foreground shadow-cta"
          >
            GARANTIR O MEU <ArrowRight className="h-4 w-4" />
          </a>
        </nav>
      </div>


      {/* ═══════ HERO ═══════ */}
      <section className="relative isolate overflow-hidden bg-surface text-surface-foreground">
        <div className="absolute inset-0 bg-hero" />
        <div className="container relative flex min-h-[100svh] flex-col px-4 py-8 pt-24">

          <div className="flex flex-1 flex-col justify-center">
          <div className="max-w-2xl space-y-3">

            <h1 className="text-[26px] font-bold leading-[1.08] tracking-[-0.03em] sm:text-4xl">
              Seu celular <span className="text-primary">não sobrevive</span> no guidão. Esse painel sim.
            </h1>
            <p className="text-[14px] leading-relaxed text-surface-foreground/70">
              O MotoPlay Pro resolve de vez: tela própria no guidão com GPS, apps de entrega, música e chamadas. Tocou uma corrida? Aceita direto na tela.
            </p>

            <ul className="grid gap-2">
              {[
                "iFood, Uber, 99, Rappi — TODOS os apps",
                "Waze, Google Maps — GPS sem travar",
                "Liga e desliga com a moto",
                "Chuva, sol, poeira — feito pra rotina real",
              ].map((t) => (
                <li key={t} className="flex items-center gap-2 rounded-xl border border-surface-foreground/10 bg-surface-foreground/5 px-3 py-2 text-[13px] font-semibold text-surface-foreground/90">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary"><Check className="h-3 w-3" /></span>
                  {t}
                </li>
              ))}
            </ul>

          </div>

          {/* Hero VSL mobile */}
          <div className="relative mt-5 overflow-hidden rounded-2xl border border-surface-foreground/10 lg:hidden">
            <video
              className="w-full aspect-[9/16] max-h-[520px] object-cover bg-black"
              controls
              playsInline
              preload="metadata"
            >
              <source src="/vsl-motoplay.mp4" type="video/mp4" />
            </video>
          </div>

          <ChevronDown className="mx-auto mt-4 h-5 w-5 animate-bounce text-surface-foreground/30 lg:hidden" />
          </div>
        </div>
      </section>

      {/* ═══════ APP LOGOS MARQUEE ═══════ */}
      <section className="bg-surface py-5 border-t border-surface-foreground/5 overflow-hidden">
        <p className="text-center text-[10px] font-bold uppercase tracking-[0.22em] text-surface-foreground/40 mb-3">Integração total com seus apps</p>
        <div className="marquee-track flex w-max gap-8">
          {[...appLogos, ...appLogos, ...appLogos].map((l, i) => (
            <div key={`${l.alt}-${i}`} className="flex flex-col items-center gap-1.5 shrink-0">
              <img src={l.src} alt={l.alt} className="h-14 w-14 rounded-2xl object-cover" loading="lazy" />
              <span className="text-[10px] font-semibold text-surface-foreground/60">{l.alt}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════ SOCIAL PROOF BAR ═══════ */}
      <section className="bg-primary py-3 text-primary-foreground">
        <div className="container px-4 flex flex-col items-center gap-1 text-center">
          <p className="text-[13px] font-bold">+5.000 motociclistas já garantiram o deles</p>
          <div className="flex gap-4 text-[11px] font-semibold text-primary-foreground/80">
            <span className="flex items-center gap-1"><Truck className="h-3 w-3" /> Envio Rápido</span>
            <span className="flex items-center gap-1"><MessageSquare className="h-3 w-3" /> Suporte</span>
            <span className="flex items-center gap-1"><Lock className="h-3 w-3" /> Compra Segura</span>
          </div>
        </div>
      </section>



      <section className="py-10">
        <div className="container px-4">
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-primary">Por que MotoPlay Pro</p>
          <h2 className="mt-1 text-[20px] font-bold leading-tight tracking-[-0.03em]">4 pilares que transformam sua experiência</h2>

          {/* Product hero image */}
          <div className="mt-5 overflow-hidden rounded-2xl">
            <img src={produtoMotoBmw} alt="MotoPlay Pro instalado em moto BMW" className="w-full object-cover" loading="lazy" />
          </div>

          <div className="mt-5 grid grid-cols-2 gap-3">
            {([
              { icon: Zap, title: "Tecnologia Útil", desc: "GPS, música, chamadas e apps no guidão" },
              { icon: Wrench, title: "Praticidade Real", desc: "Liga com a moto, conecta rápido" },
              { icon: Monitor, title: "Upgrade Completo", desc: "Sua moto fica mais tecnológica e premium" },
              { icon: ShieldCheck, title: "Confiança Total", desc: "Compatível, resistente, visível no sol" },
            ] as { icon: LucideIcon; title: string; desc: string }[]).map(({ icon: Icon, title, desc }) => (
              <Card key={title} className="rounded-2xl p-3 border-border/80 shadow-sm">
                <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-primary/10 text-primary"><Icon className="h-4 w-4" /></div>
                <h3 className="mt-2 text-[13px] font-bold leading-snug">{title}</h3>
                <p className="mt-1 text-[11px] leading-relaxed text-muted-foreground">{desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ BENEFÍCIOS ═══════ */}
      <section className="py-10 bg-secondary/40">
        <div className="container px-4">
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-primary">Simples no dia a dia</p>
          <h2 className="mt-1 text-[20px] font-bold leading-tight">Benefícios que você sente na hora.</h2>

          {/* Installation + Anti-reflexo images */}
          <div className="mt-5 overflow-hidden rounded-2xl">
            <img src={produtoInstalacao} alt="Instalação fácil e prática do MotoPlay Pro" className="w-full h-auto object-cover rounded-2xl" loading="lazy" />
          </div>

          <div className="mt-4 grid grid-cols-2 gap-3">
            {([
              { icon: Wrench, title: "Fácil de Instalar", desc: "Poucas peças, sem ferramentas especiais" },
              { icon: SunMedium, title: "Tela Visível no Sol", desc: "Alta luminosidade, sem reflexos" },
              { icon: Power, title: "Liga Automático", desc: "Junto com a ignição da moto" },
              { icon: Bluetooth, title: "Conexão Sem Fio", desc: "CarPlay e Android Auto wireless" },
            ] as { icon: LucideIcon; title: string; desc: string }[]).map(({ icon: Icon, title, desc }) => (
              <Card key={title} className="rounded-2xl p-3 border-border/80 shadow-sm">
                <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-primary/10 text-primary"><Icon className="h-4 w-4" /></div>
                <h3 className="mt-2 text-[13px] font-bold leading-snug">{title}</h3>
                <p className="mt-1 text-[11px] leading-relaxed text-muted-foreground">{desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ PARA ENTREGADORES ═══════ */}
      <section className="py-10 bg-surface text-surface-foreground">
        <div className="container px-4">
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-primary">Para Entregadores</p>
          <h2 className="mt-1 text-[20px] font-bold leading-tight">Aceite corridas direto na tela</h2>
          <p className="mt-1 text-[13px] text-surface-foreground/65 leading-relaxed">
            iFood, Uber, 99, Rappi — funciona com TODOS os apps. Código, finalização, avaliação — tudo perfeitamente igual ao celular. <strong className="text-surface-foreground">Seu celular fica seguro no bolso o tempo todo.</strong>
          </p>

          <div className="mt-5 overflow-hidden rounded-2xl border border-surface-foreground/10">
            <img src={produtoAppsEntregas} alt="Apps de entrega compatíveis - iFood, Uber, 99, Rappi" className="w-full object-cover" loading="lazy" />
          </div>

          <div className="mt-5 space-y-3">
            {[
              { step: "1", title: "Corrida toca na tela", desc: "Notificação aparece na multimídia igual ao celular. Valor, distância e restaurante." },
              { step: "2", title: "Aceita direto no guidão", desc: "Toque na tela e aceite. Sem tirar o celular. Sem risco." },
              { step: "3", title: "GPS guia o caminho", desc: "Waze ou Google Maps abre com a rota. Tela nítida, mesmo no sol." },
              { step: "4", title: "Digita o código na tela", desc: "Chegou no cliente? Digita o código direto na multimídia." },
              { step: "5", title: "Finaliza e parte pra próxima", desc: "Finaliza a entrega, avalia e já recebe a próxima corrida." },
            ].map((s) => (
              <div key={s.step} className="flex gap-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-[12px] font-bold">{s.step}</span>
                <div>
                  <h3 className="text-[14px] font-bold">{s.title}</h3>
                  <p className="mt-0.5 text-[12px] text-surface-foreground/60 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-5 rounded-2xl bg-primary/10 p-4">
            <p className="text-[13px] font-bold text-surface-foreground leading-relaxed">
              Entregador profissional? Com o MotoPlay Pro você faz mais corridas, mais rápido, sem arriscar seu celular.
            </p>
          </div>

          <Button asChild size="lg" className="mt-4 h-[50px] w-full rounded-full text-[13px] font-extrabold shadow-cta">
            <a href={CTA_LINK}>QUERO FAZER MAIS ENTREGAS <ArrowRight className="h-5 w-5" /></a>
          </Button>
        </div>
      </section>

      {/* ═══════ COMPARAÇÃO ═══════ */}
      <section className="py-10">
        <div className="container px-4">
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-primary">Comparação</p>
          <h2 className="mt-1 text-[20px] font-bold leading-tight">Por que é melhor que um suporte?</h2>

          <div className="mt-5 grid grid-cols-2 gap-3">
            <div className="rounded-2xl border border-destructive/20 bg-destructive/5 p-3 space-y-2.5">
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-destructive">Suporte comum</p>
              {["Celular exposto ao roubo", "Vibração danifica a câmera", "Tela some no sol", "Celular descarrega rápido", "Chuva? Esquece."].map((t) => (
                <div key={t} className="flex items-start gap-1.5 text-[12px] text-muted-foreground">
                  <X className="h-3.5 w-3.5 shrink-0 text-destructive mt-0.5" />{t}
                </div>
              ))}
            </div>
            <div className="rounded-2xl border border-primary/20 bg-primary/5 p-3 space-y-2.5">
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary">MotoPlay Pro</p>
              {["Celular seguro no bolso", "Tela própria, sem risco", "Visível até no sol forte", "Liga e desliga com a moto", "Pronto para chuva e poeira"].map((t) => (
                <div key={t} className="flex items-start gap-1.5 text-[12px] font-semibold">
                  <Check className="h-3.5 w-3.5 shrink-0 text-primary mt-0.5" />{t}
                </div>
              ))}
            </div>
          </div>

          <p className="mt-4 text-center text-[14px] font-bold text-primary">Não é acessório. É upgrade.</p>
        </div>
      </section>

      {/* ═══════ VSL 2 — PROVA SOCIAL / CONVERSÃO ═══════ */}
      <section className="py-10 bg-secondary/40">
        <div className="container px-4">
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-primary">Veja na prática</p>
          <h2 className="mt-1 text-[20px] font-bold leading-tight">Assista e tire suas últimas dúvidas</h2>
          <p className="mt-1 text-[13px] text-muted-foreground leading-relaxed">
            Veja como o MotoPlay Pro funciona no dia a dia — instalação, apps, GPS e tudo mais.
          </p>

          <div className="relative mt-5 overflow-hidden rounded-2xl border border-border/80">
            <video
              className="w-full aspect-[9/16] max-h-[520px] object-cover bg-black"
              controls
              playsInline
              preload="metadata"
            >
              <source src="/videos/vsl2.mp4" type="video/mp4" />
            </video>
          </div>

          <Button asChild size="lg" className="mt-5 h-[50px] w-full rounded-full text-[13px] font-extrabold shadow-cta">
            <a href={CTA_LINK}>QUERO O MEU MOTOPLAY PRO <ArrowRight className="h-5 w-5" /></a>
          </Button>
        </div>
      </section>

      {/* ═══════ RECURSOS / SPECS ═══════ */}
      <section className="py-10 bg-surface text-surface-foreground">
        <div className="container px-4">
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-primary">Recursos</p>
          <h2 className="mt-1 text-[20px] font-bold leading-tight">Tudo o que importa, na sua tela</h2>

          {/* Product showcase images */}
          <div className="mt-5 overflow-hidden rounded-2xl border border-surface-foreground/10">
            <img src={produtoUnidadeCompleta} alt="MotoPlay Pro - unidade completa com CarPlay e Android Auto" className="w-full object-cover" loading="lazy" />
          </div>

          <div className="mt-5 grid grid-cols-2 gap-3">
            {([
              { icon: Smartphone, title: "CarPlay e Android Auto", desc: "Sem fio" },
              { icon: Power, title: "Liga com a moto", desc: "Automático" },
              { icon: SunMedium, title: "Tela nítida no sol", desc: "Alta visibilidade" },
              { icon: CloudRain, title: "Pronto pra rotina real", desc: "IP67" },
              { icon: Bluetooth, title: "Bluetooth integrado", desc: "Capacete e intercom" },
              { icon: Settings, title: "Compatibilidade universal", desc: "Qualquer moto" },
            ] as { icon: LucideIcon; title: string; desc: string }[]).map(({ icon: Icon, title, desc }) => (
              <div key={title} className="rounded-2xl border border-surface-foreground/10 bg-surface-foreground/5 p-3">
                <Icon className="h-5 w-5 text-primary" />
                <h3 className="mt-2 text-[13px] font-bold">{title}</h3>
                <p className="text-[11px] text-surface-foreground/50">{desc}</p>
              </div>
            ))}
          </div>

          {/* Suporte rotativo */}
          <div className="mt-5 overflow-hidden rounded-2xl border border-surface-foreground/10">
            <img src={produtoSuporteRotativo} alt="Suporte maleável rotativo com múltiplos ângulos" className="w-full object-cover" loading="lazy" />
          </div>

          {/* TPMS & DVR */}
          <div className="mt-5 rounded-2xl border border-primary/15 bg-panel p-4">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary mb-3">Versões Superiores</p>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <Gauge className="h-5 w-5 text-primary" />
                <h3 className="mt-1 text-[13px] font-bold">TPMS</h3>
                <p className="text-[11px] text-surface-foreground/60">Monitor de pressão dos pneus em tempo real.</p>
              </div>
              <div>
                <Camera className="h-5 w-5 text-primary" />
                <h3 className="mt-1 text-[13px] font-bold">DVR</h3>
                <p className="text-[11px] text-surface-foreground/60">Câmera integrada com gravação contínua.</p>
              </div>
            </div>
          </div>

          {/* Prova d'água */}
          <div className="mt-5 overflow-hidden rounded-2xl border border-surface-foreground/10">
            <img src={produtoProvaDagua} alt="MotoPlay Pro à prova d'água IP67" className="w-full object-cover" loading="lazy" />
          </div>

          {/* Specs table */}
          <div className="mt-5 rounded-2xl border border-surface-foreground/10 bg-surface-foreground/5 overflow-hidden">
            <p className="px-4 pt-3 text-[10px] font-bold uppercase tracking-[0.2em] text-primary">Especificações</p>
            {[
              ["Tela", '7" IPS HD touchscreen'],
              ["Conectividade", "CarPlay + Android Auto wireless"],
              ["Resistência", "IP67 — chuva, poeira, sol"],
              ["Alimentação", "12V direto na bateria"],
              ["Bluetooth", "5.0 — capacete, intercom, fones"],
              ["Instalação", "Universal — qualquer guidão"],
              ["Material", "ABS reforçado + tela temperada"],
              ["Acessórios", "Kit completo incluso"],
            ].map(([label, val], i) => (
              <div key={label} className={`flex justify-between px-4 py-2.5 text-[12px] ${i % 2 === 0 ? "" : "bg-surface-foreground/[0.03]"}`}>
                <span className="font-bold text-surface-foreground/80">{label}</span>
                <span className="text-surface-foreground/60 text-right">{val}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ COMPATIBILIDADE ═══════ */}
      <MotoSelector />

      {/* ═══════ KIT INCLUSO ═══════ */}
      <section className="py-10 bg-secondary/40">
        <div className="container px-4">
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-primary">O que vem no kit</p>
          <h2 className="mt-1 text-[20px] font-bold leading-tight">Kit completo — 5 itens</h2>

          {/* Kit photo */}
          <div className="mt-5 overflow-hidden rounded-2xl">
            <img src={produtoKitCompleto} alt="Kit completo MotoPlay Pro com todos os acessórios" className="w-full object-cover" loading="lazy" />
          </div>

          <div className="mt-4 space-y-3">
            {([
              { icon: Monitor, title: "Painel MotoPlay Pro", desc: "Tela inteligente com CarPlay/Android Auto" },
              { icon: Settings, title: "Suporte de fixação universal", desc: "Adaptável a qualquer guidão" },
              { icon: Cable, title: "Cabo de alimentação", desc: "Conexão direta com a bateria" },
              { icon: FileText, title: "Manual de instalação", desc: "Passo a passo ilustrado" },
              { icon: Box, title: "Kit de acessórios", desc: "Abraçadeiras, parafusos e adaptadores" },
            ] as { icon: LucideIcon; title: string; desc: string }[]).map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex gap-3 items-center rounded-2xl border border-border/80 bg-card p-3 shadow-sm">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary"><Icon className="h-4 w-4" /></div>
                <div>
                  <h3 className="text-[13px] font-bold">{title}</h3>
                  <p className="text-[11px] text-muted-foreground">{desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-3 text-center text-[12px] font-semibold text-muted-foreground">Tudo para instalar em minutos.</p>
        </div>
      </section>

      {/* ═══════ PROVA VISUAL ═══════ */}
      <section className="py-10">
        <div className="container px-4">
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-primary">Em Ação</p>
          <h2 className="mt-1 text-[20px] font-bold leading-tight">Veja funcionando na prática</h2>

          {/* CarPlay/Android Auto showcase */}
          <div className="mt-5 overflow-hidden rounded-2xl">
            <img src={produtoCarplayAndroid} alt="MotoPlay Pro com CarPlay e Android Auto" className="w-full object-cover" loading="lazy" />
          </div>

          <div className="mt-4 grid gap-3">
            {[
              { icon: Map, title: "Navegação com Waze", bg: "bg-primary/10" },
              { icon: PhoneCall, title: "Chamada pelo Bluetooth", bg: "bg-accent/10" },
              { icon: Music4, title: "Música no guidão", bg: "bg-warning/10" },
            ].map(({ icon: Icon, title, bg }) => (
              <div key={title} className={`flex items-center gap-3 rounded-2xl ${bg} p-4`}>
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-surface text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-[14px] font-bold">{title}</h3>
                  <p className="text-[11px] text-muted-foreground flex items-center gap-1"><PlayCircle className="h-3 w-3" /> Ver demonstração</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ AVALIAÇÕES ═══════ */}
      <section className="py-10 bg-secondary/40">
        <div className="container px-4">
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-primary text-center">Avaliações</p>
          <h2 className="mt-1 text-[20px] font-bold leading-tight text-center">Quem usa, recomenda</h2>
          <p className="text-center text-[12px] text-muted-foreground">Clientes verificados • Compras reais</p>

          <div className="mt-2 flex items-center justify-center gap-1">
            <span className="text-[22px] font-bold">4,9</span>
            <div className="flex text-primary">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-primary" />)}</div>
            <span className="text-[12px] text-muted-foreground">• 1.247 avaliações</span>
          </div>

          <div className="mt-4 space-y-3">
            {testimonials.map((t) => (
              <Card key={t.name} className="rounded-2xl p-4 border-border/80 shadow-sm">
                <div className="flex gap-0.5 text-primary mb-2">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-3 w-3 fill-primary" />)}</div>
                <p className="text-[13px] leading-relaxed">"{t.quote}"</p>
                <div className="mt-2">
                  <p className="text-[12px] font-bold">{t.name}</p>
                  <p className="text-[10px] text-muted-foreground">{t.role}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ STATS ═══════ */}
      <section className="py-8 bg-surface text-surface-foreground">
        <div className="container px-4">
          <div className="grid grid-cols-3 gap-3 text-center">
            <div>
              <p className="text-[22px] font-bold text-primary">+5.000</p>
              <p className="text-[10px] font-bold uppercase text-surface-foreground/50">Instalados</p>
            </div>
            <div>
              <p className="text-[22px] font-bold text-primary">+1.200</p>
              <p className="text-[10px] font-bold uppercase text-surface-foreground/50">Avaliações</p>
            </div>
            <div>
              <p className="text-[22px] font-bold text-primary">98%</p>
              <p className="text-[10px] font-bold uppercase text-surface-foreground/50">Satisfação</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ GARANTIA ═══════ */}
      <section className="py-10">
        <div className="container px-4">
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-primary text-center">Garantia de Satisfação</p>
          <div className="mt-4 rounded-2xl border border-primary/15 bg-primary/5 p-4 space-y-2.5">
            {[
              { icon: Check, text: "Defeitos de fabricação" },
              { icon: Check, text: "90 dias para devolução" },
              { icon: Check, text: "Suporte dedicado" },
            ].map(({ text }) => (
              <div key={text} className="flex items-center gap-2 text-[13px] font-semibold">
                <Check className="h-4 w-4 text-primary shrink-0" />{text}
              </div>
            ))}
            <div className="border-t border-border pt-2.5 mt-2.5 space-y-1.5">
              {["Mau uso ou uso incorreto", "Danos por impacto", "Modificações"].map((t) => (
                <div key={t} className="flex items-center gap-2 text-[12px] text-muted-foreground">
                  <X className="h-3.5 w-3.5 text-destructive/60 shrink-0" />{t}
                </div>
              ))}
            </div>
          </div>
          <p className="mt-3 text-center text-[13px] font-bold text-primary">Se não gostar, devolvemos seu dinheiro.</p>
        </div>
      </section>

      {/* ═══════ FAQ ═══════ */}
      <section className="py-10 bg-secondary/40">
        <div className="container px-4">
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-primary">Dúvidas</p>
          <h2 className="mt-1 text-[20px] font-bold leading-tight">Perguntas frequentes</h2>

          <div className="mt-5 space-y-2">
            {faqs.map((faq, idx) => (
              <button
                key={faq.q}
                type="button"
                className="w-full rounded-2xl border border-border bg-card p-3.5 text-left shadow-sm active:bg-secondary/30"
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[13px] font-bold leading-snug">{faq.q}</span>
                  <span className={`shrink-0 text-lg text-primary transition-transform duration-200 ${openFaq === idx ? "rotate-45" : ""}`}>+</span>
                </div>
                {openFaq === idx && <p className="mt-2 text-[12px] leading-relaxed text-muted-foreground">{faq.a}</p>}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ CTA FINAL ═══════ */}
      <section className="py-10">
        <div className="container px-4 text-center space-y-4">
          <h2 className="text-[20px] font-bold leading-tight">
            Ainda não escolheu sua moto?<br />Volte e selecione acima.
          </h2>
          <p className="text-[13px] text-muted-foreground leading-relaxed">
            Confirme a compatibilidade e desbloqueie o desconto exclusivo de 40%.
          </p>

          <Button asChild size="lg" className="h-[52px] w-full rounded-full text-[14px] font-extrabold shadow-cta">
            <a href="#compatibilidade">
              VERIFICAR MINHA MOTO <ArrowRight className="h-5 w-5" />
            </a>
          </Button>

          <div className="flex justify-center gap-4 text-[11px] text-muted-foreground font-semibold">
            <span className="flex items-center gap-1"><Lock className="h-3 w-3" /> Seguro</span>
            <span className="flex items-center gap-1"><Truck className="h-3 w-3" /> Frete grátis</span>
            <span className="flex items-center gap-1"><Heart className="h-3 w-3" /> +5.000 clientes</span>
          </div>
        </div>
      </section>

      {/* ═══════ STICKY CTA MOBILE ═══════ */}
      <div className="fixed inset-x-0 bottom-0 z-50 bg-gradient-to-t from-background via-background/95 to-transparent px-4 pb-3 pt-5 md:hidden">
        <Button asChild size="lg" className="h-[50px] w-full rounded-full text-[13px] font-extrabold shadow-cta">
          <a href="#compatibilidade">VERIFICAR MINHA MOTO <ArrowRight className="h-5 w-5" /></a>
        </Button>
      </div>
    </main>
  );
};

export default Index;
