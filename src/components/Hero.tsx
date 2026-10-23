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
      className="min-h-[70vh] flex items-center px-6"
    >
      <div className="max-w-4xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 text-sm text-zinc-500 mb-4">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            Available for work
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">
            Tesfahun Kere
          </h1>

          <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-3 max-w-xl">
            Full-Stack Developer & Systems Engineer.
          </p>

          <p className="text-sm text-zinc-500 dark:text-zinc-500 mb-6 max-w-lg">
            I build secure, production-ready applications that automate complex workflows and handle high volumes of data reliably.
          </p>

          <div className="flex flex-wrap gap-3">
            <Button
              onClick={() => scrollToSection("projects")}
              className="h-10 px-5 rounded-lg bg-zinc-900 dark:bg-zinc-100 text-zinc-100 dark:text-zinc-950 hover:bg-zinc-800 dark:hover:bg-zinc-200 font-medium text-sm"
            >
              View Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>

            <Button
              variant="outline"
              className="h-10 px-5 rounded-lg border-zinc-300 dark:border-zinc-700 text-sm"
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
