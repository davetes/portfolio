import { User, Heart, Target, Coffee } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: User,
      title: "Professional",
      description:
        "3+ years of development experience with modern technologies",
    },
    {
      icon: Heart,
      title: "Passionate",
      description:
        "Love creating solutions that make a difference in people's lives",
    },
    {
      icon: Target,
      title: "Goal-Oriented",
      description: "Focused on delivering high-quality, scalable applications",
    },
    {
      icon: Coffee,
      title: "Dedicated",
      description:
        "Always learning and staying up-to-date with latest tech trends",
    },
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-background to-background/50 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:20px_20px]"></div>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="text-gradient-primary">Me</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get to know me better and what drives my passion for development
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Bio Content */}
            <div className="animate-slide-in-left">
              <h3 className="text-2xl font-semibold mb-6 text-foreground flex items-center">
                {/*
                  Animated typing effect that loops infinitely.
                */}
                <span
                  style={{
                    display: "inline-block",
                    whiteSpace: "pre",
                    overflow: "hidden",
                    borderRight: "2px solid black",
                    animation:
                      "typing 3.5s steps(22, end) infinite, blink-cursor 1s step-end infinite alternate",
                  }}
                >
                  Hi, I'm Tesfahun Kere
                </span>
              </h3>
              <style>
                {`
                  @keyframes typing {
                  from { width: 0 }
                  to { width: 17ch }
                  }
                  @keyframes blink-cursor {
                  0%, 100% { border-color: black; }
                  50% { border-color: transparent; }
                  }
                  `}
              </style>

              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I'm a passionate Full Stack Developer with a strong foundation
                  in both frontend and backend technologies. My journey in web
                  development started with curiosity about how websites work,
                  and it has evolved into a deep love for creating digital
                  experiences that matter.
                </p>

                <p>
                  I specialize in building modern, responsive web applications
                  using cutting-edge technologies like React, Next.js, Node.js,
                  and MongoDB. I believe in writing clean, maintainable code and
                  following best practices to ensure scalable solutions.
                </p>

                <p>
                  When I'm not coding, you'll find me exploring new
                  technologies, contributing to open-source projects, or
                  mentoring fellow developers. I'm always excited to take on new
                  challenges and collaborate on innovative projects.
                </p>
              </div>

              <div className="mt-8">
                <h4 className="text-lg font-semibold mb-4 text-foreground">
                  Quick Facts
                </h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>
                    🎓 Studied Computer Science at Addis Ababa University
                    (2020–2024)
                  </li>
                  <li>💻 3+ Years of Development Experience</li>
                  <li>🚀 Available for Freelance Projects</li>
                </ul>
              </div>
            </div>

            {/* Highlights Grid */}
            <div className="animate-slide-in-right">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {highlights.map((item, index) => (
                  <div
                    key={index}
                    className="glass-card p-6 rounded-xl hover-lift"
                  >
                    <div className="mb-4">
                      <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                        <item.icon className="h-6 w-6 text-white" />
                      </div>
                    </div>

                    <h4 className="text-lg font-semibold mb-2 text-foreground">
                      {item.title}
                    </h4>

                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {item.description}
                    </p>
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

export default About;
