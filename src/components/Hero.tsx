"use client";

import { ArrowRight, Download, Sparkles, ShieldCheck, Zap, Code2 } from "lucide-react";
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
      className="min-h-[85vh] flex items-center justify-center relative overflow-hidden pt-20 px-4"
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
        <div className="max-w-6xl mx-auto grid gap-12 items-center lg:grid-cols-[1.1fr_0.9fr]">

          {/* Left Column */}
          <div className="space-y-10 text-center lg:text-left">

          {/* Status Badge with Animation */}
            <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center lg:justify-start"
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
              <h1 className="relative text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.05]">
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
              className="max-w-3xl mx-auto lg:mx-0"
            >
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground font-light leading-relaxed">
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
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center pt-10"
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

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative"
          >
            <div className="absolute -inset-6 rounded-3xl bg-gradient-to-tr from-primary/15 via-transparent to-primary/10 blur-2xl" />
            <div className="relative glass-card rounded-3xl p-8 border border-border/50">
              <div className="flex items-center justify-between mb-6">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold">
                  <ShieldCheck className="h-4 w-4" />
                  Trusted & Reliable
                </div>
                <div className="text-xs text-muted-foreground">Based in Ethiopia</div>
              </div>

              <h3 className="text-2xl font-semibold mb-4">What I deliver</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <Zap className="h-5 w-5 text-primary mt-0.5" />
                  Fast, scalable web apps with clean architecture
                </li>
                <li className="flex items-start gap-3">
                  <Code2 className="h-5 w-5 text-primary mt-0.5" />
                  Pixel-perfect UI with modern UX patterns
                </li>
                <li className="flex items-start gap-3">
                  <ShieldCheck className="h-5 w-5 text-primary mt-0.5" />
                  Production-ready APIs and reliable integrations
                </li>
              </ul>

              <div className="mt-8 grid grid-cols-3 gap-4">
                <div className="rounded-2xl bg-background/60 border border-border/50 p-4 text-center">
                  <div className="text-2xl font-bold">10+</div>
                  <div className="text-xs text-muted-foreground mt-1">Projects</div>
                </div>
                <div className="rounded-2xl bg-background/60 border border-border/50 p-4 text-center">
                  <div className="text-2xl font-bold">3+</div>
                  <div className="text-xs text-muted-foreground mt-1">Years</div>
                </div>
                <div className="rounded-2xl bg-background/60 border border-border/50 p-4 text-center">
                  <div className="text-2xl font-bold">5★</div>
                  <div className="text-xs text-muted-foreground mt-1">Reviews</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;