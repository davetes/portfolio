"use client";

import { ArrowRight, Download, Sparkles, Zap, Shield, Users } from "lucide-react";
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
      className="min-h-[95vh] flex items-center relative overflow-hidden pt-24 pb-16 px-4"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 via-white to-purple-50/30 dark:from-zinc-950 dark:via-zinc-950 dark:to-indigo-950/20" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293710_1px,transparent_1px),linear-gradient(to_bottom,#1f293710_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="container mx-auto relative z-10 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Column */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-sm font-medium">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                </span>
                Available for engineering roles
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] text-zinc-900 dark:text-zinc-100 font-heading">
                Full-Stack Engineer & Systems Builder
              </h1>

              <p className="text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-xl">
                I build <span className="text-zinc-900 dark:text-zinc-100 font-semibold">scalable backend systems</span>, Telegram automation platforms, and high-performance web applications that handle thousands of concurrent users.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="flex flex-wrap gap-4"
            >
              <Button
                onClick={() => scrollToSection("projects")}
                className="h-12 px-8 rounded-xl bg-zinc-900 dark:bg-zinc-100 text-zinc-100 dark:text-zinc-950 hover:bg-zinc-800 dark:hover:bg-zinc-200 font-medium transition-all duration-200 shadow-lg flex items-center gap-2"
              >
                View My Work
                <ArrowRight className="h-4 w-4" />
              </Button>

              <Button
                variant="outline"
                className="h-12 px-8 rounded-xl border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900/50 hover:bg-zinc-50 dark:hover:bg-zinc-800/80 text-zinc-800 dark:text-zinc-200 font-medium transition-all duration-200"
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

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="grid grid-cols-3 gap-4 pt-6 border-t border-zinc-200 dark:border-zinc-800"
            >
              <div>
                <div className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">5+</div>
                <div className="text-sm text-zinc-500 dark:text-zinc-400">Live Systems</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">Node.js</div>
                <div className="text-sm text-zinc-500 dark:text-zinc-400">Primary Stack</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">PostgreSQL</div>
                <div className="text-sm text-zinc-500 dark:text-zinc-400">Database Expert</div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Feature Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            {/* Main Value Prop Card */}
            <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 p-8 shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-indigo-100 dark:bg-indigo-900/40 flex items-center justify-center">
                  <Sparkles className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                </div>
                <div>
                  <h3 className="font-bold text-zinc-900 dark:text-zinc-100">What I Build</h3>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400">Production-grade systems</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 rounded-xl bg-zinc-50 dark:bg-zinc-800/40">
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center flex-shrink-0">
                    <Shield className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <div>
                    <div className="font-semibold text-zinc-900 dark:text-zinc-100 text-sm">Backend Architecture</div>
                    <div className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">REST APIs, authentication, role-based access, database design</div>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-zinc-50 dark:bg-zinc-800/40">
                  <div className="w-8 h-8 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center flex-shrink-0">
                    <Zap className="h-4 w-4 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <div className="font-semibold text-zinc-900 dark:text-zinc-100 text-sm">Telegram Automation</div>
                    <div className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">Mini apps, admin panels, broadcast systems, user management</div>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-zinc-50 dark:bg-zinc-800/40">
                  <div className="w-8 h-8 rounded-lg bg-sky-100 dark:bg-sky-900/30 flex items-center justify-center flex-shrink-0">
                    <Users className="h-4 w-4 text-sky-600 dark:text-sky-400" />
                  </div>
                  <div>
                    <div className="font-semibold text-zinc-900 dark:text-zinc-100 text-sm">Full-Stack Web Apps</div>
                    <div className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">Next.js, React, real-time features, responsive UIs</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Tech Stack Pills */}
            <div className="flex flex-wrap gap-2 justify-center">
              {["Node.js", "TypeScript", "PostgreSQL", "Next.js 15", "React 19", "Telegram API", "Docker"].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-white dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 rounded-full text-sm text-zinc-600 dark:text-zinc-400 font-medium hover:border-indigo-300 dark:hover:border-indigo-700 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
