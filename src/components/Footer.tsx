"use client";

import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
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
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "about", label: "About" },
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
    <footer className="bg-background border-t border-border/50">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Brand & Description */}
            <div className="md:col-span-1">
              <h3 className="text-2xl font-bold font-heading mb-4 text-foreground">
                Tesfahun Kere
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
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
                    className="hover:bg-primary/10 hover:text-primary transition-colors"
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
              <h4 className="text-lg font-semibold font-heading text-foreground mb-6">
                Navigation
              </h4>
              <nav className="space-y-3">
                {quickLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className="block text-muted-foreground hover:text-primary transition-colors text-left text-sm"
                  >
                    {link.label}
                  </button>
                ))}
              </nav>
            </div>

            {/* Contact Info */}
            <div className="md:col-span-1">
              <h4 className="text-lg font-semibold font-heading text-foreground mb-6">
                Connect
              </h4>
              <div className="space-y-4 text-sm text-muted-foreground">
                <p>tesfa4706@gmail.com</p>
                <p>+251-968-651-265</p>
                <p>Addis Ababa, Ethiopia</p>
              </div>

              <div className="mt-8">
                <Button
                  onClick={() => scrollToSection("contact")}
                  className="bg-primary text-primary-foreground hover:bg-primary/90 transition-colors h-11 px-6 rounded-lg"
                >
                  Start a Project
                </Button>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-border/50 mt-16 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              {/* Copyright */}
              <p className="text-muted-foreground text-sm">
                © {currentYear} Tesfahun Kere. All rights reserved.
              </p>

              {/* Back to Top */}
              <Button
                variant="ghost"
                size="sm"
                onClick={scrollToTop}
                className="text-muted-foreground hover:text-primary transition-colors text-sm"
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
