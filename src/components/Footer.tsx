"use client";

import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { Button } from "./ui/button";

const UpworkIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 32 32"
    className={className}
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M24.9 9.6c-2.3 0-4.1 1.1-5.2 2.8-.8-1.8-1.4-3.8-1.8-5.8h-4.2v8.1c0 2.3-1.3 3.9-3.4 3.9-2 0-3.3-1.6-3.3-3.9V6.6H2.8v8.4c0 4.4 3.1 7.5 7.6 7.5 3.3 0 5.8-1.6 7-4.1 1.2 2.5 3.4 4.1 6.5 4.1 4.7 0 7.6-3.3 7.6-7.5 0-4.2-2.9-7.4-7.6-7.4zm-.3 10.7c-2 0-3.3-1.6-4.1-3.6.8-2.4 2-4.1 4.2-4.1 2.1 0 3.6 1.6 3.6 3.8 0 2.2-1.5 3.9-3.7 3.9z" />
  </svg>
);

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
    { id: "testimonials", label: "Testimonials" },
    { id: "contact", label: "Contact" },
  ];

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/davetes",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/tesfahun-kere-22b54a333/",
      label: "LinkedIn",
    },
    {
      icon: UpworkIcon,
      href: "https://www.upwork.com/freelancers/~0186f63640d005f5ec",
      label: "Upwork",
    },
    {
      icon: Mail,
      href: "mailto:tesfa4706@gmail.com",
      label: "Email",
    },
  ];

  return (
    <footer className="bg-zinc-100 dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr_1fr]">
            {/* Brand & Description */}
            <div className="md:col-span-1 space-y-4">
              <h3 className="text-xl font-bold font-mono text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
                <span className="text-indigo-600 dark:text-indigo-400">&lt;&gt;</span> tesfahun.dev
              </h3>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-sm">
                Full-Stack & Systems Engineer building robust backend services, automated Telegram platforms, and modern web applications.
              </p>

              {/* Social Links */}
              <div className="flex items-center gap-2 pt-2">
                {socialLinks.map((social, index) => (
                  <Button
                    key={index}
                    variant="ghost"
                    size="icon"
                    className="h-9 w-9 rounded-xl border border-zinc-300 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/60 hover:bg-zinc-200 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                    asChild
                  >
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                    >
                      <social.icon className="h-4 w-4" />
                    </a>
                  </Button>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="md:col-span-1">
              <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-900 dark:text-zinc-300 mb-4">
                Navigation
              </h4>
              <nav className="space-y-2.5">
                {quickLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className="block text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors text-left text-xs"
                  >
                    {link.label}
                  </button>
                ))}
              </nav>
            </div>

            {/* Contact Info */}
            <div className="md:col-span-1">
              <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-900 dark:text-zinc-300 mb-4">
                Contact & Specs
              </h4>
              <div className="space-y-2 text-xs font-mono text-zinc-600 dark:text-zinc-400">
                <p>tesfa4706@gmail.com</p>
                <p>+251-968-651-265</p>
                <p>Addis Ababa, Ethiopia</p>
              </div>

              <div className="mt-6">
                <Button
                  onClick={() => scrollToSection("contact")}
                  className="bg-zinc-900 dark:bg-zinc-100 text-zinc-100 dark:text-zinc-950 hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors h-10 px-5 rounded-xl text-xs font-medium"
                >
                  Get in Touch
                </Button>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-zinc-200 dark:border-zinc-800/80 mt-12 pt-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              {/* Copyright */}
              <p className="text-zinc-500 text-xs font-mono">
                © {currentYear} Tesfahun Kere. Engineered with Next.js & React 19.
              </p>

              {/* Back to Top */}
              <Button
                variant="ghost"
                size="sm"
                onClick={scrollToTop}
                className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors text-xs font-mono"
              >
                <ArrowUp className="h-3.5 w-3.5 mr-1.5" />
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
