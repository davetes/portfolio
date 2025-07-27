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
      ],
      gradient: "from-blue-500 to-cyan-500"
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
      ],
      gradient: "from-green-500 to-emerald-500"
    },
    {
      title: "Tools & Technologies",
      icon: GitBranch,
      skills: [
        { name: "Git & GitHub", level: 90 },
        { name: "Firebase", level: 78 },
        { name: "Vercel", level: 85 },
        { name: "VS Code", level: 95 }
      ],
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Soft Skills",
      icon: Brain,
      skills: [
        { name: "Problem Solving", level: 92 },
        { name: "Communication", level: 88 },
        { name: "Teamwork", level: 90 },
        { name: "Leadership", level: 80 }
      ],
      gradient: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              My <span className="text-gradient-primary">Skills</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive overview of my technical expertise and professional abilities
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={categoryIndex}
                className="bg-gradient-card p-6 rounded-xl shadow-soft hover-lift border border-border/50 animate-scale-in"
                style={{ animationDelay: `${categoryIndex * 150}ms` }}
              >
                {/* Category Header */}
                <div className="mb-6">
                  <div className={`w-12 h-12 bg-gradient-to-r ${category.gradient} rounded-lg flex items-center justify-center mb-4`}>
                    <category.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {category.title}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-foreground">
                          {skill.name}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {skill.level}%
                        </span>
                      </div>
                      
                      {/* Progress Bar */}
                      <div className="w-full bg-muted rounded-full h-2">
                        <div
                          className={`h-2 bg-gradient-to-r ${category.gradient} rounded-full transition-all duration-1000 ease-out`}
                          style={{ 
                            width: `${skill.level}%`,
                            animationDelay: `${(categoryIndex * 150) + (skillIndex * 100)}ms`
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Additional Skills Icons */}
          <div className="mt-16">
            <h3 className="text-2xl font-semibold text-center mb-8 text-foreground">
              Additional Technologies
            </h3>
            
            <div className="flex flex-wrap justify-center gap-6">
              {[
                { icon: Database, name: "Database Design" },
                { icon: Globe, name: "Web Standards" },
                { icon: Shield, name: "Security Best Practices" },
                { icon: Users, name: "Team Collaboration" },
                { icon: MessageCircle, name: "Client Communication" },
                { icon: Target, name: "Project Management" },
                { icon: Lightbulb, name: "Innovation" },
                { icon: Palette, name: "UI/UX Design" }
              ].map((tech, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center p-4 bg-gradient-card rounded-lg shadow-soft hover-lift border border-border/50 transition-smooth"
                >
                  <tech.icon className="h-8 w-8 text-primary mb-2" />
                  <span className="text-xs text-muted-foreground text-center">
                    {tech.name}
                  </span>
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