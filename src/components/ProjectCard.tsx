"use client";

import { ExternalLink, Github } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import { Button } from "./ui/button";

export interface MainFunction {
  title: string;
  description: string;
}

export interface ProjectCardProps {
  title: string;
  description: string;
  images: Array<string | StaticImageData>;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  status: "completed" | "in-progress" | "upcoming" | "live";
  date: string;
  role?: string;
  mainFunctions?: MainFunction[];
  keyContributions?: string;
  category?: string;
}

const ProjectCard = ({
  title,
  description,
  images,
  techStack,
  liveUrl,
  githubUrl,
  status,
  mainFunctions,
}: ProjectCardProps) => {
  const getStatusBadge = () => {
    if (status === "live") {
      return <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400">Live</span>;
    }
    if (status === "upcoming") {
      return <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-500">Upcoming</span>;
    }
    return <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-500">Completed</span>;
  };

  return (
    <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 overflow-hidden">
      <div className="flex flex-col md:flex-row">
        <div className="relative w-full md:w-[500px] h-48 md:min-h-[320px] bg-zinc-100 dark:bg-zinc-950 flex-shrink-0 overflow-hidden">
          <Image
            src={images[0]}
            alt={title}
            fill
            className="object-cover object-center"
          />
          <div className="absolute top-3 left-3">
            {getStatusBadge()}
          </div>
        </div>

        <div className="p-5 flex flex-col flex-grow">
          <div className="flex items-start justify-between gap-3 mb-2">
            <h3 className="font-bold text-zinc-900 dark:text-zinc-100 text-base leading-tight">{title}</h3>
            <div className="flex gap-1.5 flex-shrink-0">
              {githubUrl && (
                <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="p-1.5 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-200">
                  <Github className="h-4 w-4" />
                </a>
              )}
              {liveUrl && (
                <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="p-1.5 rounded-md bg-zinc-900 dark:bg-zinc-100 text-zinc-100 dark:text-zinc-950 hover:bg-zinc-800 dark:hover:bg-zinc-200">
                  <ExternalLink className="h-4 w-4" />
                </a>
              )}
            </div>
          </div>

          <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-3 leading-relaxed">
            {description}
          </p>

          {mainFunctions && mainFunctions.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mb-2">
              {mainFunctions.slice(0, 3).map((fn, idx) => (
                <span key={idx} className="px-2 py-0.5 bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 text-xs rounded">
                  {fn.title}
                </span>
              ))}
            </div>
          )}

          <div className="flex flex-wrap gap-1.5 mt-auto">
            {techStack.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 text-xs rounded"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
