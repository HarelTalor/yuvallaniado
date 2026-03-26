import Hero from "@/components/home/Hero";
import TreatmentPreview from "@/components/home/TreatmentPreview";
import Results from "@/components/home/Results";
import ReviewsSection from "@/components/home/ReviewsSection";
import AboutSection from "@/components/home/AboutSection";
import FAQSection from "@/components/home/FAQSection";
import { ScrollReveal } from "@/components/shared/ScrollReveal";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <Hero />
        
        <ScrollReveal delay={0.1}>
          <Results />
        </ScrollReveal>

        <ScrollReveal>
          <ReviewsSection />
        </ScrollReveal>

        <ScrollReveal>
          <TreatmentPreview />
        </ScrollReveal>
        
        <ScrollReveal>
          <AboutSection />
        </ScrollReveal>

        <ScrollReveal>
          <FAQSection />
        </ScrollReveal>
      </main>
    </div>
  );
}
