import NavDots from "@/app/components/ui/NavDots";
import HeroSection from "@/app/components/sections/HeroSection";
import ServicesSection from "@/app/components/sections/ServicesSection";
import AboutSection from "@/app/components/sections/AboutSection";
import SkillsSection from "@/app/components/sections/SkillsSection";
import KnowMeSection from "@/app/components/sections/KnowMeSection";
import PortfolioSection from "@/app/components/sections/PortfolioSection";
import Footer from "@/app/components/sections/Footer";

export default function Home() {
  return (
    <>
      <NavDots />
      <main>
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <SkillsSection />
        <KnowMeSection />
        <PortfolioSection />
      </main>
      <Footer />
    </>
  );
}
