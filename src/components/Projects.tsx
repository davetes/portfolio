"use client";

import { useState } from 'react';
import ProjectCard, { ProjectCardProps } from './ProjectCard';
import taskAppImage from '@/assets/farm.png';
import chatAppImage from "@/assets/chat.png";
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
import sinetImage from "@/assets/sinet.png";

const projects: ProjectCardProps[] = [
  {
    title: "AAU Journal System (SINET)",
    description: "Production journal management system for Addis Ababa University. Features include manuscript submission, multi-stage peer review workflows, role-based access for Author/Reviewer/Editor/Admin, and publication archiving. Backend built with Node.js, Express, TypeScript, and PostgreSQL.",
    images: [sinetImage],
    techStack: ["Node.js", "Express", "TypeScript", "PostgreSQL"],
    liveUrl: "https://sinet.aau.edu.et/",
    status: "live" as const,
    date: "Live Production",
    category: "web",
    role: "Backend Developer",
    mainFunctions: [
      { title: "Manuscript Submission", description: "" },
      { title: "Review Workflow", description: "" },
      { title: "Role-Based Access", description: "" },
      { title: "Publication & Archiving", description: "" }
    ],
    keyContributions: "Designed PostgreSQL schema, built REST APIs, implemented RBAC."
  },
  {
    title: "FarmGebeya",
    description: "E-commerce platform for agricultural products. Product catalog with categories, order tracking from checkout to delivery, and secure payment processing. Full-stack with Next.js frontend and PostgreSQL database.",
    images: [taskAppImage],
    techStack: ["Next.js", "Node.js", "PostgreSQL"],
    status: "upcoming" as const,
    date: "May 2025",
    category: "web",
    mainFunctions: [
      { title: "Product Catalog", description: "" },
      { title: "Order Tracking", description: "" },
      { title: "Checkout", description: "" }
    ],
    keyContributions: "Full-stack e-commerce with Next.js and PostgreSQL."
  },
  {
    title: "Chat App",
    description: "Real-time messaging application with Socket.io WebSocket connections, user authentication, and live presence indicators. Built with React frontend, Node.js/Express backend, and MongoDB database.",
    images: [chatAppImage, chatapplogin],
    techStack: ["React", "Node.js", "Socket.io", "MongoDB"],
    liveUrl: "https://chatapp-0h90.onrender.com/",
    githubUrl: "https://github.com/davetes",
    status: "completed" as const,
    date: "Feb 2024",
    category: "web",
    mainFunctions: [
      { title: "Real-time Chat", description: "" },
      { title: "User Auth", description: "" },
      { title: "Live Presence", description: "" }
    ],
    keyContributions: "Express backend with Socket.io real-time features."
  },
  {
    title: "MelaTech MiniApp & Admin",
    description: "Full-stack Telegram mini app with Next.js admin control panel. User registration with approval workflow, automated broadcast notifications, interactive inline menus, and user management. Deployed on Railway for automatic scaling.",
    images: [melahome, meladeposit, melayoutube, mela1, melayoutubadmin],
    techStack: ["Next.js", "Node.js", "PostgreSQL", "Telegram API"],
    liveUrl: "https://t.me/MelaTechbot",
    status: "live" as const,
    date: "Client Project",
    category: "bot",
    mainFunctions: [
      { title: "User Registration", description: "" },
      { title: "Admin Dashboard", description: "" },
      { title: "Notifications", description: "" },
      { title: "Interactive Menus", description: "" }
    ],
    keyContributions: "Full-stack Telegram integration with Railway deployment."
  },
  {
    title: "Telegram Bot & Admin Panel",
    description: "Telegram bot management platform with Next.js dashboard. User and channel management, visual flow builder for automation, PostgreSQL data layer, Supabase file storage, and bulk broadcast messaging system.",
    images: [dashbotmessage, dashbotinbox, dashbotgroup, dashbotbroadcast, dashbotbot, dashbotautopost],
    techStack: ["Node.js", "React", "Telegram API", "PostgreSQL"],
    status: "live" as const,
    date: "Client Project",
    category: "bot",
    mainFunctions: [
      { title: "User Management", description: "" },
      { title: "Channel Management", description: "" },
      { title: "Flow Builder", description: "" },
      { title: "Broadcast System", description: "" }
    ],
    keyContributions: "Admin dashboard and backend services for bot management."
  },
  {
    title: "AfroAddis Corporate Website",
    description: "Corporate website for KYT Trading company. Next.js App Router with server-side rendering for SEO optimization, responsive TailwindCSS design, product showcase for coffee/sesame/pulses, and contact integration.",
    images: [afroaddishome, afroaddisabout, afroaddissmart],
    techStack: ["Next.js", "React", "TypeScript", "TailwindCSS"],
    status: "live" as const,
    date: "Client Project",
    category: "web",
    mainFunctions: [
      { title: "SSR & SEO", description: "" },
      { title: "Responsive Design", description: "" },
      { title: "Product Showcase", description: "" },
      { title: "Contact Forms", description: "" }
    ],
    keyContributions: "Next.js App Router with TailwindCSS v4."
  },
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState<"all" | "web" | "bot">("all");

  const filteredProjects = projects.filter(project =>
    activeCategory === "all" ? true : project.category === activeCategory
  );

  const categories = [
    { id: "all", label: "All" },
    { id: "web", label: "Web" },
    { id: "bot", label: "Bots" }
  ];

  return (
    <section id="projects" className="pt-4 pb-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-5">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">Projects</h2>
        </div>

        <div className="flex gap-2 mb-5">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id as typeof activeCategory)}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                activeCategory === cat.id
                  ? "bg-zinc-900 dark:bg-zinc-100 text-zinc-100 dark:text-zinc-950"
                  : "bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="space-y-3">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
