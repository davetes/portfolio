"use client";

import { ArrowRight, Download, Terminal as TerminalIcon, CheckCircle2, Server, Cpu, Database, Code2 } from "lucide-react";
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
      className="min-h-[90vh] flex items-center justify-center relative overflow-hidden pt-28 pb-16 px-4"
    >
      {/* Subtle Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293710_1px,transparent_1px),linear-gradient(to_bottom,#1f293710_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      {/* Hero Content */}
      <div className="container mx-auto relative z-10 max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center">

          {/* Left Column: Headline & Info */}
          <div className="space-y-8 text-left">

            {/* Status Pill */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-zinc-200 dark:border-zinc-800 bg-zinc-100/90 dark:bg-zinc-900/80 text-xs font-medium text-zinc-700 dark:text-zinc-300 backdrop-blur-md shadow-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Available for engineering roles & projects</span>
            </motion.div>

            {/* Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-4"
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.1] text-zinc-900 dark:text-zinc-100 font-heading">
                Building <span className="text-gradient-accent">Scalable Web Systems</span> & Telegram Automation
              </h1>
              <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 font-normal leading-relaxed max-w-2xl">
                I'm <strong className="text-zinc-900 dark:text-zinc-100 font-semibold">Tesfahun Kere</strong>, a Full-Stack & Systems Developer specializing in Node.js backend architecture, PostgreSQL, Telegram bot APIs, and high-performance React/Next.js web apps.
              </p>
            </motion.div>

            {/* Action CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-wrap gap-4 pt-2"
            >
              <Button
                onClick={() => scrollToSection("projects")}
                className="h-12 px-7 rounded-xl bg-zinc-900 dark:bg-zinc-100 text-zinc-100 dark:text-zinc-950 hover:bg-zinc-800 dark:hover:bg-zinc-200 font-medium transition-all duration-200 shadow-md flex items-center gap-2"
              >
                Explore Selected Works
                <ArrowRight className="h-4 w-4" />
              </Button>

              <Button
                variant="outline"
                className="h-12 px-7 rounded-xl border-zinc-300 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/50 hover:bg-zinc-100 dark:hover:bg-zinc-800/80 text-zinc-800 dark:text-zinc-200 font-medium transition-all duration-200"
                asChild
              >
                <a
                  href="/tesfajo.pdf"
                  download="Tesfahun_Kere_CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download CV
                </a>
              </Button>
            </motion.div>

            {/* Tech Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="pt-6 border-t border-zinc-200 dark:border-zinc-800/60 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs text-zinc-600 dark:text-zinc-400 font-mono"
            >
              <span className="flex items-center gap-1.5"><Server className="h-3.5 w-3.5 text-indigo-600 dark:text-indigo-400" /> Node.js & Express</span>
              <span className="flex items-center gap-1.5"><Code2 className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" /> Python & Django</span>
              <span className="flex items-center gap-1.5"><Database className="h-3.5 w-3.5 text-sky-600 dark:text-sky-400" /> PostgreSQL & MongoDB</span>
              <span className="flex items-center gap-1.5"><Code2 className="h-3.5 w-3.5 text-amber-600 dark:text-amber-400" /> Next.js & React</span>
              <span className="flex items-center gap-1.5"><Cpu className="h-3.5 w-3.5 text-purple-600 dark:text-purple-400" /> Telegram Bot API</span>
            </motion.div>

          </div>

          {/* Right Column: Sleek Terminal & System Architecture Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full"
          >
            <div className="rounded-2xl border border-zinc-800 bg-zinc-950 shadow-2xl overflow-hidden font-mono text-xs text-zinc-300">
              {/* Window Bar */}
              <div className="px-4 py-3 bg-zinc-900 border-b border-zinc-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <div className="flex items-center gap-1.5 text-zinc-400 text-[11px]">
                  <TerminalIcon className="h-3.5 w-3.5 text-zinc-500" />
                  <span>tesfahun@vps:~ (bash)</span>
                </div>
                <div className="w-12"></div>
              </div>

              {/* Terminal Content */}
              <div className="p-6 space-y-4 text-zinc-300 leading-relaxed">
                <div>
                  <span className="text-emerald-400">tesfahun@vps</span>:<span className="text-sky-400">~</span>$ neofetch --system
                </div>

                <div className="p-4 rounded-xl bg-zinc-900/80 border border-zinc-800 space-y-2.5">
                  <div className="flex justify-between items-center text-zinc-400 pb-2 border-b border-zinc-800">
                    <span className="font-semibold text-zinc-100">ENGINEER PROFILE</span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">ONLINE</span>
                  </div>

                  <div className="grid grid-cols-[100px_1fr] gap-1 text-[11px]">
                    <span className="text-zinc-500">Developer:</span>
                    <span className="text-zinc-100 font-sans font-semibold">Tesfahun Kere</span>
                    
                    <span className="text-zinc-500">Role:</span>
                    <span className="text-zinc-300">Backend & Bot Systems Engineer</span>

                    <span className="text-zinc-500">Core Stack:</span>
                    <span className="text-indigo-300">Node.js, Express, Python, TypeScript, PostgreSQL</span>

                    <span className="text-zinc-500">Frontend:</span>
                    <span className="text-sky-300">Next.js 15, React 19, TailwindCSS</span>

                    <span className="text-zinc-500">Infrastructure:</span>
                    <span className="text-amber-300">Ubuntu VPS, Nginx, Docker, Railway</span>
                  </div>
                </div>

                <div className="pt-2 space-y-2">
                  <div className="text-zinc-400 flex items-center justify-between text-[11px]">
                    <span>ACTIVE SYSTEMS:</span>
                    <span className="text-emerald-400 font-semibold">100% Operational</span>
                  </div>
                  
                  <div className="space-y-1.5 font-sans">
                    <div className="flex items-center justify-between p-2.5 rounded-lg bg-zinc-900/60 border border-zinc-800 text-xs">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                        <span className="font-medium text-zinc-200">SINET Journal (AAU)</span>
                      </div>
                      <span className="text-[10px] text-zinc-400 bg-zinc-800 px-2 py-0.5 rounded">Live Production</span>
                    </div>

                    <div className="flex items-center justify-between p-2.5 rounded-lg bg-zinc-900/60 border border-zinc-800 text-xs">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                        <span className="font-medium text-zinc-200">MelaTech MiniApp & Admin</span>
                      </div>
                      <span className="text-[10px] text-zinc-400 bg-zinc-800 px-2 py-0.5 rounded">Telegram Bot</span>
                    </div>
                  </div>
                </div>

                <div className="pt-1 text-zinc-500 text-[11px] flex items-center gap-1.5">
                  <span className="animate-pulse text-emerald-400">❯</span> Ready for contract development & full-time engineering.
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