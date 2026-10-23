"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "./ui/button";

const UpworkIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 32 32" className={className} fill="currentColor">
    <path d="M24.9 9.6c-2.3 0-4.1 1.1-5.2 2.8-.8-1.8-1.4-3.8-1.8-5.8h-4.2v8.1c0 2.3-1.3 3.9-3.4 3.9-2 0-3.3-1.6-3.3-3.9V6.6H2.8v8.4c0 4.4 3.1 7.5 7.6 7.5 3.3 0 5.8-1.6 7-4.1 1.2 2.5 3.4 4.1 6.5 4.1 4.7 0 7.6-3.3 7.6-7.5 0-4.2-2.9-7.4-7.6-7.4zm-.3 10.7c-2 0-3.3-1.6-4.1-3.6.8-2.4 2-4.1 4.2-4.1 2.1 0 3.6 1.6 3.6 3.8 0 2.2-1.5 3.9-3.7 3.9z" />
  </svg>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: "https://github.com/davetes", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/tesfahun-kere-22b54a333/", label: "LinkedIn" },
    { icon: UpworkIcon, href: "https://www.upwork.com/freelancers/~0186f63640d005f5ec", label: "Upwork" },
    { icon: Mail, href: "mailto:tesfa4706@gmail.com", label: "Email" },
  ];

  return (
    <footer className="py-8 px-6 border-t border-zinc-200 dark:border-zinc-800">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-zinc-500">© {currentYear} Tesfahun Kere</p>

        <div className="flex items-center gap-2">
          {socialLinks.map((social, index) => (
            <Button
              key={index}
              variant="ghost"
              size="icon"
              className="h-9 w-9 rounded-lg border border-zinc-300 dark:border-zinc-700"
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
    </footer>
  );
};

export default Footer;
