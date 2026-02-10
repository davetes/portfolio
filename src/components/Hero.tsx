"use client";

import { ArrowRight, Download, Github, Linkedin, Mail, Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [typedText, setTypedText] = useState("");
  const fullText = "Tesfahun Kere";

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", onMouseMove);

    // Typewriter effect
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      clearInterval(typingInterval);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 px-4"
    >
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />

      {/* Dynamic Grid Overlay */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.1) 0px, transparent 50%)`,
          backgroundSize: '100% 100%',
        }}
      />

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-[2px] h-[2px] bg-primary/20 rounded-full"
            initial={{
              x: Math.random() * 100 + 'vw',
              y: Math.random() * 100 + 'vh',
            }}
            animate={{
              x: Math.random() * 100 + 'vw',
              y: Math.random() * 100 + 'vh',
            }}
            transition={{
              duration: 20 + Math.random() * 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-10">

          {/* Status Badge with Animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center"
          >
            <div className="group inline-flex items-center gap-3 px-4 py-2.5 rounded-full border border-primary/20 bg-background/80 backdrop-blur-xl hover:bg-background/90 hover:border-primary/30 transition-all duration-300 cursor-default">
              <div className="relative">
                <span className="absolute animate-ping inline-flex h-3 w-3 rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </div>
              <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                Available for New Projects
              </span>
              <Sparkles className="h-3 w-3 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </motion.div>

          {/* Main Heading with Gradient Text */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative"
            >
              <div className="absolute -inset-x-20 -inset-y-6 bg-gradient-to-r from-transparent via-primary/5 to-transparent blur-2xl opacity-50" />
              <h1 className="relative text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tight leading-[0.9]">
                <span className="bg-gradient-to-r from-foreground via-foreground/90 to-foreground/70 bg-clip-text text-transparent">
                  Building
                </span>
                <br />
                <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
                  Digital Value
                </span>
              </h1>
            </motion.div>

            {/* Animated Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="max-w-3xl mx-auto"
            >
              <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground font-light leading-relaxed">
                I'm{" "}
                <span className="relative inline-block">
                  <span className="text-foreground font-semibold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent animate-gradient-x">
                    {typedText}
                  </span>
                  <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-gradient-to-r from-primary to-transparent"></span>
                </span>
                . A{" "}
                <span className="relative group cursor-help">
                  <span className="text-foreground font-semibold">generic-defying</span>
                  <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-background border border-border rounded-lg text-xs font-normal opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-50">
                    Breaking traditional boundaries
                  </span>
                </span>{" "}
                <span className="text-foreground font-semibold">Bot & Web Developer</span>{" "}
                engineering accessible, pixel-perfect digital experiences.
              </p>
            </motion.div>
          </div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-10"
          >
            <Button
              onClick={() => scrollToSection("projects")}
              className="group h-14 px-8 rounded-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground font-medium transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 hover:scale-105"
            >
              <span className="flex items-center gap-2">
                View Selected Work
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>

            <Button
              variant="outline"
              className="group h-14 px-8 rounded-full border-2 border-border/50 hover:border-primary/50 bg-background/60 backdrop-blur-sm hover:bg-background/80 font-medium transition-all duration-300 hover:scale-105"
              asChild
            >
              <a
                href="/tesfajo.pdf"
                download="Tesfahun_Kere_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download className="mr-2 h-4 w-4 group-hover:animate-bounce" />
                Download Resume
              </a>
            </Button>
          </motion.div>

          {/* Social Links with Hover Effects */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="pt-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background/50 backdrop-blur-sm border border-border/30">
              <span className="text-sm text-muted-foreground mr-2">Connect</span>
              <div className="flex items-center gap-4">
                <a
                  href="https://github.com/davetes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-2 rounded-full hover:bg-primary/10 transition-all duration-300 hover:scale-110"
                >
                  <Github className="h-5 w-5 text-muted-foreground group-hover:text-foreground transition-colors" />
                </a>
                <div className="h-4 w-[1px] bg-border/50" />
                <a
                  href="https://www.linkedin.com/in/tesfahun-kere-22b54a333/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-2 rounded-full hover:bg-primary/10 transition-all duration-300 hover:scale-110"
                >
                  <Linkedin className="h-5 w-5 text-muted-foreground group-hover:text-foreground transition-colors" />
                </a>
                <div className="h-4 w-[1px] bg-border/50" />
                <button
                  onClick={() => scrollToSection("contact")}
                  className="group p-2 rounded-full hover:bg-primary/10 transition-all duration-300 hover:scale-110"
                >
                  <Mail className="h-5 w-5 text-muted-foreground group-hover:text-foreground transition-colors" />
                </button>
              </div>
            </div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <button
              onClick={() => scrollToSection("projects")}
              className="flex flex-col items-center gap-2 group"
            >
              <span className="text-xs text-muted-foreground/60 group-hover:text-muted-foreground transition-colors">
                Explore
              </span>
              <div className="w-6 h-10 border-2 border-border/30 rounded-full flex justify-center p-1 group-hover:border-primary/50 transition-colors">
                <motion.div
                  animate={{ y: [0, 12, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="w-1.5 h-1.5 rounded-full bg-primary/60 group-hover:bg-primary"
                />
              </div>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;