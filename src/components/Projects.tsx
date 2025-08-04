import ProjectCard from './ProjectCard';
import taskAppImage from '@/assets/farm.jpg';
import chatAppImage from "@/assets/chat-app.jpeg";

const Projects = () => {
  const projects = [
   
    {
      title: "Chat App",
      description: "A modern, real-time chat application designed to enable seamless communication between users. The app supports one-on-one conversations, media sharing, and real-time updates..",
      image: chatAppImage,
      techStack: ["MongoDB", "Express.js", "React.js", "Node.js", "Tailwind CSS","RESTfullAPI","Socket.io"],
      liveUrl: "https://chatapp-0h90.onrender.com/",
      githubUrl: "https://github.com/davetes",
      status: "completed" as const,
      date: "February 2024"
    },
    
  
    {
      title: "FarmGebeya",
      description: "An e-commerce platform focused on agricultural products",
      image: taskAppImage, 
      techStack: ["Nextjs", "React", "Nodejs", "RESTfullAPI"],
      status: "upcoming" as const,
      date: "May 2025"
    },
   
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