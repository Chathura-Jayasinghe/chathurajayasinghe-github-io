import { useState, useEffect, useRef } from "react";
import {
  FaCode,
  FaTools,
  FaBrain,
  FaCloud,
  FaLaptopCode,
  FaFilm,
} from "react-icons/fa";

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

const Skills = () => {
  const [headerRef, isHeaderVisible] = useIntersectionObserver({
    threshold: 0.1,
  });
  const [cardsRef, areCardsVisible] = useIntersectionObserver({
    threshold: 0.1,
  });

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
          <h2 className="text-4xl text-teal-600 md:text-5xl font-bold mb-4">
            Skills & Expertise
          </h2>
          <div className="w-32 h-1 bg-rose-600 mx-auto"></div>
          <p className="text-cyan-50 mt-6 max-w-2xl mx-auto">
            My technical expertise spans multiple domains, from programming
            languages to multimedia tools, allowing me to create comprehensive
            solutions.
          </p>
        </div>

        {/* Skills Cards Grid */}
        <div
          ref={cardsRef}
          className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 transition-all duration-1000 ${
            areCardsVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          {/* Programming Languages Card */}
          <SkillCard
            icon={<FaCode />}
            title="Languages"
            skills={[
              { name: "Python", level: 90 },
              { name: "JavaScript/TypeScript", level: 85 },
              { name: "MATLAB", level: 75 },
              { name: "Java", level: 75 },
              { name: "LaTeX", level: 70 },
              { name: "C/C++", level: 50 },
            ]}
            delay={100}
          />

          {/* Development Tools Card */}
          <SkillCard
            icon={<FaTools />}
            title="Tools"
            skills={[
              { name: "VS Code", level: 95 },
              { name: "Git/GitHub", level: 85 },
              { name: "Unix Shell", level: 80 },
              { name: "IntelliJ IDEA", level: 55 },
            ]}
            delay={300}
          />

          {/* Machine Learning Card */}
          <SkillCard
            icon={<FaBrain />}
            title="Machine Learning"
            skills={[
              { name: "PyTorch", level: 85 },
              { name: "TensorFlow", level: 55 },
              { name: "Sci-Kit Learn", level: 65 },
              { name: "OpenCV", level: 70 },
              { name: "Keras", level: 50 },
            ]}
            delay={500}
          />

          {/* Software Frameworks Card */}
          <SkillCard
            icon={<FaLaptopCode />}
            title="Software Frameworks"
            skills={[
              { name: "React", level: 80 },
              { name: "React Native", level: 80 },
              { name: "Spring Boot", level: 60 },
              { name: "Tailwind CSS", level: 70 },
              { name: "HTML", level: 65 },
              { name: "CSS", level: 60 },
            ]}
            delay={700}
          />

          {/* Cloud Deployment Card */}
          <SkillCard
            icon={<FaCloud />}
            title="Cloud Deployment"
            skills={[
              { name: "Kubernetes", level: 60 },
              { name: "Docker", level: 50 },
              { name: "CI/CD (GitHub Actions)", level: 70 },
              { name: "Postman", level: 45 },
            ]}
            delay={900}
          />

          {/* Multimedia Tools Card */}
          <SkillCard
            icon={<FaFilm />}
            title="Robotics & Embedded"
            skills={[
              { name: "Arduino", level: 95 },
              { name: "ESP32", level: 70 },
              { name: "Raspberry Pi", level: 70 },
              { name: "MQTT", level: 40 },
              { name: "Node-RED", level: 40 },
              { name: "NVIDIA Jetson(Novice)", level: 40 },
            ]}
            delay={1100}
          />
        </div>
      </div>
    </div>
  );
};

// Skill Card Component with Progress Bars
const SkillCard = ({ icon, title, skills, delay = 0 }) => {
  const [cardRef, isCardVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <div
      ref={cardRef}
      className={`bg-zinc-800 p-6 rounded-2xl transition-all duration-300 hover:shadow-lg hover:shadow-teal-600/20 hover:bg-zinc-900/90 border border-gray-700 transform hover:-translate-y-2 ${
        isCardVisible
          ? `opacity-100 translate-y-0 delay-${delay}`
          : "opacity-0 translate-y-10"
      }`}
    >
      {/* Card Header */}
      <div className="text-rose-600 text-3xl mb-4">{icon}</div>
      <h3 className="text-xl text-teal-600 font-bold mb-6">{title}</h3>

      {/* Skills with Progress Bars */}
      <div className="space-y-4">
        {skills.map((skill, index) => (
          <div key={index}>
            <div className="flex justify-between mb-1">
              <span className="text-sm text-rose-50">{skill.name}</span>
              <span className="text-xs text-zinc-400">{skill.level}%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <div
                className={`bg-gradient-to-r from-teal-900 to-emerald-600 h-2 rounded-full transition-all duration-1500 ease-out ${
                  isCardVisible ? `w-[${skill.level}%]` : "w-0"
                }`}
                style={{ width: isCardVisible ? `${skill.level}%` : "0%" }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
