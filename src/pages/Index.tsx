import { lazy, Suspense } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import SplashCursor from "@/components/SplashCursor";
import BackgroundFloatingLines from "@/components/BackgroundFloatingLines";
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
const ContactSection = lazy(() =>
  import("@/components/sections/ContactSection").then(m => ({ default: m.ContactSection }))
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
    <div className="relative grain overflow-x-hidden">
      <BackgroundFloatingLines />
      <SplashCursor />
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

        <LazySection>
          <Suspense fallback={<SectionFallback />}>
            <ContactSection />
          </Suspense>
        </LazySection>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
