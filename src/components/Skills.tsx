import {
  Bot,
  Server,
  Globe
} from 'lucide-react';
import {
  SiTelegram,
  SiNodedotjs,
  SiExpress,
  SiPython,
  SiDjango,
  SiSocketdotio,
  SiPostgresql,
  SiMongodb,
  SiUbuntu,
  SiNginx,
  SiDocker,
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiRedux
} from "react-icons/si";
import { FaRobot, FaTerminal as FaTerminalIcon, FaGlobe as FaGlobeIcon, FaLock } from "react-icons/fa";

// Alias fontawesome icons if needed to avoid conflicts with lucide
// Although Terminal, Globe are from Lucide, I'll alias the FA ones to be safe
// Wait, I am using FaTerminal in the code as FaTerminal, not Terminal. 
// Ah, I need to make sure I use the aliased ones in the code if I alias them.
// In my previous tool call I used FaTerminal, FaRobot, FaGlobe, FaLock.
// So I should import them as such.
// But wait, there is a conflict: Terminal is imported from lucide-react. 
// I should alias FaTerminal on import.

const Skills = () => {
  const skillCategories = [
    {
      title: "Bot Development & Automation",
      icon: Bot,
      description: "Building intelligent, automated systems",
      skills: [
        { name: "Telegram API", icon: SiTelegram },
        { name: "Python", icon: SiPython },
        { name: "Node.js", icon: SiNodedotjs },
        { name: "Web Scraping", icon: FaRobot },
        { name: "Automation Scripts", icon: FaTerminalIcon },
        { name: "Socket.io", icon: SiSocketdotio }
      ]
    },
    {
      title: "Backend & DevOps",
      icon: Server,
      description: "Scalable infrastructure & server management",
      skills: [
        { name: "Express.js", icon: SiExpress },
        { name: "Python & Django", icon: SiDjango },
        { name: "PostgreSQL", icon: SiPostgresql },
        { name: "MongoDB", icon: SiMongodb },
        { name: "Ubuntu VPS", icon: SiUbuntu },
        { name: "Docker & Nginx", icon: SiDocker }
      ]
    },
    {
      title: "Full Stack Web",
      icon: Globe,
      description: "Modern, responsive web applications",
      skills: [
        { name: "React", icon: SiReact },
        { name: "Next.js", icon: SiNextdotjs },
        { name: "TypeScript", icon: SiTypescript },
        { name: "Tailwind CSS", icon: SiTailwindcss },
        { name: "Auth.js", icon: FaLock },
        { name: "Redux", icon: SiRedux }
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 relative border-t border-zinc-200 dark:border-zinc-800/60 overflow-hidden bg-zinc-50/50 dark:bg-zinc-950/40">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="mb-14 flex flex-col gap-4">
            <div className="text-xs font-mono tracking-widest text-indigo-600 dark:text-indigo-400 uppercase">Capabilities</div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-zinc-900 dark:text-zinc-100">
              Technical Stack & Expertise
            </h2>
            <p className="text-base text-zinc-600 dark:text-zinc-400 max-w-2xl font-normal leading-relaxed">
              Core competencies spanning bot automation, full-stack web engineering, database architecture, and production DevOps.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/40 p-7 transition-all duration-300 hover:border-zinc-300 dark:hover:border-zinc-700 hover:bg-zinc-50/80 dark:hover:bg-zinc-900/70 shadow-sm hover:shadow-md"
              >
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-zinc-100 dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700/60 rounded-xl flex items-center justify-center mb-5 group-hover:scale-105 transition-transform duration-200">
                    <category.icon className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                  </div>

                  <h3 className="text-xl font-bold font-heading mb-1.5 text-zinc-900 dark:text-zinc-100">
                    {category.title}
                  </h3>
                  <p className="text-zinc-500 dark:text-zinc-400 text-xs mb-6">
                    {category.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 bg-zinc-100 dark:bg-zinc-950/70 border border-zinc-200 dark:border-zinc-800 rounded-lg text-xs text-zinc-700 dark:text-zinc-300 font-medium flex items-center gap-2 hover:border-zinc-300 dark:hover:border-zinc-700 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors cursor-default"
                      >
                        <skill.icon className="w-3.5 h-3.5 text-zinc-500 dark:text-zinc-400" />
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;