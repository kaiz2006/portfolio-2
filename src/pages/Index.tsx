import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import Galaxy from "@/components/Galaxy";
import { ConnectOrb } from "@/components/ConnectOrb";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { LeetCodeSection } from "@/components/sections/LeetCodeSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";

const Index = () => {
  return (
    <div className="relative grain min-h-screen">
      <div className="fixed inset-0 -z-10">
        <Galaxy 
          mouseRepulsion
          mouseInteraction
          density={1}
          glowIntensity={0.3}
          saturation={0}
          hueShift={140}
          twinkleIntensity={0.3}
          rotationSpeed={0.1}
          repulsionStrength={2}
          autoCenterRepulsion={0}
          starSpeed={0.5}
          speed={1}
          transparent={false}
        />
      </div>
      <Navbar />

      <main className="overflow-x-hidden">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <LeetCodeSection />
        <ProjectsSection />
        <ExperienceSection />
        <ConnectOrb />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
