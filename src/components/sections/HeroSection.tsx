import { motion } from "framer-motion";
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";
import Orb from "@/components/Orb";

export const HeroSection = () => {
  const nameText = "Aaryan Kumar Thakur";

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Orb Background */}
      <div className="absolute inset-0">
        <Orb backgroundColor="#000000" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Role Tag */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 glass rounded-full mb-8 max-w-full"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse flex-shrink-0" />
            <span className="text-xs sm:text-sm text-muted-foreground text-center">Electronics & VLSI Student | Full-Stack Developer</span>
          </motion.div>

          {/* Animated Name */}
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-6 overflow-hidden text-white">
            <div className="flex flex-wrap justify-center gap-x-0.5 md:gap-x-1">
              {nameText.split("").map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.3 + index * 0.03,
                    ease: [0.25, 0.1, 0.25, 1],
                  }}
                  className={`inline-block ${char === " " ? "w-1 sm:w-2" : ""}`}
                >
                  {char}
                </motion.span>
              ))}
            </div>
          </h1>

          {/* Subtitle with typing effect */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-base sm:text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto px-4"
          >
            Crafting elegant solutions at the intersection of{" "}
            <span className="text-primary">hardware</span> and{" "}
            <span className="text-secondary">software</span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-12 px-4"
          >
            <motion.a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-6 sm:px-8 py-3 sm:py-4 bg-primary text-primary-foreground font-semibold rounded-lg text-sm sm:text-base
                         shadow-lg hover:shadow-primary/25 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              View My Work
            </motion.a>
            <motion.a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-6 sm:px-8 py-3 sm:py-4 glass font-semibold rounded-lg border border-border/50 text-sm sm:text-base
                         hover:border-primary/50 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Get In Touch
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="flex justify-center gap-6"
          >
            {[
              { icon: Github, href: "https://github.com/kaiz2006", label: "GitHub" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/aaryan-kumar-thakur-9a4783206/", label: "LinkedIn" },
              { icon: Mail, href: "mailto:aaryankt.work@gmail.com", label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="p-3 glass rounded-full text-muted-foreground hover:text-primary 
                           hover:border-primary/50 transition-all duration-300"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
                aria-label={label}
              >
                <Icon size={22} />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.a
          href="#about"
          onClick={(e) => {
            e.preventDefault();
            document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
          }}
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown size={24} />
          </motion.div>
        </motion.a>
      </motion.div>
    </section>
  );
};
