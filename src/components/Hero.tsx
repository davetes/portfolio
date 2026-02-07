"use client";
import React from "react";
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
      {/* Background Elements */}
      <div className="absolute inset-0 w-full h-full bg-background">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:32px]"></div>
        <div className="absolute inset-0 bg-background/90 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,transparent_70%,black)]"></div>
      </div>

      {/* Spotlight Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-primary/20 blur-[100px] rounded-full opacity-30 pointer-events-none"></div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-10">

          {/* Status Badge - Glassmorphism */}
          <div className="animate-fade-in flex justify-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/5 bg-white/5 backdrop-blur-md shadow-lg shadow-primary/5 text-sm text-muted-foreground hover:bg-white/10 transition-colors cursor-default group">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="group-hover:text-primary transition-colors duration-300">Available for New Projects</span>
            </div>
          </div>

          {/* Main Typography */}
          <div className="space-y-6 animate-fade-in-up animation-delay-200">
            <h1 className="text-5xl sm:text-7xl md:text-8xl font-heading font-bold tracking-tight text-foreground leading-[1.1] md:leading-[1]">
              Crafting <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-foreground via-foreground/90 to-foreground/50 relative">
                Digital Experiences
                <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary/50 to-transparent"></span>
              </span>
            </h1>
          </div>

          {/* Subtext */}
          <div className="animate-fade-in-up animation-delay-400 max-w-2xl mx-auto">
            <p className="text-lg sm:text-xl text-muted-foreground font-light leading-relaxed">
              I'm <span className="text-foreground font-medium">Tesfahun Kere</span>, a specialized <span className="text-foreground font-medium">Full Stack & Bot Developer</span>.
              I build scalable applications and intelligent automation systems that drive real value.
            </p>
          </div>

          {/* Actions */}
          <div className="animate-fade-in-up animation-delay-600 flex flex-col sm:flex-row gap-5 justify-center items-center pt-8">
            <Button
              onClick={() => scrollToSection("projects")}
              className="h-14 px-8 rounded-full bg-foreground text-background font-medium text-lg hover:bg-foreground/90 transition-all duration-300 shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)] hover:shadow-[0_0_25px_-5px_rgba(255,255,255,0.5)] hover:scale-105"
            >
              View My Work
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>

            <Button
              variant="outline"
              className="h-14 px-8 rounded-full border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all duration-300 group"
              asChild
            >
              <a
                href="/tesfajo.pdf"
                download="Tesfahun_Kere_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download className="mr-2 h-4 w-4 group-hover:animate-bounce" />
                Download CV
              </a>
            </Button>
          </div>

          {/* Social Proof/Links */}
          <div className="animate-fade-in animation-delay-800 pt-16 flex justify-center items-center gap-8">
            <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-border"></div>
            <div className="flex gap-6 opacity-60 hover:opacity-100 transition-opacity duration-300">
              <a href="https://github.com/davetes" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors hover:scale-110 duration-300">
                <Github className="h-6 w-6" />
              </a>
              <a href="https://www.linkedin.com/in/tesfahun-kere-22b54a333/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors hover:scale-110 duration-300">
                <Linkedin className="h-6 w-6" />
              </a>
              <button onClick={() => scrollToSection("contact")} className="hover:text-primary transition-colors hover:scale-110 duration-300">
                <Mail className="h-6 w-6" />
              </button>
            </div>
            <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-border"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
