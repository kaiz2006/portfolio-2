import { motion } from "framer-motion";
import { AnimatedSection } from "../animations/AnimatedSection";
import { Briefcase, GraduationCap, Award } from "lucide-react";

const experiences = [
  {
    type: "education",
    title: "10th & 12th – School Education",
    organization: "St. Anne's Convent School, Chandigarh",
    period: "Completed",
    description:
      "Completed both 10th and 12th grade with a strong academic foundation in science and mathematics, developing early interest in electronics and problem solving.",
    icon: GraduationCap,
  },
  {
    type: "education",
    title: "B.Tech in Electronics Engineering (VLSI)",
    organization: "Punjab Engineering College (PEC)",
    period: "Currently Pursuing",
    description:
      "Currently pursuing B.Tech with specialization in VLSI. Focus areas include digital electronics, semiconductor devices, VLSI design, and embedded systems along with strong coding practice.",
    icon: GraduationCap,
  },
  {
    type: "experience",
    title: "Full-Stack Developer",
    organization: "Personal Projects",
    period: "2025 - Present",
    description:
      "Developing full-stack applications using modern technologies. Building scalable backend systems and responsive frontend interfaces.",
    icon: Briefcase,
  },
  {
    type: "achievement",
    title: "Open Source Contributor",
    organization: "GitHub Community",
    period: "2025 - Present",
    description:
      "Active contributor to open source projects. Participating in collaborative development and code reviews.",
    icon: Award,
  },
  {
    type: "experience",
    title: "Backend Development Focus",
    organization: "Self-Learning",
    period: "2025 - Present",
    description:
      "Intensive learning phase focusing on backend technologies, database design, API development, and system architecture.",
    icon: Briefcase,
  },
];


const certifications = [
  {
    name: "Data Analytics Job Simulation",
    issuer: "Deloitte (Forage)",
  },
  {
    name: "Technology Job Simulation",
    issuer: "Deloitte (Forage)",
  },
  {
    name: "Quantitative Research Job Simulation",
    issuer: "JPMorgan Chase & Co. (Forage)",
  },
  {
    name: "Data Science & Analytics",
    issuer: "HP LIFE / HP Foundation",
  },
];


const TimelineItem = ({ 
  item, 
  index 
}: { 
  item: typeof experiences[0]; 
  index: number;
}) => {
  const Icon = item.icon;
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`flex flex-col md:flex-row items-stretch md:items-center gap-4 sm:gap-6 md:gap-8 ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}`}
    >
      {/* Content Card */}
      <motion.div
        className={`flex-1 glass p-4 sm:p-6 rounded-2xl text-left ${isLeft ? "md:text-right" : "md:text-left"}`}
        whileHover={{ y: -5, boxShadow: "0 20px 40px -20px hsl(var(--primary) / 0.2)" }}
      >
        <div className={`flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3 ${isLeft ? "md:justify-end" : ""}`}>
          <span className="text-primary text-xs sm:text-sm font-medium">{item.period}</span>
        </div>
        <h3 className="text-lg sm:text-xl font-display font-semibold mb-1 break-words">{item.title}</h3>
        <p className="text-primary/80 text-xs sm:text-sm mb-3 break-words">{item.organization}</p>
        <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">{item.description}</p>
      </motion.div>

      {/* Timeline Center */}
      <div className="hidden md:flex flex-col items-center flex-shrink-0">
        <motion.div
          className="w-10 h-10 md:w-12 md:h-12 rounded-full glass flex items-center justify-center z-10"
          whileHover={{ scale: 1.1, rotate: 10 }}
        >
          <Icon className="w-4 h-4 md:w-5 md:h-5 text-primary" />
        </motion.div>
      </div>

      {/* Empty space for alignment */}
      <div className="hidden md:block flex-1 flex-shrink-0" />
    </motion.div>
  );
};

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-16 sm:py-24 md:py-32 relative">
      {/* Background */}
      <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-border to-transparent hidden md:block" />

      <div className="container mx-auto px-4 sm:px-6">
        <AnimatedSection>
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-semibold uppercase tracking-widest">Journey</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mt-4">
              Experience &{" "}
              <span className="gradient-text">Education</span>
            </h2>
          </div>
        </AnimatedSection>

        {/* Timeline */}
        <div className="space-y-6 sm:space-y-8 md:space-y-12 max-w-4xl mx-auto relative">
          {experiences.map((item, index) => (
            <TimelineItem key={item.title} item={item} index={index} />
          ))}
        </div>

        {/* Certifications */}
        <AnimatedSection delay={0.3} className="mt-24">
          <div className="text-center mb-12">
            <h3 className="text-xl sm:text-2xl font-display font-semibold">
              Certifications & <span className="gradient-text">Achievements</span>
            </h3>
          </div>

          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 max-w-3xl mx-auto px-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -3 }}
                className="glass px-3 sm:px-4 md:px-5 py-2 sm:py-3 rounded-full flex items-center gap-2 sm:gap-3"
              >
                <Award className="w-3 h-3 sm:w-4 sm:h-4 text-primary flex-shrink-0" />
                <div className="min-w-0">
                  <span className="text-xs sm:text-sm font-medium break-words">{cert.name}</span>
                  <span className="text-muted-foreground text-xs ml-1 sm:ml-2 block sm:inline">• {cert.issuer}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
