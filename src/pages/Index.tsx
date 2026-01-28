import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import SplashCursor from "@/components/SplashCursor";
import BackgroundFloatingLines from "@/components/BackgroundFloatingLines";
import { HeroSection } from "@/components/sections/HeroSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { AboutSection } from "@/components/sections/AboutSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { LeetCodeSection } from "@/components/sections/LeetCodeSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { ContactSection } from "@/components/sections/ContactSection";

const Index = () => {
  return (
    <div className="relative grain overflow-x-hidden">
      <BackgroundFloatingLines />
      <SplashCursor />
      <Navbar />

      <main className="overflow-x-hidden">
        <HeroSection />
        <GallerySection />
        <AboutSection />
        <SkillsSection />
        <LeetCodeSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
