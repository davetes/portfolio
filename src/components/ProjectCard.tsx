"use client";

import { ExternalLink, Github, Calendar, Eye } from "lucide-react";
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

interface ProjectCardProps {
  title: string;
  description: string;
  images: Array<string | StaticImageData>;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  status: "completed" | "in-progress" | "upcoming" | "live";
  date: string;
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
        return "bg-green-500/10 text-green-500 border border-green-500/20";
      case "live":
        return "bg-emerald-500 text-white shadow-lg shadow-emerald-500/25";
      case "in-progress":
        return "bg-blue-500/10 text-blue-500 border border-blue-500/20";
      case "upcoming":
        return "bg-muted text-muted-foreground border border-border/50";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  const getStatusText = () => {
    switch (status) {
      case "completed":
        return "Completed";
      case "live":
        return "Live Production";
      case "in-progress":
        return "In Progress";
      case "upcoming":
        return "Upcoming";
      default:
        return "Unknown";
    }
  };

  return (
    <div className="glass-card rounded-xl overflow-hidden group">
      {/* Project Image */}
      <div className="relative overflow-hidden w-full h-48">
        <Image
          src={images[0]}
          alt={title}
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          fill
        />

        {/* Status Badge */}
        <div className="absolute top-4 right-4">
          <span
            className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor()}`}
          >
            {getStatusText()}
          </span>
        </div>

      </div>

      <div className="px-6 pt-4 flex flex-nowrap gap-2">
        {liveUrl && (
          <Button size="sm" className="h-8 px-2.5 text-xs bg-primary/10 text-primary hover:bg-primary/15 whitespace-nowrap" asChild>
            <a href={liveUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-3 w-3 mr-1" />
              View Live
            </a>
          </Button>
        )}

        {githubUrl && (
          <Button size="sm" variant="outline" className="h-8 px-2.5 text-xs border-border/60 whitespace-nowrap" asChild>
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
              <Github className="h-3 w-3 mr-1" />
              Code
            </a>
          </Button>
        )}

        <Dialog>
          <DialogTrigger asChild>
            <Button size="sm" variant="outline" className="h-8 px-2.5 text-xs border-border/60 whitespace-nowrap">
              <Eye className="h-3 w-3 mr-1" />
              Preview
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-6xl">
            <DialogHeader>
              <DialogTitle>{title} Preview</DialogTitle>
            </DialogHeader>
            <Carousel
              className="w-full"
              opts={{ loop: images.length > 1 }}
              setApi={setPreviewApi}
            >
              <CarouselContent>
                {images.map((img, index) => (
                  <CarouselItem key={`${title}-preview-${index}`}>
                    <div className="relative w-full h-[75vh]">
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
                  <CarouselPrevious className="left-4" />
                  <CarouselNext className="right-4" />
                </>
              )}
            </Carousel>
          </DialogContent>
        </Dialog>
      </div>

      {/* Project Content */}
      <div className="p-6">
        {/* Date */}
        <div className="flex items-center text-xs text-muted-foreground mb-3">
          <Calendar className="h-3 w-3 mr-1" />
          {date}
        </div>

        {/* Title */}
        <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
          {title}
        </h3>

        {/* Description */}
        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
          {description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {techStack.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full border border-primary/20 backdrop-blur-sm"
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
