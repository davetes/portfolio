import {
  Code,
  Database,
  Palette,
  Server,
  GitBranch,
  Globe,
  Brain,
  Users,
  MessageCircle,
  Target,
  Lightbulb,
  Shield
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Code,
      skills: [
        { name: "HTML5", level: 95 },
        { name: "CSS3 & Tailwind", level: 90 },
        { name: "JavaScript", level: 88 },
        { name: "React", level: 85 },
        { name: "Next.js", level: 80 },
        { name: "Figma", level: 75 }
      ]
    },
    {
      title: "Backend Development",
      icon: Server,
      skills: [
        { name: "Node.js", level: 82 },
        { name: "Express.js", level: 80 },
        { name: "MongoDB", level: 85 },
        { name: "REST APIs", level: 88 },
        { name: "JWT Auth", level: 75 }
      ]
    },
    {
      title: "Tools & Technologies",
      icon: GitBranch,
      skills: [
        { name: "Git & GitHub", level: 90 },
        { name: "Firebase", level: 78 },
        { name: "Vercel", level: 85 },
        { name: "VS Code", level: 95 }
      ]
    },
    {
      title: "Soft Skills",
      icon: Brain,
      skills: [
        { name: "Problem Solving", level: 92 },
        { name: "Communication", level: 88 },
        { name: "Teamwork", level: 90 },
        { name: "Leadership", level: 80 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 relative border-t border-border/40">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Core Skills
            </h2>
            <div className="h-1 w-20 bg-primary mb-8"></div>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={categoryIndex}
                className="glass-card p-6 rounded-2xl hover:bg-secondary/40 transition-colors"
              >
                {/* Category Header */}
                <div className="mb-6 flex items-center gap-4">
                  <div className="p-2.5 bg-primary/10 rounded-lg">
                    <category.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold font-heading">
                    {category.title}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-1.5">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-foreground/80">
                          {skill.name}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {skill.level}%
                        </span>
                      </div>

                      {/* Progress Bar */}
                      <div className="w-full bg-secondary rounded-full h-1.5 overflow-hidden">
                        <div
                          className="h-full bg-primary/80 rounded-full transition-all duration-1000 ease-out"
                          style={{
                            width: `${skill.level}%`,
                            transitionDelay: `${(categoryIndex * 150) + (skillIndex * 50)}ms`
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Additional Skills Icons - Minimalist */}
          <div className="mt-20 pt-10 border-t border-border/40">
            <h3 className="text-xl font-semibold mb-8 text-foreground/80">
              Other Proficiencies
            </h3>

            <div className="flex flex-wrap gap-4">
              {[
                "Database Design",
                "Web Standards",
                "Security Best Practices",
                "Team Collaboration",
                "Client Communication",
                "Project Management",
                "Innovation",
                "UI/UX Design"
              ].map((tech, index) => (
                <div
                  key={index}
                  className="px-4 py-2 rounded-full border border-border/50 bg-background/50 text-sm text-muted-foreground hover:text-foreground hover:border-primary/50 transition-colors"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;