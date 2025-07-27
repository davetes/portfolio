import { Github, Linkedin, Mail, Heart, ArrowUp } from "lucide-react";
import { Button } from "./ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const quickLinks = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com",
      label: "LinkedIn",
    },
    {
      icon: Mail,
      href: "mailto:tesfahun.kere@example.com",
      label: "Email",
    },
  ];

  return (
    <footer className="bg-gradient-card border-t border-border/50">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Brand & Description */}
            <div className="md:col-span-1">
              <h3 className="text-2xl font-bold text-gradient-primary mb-4">
                Tesfahun Kere
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Full Stack Developer passionate about creating modern, scalable
                web applications. Always learning, always building.
              </p>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <Button
                    key={index}
                    variant="ghost"
                    size="icon"
                    className="hover-glow text-muted-foreground hover:text-primary"
                    asChild
                  >
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                    >
                      <social.icon className="h-5 w-5" />
                    </a>
                  </Button>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="md:col-span-1">
              <h4 className="text-lg font-semibold text-foreground mb-4">
                Quick Links
              </h4>
              <nav className="space-y-2">
                {quickLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className="block text-muted-foreground hover:text-primary transition-colors text-left"
                  >
                    {link.label}
                  </button>
                ))}
              </nav>
            </div>

            {/* Contact Info */}
            <div className="md:col-span-1">
              <h4 className="text-lg font-semibold text-foreground mb-4">
                Get In Touch
              </h4>
              <div className="space-y-2 text-muted-foreground">
                <p>📧 tesfa4706@gmail.com</p>
                <p>📱 +251-968-651-265</p>
                <p>📍 Addis Ababa, Ethiopia</p>
              </div>

              <div className="mt-6">
                <Button
                  onClick={() => scrollToSection("contact")}
                  className="bg-gradient-primary hover:opacity-90 transition-smooth"
                >
                  Start a Project
                </Button>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-border/50 mt-8 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              {/* Copyright */}
              <p className="text-muted-foreground text-sm mb-4 md:mb-0">
                © {currentYear} Tesfahun Kere.
              </p>

              {/* Back to Top */}
              <Button
                variant="ghost"
                size="sm"
                onClick={scrollToTop}
                className="hover-glow text-muted-foreground hover:text-primary"
              >
                <ArrowUp className="h-4 w-4 mr-2" />
                Back to Top
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
