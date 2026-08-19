import { ExternalLink, Github, Calendar, Eye, UserCheck, ListCheck, Sparkles } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "./ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";

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
  date,
  role,
  mainFunctions,
  keyContributions,
}: ProjectCardProps) => {
  const [previewApi, setPreviewApi] = useState<CarouselApi | null>(null);

  useEffect(() => {
    if (!previewApi || images.length < 2) {
      return;
    }

    const intervalId = window.setInterval(() => {
      previewApi.scrollNext();
    }, 4000);

    return () => {
      window.clearInterval(intervalId);
    };
  }, [previewApi, images.length]);

  const getStatusColor = () => {
    switch (status) {
      case "completed":
        return "bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-300 dark:border-zinc-700/60";
      case "live":
        return "bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 border border-emerald-500/30";
      case "in-progress":
        return "bg-sky-500/15 text-sky-700 dark:text-sky-400 border border-sky-500/30";
      case "upcoming":
        return "bg-zinc-100 dark:bg-zinc-900 text-zinc-500 dark:text-zinc-500 border border-zinc-200 dark:border-zinc-800";
      default:
        return "bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400";
    }
  };

  const getStatusText = () => {
    switch (status) {
      case "completed":
        return "Completed";
      case "live":
        return "Live System";
      case "in-progress":
        return "In Progress";
      case "upcoming":
        return "Upcoming";
      default:
        return "Unknown";
    }
  };

  return (
    <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/40 hover:bg-zinc-50/80 dark:hover:bg-zinc-900/70 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-300 overflow-hidden group flex flex-col h-full shadow-sm hover:shadow-md">
      {/* Project Image */}
      <div className="relative overflow-hidden w-full h-48 bg-zinc-100 dark:bg-zinc-950/80 border-b border-zinc-200 dark:border-zinc-800/80">
        <Image
          src={images[0]}
          alt={title}
          className="object-cover transition-transform duration-500 group-hover:scale-105 opacity-95 group-hover:opacity-100"
          fill
        />

        {/* Status Badge */}
        <div className="absolute top-3.5 right-3.5">
          <span
            className={`px-3 py-1 rounded-full text-[11px] font-medium tracking-wide font-mono ${getStatusColor()}`}
          >
            {getStatusText()}
          </span>
        </div>
      </div>

      {/* Quick Action Links */}
      <div className="px-6 pt-4 flex flex-wrap gap-2">
        {liveUrl && (
          <Button size="sm" className="h-8 px-3 text-xs bg-zinc-900 dark:bg-zinc-100 text-zinc-100 dark:text-zinc-950 hover:bg-zinc-800 dark:hover:bg-zinc-200 font-medium whitespace-nowrap" asChild>
            <a href={liveUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-3 w-3 mr-1.5" />
              Live Site
            </a>
          </Button>
        )}

        {githubUrl && (
          <Button size="sm" variant="outline" className="h-8 px-3 text-xs border-zinc-300 dark:border-zinc-800 bg-zinc-100/80 dark:bg-zinc-900/60 hover:bg-zinc-200 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300 whitespace-nowrap" asChild>
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
              <Github className="h-3 w-3 mr-1.5" />
              Code
            </a>
          </Button>
        )}

        <Dialog>
          <DialogTrigger asChild>
            <Button size="sm" variant="outline" className="h-8 px-3 text-xs border-zinc-300 dark:border-zinc-800 bg-zinc-100/50 dark:bg-zinc-900/40 hover:bg-zinc-200 dark:hover:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200 whitespace-nowrap">
              <Eye className="h-3 w-3 mr-1.5" />
              Details
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto p-6 md:p-8 bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-zinc-100">
            <DialogHeader className="mb-4">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2 pr-6">
                <div className="flex items-center gap-2">
                  <span className={`px-3 py-1 rounded-full text-xs font-mono font-medium ${getStatusColor()}`}>
                    {getStatusText()}
                  </span>
                  {role && (
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-indigo-500/10 text-indigo-700 dark:text-indigo-400 border border-indigo-500/20 flex items-center gap-1">
                      <UserCheck className="h-3.5 w-3.5" />
                      Role: {role}
                    </span>
                  )}
                </div>
                <div className="flex items-center text-xs text-zinc-500 dark:text-zinc-400 font-mono">
                  <Calendar className="h-3.5 w-3.5 mr-1 text-zinc-400 dark:text-zinc-500" />
                  {date}
                </div>
              </div>
              <DialogTitle className="text-2xl md:text-3xl font-bold font-heading text-zinc-900 dark:text-zinc-100">{title}</DialogTitle>
            </DialogHeader>

            {/* Image preview Carousel */}
            <div className="mb-6 rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900/60">
              <Carousel
                className="w-full"
                opts={{ loop: images.length > 1 }}
                setApi={setPreviewApi}
              >
                <CarouselContent>
                  {images.map((img, index) => (
                    <CarouselItem key={`${title}-preview-${index}`}>
                      <div className="relative w-full h-[280px] md:h-[400px]">
                        <Image
                          src={img}
                          alt={`${title} preview ${index + 1}`}
                          className="object-contain"
                          fill
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                {images.length > 1 && (
                  <>
                    <CarouselPrevious className="left-4 bg-white/90 dark:bg-zinc-900/80 border-zinc-300 dark:border-zinc-700 text-zinc-800 dark:text-zinc-200" />
                    <CarouselNext className="right-4 bg-white/90 dark:bg-zinc-900/80 border-zinc-300 dark:border-zinc-700 text-zinc-800 dark:text-zinc-200" />
                  </>
                )}
              </Carousel>
            </div>

            {/* Description & Detailed Information */}
            <div className="space-y-6">
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-500 mb-2">Overview</h4>
                <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed text-sm md:text-base">{description}</p>
              </div>

              {/* Main Functions */}
              {mainFunctions && mainFunctions.length > 0 && (
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-3 flex items-center gap-1.5">
                    <ListCheck className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
                    Main Functions & Modules
                  </h4>
                  <div className="grid gap-3 sm:grid-cols-1 md:grid-cols-2">
                    {mainFunctions.map((fn, idx) => (
                      <div key={idx} className="p-3.5 rounded-xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800/80">
                        <h5 className="font-semibold text-sm text-zinc-900 dark:text-zinc-100 mb-1 flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-indigo-600 dark:bg-indigo-400 flex-shrink-0" />
                          {fn.title}
                        </h5>
                        <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed pl-3.5">{fn.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Key Contributions */}
              {keyContributions && (
                <div className="p-4 rounded-xl bg-indigo-500/5 border border-indigo-500/20">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-1.5 flex items-center gap-1.5">
                    <Sparkles className="h-4 w-4" />
                    Key Engineering Contributions
                  </h4>
                  <p className="text-sm text-zinc-800 dark:text-zinc-200 leading-relaxed">{keyContributions}</p>
                </div>
              )}

              {/* Tech Stack & Action Links */}
              <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800 flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap gap-1.5 items-center">
                  <span className="text-xs text-zinc-500 font-mono mr-1">Stack:</span>
                  {techStack.map((tech, index) => (
                    <span
                      key={index}
                      className="px-2.5 py-0.5 bg-zinc-100 dark:bg-zinc-900 text-zinc-800 dark:text-zinc-300 text-xs font-mono rounded-md border border-zinc-200 dark:border-zinc-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3">
                  {githubUrl && (
                    <Button size="sm" variant="outline" className="border-zinc-300 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900 hover:bg-zinc-200 dark:hover:bg-zinc-800 text-zinc-800 dark:text-zinc-300" asChild>
                      <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-1.5" />
                        Repository
                      </a>
                    </Button>
                  )}
                  {liveUrl && (
                    <Button size="sm" className="bg-zinc-900 dark:bg-zinc-100 text-zinc-100 dark:text-zinc-950 hover:bg-zinc-800 dark:hover:bg-zinc-200 font-medium" asChild>
                      <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-1.5" />
                        Visit Live System
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Project Content */}
      <div className="p-6 flex flex-col flex-grow">
        {/* Date & Role */}
        <div className="flex items-center justify-between text-xs text-zinc-500 dark:text-zinc-400 font-mono mb-3">
          <div className="flex items-center">
            <Calendar className="h-3 w-3 mr-1 text-zinc-400 dark:text-zinc-500" />
            {date}
          </div>
          {role && (
            <span className="text-xs font-sans font-medium text-indigo-600 dark:text-indigo-400 flex items-center gap-1">
              <UserCheck className="h-3 w-3" />
              {role}
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold mb-2.5 text-zinc-900 dark:text-zinc-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-300 transition-colors font-heading leading-snug">
          {title}
        </h3>

        {/* Description */}
        <p className="text-zinc-600 dark:text-zinc-400 text-xs leading-relaxed mb-4 flex-grow">
          {description}
        </p>

        {/* Key Contributions snippet if present */}
        {keyContributions && (
          <div className="mb-4 p-2.5 rounded-xl bg-zinc-50 dark:bg-zinc-950/60 border border-zinc-200 dark:border-zinc-800/60 text-xs text-zinc-600 dark:text-zinc-400">
            <span className="font-semibold text-zinc-900 dark:text-zinc-200">Key Contribution: </span>
            {keyContributions}
          </div>
        )}

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-1.5 mt-auto pt-2 border-t border-zinc-200/60 dark:border-zinc-800/40">
          {techStack.map((tech, index) => (
            <span
              key={index}
              className="px-2.5 py-1 bg-zinc-100 dark:bg-zinc-950 text-zinc-700 dark:text-zinc-300 text-[11px] font-mono rounded-md border border-zinc-200 dark:border-zinc-800/80"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
