import { motion } from "framer-motion";

export const Footer = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="relative min-h-[400px] w-full bg-background overflow-hidden flex flex-col justify-end pb-12 pt-32">
      {/* Huge Background Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden overflow-x-hidden md:overflow-x-visible">
        <h1 className="text-[25vw] sm:text-[22vw] md:text-[20vw] font-black text-white/[0.03] tracking-tighter leading-none whitespace-nowrap">
          AARYAN
        </h1>
      </div>

      <div className="container relative z-10 mx-auto px-6 sm:px-12 flex flex-col md:flex-row justify-between items-end gap-16 md:gap-8 border-t border-border/20 pt-12">
        {/* Left Side: Brand and Bio */}
        <div className="flex flex-col gap-6 max-w-sm">
          <motion.a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("#home");
            }}
            className="font-elegant italic text-3xl font-bold tracking-widest text-foreground hover:text-primary transition-colors"
            whileHover={{ scale: 1.02 }}
          >
            AARYAN KUMAR THAKUR
          </motion.a>
          
          <p className="text-muted-foreground text-sm font-medium leading-relaxed">
            Crafting elegant solutions at the intersection of{" "}
            <span className="text-foreground/80">hardware</span> and{" "}
            <span className="text-foreground/80">software</span> built with clarity and intent.
          </p>
          <p className="text-muted-foreground/40 text-xs mt-2">
            © {new Date().getFullYear()} Brutalist Edition
          </p>
        </div>

        {/* Right Side: Navigation & Connect Columns */}
        <div className="flex gap-16 sm:gap-24">
          {/* Navigate Column */}
          <div className="flex flex-col gap-4">
            <h4 className="text-[10px] font-bold tracking-[0.2em] text-muted-foreground/60 uppercase mb-2">
              Navigate
            </h4>
            <div className="flex flex-col gap-3">
              {[
                { label: "Home", href: "#home" },
                { label: "About", href: "#about" },
                { label: "Projects", href: "#projects" }
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  className="text-sm font-semibold text-foreground/80 hover:text-primary transition-colors inline-block w-fit"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Connect Column */}
          <div className="flex flex-col gap-4">
            <h4 className="text-[10px] font-bold tracking-[0.2em] text-muted-foreground/60 uppercase mb-2">
              Connect
            </h4>
            <div className="flex flex-col gap-3">
              {[
                { label: "GitHub", href: "https://github.com/kaiz2006" },
                { label: "LinkedIn", href: "https://www.linkedin.com/in/aaryan-kumar-thakur-9a4783206/" },
                { label: "aaryankt.work@gmail.com", href: "mailto:aaryankt.work@gmail.com" }
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-foreground/80 hover:text-primary transition-colors inline-block w-fit"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
