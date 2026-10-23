"use client";

import { ArrowRight, Download } from "lucide-react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-[80vh] flex items-center px-6 py-12"
    >
      <div className="max-w-4xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-5"
        >
          <div className="inline-flex items-center gap-2 text-sm text-zinc-500">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            Available for work
          </div>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 leading-[1.1]">
            Tesfahun Kere
          </h1>

          <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl leading-relaxed">
            Full-Stack Developer & Systems Engineer.
          </p>

          <p className="text-sm text-zinc-500 dark:text-zinc-500 max-w-xl">
            I build secure, production-ready applications that automate complex workflows and handle high volumes of data reliably. I focus on clean architecture, database integrity, and scalable infrastructure to help businesses operate efficiently.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <Button
              onClick={() => scrollToSection("projects")}
              className="h-11 px-5 rounded-lg bg-zinc-900 dark:bg-zinc-100 text-zinc-100 dark:text-zinc-950 hover:bg-zinc-800 dark:hover:bg-zinc-200 font-medium"
            >
              View Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>

            <Button
              variant="outline"
              className="h-11 px-5 rounded-lg border-zinc-300 dark:border-zinc-700"
              asChild
            >
              <a
                href="/tesfajo.pdf"
                download="Tesfahun_Kere_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download CV
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
