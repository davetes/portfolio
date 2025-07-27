import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "./ui/button";
import heroBackground from "@/assets/hero-background.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `url(${heroBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-background/80 dark:bg-background/90"></div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Greeting */}
          <div className="animate-fade-in">
            <p className="text-base sm:text-lg text-muted-foreground mb-4">
              Hello, I'm
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 perspective-1000">
              <span className="inline-block animate-text-reveal animation-delay-300">
                <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent bg-size-200 animate-gradient-shift">
                  Tesfahun
                </span>
              </span>
              <br />
              <span className="inline-block animate-text-reveal animation-delay-500 hover:animate-letter-float transition-all duration-300">
                <span className="text-foreground">Kere</span>
              </span>
            </h1>
          </div>

          {/* Role */}
          <div className="animate-slide-in-left animation-delay-200">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6 text-muted-foreground">
              Passionate Developer Building Useful Apps
            </h2>
          </div>

          {/* Description */}
          <div className="animate-slide-in-right animation-delay-400">
            <p className="text-base sm:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed px-4">
              I create modern, responsive web applications with clean code and
              beautiful user experiences. Passionate about bringing ideas to
              life through technology.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="animate-scale-in animation-delay-600">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 px-4">
              <Button
                onClick={() => scrollToSection("projects")}
                className="bg-gradient-primary hover:opacity-90 transition-smooth px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg hover-lift w-full sm:w-auto"
              >
                View My Work
                <ArrowDown className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Button>

              <Button
                variant="outline"
                className="px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg hover-glow border-primary/20 hover:border-primary/40 w-full sm:w-auto"
                asChild
              >
                <a
                  href="/tesfajo.pdf"
                  download="Tesfahun_Kere_CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                  Download CV
                </a>
              </Button>
            </div>
          </div>

          {/* Social Links */}
          <div className="animate-fade-in animation-delay-800">
            <div className="flex justify-center space-x-6">
              <Button
                variant="ghost"
                size="icon"
                className="hover-glow text-muted-foreground hover:text-primary"
                asChild
              >
                <a
                  href="https://github.com/davetes"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-6 w-6" />
                </a>
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="hover-glow text-muted-foreground hover:text-primary"
                asChild
              >
                <a
                  href="https://www.linkedin.com/in/tesfahun-kere-22b54a333/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="hover-glow text-muted-foreground hover:text-primary"
                onClick={() => scrollToSection("contact")}
              >
                <Mail className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <button
          onClick={() => scrollToSection("about")}
          className="animate-bounce-subtle text-muted-foreground hover:text-primary transition-smooth"
        >
          <ArrowDown className="h-6 w-6" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
