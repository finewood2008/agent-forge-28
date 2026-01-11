import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { CapabilitiesSection } from "@/components/sections/CapabilitiesSection";
import { SolutionsSection } from "@/components/sections/SolutionsSection";
import { TargetCustomerSection } from "@/components/sections/TargetCustomerSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { AIChatWidget } from "@/components/AIChatWidget";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <CapabilitiesSection />
        <SolutionsSection />
        <TargetCustomerSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
      <AIChatWidget />
    </div>
  );
};

export default Index;
