import ProjectCard from './ProjectCard';
import ecommerceImage from '@/assets/project-ecommerce.jpg';
import taskAppImage from '@/assets/project-taskapp.jpg';
import weatherImage from '@/assets/project-weather.jpg';

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-featured e-commerce platform with user authentication, product management, shopping cart, and payment integration. Built with modern technologies for optimal performance.",
      image: ecommerceImage,
      techStack: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
      liveUrl: "https://ecommerce-demo.vercel.app",
      githubUrl: "https://github.com/tesfahunkere/ecommerce",
      status: "completed" as const,
      date: "March 2024"
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, team workspaces, and advanced project tracking features. Perfect for agile development teams.",
      image: taskAppImage,
      techStack: ["Next.js", "TypeScript", "Firebase", "Tailwind"],
      liveUrl: "https://taskmanager-demo.vercel.app",
      githubUrl: "https://github.com/tesfahunkere/taskmanager",
      status: "completed" as const,
      date: "February 2024"
    },
    {
      title: "Weather Dashboard",
      description: "A comprehensive weather application providing detailed forecasts, weather maps, and location-based alerts. Features beautiful UI with data visualization.",
      image: weatherImage,
      techStack: ["React", "OpenWeather API", "Chart.js", "CSS3"],
      liveUrl: "https://weather-app-demo.vercel.app",
      githubUrl: "https://github.com/tesfahunkere/weather-app",
      status: "completed" as const,
      date: "January 2024"
    },
    {
      title: "Social Media Platform",
      description: "A modern social networking platform with real-time messaging, post sharing, and user interactions. Built with scalability and performance in mind.",
      image: ecommerceImage, // Placeholder - you can generate another image
      techStack: ["React", "Node.js", "Socket.io", "PostgreSQL"],
      githubUrl: "https://github.com/tesfahunkere/social-platform",
      status: "in-progress" as const,
      date: "April 2024"
    },
    {
      title: "FarmGebeya",
      description: "An e-commerce platform focused on agricultural products",
      image: taskAppImage, // Placeholder - you can generate another image
      techStack: ["Nextjs", "React", "Nodejs", "RestfullAPI"],
      status: "upcoming" as const,
      date: "May 2025"
    },
    {
      title: "Mobile-First Blog",
      description: "A responsive blog platform optimized for mobile devices with content management system, SEO optimization, and social media integration.",
      image: weatherImage, // Placeholder - you can generate another image
      techStack: ["Next.js", "Sanity CMS", "Vercel", "SEO"],
      liveUrl: "https://blog-demo.vercel.app",
      githubUrl: "https://github.com/tesfahunkere/blog-platform",
      status: "completed" as const,
      date: "December 2023"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-hero">
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
              className="bg-gradient-primary text-white px-8 py-3 rounded-lg hover:opacity-90 transition-smooth hover-lift"
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