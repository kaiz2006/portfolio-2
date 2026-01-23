import { motion } from "framer-motion";
import { AnimatedSection, StaggerContainer, StaggerItem } from "../animations/AnimatedSection";

const skillCategories = [
  {
    title: "Languages",
    skills: [
      { name: "Python", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "TypeScript", level: 80 },
      { name: "C/C++", level: 75 },
      { name: "SQL", level: 85 },
    ],
  },
  {
    title: "Backend & Frameworks",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Django", level: 80 },
      { name: "FastAPI", level: 85 },
      { name: "Express.js", level: 80 },
      { name: "PostgreSQL", level: 85 },
    ],
  },
  {
    title: "Frontend & Tools",
    skills: [
      { name: "React", level: 85 },
      { name: "Tailwind CSS", level: 90 },
      { name: "Git", level: 85 },
      { name: "Docker", level: 70 },
      { name: "Linux", level: 80 },
    ],
  },
];

const SkillBar = ({ name, level }: { name: string; level: number }) => {
  return (
    <div className="space-y-2">
      <div className="flex justify-between text-sm">
        <span className="font-medium">{name}</span>
        <span className="text-muted-foreground">{level}%</span>
      </div>
      <div className="h-2 bg-muted rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-primary to-secondary"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </div>
    </div>
  );
};

const SkillCard = ({ category }: { category: typeof skillCategories[0] }) => {
  return (
    <motion.div
      className="glass p-4 sm:p-6 rounded-2xl h-full"
      whileHover={{ 
        y: -5, 
        boxShadow: "0 20px 40px -20px hsl(var(--primary) / 0.3)",
      }}
      transition={{ duration: 0.3 }}
    >
      <h3 className="text-xl font-display font-semibold mb-6 gradient-text">{category.title}</h3>
      <div className="space-y-4">
        {category.skills.map((skill) => (
          <SkillBar key={skill.name} name={skill.name} level={skill.level} />
        ))}
      </div>
    </motion.div>
  );
};

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-16 sm:py-24 md:py-32 relative">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[80px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <AnimatedSection>
          <div className="text-center mb-16">
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

        <StaggerContainer className="grid md:grid-cols-2 gap-4 sm:gap-6">
          {skillCategories.map((category) => (
            <StaggerItem key={category.title}>
              <SkillCard category={category} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};
