import { lazy, Suspense } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import PixelBlast from "@/components/BackgroundFloatingLines";
import { ConnectOrb } from "@/components/ConnectOrb";
import { HeroSection } from "@/components/sections/HeroSection";
import LazySection from "@/components/LazySection";

// Lazy load sections for better performance
const AboutSection = lazy(() =>
  import("@/components/sections/AboutSection").then(m => ({ default: m.AboutSection }))
);
const SkillsSection = lazy(() =>
  import("@/components/sections/SkillsSection").then(m => ({ default: m.SkillsSection }))
);
const LeetCodeSection = lazy(() =>
  import("@/components/sections/LeetCodeSection").then(m => ({ default: m.LeetCodeSection }))
);
const ProjectsSection = lazy(() =>
  import("@/components/sections/ProjectsSection").then(m => ({ default: m.ProjectsSection }))
);
const ExperienceSection = lazy(() =>
  import("@/components/sections/ExperienceSection").then(m => ({ default: m.ExperienceSection }))
);

// Loading fallback component
const SectionFallback = () => (
  <div className="min-h-[400px] flex items-center justify-center">
    <div className="animate-pulse flex space-x-4 w-full max-w-4xl px-4">
      <div className="flex-1 space-y-6 py-1">
        <div className="h-8 bg-muted rounded w-3/4 mx-auto"></div>
        <div className="space-y-3">
          <div className="h-4 bg-muted rounded"></div>
          <div className="h-4 bg-muted rounded w-5/6 mx-auto"></div>
          <div className="h-4 bg-muted rounded w-4/6 mx-auto"></div>
        </div>
      </div>
    </div>
  </div>
);

const Index = () => {
  return (
    <div className="relative grain min-h-screen">
      <div className="fixed inset-0 pointer-events-none -z-10">
        <PixelBlast 
          color="#0f172a" /* Duller, darker blue-gray */
          liquid={true}
          transparent={false}
          speed={0.8}
          pixelSize={5}
          patternScale={2.5}
          liquidStrength={0.2}
        />
      </div>
      <Navbar />

      <main className="overflow-x-hidden">
        {/* Hero loads immediately - above the fold */}
        <HeroSection />

        {/* Lazy load sections as user scrolls */}
        <LazySection>
          <Suspense fallback={<SectionFallback />}>
            <AboutSection />
          </Suspense>
        </LazySection>

        <LazySection>
          <Suspense fallback={<SectionFallback />}>
            <SkillsSection />
          </Suspense>
        </LazySection>

        <LazySection>
          <Suspense fallback={<SectionFallback />}>
            <LeetCodeSection />
          </Suspense>
        </LazySection>

        <LazySection>
          <Suspense fallback={<SectionFallback />}>
            <ProjectsSection />
          </Suspense>
        </LazySection>

        <LazySection>
          <Suspense fallback={<SectionFallback />}>
            <ExperienceSection />
          </Suspense>
        </LazySection>

        <ConnectOrb />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
