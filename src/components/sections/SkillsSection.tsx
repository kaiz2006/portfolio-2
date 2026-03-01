import { motion } from "framer-motion";
import { AnimatedSection } from "../animations/AnimatedSection";
import { Marquee } from "../ui/Marquee";
import { 
  SiPython, SiJavascript, SiTypescript, SiCplusplus, 
  SiReact, SiTailwindcss, SiNodedotjs, SiDjango, 
  SiFastapi, SiExpress, SiPostgresql, SiDocker, 
  SiLinux, SiNumpy, SiPandas, SiScikitlearn, 
  SiTensorflow, SiPytorch, SiPydantic, SiMysql,
  SiVuedotjs, SiNextdotjs, SiSvelte, SiAngular, 
  SiGraphql, SiMongodb, SiRedis, SiHtml5, SiCss3, 
  SiSass, SiFigma, SiAmazonwebservices, SiGooglecloud, 
  SiFirebase, SiSupabase, SiKubernetes, SiNginx, 
  SiRuby, SiRubyonrails, SiPhp, SiLaravel, 
  SiKotlin, SiSwift, SiRust, SiGo, SiSharp, 
  SiDotnet, SiJest, SiCypress, SiOpenai
} from "react-icons/si";
import { FaGitAlt, FaJava } from "react-icons/fa";
import { DiMsqlServer } from "react-icons/di";

// Define flat lists of skills to put into each marquee row
const row1 = [
  { name: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E]" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" /> },
  { name: "React", icon: <SiReact className="text-[#61DAFB]" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-foreground" /> },
  { name: "Vue.js", icon: <SiVuedotjs className="text-[#4FC08D]" /> },
  { name: "Svelte", icon: <SiSvelte className="text-[#FF3E00]" /> },
  { name: "Angular", icon: <SiAngular className="text-[#DD0031]" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#06B6D4]" /> },
  { name: "HTML5", icon: <SiHtml5 className="text-[#E34F26]" /> },
  { name: "CSS3", icon: <SiCss3 className="text-[#1572B6]" /> },
  { name: "Sass", icon: <SiSass className="text-[#CC6699]" /> },
  { name: "Figma", icon: <SiFigma className="text-[#F24E1E]" /> },
];

const row2 = [
  { name: "Node.js", icon: <SiNodedotjs className="text-[#339933]" /> },
  { name: "Express.js", icon: <SiExpress className="text-foreground" /> },
  { name: "Python", icon: <SiPython className="text-[#3776AB]" /> },
  { name: "Django", icon: <SiDjango className="text-[#092E20]" /> },
  { name: "FastAPI", icon: <SiFastapi className="text-[#009688]" /> },
  { name: "C/C++", icon: <SiCplusplus className="text-[#00599C]" /> },
  { name: "Java", icon: <FaJava className="text-[#5382a1]" /> },
  { name: "C#", icon: <SiSharp className="text-[#239120]" /> },
  { name: ".NET", icon: <SiDotnet className="text-[#512BD4]" /> },
  { name: "Ruby", icon: <SiRuby className="text-[#CC342D]" /> },
  { name: "Rails", icon: <SiRubyonrails className="text-[#CC0000]" /> },
  { name: "PHP", icon: <SiPhp className="text-[#777BB4]" /> },
  { name: "Laravel", icon: <SiLaravel className="text-[#FF2D20]" /> },
  { name: "Go", icon: <SiGo className="text-[#00ADD8]" /> },
  { name: "Rust", icon: <SiRust className="text-foreground" /> },
];

const row3 = [
  { name: "PostgreSQL", icon: <SiPostgresql className="text-[#4169E1]" /> },
  { name: "MySQL", icon: <SiMysql className="text-[#4479A1]" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> },
  { name: "Redis", icon: <SiRedis className="text-[#DC382D]" /> },
  { name: "GraphQL", icon: <SiGraphql className="text-[#E10098]" /> },
  { name: "Firebase", icon: <SiFirebase className="text-[#FFCA28]" /> },
  { name: "Supabase", icon: <SiSupabase className="text-[#3ECF8E]" /> },
  { name: "Docker", icon: <SiDocker className="text-[#2496ED]" /> },
  { name: "Kubernetes", icon: <SiKubernetes className="text-[#326CE5]" /> },
  { name: "AWS", icon: <SiAmazonwebservices className="text-[#232F3E]" /> },
  { name: "GCP", icon: <SiGooglecloud className="text-[#4285F4]" /> },
  { name: "Linux", icon: <SiLinux className="text-[#FCC624]" /> },
  { name: "Nginx", icon: <SiNginx className="text-[#009639]" /> },
  { name: "Git", icon: <FaGitAlt className="text-[#F05032]" /> },
  { name: "Jest", icon: <SiJest className="text-[#C21325]" /> },
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-16 sm:py-24 md:py-32 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[80px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <AnimatedSection>
          <div className="text-center mb-16 px-4">
            <span className="text-primary text-sm font-semibold uppercase tracking-widest">Skills</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mt-4">
              Technical{" "}
              <span className="gradient-text">Expertise</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              A comprehensive toolkit spanning from low-level hardware design to high-level application development
            </p>
          </div>
        </AnimatedSection>
        
        {/* Marquee Rows Container */}
        <div className="flex flex-col gap-6 sm:gap-8 justify-center items-center w-full max-w-full pb-8">
          <Marquee items={row1} direction="left" speed="normal" />
          <Marquee items={row2} direction="right" speed="slow" />
          <Marquee items={row3} direction="left" speed="normal" />
        </div>

      </div>
    </section>
  );
};

