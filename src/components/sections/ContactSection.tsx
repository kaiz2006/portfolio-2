import { useState } from "react";
import { motion } from "framer-motion";
import { AnimatedSection, SlideInLeft, SlideInRight } from "../animations/AnimatedSection";
import { Mail, MapPin, Send, Github, Linkedin, ExternalLink } from "lucide-react";

export const ContactSection = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [focused, setFocused] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    window.location.href = `mailto:aaryankt.work@gmail.com?subject=Portfolio Contact from ${formState.name}&body=${formState.message}`;
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "aaryankt.work@gmail.com",
      href: "mailto:aaryankt.work@gmail.com",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "@kaiz2006",
      href: "https://github.com/kaiz2006",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Aaryan Kumar Thakur",
      href: "https://www.linkedin.com/in/aaryan-kumar-thakur-9a4783206/",
    },
  ];

  return (
    <section id="contact" className="py-16 sm:py-24 md:py-32 relative">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[80px]" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-secondary/10 rounded-full blur-[80px]" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <AnimatedSection>
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-semibold uppercase tracking-widest">Contact</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mt-4">
              Let's Work{" "}
              <span className="gradient-text">Together</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Have a project in mind or just want to chat? Feel free to reach out!
            </p>
          </div>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 max-w-5xl mx-auto">
          {/* Contact Form */}
          <SlideInLeft>
            <form onSubmit={handleSubmit} className="glass p-4 sm:p-6 md:p-8 rounded-2xl space-y-6">
              <div className="space-y-4">
                {/* Name Input */}
                <div className="relative">
                  <motion.label
                    className={`absolute left-3 sm:left-4 transition-all duration-300 pointer-events-none ${focused === "name" || formState.name
                      ? "top-2 text-xs text-primary"
                      : "top-4 text-muted-foreground"
                      }`}
                  >
                    Your Name
                  </motion.label>
                  <input
                    type="text"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    onFocus={() => setFocused("name")}
                    onBlur={() => setFocused(null)}
                    className="w-full pt-6 pb-2 px-3 sm:px-4 bg-muted/30 border border-border rounded-lg text-sm sm:text-base
                              focus:border-primary focus:outline-none transition-colors"
                    required
                  />
                </div>

                {/* Email Input */}
                <div className="relative">
                  <motion.label
                    className={`absolute left-3 sm:left-4 transition-all duration-300 pointer-events-none ${focused === "email" || formState.email
                      ? "top-2 text-xs text-primary"
                      : "top-4 text-muted-foreground"
                      }`}
                  >
                    Email Address
                  </motion.label>
                  <input
                    type="email"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    onFocus={() => setFocused("email")}
                    onBlur={() => setFocused(null)}
                    className="w-full pt-6 pb-2 px-3 sm:px-4 bg-muted/30 border border-border rounded-lg text-sm sm:text-base
                              focus:border-primary focus:outline-none transition-colors"
                    required
                  />
                </div>

                {/* Message Input */}
                <div className="relative">
                  <motion.label
                    className={`absolute left-3 sm:left-4 transition-all duration-300 pointer-events-none ${focused === "message" || formState.message
                      ? "top-2 text-xs text-primary"
                      : "top-4 text-muted-foreground"
                      }`}
                  >
                    Your Message
                  </motion.label>
                  <textarea
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    onFocus={() => setFocused("message")}
                    onBlur={() => setFocused(null)}
                    rows={5}
                    className="w-full pt-6 pb-2 px-3 sm:px-4 bg-muted/30 border border-border rounded-lg text-sm sm:text-base
                              focus:border-primary focus:outline-none transition-colors resize-none"
                    required
                  />
                </div>
              </div>

              <motion.button
                type="submit"
                className="w-full py-3 sm:py-4 bg-primary text-primary-foreground font-semibold rounded-lg text-sm sm:text-base
                           flex items-center justify-center gap-2 shadow-lg hover:shadow-primary/25 
                           transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Send size={16} className="sm:w-[18px] sm:h-[18px]" />
                Send Message
              </motion.button>
            </form>
          </SlideInLeft>

          {/* Contact Info */}
          <SlideInRight className="flex flex-col justify-center">
            <div className="space-y-8">
              <div>
                <h3 className="text-xl sm:text-2xl font-display font-semibold mb-4">Get in Touch</h3>
                <p className="text-muted-foreground">
                  I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                </p>
              </div>

              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.label}
                    href={info.href}
                    target={info.href.startsWith("http") ? "_blank" : undefined}
                    rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-4 p-4 glass rounded-xl group 
                               hover:border-primary/50 transition-all duration-300"
                    whileHover={{ x: 5 }}
                  >
                    <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary 
                                   group-hover:text-primary-foreground transition-colors">
                      <info.icon size={20} />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-muted-foreground">{info.label}</div>
                      <div className="font-medium">{info.value}</div>
                    </div>
                    <ExternalLink size={16} className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                  </motion.a>
                ))}
              </div>

              {/* Decorative */}
              <div className="pt-8">
                <motion.div
                  className="h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1 }}
                />
              </div>
            </div>
          </SlideInRight>
        </div>
      </div>
    </section>
  );
};
