import HeroSection from "@/components/landing/HeroSection";
import PainSection from "@/components/landing/PainSection";
import TransformationSection from "@/components/landing/TransformationSection";
import ProductSection from "@/components/landing/ProductSection";
import ProofSection from "@/components/landing/ProofSection";
import SocialProof from "@/components/landing/SocialProof";
import FaqSection from "@/components/landing/FaqSection";
import ValueSection from "@/components/landing/ValueSection";
import OfferSection from "@/components/landing/OfferSection";
import UrgencySection from "@/components/landing/UrgencySection";
import FinalCtaSection from "@/components/landing/FinalCtaSection";
import StickyMobileCta from "@/components/landing/StickyMobileCta";

const Index = () => (
  <main className="overflow-x-hidden">
    <HeroSection />
    <PainSection />
    <TransformationSection />
    <ProductSection />
    <ProofSection />
    <SocialProof />
    <FaqSection />
    <ValueSection />
    <OfferSection />
    <UrgencySection />
    <FinalCtaSection />
    <StickyMobileCta />
  </main>
);

export default Index;
