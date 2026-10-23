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

const Skills = () => {
  const skillCategories = [
    {
      title: "Bot Development & Automation",
      icon: Bot,
      description: "Building intelligent, automated systems with Telegram API and Python/Node.js",
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
      description: "Scalable infrastructure, REST APIs, database architecture, and server management",
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
      description: "Modern, responsive web applications with Next.js and React",
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
    <section id="skills" className="py-24 relative overflow-hidden bg-white dark:bg-zinc-950">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 max-w-2xl">
            <div className="text-xs font-mono tracking-widest text-indigo-600 dark:text-indigo-400 uppercase mb-3">Capabilities</div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-zinc-900 dark:text-zinc-100 mb-4">
              Technical Stack
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Core competencies in backend engineering, Telegram automation, full-stack web development, and production deployment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/40 p-8 transition-all duration-300 hover:border-indigo-200 dark:hover:border-indigo-800 hover:bg-white dark:hover:bg-zinc-900/80 shadow-sm hover:shadow-lg hover:shadow-indigo-500/5"
              >
                <div className="w-14 h-14 bg-white dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700/60 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-200 shadow-sm">
                  <category.icon className="h-7 w-7 text-indigo-600 dark:text-indigo-400" />
                </div>

                <h3 className="text-xl font-bold font-heading mb-2 text-zinc-900 dark:text-zinc-100">
                  {category.title}
                </h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-6 leading-relaxed">
                  {category.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 bg-white dark:bg-zinc-800/60 border border-zinc-200 dark:border-zinc-700/50 rounded-lg text-sm text-zinc-700 dark:text-zinc-300 font-medium flex items-center gap-2 hover:border-indigo-300 dark:hover:border-indigo-600 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors cursor-default"
                    >
                      <skill.icon className="w-4 h-4 text-zinc-400 dark:text-zinc-500" />
                      {skill.name}
                    </span>
                  ))}
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
