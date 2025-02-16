import projectOne from "../assets/project-1.png";
import projectTwo from "../assets/stranger-things-lg.png";
import projectThree from "../assets/project-3.png";

const projects = {
  1: {
    title: "ChatApp",
    image: projectOne,
    description: (
      <>
        <p></p>
        About A real-time chat application that enables users to send and
        receive messages instantly. The app supports secure authentication,
        user-friendly messaging features, and seamless connectivity for smooth
        conversations.
      </>
    ),
    github: "https://github.com/davetes/chatapp.git",
    demo: "https://chatapp-0h90.onrender.com",
  },
  2: {
    title: "netflix clone",
    image: projectTwo,
    description: (
      <>
        <p>
          I have developed a Netflix clone with a sleek and user-friendly
          interface for streaming movies and TV shows. It includes features like
          user authentication, a responsive design, dynamic content fetching,
          and smooth video playback. The platform replicates the core
          functionalities of Netflix, providing an immersive and seamless
          viewing experience.
        </p>
      </>
    ),
    github: "https://github.com/davetes/netflix.git",
    demo: "https://netflix-2g7n.onrender.com",
  },
  3: {
    title: "Food Delivery App",
    image: projectThree,
    description: (
      <>
        <p>
          I have developed a food delivery app that connects users with local
          restaurants for easy online ordering. The app features a user-friendly
          interface, real-time order tracking, secure payment options, and a
          seamless delivery experience. It ensures quick and convenient food
          delivery, making dining more accessible and efficient.
        </p>
      </>
    ),
    github: "https://github.com",
    demo: "",
  },
};

export default projects;
