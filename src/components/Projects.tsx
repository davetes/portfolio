"use client";

import ProjectCard from './ProjectCard';
import taskAppImage from '@/assets/farm.jpg';
import chatAppImage from "@/assets/chat-app.jpeg";
import netflixImage from "@/assets/netflix.jpeg";

const Projects = () => {
  const projects = [
    {
      title: "MelaTech Miniapp",
      description: "A full-featured miniapp including an admin panel, backend APIs, and a production-ready frontend deployed on Railway.",
      image: chatAppImage, // Using as placeholder
      techStack: ["Next.js", "Node.js", "PostgreSQL", "Railway"],
      liveUrl: "https://t.me/MelaTechbot", // Assuming .com or similar, verifying with user later if needed, leaving as is for now or just generic
      status: "completed" as const,
      date: "Live Production"
    },
    {
      title: "Rohabingo Game",
      description: "Deployed and managed a production game on a Hostinger Ubuntu VPS, handling server setup, backend services, and live monitoring.",
      image: netflixImage, // Using as placeholder
      techStack: ["Django", "Ubuntu VPS", "Hostinger", "DevOps", "Backend Services"],
      status: "live" as const,
      date: "Live Production"
    },
    {
      title: "Internal Dashboards",
      description: "Comprehensive dashboards with user management, reporting, and authentication, handling complex data aggregation logic.",
      image: taskAppImage, // Using as placeholder
      techStack: ["React", "Data Visualization", "Auth", "Backend Logic"],
      status: "completed" as const,
      date: "Internal Tools"
    },
    {
      title: "Chat App",
      description: "A real-time chat app with one-on-one messaging, media sharing, typing indicators, and live updates.",
      image: chatAppImage,
      techStack: ["React", "Node.js", "Socket.io", "MongoDB"],
      liveUrl: "https://chatapp-0h90.onrender.com/",
      githubUrl: "https://github.com/davetes",
      status: "completed" as const,
      date: "February 2024"
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
    },
    {
      title: "FarmGebeya",
      description: "An e-commerce platform for agricultural products with order tracking and secure checkout.",
      image: taskAppImage,
      techStack: ["Next.js", "Node.js", "PostgreSQL"],
      status: "upcoming" as const,
      date: "May 2025"
    },
  ];

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="mb-20">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Selected Works
            </h2>
            <div className="h-1 w-20 bg-primary mb-8"></div>
            <p className="text-xl text-muted-foreground max-w-2xl font-light leading-relaxed">
              A collection of projects exploring performance, design, and scalability.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
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