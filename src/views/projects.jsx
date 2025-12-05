import { useState, useEffect, useRef } from "react";
import { FaGithub, FaGlobe } from "react-icons/fa";

// Custom hook for detecting when an element is visible in viewport
const useIntersectionObserver = (options = {}) => {
  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    }, options);

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [options]);

  return [elementRef, isVisible];
};

const Projects = () => {
  // References for animations
  const [headerRef, isHeaderVisible] = useIntersectionObserver({
    threshold: 0.1,
  });
  const [projectsRef, areProjectsVisible] = useIntersectionObserver({
    threshold: 0.1,
  });

  // Sample project data - replace with your actual projects
  const projectsData = [
    {
      id: 1,
      title: "Smart Helmet - Integrated Safety System for Helmets",
      year: 2024,
      image: "/projects/smart_helmet.png",
      description:
        "A cost-effective smart helmet system integrating sensors, YOLOv5, and IoT technologies for motorcycle safety through alcohol detection, impact alerts, and traffic sign recognition.",
      github: "https://github.com/Chathura-Jayasinghe/Smart-Helmet",
      // liveDemo: "https://github.com/Chathura-Jayasinghe/Smart-Helmet",
      tags: [
        "IoT",
        "YOLOv5",
        "Arduino",
        "Labview",
        "Raspberry Pi",
        "ComputerVision",
      ],
    },
    {
      id: 2,
      title: "HealthLink - AI-Powered Tumor Detection",
      year: 2023,
      image: "/projects/healthlink.jpg",
      description:
        " HealthLink is a web-based AI-powered application that detects brain tumors from MRI scans, enabling secure image uploads, expert consultations, and patient-doctor interaction.",
      github:
        "https://github.com/Chathura-Jayasinghe/HealthLink?tab=readme-ov-file",
      // liveDemo: "https://github.com/Vgr20/ThreeJS_Splatting",
      tags: ["Flask", "TensorFlow", "OpenCV", "Python", "ML"],
    },
    {
      id: 3,
      title: "Medibox",
      year: 2024,
      image: "/projects/medibox.png",
      description:
        "A smart medicine box simulation using ESP32 with sensors, servo control, and MQTT-based Node-RED integration for remote medication management.",
      github: "https://github.com/Chathura-Jayasinghe/ESP32-Medibox",
      // liveDemo: "https://github.com/EnergySquad/Phase03_Game",
      tags: ["ESP32", "IoT", "C++", "MQTT", "Node-RED", "Wokwi"],
    },
    {
      id: 4,
      title: "Library-Management-System",
      year: 2025,
      image: "/projects/library.png",
      description:
        "A Library Management System implemented using Python and Jac, featuring book and member management, issue/return workflows, and intelligent automation.",
      github: "https://github.com/Chathura-Jayasinghe/Library-Management-System",
      // liveDemo: "https://github.com/Amrithshagar/GoGetOn-Backend",
      tags: ["Python", "Jaclang", "Flask", "Streamlit"],
    },
    {
      id: 5,
      title: "Personal Portfolio Website",
      year: 2025,
      image: "/projects/portfolio.png",
      description:
        "A responsive personal portfolio website showcasing skills, projects, and contact information using React and Tailwind CSS (this site!).",
      github:
        "https://github.com/Chathura-Jayasinghe/chathurajayasinghe.github.io",
      // liveDemo: "https://github.com/Chathura-Jayasinghe/chathurajayasinghe.github.io",
      tags: ["React", "Tailwind CSS"],
    },
    {
      id: 6,
      title: "Tourist-guide-application in Jaclang",
      year: 2025,
      image: "/projects/tourist_guild.png",
      description:
        "A graph-based travel planner built in Jac Language that lets users explore Sri Lankan cities interactively based on their daily travel distance limits.",
      github: "https://github.com/Chathura-Jayasinghe/Tourist-guide-application",
      // liveDemo: "https://github.com/Vgr20/KeyBay",
      tags: ["Jaclang", "Data Spatial Programming"],
    },
    {
      id: 7,
      title: "Virtual-Math-Solver",
      year: 2024,
      image: "/projects/virtual_math_solver.png",
      description:
        "An AI-powered virtual math solver that uses OpenCV and hand gesture recognition to interpret and solve math problems via a webcam-based Streamlit interface.",
      github: "https://github.com/Chathura-Jayasinghe/Virtual-Math-Solver",
      liveDemo:
        "https://youtu.be/TsLuuexfgtI",
      tags: ["Python", "OpenCV", "Streamlit"],
    },
    {
      id: 8,
      title: "Maze Solving Robot",
      year: 2025,
      image: "/projects/maze_solving_robot.jpg",
      description:
        "An autonomous maze-solving robot designed to navigate complex paths using intelligent algorithms and real-time sensor feedback. This robot detects obstacles, makes optimal turning decisions, and efficiently finds the shortest route through a maze. Built with embedded systems, motor control, and algorithmic logic to demonstrate practical robotics and path-finding techniques.",
      github: "https://github.com/Chathura-Jayasinghe/MazeSolver_Group04.git",
      // liveDemo: "https://youtu.be/y7qcyw55io8?feature=shared",
      tags: ["Robotics", "Embedded Systems", "Maze Solving"],
    },
  ];

  return (
    <div className="min-h-screen bg-zinc-900 text-white py-20 px-6 md:px-12 lg:px-24">
      <div className="container mx-auto">
        {/* Section Header */}
        <div
          ref={headerRef}
          className={`mb-16 text-center transition-all duration-1000 ${
            isHeaderVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-rose-600 mb-2 uppercase tracking-wider font-medium">
            VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-teal-300 to-teal-900 bg-clip-text text-transparent">
            Projects and Publications
          </h2>
          <div className="w-32 h-1 bg-rose-600 mx-auto"></div>
        </div>

        {/* Projects Grid */}
        <div
          ref={projectsRef}
          className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 transition-all duration-500 ${
            areProjectsVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          {projectsData.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              delay={(index % 3) * 200} // Stagger animation by column
            />
          ))}
        </div>
      </div>
    </div>
  );
};

// Project Card Component
const ProjectCard = ({ project, delay = 0 }) => {
  const [cardRef, isCardVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <div
      ref={cardRef}
      className={`bg-zinc-800 rounded-lg overflow-hidden transition-all duration-500 hover:shadow-lg hover:shadow-sky-600/20 border border-gray-700 transform hover:-translate-y-2 hover:bg-zinc-900 ${
        isCardVisible
          ? `opacity-100 translate-y-0 delay-${delay}`
          : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Project Image */}
      <div className="relative group h-56 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
      </div>

      {/* Project Title */}
      <h3 className="text-rose-500 font-medium tracking-wide text-lg px-6 pt-6 pb-2">
        {project.title}
      </h3>
      <h3 className="text-teal-500 tracking-wide text-sm px-6 pb-2">
        {project.year}
      </h3>

      {/* Project Links */}
      <div className="flex space-x-2 px-6 mb-4">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors"
        >
          <FaGithub className="text-white" />
        </a>

        {/* <a
          href={project.liveDemo}
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors"
        >
          <FaGlobe className="text-white" />
        </a> */}
      </div>

      {/* Project Description */}
      <p className="text-gray-300 px-6 pb-6 text-sm">{project.description}</p>
      {/* Tags */}
      <div className="flex flex-wrap px-6 pb-6 gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="bg-teal-700 text-gray-300 text-xs font-semibold px-2 py-1 rounded-md hover:bg-rose-600 transition-colors"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Projects;
