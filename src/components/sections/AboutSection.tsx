import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { AnimatedSection, SlideInLeft, SlideInRight } from "../animations/AnimatedSection";
import { Code2, Cpu, Layers, Rocket } from "lucide-react";

const stats = [
  { label: "Projects Completed", value: 10, suffix: "+" },
  { label: "Technologies", value: 12, suffix: "+" },
  { label: "Years Coding", value: 3, suffix: "+" },
  { label: "Contributions", value: 200, suffix: "+" },
];

const CountUp = ({ end, suffix = "" }: { end: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 2000;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end, isInView]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
};

export const AboutSection = () => {
  return (
    <section id="about" className="py-32 relative">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-semibold uppercase tracking-widest">About Me</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mt-4">
              Passionate About{" "}
              <span className="gradient-text">Innovation</span>
            </h2>
          </div>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image / Visual Side */}
          <SlideInLeft>
            <div className="relative">
              <div className="aspect-square rounded-2xl glass p-8 relative overflow-hidden">
                {/* Decorative Grid */}
                <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 gap-2 p-8 opacity-20">
                  {Array.from({ length: 36 }).map((_, i) => (
                    <motion.div
                      key={i}
                      className="rounded-sm bg-primary/30"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: i * 0.02 }}
                    />
                  ))}
                </div>

                {/* Center Icon Grid */}
                <div className="relative z-10 h-full flex items-center justify-center">
                  <div className="grid grid-cols-2 gap-6">
                    {[
                      { icon: Code2, label: "Backend", color: "primary" },
                      { icon: Layers, label: "Full-Stack", color: "secondary" },
                      { icon: Cpu, label: "VLSI", color: "accent" },
                      { icon: Rocket, label: "Innovation", color: "primary" },
                    ].map(({ icon: Icon, label, color }, index) => (
                      <motion.div
                        key={label}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 + index * 0.1 }}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className={`p-6 glass rounded-xl flex flex-col items-center gap-3 
                                   hover:border-${color}/50 transition-all duration-300 cursor-default`}
                      >
                        <Icon className={`w-8 h-8 text-${color}`} />
                        <span className="text-sm font-medium">{label}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Glow Effect */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-primary/30 rounded-full blur-[80px]" />
              </div>

              {/* Floating Elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-20 h-20 rounded-full bg-primary/20 blur-xl"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-16 h-16 rounded-full bg-secondary/20 blur-xl"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 5, repeat: Infinity, delay: 1 }}
              />
            </div>
          </SlideInLeft>

          {/* Text Content */}
          <SlideInRight>
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm an Electronics & VLSI student with a deep passion for building robust backend systems and 
                full-stack applications. My journey bridges the gap between hardware design and software 
                development, giving me a unique perspective on system architecture.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                From designing efficient APIs to understanding low-level hardware interactions, I thrive 
                on solving complex problems and creating seamless user experiences. I believe in clean 
                code, scalable architectures, and continuous learning.
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4 pt-8">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="glass p-6 rounded-xl text-center"
                  >
                    <div className="text-3xl md:text-4xl font-display font-bold gradient-text">
                      <CountUp end={stat.value} suffix={stat.suffix} />
                    </div>
                    <div className="text-sm text-muted-foreground mt-2">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </SlideInRight>
        </div>
      </div>
    </section>
  );
};
