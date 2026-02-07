"use client";

import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "./ui/button";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background to-background opacity-50"></div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-8">

          {/* Status Badge - Refined */}
          <div className="animate-fade-in flex justify-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border/40 bg-background/50 backdrop-blur-sm text-sm text-muted-foreground hover:bg-background/80 transition-colors cursor-default">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Available for New Projects
            </div>
          </div>

          {/* Main Typography */}
          <div className="space-y-4 animate-fade-in-up animation-delay-200">
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-heading font-bold tracking-tighter text-foreground leading-[0.9]">
              Building <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-foreground to-foreground/50">
                Digital Value
              </span>
            </h1>
          </div>

          {/* Subtext */}
          <div className="animate-fade-in-up animation-delay-400 max-w-2xl mx-auto">
            <p className="text-xl sm:text-2xl text-muted-foreground font-light leading-relaxed">
              I am <span className="text-foreground font-medium">Tesfahun Kere</span>.
              A generic-defying <span className="text-foreground font-medium">Bot & Web Developer</span> engineering accessible, pixel-perfect, and performant applications.
            </p>
          </div>

          {/* Actions */}
          <div className="animate-fade-in-up animation-delay-600 flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button
              onClick={() => scrollToSection("projects")}
              className="h-14 px-8 rounded-full bg-foreground text-background hover:bg-foreground/90 transition-all duration-300 hover:scale-105"
            >
              View Selected Work
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>

            <Button
              variant="outline"
              className="h-14 px-8 rounded-full border-border/50 hover:bg-secondary/50 backdrop-blur-sm transition-all duration-300"
              asChild
            >
              <a
                href="/tesfajo.pdf"
                download="Tesfahun_Kere_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download className="mr-2 h-4 w-4" />
                Resume
              </a>
            </Button>
          </div>

          {/* Social Proof/Links - Minimalist */}
          <div className="animate-fade-in animation-delay-800 pt-12 flex justify-center gap-6 opacity-60 hover:opacity-100 transition-opacity duration-300">
            <a href="https://github.com/davetes" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              <Github className="h-6 w-6" />
            </a>
            <a href="https://www.linkedin.com/in/tesfahun-kere-22b54a333/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              <Linkedin className="h-6 w-6" />
            </a>
            <button onClick={() => scrollToSection("contact")} className="hover:text-primary transition-colors">
              <Mail className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
