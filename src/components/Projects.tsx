"use client";

import { useState } from 'react';
import ProjectCard from './ProjectCard';
import taskAppImage from '@/assets/farm.jpg';
import chatAppImage from "@/assets/chat-app.jpeg";
import netflixImage from "@/assets/netflix.jpeg";

type Category = "all" | "web" | "bot";

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("all");

  const projects = [
    {
      title: "MelaTech Miniapp",
      description: "A full-featured miniapp including an admin panel, backend APIs, and a production-ready frontend deployed on Railway.",
      image: chatAppImage, // Using as placeholder
      techStack: ["Next.js", "Node.js", "PostgreSQL", "Railway"],
      liveUrl: "https://t.me/MelaTechbot",
      status: "completed" as const,
      date: "Live Production",
      category: "bot"
    },
    {
      title: "Rohabingo Game",
      description: "Deployed and managed a production game on a Hostinger Ubuntu VPS, handling server setup, backend services, and live monitoring.",
      image: netflixImage, // Using as placeholder
      techStack: ["Django", "Ubuntu VPS", "Hostinger", "DevOps"],
      status: "live" as const,
      date: "Live Production",
      category: "web"
    },
    {
      title: "Internal Dashboards",
      description: "Comprehensive dashboards with user management, reporting, and authentication, handling complex data aggregation logic.",
      image: taskAppImage, // Using as placeholder
      techStack: ["React", "Data Visualization", "Auth", "Backend Logic"],
      status: "completed" as const,
      date: "Internal Tools",
      category: "web"
    },
    {
      title: "Chat App",
      description: "A real-time chat app with one-on-one messaging, media sharing, typing indicators, and live updates.",
      image: chatAppImage,
      techStack: ["React", "Node.js", "Socket.io", "MongoDB"],
      liveUrl: "https://chatapp-0h90.onrender.com/",
      githubUrl: "https://github.com/davetes",
      status: "completed" as const,
      date: "February 2024",
      category: "web"
    },
    {
      title: "Netflix Clone",
      description: "A streaming platform clone featuring secure login, movie browsing, trailer previews, and responsive UI.",
      image: netflixImage,
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
      image: taskAppImage,
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

          {/* Call to Action */}
          <div className="text-center mt-20 pt-10 border-t border-border/40">
            <p className="text-muted-foreground mb-6 font-light">
              Interested in the code? Check out my GitHub or get in touch.
            </p>
            <button
              onClick={() => {
                const element = document.getElementById('contact');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-primary hover:text-primary/80 font-medium hover:underline underline-offset-4 transition-all"
            >
              Let's Discuss Your Project &rarr;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;