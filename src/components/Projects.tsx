"use client";

import { useState } from 'react';
import ProjectCard from './ProjectCard';
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
import { log } from 'console';
type Category = "all" | "web" | "bot";

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("all");

  const projects = [
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
      images: [taskAppImage, netflixImage],
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
    <section id="projects" className="pt-12 pb-8 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Selected Works
            </h2>
            <div className="h-1 w-20 bg-primary mb-8"></div>
            <p className="text-xl text-muted-foreground max-w-2xl font-light leading-relaxed mb-8">
              A collection of projects exploring performance, design, and scalability.
            </p>

            {/* Category Tabs */}
            <div className="flex flex-wrap gap-4">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id as Category)}
                  className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === cat.id
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25 scale-105"
                    : "bg-secondary/50 text-muted-foreground hover:bg-secondary hover:text-foreground"
                    }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[400px]">
            {filteredProjects.map((project, index) => (
              <div
                key={project.title}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* @ts-ignore - Category prop is internal, not passed to Card */}
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