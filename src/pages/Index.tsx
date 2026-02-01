import Header from "@/components/Header";
import AnnouncementBar from "@/components/AnnouncementBar";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import FeaturesSection from "@/components/FeaturesSection";
import EarnSection from "@/components/EarnSection";
import ConnectSection from "@/components/ConnectSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <AnnouncementBar />
      
      <main className="pt-12">
        <HeroSection />
        <StatsSection />
        <FeaturesSection />
        <EarnSection />
        <ConnectSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
