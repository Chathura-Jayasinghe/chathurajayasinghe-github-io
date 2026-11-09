import { useState, useEffect, useRef } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaGithub,
  FaMedium,
  FaMailBulk,
} from "react-icons/fa";
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiJavascript,
  SiPython,
  SiPytorch,
  SiTensorflow,
} from "react-icons/si";
import TypingText from "../components/typingtext_navbar";
import TypingTextHome from "../components/typingtext_home";
import { FaGoogleScholar } from "react-icons/fa6";
import { GiMailShirt } from "react-icons/gi";
import { BiMailSend } from "react-icons/bi";
import { DiJava } from "react-icons/di";

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

const Home = () => {
  // Animation visibility refs
  const [welcomeRef, isWelcomeVisible] = useIntersectionObserver({
    threshold: 0.1,
  });
  const [titleRef, isTitleVisible] = useIntersectionObserver({
    threshold: 0.1,
  });
  const [subtitleRef, isSubtitleVisible] = useIntersectionObserver({
    threshold: 0.1,
  });
  const [descriptionRef, isDescriptionVisible] = useIntersectionObserver({
    threshold: 0.1,
  });
  const [socialRef, isSocialVisible] = useIntersectionObserver({
    threshold: 0.1,
  });
  const [skillsRef, isSkillsVisible] = useIntersectionObserver({
    threshold: 0.1,
  });
  const [imageRef, isImageVisible] = useIntersectionObserver({
    threshold: 0.1,
  });

  const phrases = [
    "Electrical Engineer ",
    "Full Stack Developer ",
    "Machine Learning Enthusiast ",
    "Musician ",
  ];

  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  // const [showCursor, setShowCursor] = useState(true);

  // Blinking cursor effect for the typing animation
  useEffect(() => {
    const currentPhrase = phrases[currentPhraseIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing forward
        setCurrentText(currentPhrase.substring(0, currentText.length + 1));

        // When phrase is complete, wait longer and then start deleting
        if (currentText.length === currentPhrase.length) {
          setTypingSpeed(1500); // Pause before starting to delete
          setTimeout(() => {
            setIsDeleting(true);
            setTypingSpeed(75); // Delete faster than typing
          }, 1500);
        }
      } else {
        // Deleting
        setCurrentText(currentPhrase.substring(0, currentText.length - 1));

        // When deleted, move to next phrase
        if (currentText.length === 0) {
          setIsDeleting(false);
          setTypingSpeed(150); // Reset typing speed
          setCurrentPhraseIndex((prevIndex) =>
            prevIndex === phrases.length - 1 ? 0 : prevIndex + 1
          );
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentPhraseIndex, typingSpeed]);

  return (
    <div className="min-h-screen flex items-center bg-zinc-900 text-white px-6 md:px-12 lg:px-24">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-6">
          <p
            ref={welcomeRef}
            className={`text-rose-400 text-2xl transition-all duration-1000 ${
              isWelcomeVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            ABOUT ME
          </p>

          <h1
            ref={titleRef}
            className={`text-5xl md:text-6xl font-bold transition-all duration-1000 delay-300 ${
              isTitleVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            Hi, I'm <span className="text-teal-500">Chathura Jayasinghe</span>
          </h1>

          <h2
            ref={subtitleRef}
            className={`text-3xl md:text-4xl font-semibold transition-all duration-1000 delay-500 ${
              isSubtitleVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <span className="inline-block min-h-12">{currentText}</span>
            <span className="inline-block h-8 translate-x-1 w-1 bg-rose-500 animate-pulse"></span>
          </h2>

          <p
            ref={descriptionRef}
            className={`text-teal-50 max-w-xl transition-all duration-1000 delay-700 ${
              isDescriptionVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            Hi! I’m Chathura Jayasinghe, an graduate student pursuing
            Electrical Engineering at the University of Moratuwa, Sri Lanka. As
            a Dean’s List achiever, I thrive at the intersection of research and
            practical innovation, specializing in Computer Vision, Machine
            Learning, Software Engineering, and Mathematics, leveraging state of
            the art technologies.
          </p>

          <p
            ref={descriptionRef}
            className={`text-teal-50 max-w-xl transition-all duration-1000 delay-700 ${
              isDescriptionVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            I believe the universe conspires to reward consistent effort.
            Whether hiking mountains, pre-planning workflows, or chasing
            deadlines, I balance curiosity with discipline. Let’s connect and
            explore how algorithms or acoustic melodies can shape the future!
          </p>
          <div className="flex flex-col md:flex-row justify-between pt-6 space-y-6 md:space-y-0 md:space-x-12">
            {/* Socials Section */}
            <div
              ref={socialRef}
              className={`pt-6 transition-all duration-1000 delay-900 ${
                isSocialVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <p className="text-rose-500 mb-4">FIND ME IN</p>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/Chathura-Jayasinghe"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SocialIcon icon={<FaGithub />} />
                </a>
                <a
                  href="https://scholar.google.com/citations?view_op=list_works&hl=en&user=dZCw9jYAAAAJ"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SocialIcon icon={<FaGoogleScholar />} />
                </a>
                <a
                  href="https://www.linkedin.com/in/chathura-jayasinghe-22493621a/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SocialIcon icon={<FaLinkedinIn />} />
                </a>
                <a
                  href="https://medium.com/@chathurajayasinghe04/about"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SocialIcon icon={<FaMedium />} />
                </a>
                <a
                  href="mailto:chathurajayasinghe04@gmail.com"
                  className="inline-block hover:opacity-80 transition"
                  title="Email me"
                >
                  <SocialIcon icon={<BiMailSend />} />
                </a>
              </div>
            </div>

            {/* Skills Section */}
            <div
              ref={skillsRef}
              className={`pt-6 transition-all duration-1000 delay-1100 ${
                isSkillsVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <p className="text-rose-500 mb-4">BEST SKILL ON</p>
              <div className="flex space-x-4">
                <SocialIcon icon={<SiPython />} />
                <SocialIcon icon={<SiPytorch />} />
                <SocialIcon icon={<SiJavascript />} />
                <SocialIcon icon={<SiReact />} />
                <SocialIcon icon={<SiNextdotjs />} />
                <SocialIcon icon={<SiTensorflow />} />
              </div>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div
          ref={imageRef}
          className={`hidden rounded-4xl scale-90 md:block shadow-2xl shadow-gray-800 transition-all duration-1000 delay-500 ${
            isImageVisible
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-20"
          }`}
        >
          <img
            src="/profile/bg_remove.png"
            alt="Professional Portrait"
            className="max-w-full h-auto rounded"
          />
        </div>
      </div>
    </div>
  );
};

// Reusable social icon component with hover effects
const SocialIcon = ({ icon }) => {
  return (
    <div
      className="w-12 h-12 bg-gray-800 rounded-md flex items-center justify-center 
                    hover:bg-teal-700 hover:scale-110 transition-all duration-300 cursor-pointer"
    >
      <div className="text-gray-300 text-xl hover:text-white">{icon}</div>
    </div>
  );
};

export default Home;
