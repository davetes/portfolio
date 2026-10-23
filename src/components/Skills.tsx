"use client";

import {
  SiTelegram,
  SiNodedotjs,
  SiExpress,
  SiPython,
  SiDjango,
  SiPostgresql,
  SiMongodb,
  SiUbuntu,
  SiDocker,
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss
} from "react-icons/si";

const skills = [
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Express", icon: SiExpress },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Python", icon: SiPython },
  { name: "Django", icon: SiDjango },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "MongoDB", icon: SiMongodb },
  { name: "React", icon: SiReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "TailwindCSS", icon: SiTailwindcss },
  { name: "Telegram API", icon: SiTelegram },
  { name: "Docker", icon: SiDocker },
  { name: "Ubuntu", icon: SiUbuntu },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-6 bg-zinc-50 dark:bg-zinc-950/50">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-2">Skills</h2>
          <p className="text-zinc-500">Technologies I work with</p>
        </div>

        <div className="flex flex-wrap gap-3">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="flex items-center gap-2 px-4 py-2.5 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg text-zinc-700 dark:text-zinc-300 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors"
            >
              <skill.icon className="w-5 h-5" />
              <span className="text-sm font-medium">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
