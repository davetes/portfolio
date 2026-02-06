"use client";

import ProjectCard from './ProjectCard';
import taskAppImage from '@/assets/farm.jpg';
import chatAppImage from "@/assets/chat-app.jpeg";
import netflixImage from "@/assets/netflix.jpeg";


const Projects = () => {
  const projects = [


    {
      title: "Chat App",
      description: "A real-time chat app with one-on-one messaging, media sharing, typing indicators, online status, and live message updates.",
      image: chatAppImage,
      techStack: ["MongoDB", "Express.js", "React.js", "Node.js", "Tailwind CSS", "RESTfullAPI", "Socket.io"],
      liveUrl: "https://chatapp-0h90.onrender.com/",
      githubUrl: "https://github.com/davetes",
      status: "completed" as const,
      date: "February 2024"
    },
    {
      title: "netflix-clone",
      description: "A Netflix clone featuring secure user login, movie browsing by category, trailer previews, and a responsive UI built with modern web technologies.",
      image: netflixImage,
      techStack: ["MongoDB", "Express.js", "React.js", "Node.js", "Tailwind CSS", "RESTfullAPI"],
      liveUrl: "https://netflix-2g7n.onrender.com",
      githubUrl: "https://github.com/davetes/netflix",
      date: "December 2024",
      status: "completed" as const,


    },

    {
      title: "FarmGebeya",
      description: "A user-centric e-commerce platform for buying and selling agricultural products, with order tracking, secure checkout, and farmer-friendly features.",
      image: taskAppImage,
      techStack: ["Nextjs", "React", "Nodejs", "RESTfullAPI"],
      status: "upcoming" as const,
      date: "May 2025"
    },

  ];

  return (
    <section id="projects" className="py-24 bg-gradient-to-t from-background to-background/50 relative">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:20px_20px]"></div>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              My <span className="text-gradient-primary">Projects</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A showcase of my recent work and side projects. Each project represents
              my commitment to quality, innovation, and user experience.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="animate-scale-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <ProjectCard {...project} />
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <p className="text-muted-foreground mb-6">
              Interested in working together? Let's discuss your next project.
            </p>
            <button
              onClick={() => {
                const element = document.getElementById('contact');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-full hover-lift shadow-lg shadow-primary/20 transition-all duration-300"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;