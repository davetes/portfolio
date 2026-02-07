import {
  Bot,
  Server,
  Globe,
  Cpu,
  Database,
  Cloud,
  Layout,
  Terminal,
  Shield,
  GitBranch,
  Code
} from 'lucide-react';
import {
  SiTelegram,
  SiNodedotjs,
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
        { name: "Node.js", icon: SiNodedotjs },
        { name: "Python", icon: SiPython },
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
        { name: "PostgreSQL", icon: SiPostgresql },
        { name: "MongoDB", icon: SiMongodb },
        { name: "Ubuntu VPS", icon: SiUbuntu },
        { name: "Nginx", icon: SiNginx },
        { name: "Docker", icon: SiDocker },
        { name: "RESTful APIs", icon: FaGlobeIcon }
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
    <section id="skills" className="py-24 relative border-t border-border/40 overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:30px_30px]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Technical Expertise
            </h2>
            <div className="h-1 w-20 bg-primary mb-8"></div>
            <p className="text-xl text-muted-foreground max-w-2xl font-light leading-relaxed">
              A deep dive into my core competencies, focusing on bot automation, full-stack development, and robust backend infrastructure.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="glass-card p-8 rounded-2xl hover:bg-secondary/40 transition-colors group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                  <category.icon className="w-32 h-32 text-primary" />
                </div>

                <div className="relative z-10">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <category.icon className="h-7 w-7 text-primary" />
                  </div>

                  <h3 className="text-2xl font-bold font-heading mb-2">
                    {category.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-8">
                    {category.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 bg-background/50 border border-border/50 rounded-lg text-sm text-foreground/80 font-medium flex items-center gap-2 hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
                      >
                        <skill.icon className="w-4 h-4" />
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Tooling */}
          <div className="mt-20 pt-10 border-t border-border/40">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="md:w-1/3">
                <h4 className="text-xl font-semibold mb-2 font-heading">Development Arsenal</h4>
                <p className="text-muted-foreground text-sm">Tools and software I use daily to accelerate development.</p>
              </div>
              <div className="md:w-2/3 flex flex-wrap gap-4 justify-center md:justify-end">
                {[
                  { icon: Code, name: "VS Code" },
                  { icon: GitBranch, name: "Git" },
                  { icon: Terminal, name: "Bash" },
                  { icon: Database, name: "Postman" },
                  { icon: Layout, name: "Figma" },
                  { icon: Shield, name: "Linux" }
                ].map((tool, i) => (
                  <div key={i} className="flex items-center gap-2 px-4 py-2 bg-secondary/20 rounded-lg border border-border/30 text-sm text-muted-foreground">
                    <tool.icon className="w-4 h-4" />
                    {tool.name}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;