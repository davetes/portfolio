import { User, Heart, Target, Coffee, Code2, Globe } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-32 bg-secondary/20 relative overflow-hidden">
      {/* Subtle Grid */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:40px_40px]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="mb-20">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              About Me
            </h2>
            <div className="h-1 w-20 bg-primary mb-8"></div>
            <p className="text-xl text-muted-foreground max-w-2xl font-light leading-relaxed">
              I'm a <span className="text-foreground font-medium">Bot & Full Stack Web Developer</span> guided by a passion for clean code and automation.
            </p>
          </div>

          {/* Bento Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6">

            {/* Main Bio - Large Card */}
            <div className="md:col-span-2 md:row-span-2 glass-card p-8 rounded-2xl flex flex-col justify-center space-y-6">
              <div className="p-3 bg-primary/10 w-fit rounded-lg">
                <User className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold font-heading">The Developer</h3>
              <p className="text-muted-foreground leading-relaxed">
                My journey began with a curiosity about how the web works, which quickly evolved into a dedicated career. I specialize in the <strong>React ecosystem</strong> and <strong>Node.js</strong>, but I believe tools are secondary to solving problems effectively.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I don't just write code; I build solutions. Whether it's architecting a scalable backend or crafting a pixel-perfect frontend, I approach every challenge with engineering rigor and creative thinking.
              </p>
            </div>

            {/* Stat Card 1 */}
            <div className="glass-card p-6 rounded-2xl flex flex-col justify-between hover:bg-card/80 transition-colors group">
              <div className="mb-4 p-3 bg-blue-500/10 w-fit rounded-lg group-hover:bg-blue-500/20 transition-colors">
                <Code2 className="h-6 w-6 text-blue-500" />
              </div>
              <div>
                <span className="text-4xl font-bold font-heading">3+</span>
                <p className="text-sm text-muted-foreground mt-1">Years of Experience</p>
              </div>
            </div>

            {/* Stat Card 2 */}
            <div className="glass-card p-6 rounded-2xl flex flex-col justify-between hover:bg-card/80 transition-colors group">
              <div className="mb-4 p-3 bg-purple-500/10 w-fit rounded-lg group-hover:bg-purple-500/20 transition-colors">
                <Globe className="h-6 w-6 text-purple-500" />
              </div>
              <div>
                <span className="text-4xl font-bold font-heading">10+</span>
                <p className="text-sm text-muted-foreground mt-1">Projects Completed</p>
              </div>
            </div>

            {/* Philosophy Card - Wide */}
            <div className="md:col-span-3 glass-card p-8 rounded-2xl flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1 space-y-4">
                <h3 className="text-xl font-bold font-heading flex items-center gap-2">
                  <Target className="h-5 w-5 text-primary" />
                  My Philosophy
                </h3>
                <p className="text-muted-foreground">
                  "Make it work, make it right, make it fast." I believe in iterative development, constant learning, and leaving the codebase better than I found it.
                </p>
              </div>
              <div className="flex gap-4">
                <div className="px-4 py-2 bg-background/50 rounded-lg text-sm font-medium border border-border/50">Clean Code</div>
                <div className="px-4 py-2 bg-background/50 rounded-lg text-sm font-medium border border-border/50">Performance</div>
                <div className="px-4 py-2 bg-background/50 rounded-lg text-sm font-medium border border-border/50">UX First</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
