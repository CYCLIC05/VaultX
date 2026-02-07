import Header from "@/components/Header";
import AnnouncementBar from "@/components/AnnouncementBar";
import HeroSection from "@/components/HeroSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import FeaturesSection from "@/components/FeaturesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import EarnSection from "@/components/EarnSection";
import FAQSection from "@/components/FAQSection";
import NewsletterSection from "@/components/NewsletterSection";
import ConnectSection from "@/components/ConnectSection";
import Footer from "@/components/Footer";
import CursorGlow from "@/components/CursorGlow";
import ParticleBackground from "@/components/ParticleBackground";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <ParticleBackground />
      <CursorGlow />
      <Header />
      <AnnouncementBar />

      <main className="pt-12">
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <EarnSection />
        <TestimonialsSection />
        <FAQSection />
        <NewsletterSection />
        <ConnectSection />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
