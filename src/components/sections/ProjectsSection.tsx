import { motion } from "framer-motion";
import { AnimatedSection, StaggerContainer, StaggerItem } from "../animations/AnimatedSection";
import { ExternalLink, Github, Folder } from "lucide-react";
import { CodeDemo } from "@/components/CodeDemo";

const projects = [
  {
    title: "AI Hand Tracker & Virtual Mouse",
    description:
      "Computer vision based system that tracks hand landmarks in real time and allows controlling mouse actions using hand gestures. Built using OpenCV and MediaPipe with Python, enabling touch-free interaction.",
    tech: ["Python", "OpenCV", "MediaPipe", "Computer Vision"],
    github: "https://github.com/kaiz2006/Repo-1/blob/main/handmapper.py",
    live: "#",
    featured: true,
  },
  {
    title: "Big Project Incoming 🚀",
    description:
      "Currently working on a large-scale backend and system design project focused on real-world scalability, database optimization, and API architecture. Stay tuned for updates.",
    tech: ["FastAPI", "MySQL", "System Design"],
    github: "#",
    featured: false,
  },
  {
    title: "Big Project Incoming 🚀",
    description:
      "Upcoming full-stack application with advanced authentication, role-based dashboards, and cloud deployment pipeline.",
    tech: ["React", "TypeScript", "Cloud"],
    github: "#",
    featured: false,
  },

];


const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  return (
    <motion.div
      className={`glass p-4 sm:p-6 md:p-8 rounded-2xl group relative overflow-hidden ${project.featured ? "md:col-span-2 lg:col-span-1" : ""
        }`}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
    >
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="relative z-10">
        <div className="flex items-start justify-between mb-6">
          <motion.div
            className="p-3 rounded-lg bg-primary/10"
            whileHover={{ rotate: 10 }}
          >
            <Folder className="w-6 h-6 text-primary" />
          </motion.div>
          <div className="flex gap-3">
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github size={20} />
            </motion.a>
            {project.live && (
              <motion.a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <ExternalLink size={20} />
              </motion.a>
            )}
          </div>
        </div>

        <h3 className="text-xl font-display font-semibold mb-3 group-hover:gradient-text transition-all duration-300">
          {project.title}
        </h3>
        <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs font-medium bg-muted/50 text-muted-foreground rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Glow effect */}
      <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-primary/20 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </motion.div>
  );
};

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-16 sm:py-24 md:py-32 relative">
      <div className="container mx-auto px-4 sm:px-6">
        <AnimatedSection>
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-semibold uppercase tracking-widest">Portfolio</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mt-4">
              Featured{" "}
              <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              A selection of projects that showcase my skills in full-stack development, systems design, and hardware integration
            </p>
          </div>
        </AnimatedSection>

        {/* Two-column layout: Projects on left, CodeDemo on right */}
        <div className="grid lg:grid-cols-[1fr,420px] gap-8 lg:gap-12 items-start">
          {/* Projects Grid */}
          <div>
            <StaggerContainer className="grid md:grid-cols-2 gap-4 sm:gap-6">
              {projects.map((project, index) => (
                <StaggerItem key={project.title + index}>
                  <ProjectCard project={project} index={index} />
                </StaggerItem>
              ))}
            </StaggerContainer>

            <AnimatedSection delay={0.4}>
              <div className="text-center mt-12">
                <motion.a
                  href="https://github.com/kaiz2006"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 glass rounded-full text-sm font-medium
                             hover:border-primary/50 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Github size={18} />
                  View More on GitHub
                </motion.a>
              </div>
            </AnimatedSection>
          </div>

          {/* CodeDemo - Sticky on the right */}
          <AnimatedSection delay={0.3} className="hidden lg:block">
            <div className="sticky top-24">
              <div className="mb-4">
                <span className="text-xs font-semibold uppercase tracking-widest text-primary">Code Preview</span>
                <p className="text-muted-foreground text-sm mt-1">Clean, maintainable code is my priority</p>
              </div>
              <CodeDemo duration={5} delay={1} writing={true} cursor={true} />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};
