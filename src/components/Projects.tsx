"use client";

import { useState } from 'react';
import ProjectCard, { ProjectCardProps } from './ProjectCard';
import taskAppImage from '@/assets/farm.jpg';
import chatAppImage from "@/assets/chat-app.jpeg";
import netflixImage from "@/assets/netflix.jpeg";
import mela1 from "@/assets/mela1.jpg";
import melahome from "@/assets/melahome.jpg";
import meladeposit from "@/assets/meladeposit.jpg";
import melayoutube from "@/assets/melayoutube.jpg";
import melayoutubadmin from "@/assets/melayoutubeadmin.jpg";
import dashbotmessage from "@/assets/dashbotmessage.jpg";
import dashbotinbox from "@/assets/dashbotinbox.jpg";
import dashbotgroup from "@/assets/dashbotgroup.jpg";
import dashbotbroadcast from "@/assets/dashbotbroadcast.jpg";
import dashbotbot from "@/assets/dashbotbot.jpg";
import dashbotautopost from "@/assets/dashbotautopost.jpg";
import afroaddissmart from "@/assets/afroaddissmart.jpg";
import afroaddishome from "@/assets/afroaddishome.jpg";
import afroaddisabout from "@/assets/afroaddisabout.jpg";
import chatapplogin from "@/assets/chatapplogin.jpg";
import sinetImage from "@/assets/sinet.jpg";

type Category = "all" | "web" | "bot";

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("all");

  const projects: ProjectCardProps[] = [
    {
      title: "Addis Ababa University Journal Management System (SINET)",
      description: "A live journal management system for Addis Ababa University used by researchers and academics to streamline the entire publication workflow.",
      images: [sinetImage],
      techStack: ["Node.js", "Express", "TypeScript", "PostgreSQL", "REST API"],
      liveUrl: "https://sinet.aau.edu.et/",
      status: "live" as const,
      date: "Live Production System",
      category: "web",
      role: "Backend Developer",
      mainFunctions: [
        {
          title: "Manuscript Submission",
          description: "Allows authors to submit research papers with metadata (title, abstract, keywords, authors)."
        },
        {
          title: "Review Workflow",
          description: "Manages the peer-review process, assigning submissions to reviewers and tracking review status (e.g., received, under review, accepted, rejected)."
        },
        {
          title: "Role-Based Access",
          description: "Implements a secure permission system for four key user roles: Author (submit/track manuscripts), Reviewer (evaluate & submit feedback), Editor (assign reviewers & publication decisions), and Admin (system config & user management)."
        },
        {
          title: "Data Management",
          description: "Securely stores and manages all data related to journals, issues, articles, authors, reviewers, and submission histories in a structured PostgreSQL database."
        },
        {
          title: "Publication & Archiving",
          description: "Supports the process of publishing accepted articles in journal issues and archiving past publications for public access."
        }
      ],
      keyContributions: "Designed the PostgreSQL database schema, built REST APIs, and implemented the role-based access control."
    },
    {
      title: "MelaTech Miniapp & Admin Panel",
      description: "A full-featured miniapp including an admin panel, backend APIs, and a production-ready frontend deployed on Railway.",
      images: [melahome, meladeposit, melayoutube, mela1,melayoutubadmin],
      techStack: ["Next.js", "Node.js", "PostgreSQL", "Express", "Telegram API","Railway"],
      liveUrl: "https://t.me/MelaTechbot",
      status: "live" as const,
      date: "Client Project",
      category: "bot"
    },
    {
      title: "Telegram Bot & Admin Panel",
      description: "Telegram bot management platform with a Next.js admin dashboard user and channel management, flow builder automation, PostgreSQL data layer, and Supabase file uploads.",
      images: [dashbotmessage, dashbotinbox, dashbotgroup, dashbotbroadcast, dashbotbot, dashbotautopost],
      techStack: ["Node.js", "React", "Telegram API", "PostgreSQL"],
      status: "live" as const,
      date: "Client Project",
      category: "bot"
    },
   /*  {
      title: "Gaming bot",
      description: "Deployed and managed a production game on a Hostinger Ubuntu VPS, handling server setup, backend services, and live monitoring.",
      images: [netflixImage, taskAppImage],
      techStack: ["Django", "Ubuntu VPS", "Hostinger", "DevOps"],
      status: "live" as const,
      date: "Live Production",
      category: "bot"
    }, */
    {
      title: "AfroAddis company website",
      description: "Corporate website for KYT Trading Pvt. Ltd., showcasing coffee, sesame, pulses exports/imports, and furniture manufacturing. Built with Next.js App Router, React 19, TypeScript, TailwindCSS v4, Lucide, and Geist fonts.",
      images: [afroaddishome, afroaddisabout, afroaddissmart],
      techStack: ["Next.js", "React", "TypeScript", "TailwindCSS", "Lucide"],
      status: "live" as const,
      date: "Client Project",
      category: "web"
    },
    {
      title: "Chat App",
      description: "Full-stack real-time messaging app with instant chat, authentication, and live presence. Built with React, Node.js/Express, Socket.io, and MongoDB + Mongoose.",
      images: [chatAppImage, chatapplogin],
      techStack: ["React", "Node.js" ,"express.js", "Socket.io", "MongoDB"],
      liveUrl: "https://chatapp-0h90.onrender.com/",
      githubUrl: "https://github.com/davetes",
      status: "completed" as const,
      date: "February 2024",
      category: "web"
    },
    {
      title: "Netflix Clone",
      description: "A streaming platform clone featuring secure login, movie browsing, trailer previews, and responsive UI.",
      images: [netflixImage],
      techStack: ["React", "Express.js", "MongoDB", "TMDB API"],
      liveUrl: "https://netflix-2g7n.onrender.com",
      githubUrl: "https://github.com/davetes/netflix",
      date: "December 2024",
      status: "completed" as const,
      category: "web"
    },
    {
      title: "FarmGebeya",
      description: "An e-commerce platform for agricultural products with order tracking and secure checkout.",
      images: [taskAppImage],
      techStack: ["Next.js", "Node.js", "PostgreSQL"],
      status: "upcoming" as const,
      date: "May 2025",
      category: "web"
    },
  ];

  const filteredProjects = projects.filter(project =>
    activeCategory === "all" ? true : project.category === activeCategory
  );

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "bot", label: "Bots & Mini Apps" },
    { id: "web", label: "Web Development" }
  ];

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="text-xs font-mono tracking-widest text-indigo-600 dark:text-indigo-400 uppercase mb-2">Portfolio</div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-zinc-900 dark:text-zinc-100">
                Selected Works & Systems
              </h2>
              <p className="text-base text-zinc-600 dark:text-zinc-400 max-w-xl font-normal leading-relaxed mt-2">
                Production web applications, automated Telegram platforms, and backend service implementations.
              </p>
            </div>

            {/* Category Tabs */}
            <div className="flex flex-wrap gap-2 bg-zinc-100 dark:bg-zinc-950/80 p-1.5 rounded-xl border border-zinc-200 dark:border-zinc-800">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id as Category)}
                  className={`px-4 py-2 rounded-lg text-xs font-medium transition-all duration-200 ${
                    activeCategory === cat.id
                      ? "bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 shadow-sm border border-zinc-300 dark:border-zinc-700/80 font-semibold"
                      : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200 hover:bg-zinc-200/60 dark:hover:bg-zinc-900/50"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 min-h-[400px]">
            {filteredProjects.map((project) => (
              <div
                key={project.title}
                className="transition-all duration-300"
              >
                <ProjectCard {...project} />
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Projects;