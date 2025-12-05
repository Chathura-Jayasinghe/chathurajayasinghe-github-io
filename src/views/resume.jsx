import { useState, useEffect, useRef } from "react";

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

export default function ResumeSection() {
  const [activeTab, setActiveTab] = useState("education");

  // References for animations
  const [headerRef, isHeaderVisible] = useIntersectionObserver({
    threshold: 0.1,
  });

  const [contentRef, isContentVisible] = useIntersectionObserver({
    threshold: 0.1,
  });

  // Resume data
  const educationData = [
    {
      id: 1,
      degree: "BSc Engineering Honours",
      institution: "University of Moratuwa (2022 - 2026)",
      score: "3.6/4",
      description:
        "Coursework: Electrical Engineering , Embedded Systems , IOT ,Deep Learning for Vision, Pattern Recognition, Modular Software Development, Networking and Programming Fundamentals.",
      years: "2022 - 2026",
    },
    {
      id: 2,
      degree: "G.C.E. Advanced Level",
      institution: "Dharmaraja College Kandy",
      score: "Ranked 238th islandwide",
      description:
        " Best Results at GCE A/L Examination 2020 in Physical Science Stream 3A's (Combined Mathematics, Physics, Chemistry) Kandy District 18th, Island 238th, Z-score:- 2.4191",
    },
    {
      id: 3,
      degree: "G.C.E. Ordinary Level",
      institution: "Dharmaraja College Kandy",
      score: "(9A's)",
      description:
        "Best Results at GCE O/L Examination 2017 9A's (Sinhala, English, Mathematics, Science, Religion, History, Business and Accounting Studies, Drama, Physical & Health Education)",
    },
  ];

  const experienceData = [
    {
      id: 1,
      position: "AI & ML Engineering Intern",
      company: "2024 - 2025",
      location: "Sri Lanka",
      description:
        "Completed an AI & ML Engineer internship at Jaseci Labs, contributing to Jac compiler development and improving software engineering skills.",
      years: "1",
    },
    {
      id: 2,
      position: "Research Assistant Intern",
      company: "2024 - 2025",
      location: "Sri Lanka",
      description:
        "Contributed to Visual Language Models (VLM) research at Jaseci Labs, focusing on model evaluation and prompt engineering to optimize large language model performance.",
      years: "1",
    },
  ];
  const volunteeringData = [
    {
      id: 1,
      position: "EESoc Web Editor",
      company:
        "Electrical Engineering Society (EESoc), University of Moratuwa (2025 - Present)",
      location: "Sri Lanka",
      description:
        "Managed and updated the society’s website, improved content presentation, and supported event promotions to strengthen EESoc’s digital presence and engagement.",
      years: "2025 - 2026",
    },
    {
      id: 2,
      position: "EESoc Web Coordinator",
      company:
        "Electrical Engineering Society (EESoc), University of Moratuwa (2023 - Present)",
      location: "Sri Lanka",
      description:
        "Worked on the society’s web presence by maintaining and updating content, supporting event pages, and enhancing digital outreach.",
      years: "2024 - 2025",
    },
    {
      id: 3,
      position: "Publicity Team Member - MoraForesight 2.0",
      company: "IEEE Student Branch, University of Moratuwa - 2024",
      location: "Sri Lanka",
      description:
        "Contributed to organizing and promoting MoraForesight 2.0 by handling event publicity, digital promotions, and outreach initiatives.",
      years: "2024",
    },
    {
      id: 4,
      position: "Publicity Team Member",
      company: "Mora Math Society - 2023",
      location: "Sri Lanka",
      description:
        "Supported the publicity efforts for society events by designing promotional content and managing social media visibility.",
      years: "2023",
    },
    {
      id: 5,
      position: "Technical Team Member - STEAMPillar",
      company: "Sasnaka Sansada Foundation - (2021 - 2023)",
      location: "Sri Lanka",
      description:
        "Provided ongoing technical support for STEAMPillar initiatives, including STEM education sessions, Remedial Teaching programs, and IT infrastructure support.",
      years: "2021 - 2023",
    },
    {
      id: 6,
      position: "Edexcel Maths & Physics Tutor",
      company: "2023 - Present",
      location: "Sri Lanka",
      description:
        "Tutored Edexcel Mathematics and Physics, helping students improve problem-solving skills and exam performance through clear explanations and focused guidance.",
      years: "3",
    },
  ];

  const publicationsData = [
    {
      id: 1,
      title: "The Role of Edge Computing in Autonomous Vehicles",
      description:
        "Presented on the impact of edge computing in autonomous vehicles, focusing on real-time sensing, communication, and efficient data processing.",
      // presented: "Spark Insight Magazine",
      link: "https://heyzine.com/flip-book/20f2458032.html#page/60",
    },
    {
      id: 2,
      title: " An Intelligent Helmet for Motorcycle Safety",
      description:
        "Submitted a research paper based on the Smart Helmet System project, highlighting the integration of IoT, AI, and sensor technologies to improve motorcycle safety in Sri Lanka.",
      // presented: "",
    },
    {
      id: 3,
      title: "Robot Arm for Handling Hazardous Liquids",
      description:
        "Submitted a research paper detailing simulation and design work using MATLAB and SOLIDWORKS.",
      // presented: "E-Carrier Magazine",
    },
  ];

  const achievementsData = [
    {
      id: 0,
      title: "Dean's List",
      description: "Semester 3, Semester 4.",
    },
    {
      id: 1,
      title: "11th Place",
      description:
        "ACES Coders V10.0 (October 2023), an islandwide algorithmic coding competition organized by the University of Peradeniya.",
    },
    {
      id: 2,
      title: "6th Place",
      description:
        "ENIGMA 2024 (August 2023), a national-level competitive programming competition.",
    },
    {
      id: 3,
      title: "High Distinction Pass",
      description:
        "Australian National Chemistry Quiz 2019, awarded for outstanding performance in international chemistry assessment.",
    },
    {
      id: 4,
      title: "Mahapola Higher Education (Merit) Scholarship",
      description:
        "Awarded for exceptional academic performance in GCE A/L examination with an Island Rank of 238.",
    },
    {
      id: 5,
      title: "4th Place",
      description:
        "MECHA 2023, a Med-Tech Hackathon organized by the Faculty of Medicine, University of Colombo, focusing on innovative medical device and application development.",
    },
  ];

  const tabs = [
    { id: "education", label: "Education" },
    { id: "experience", label: "Experience" },
    { id: "publications", label: "Publications" },
    { id: "achievements", label: "Achievements" },
  ];

  return (
    <div className="min-h-screen bg-zinc-900 text-white py-20 px-6 md:px-12 lg:px-24">
      <div className="container mx-auto">
        {/* Header Section */}
        <div
          ref={headerRef}
          className={`mb-16 text-center transition-all duration-1000 ${
            isHeaderVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-rose-600 mb-2 uppercase tracking-wider font-medium">
            Get to know more about me
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-teal-300 to-teal-700 bg-clip-text text-transparent">
            Resume
          </h2>
          <div className="w-32 h-1 bg-rose-600 mx-auto"></div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap justify-center mb-12 border-b border-zinc-800">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-4 text-lg font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? "text-white border-b-2 border-rose-600"
                  : "text-gray-400 hover:text-teal-400"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content Section */}
        <div
          ref={contentRef}
          className={`transition-all duration-500 ${
            isContentVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          {/* Education/Experience Content */}
          {(activeTab === "education" || activeTab === "experience") && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left Column */}
              <div>
                <h2 className="text-3xl font-bold mb-8 text-rose-500">
                  {activeTab === "education" ? "Education" : "Internship"}
                </h2>
                <div className="relative border-l border-zinc-700 pl-6">
                  {(activeTab === "education"
                    ? educationData
                    : experienceData
                  ).map((item, index) => (
                    <TimelineItem
                      key={item.id}
                      item={item}
                      type={activeTab}
                      delay={index * 200}
                    />
                  ))}
                </div>
              </div>

              {/* Right Column */}
              <div>
                <h2 className="text-3xl font-bold mb-8 text-rose-500">
                  {activeTab === "education"
                    ? "Work Experience"
                    : "Volunteering"}
                </h2>
                <div className="relative border-l border-zinc-700 pl-6">
                  {(activeTab === "education"
                    ? experienceData
                    : volunteeringData
                  ).map((item, index) => (
                    <TimelineItem
                      key={item.id}
                      item={item}
                      type={
                        activeTab === "education"
                          ? "experience"
                          : "volunteering"
                      }
                      delay={index * 200 + 100}
                    />
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Skills Content */}
          {activeTab === "publications" && (
            <div>
              <h2 className="text-3xl font-bold mb-8 text-rose-500">
                Publications and other Research Works
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
                {publicationsData.map((publication, index) => (
                  <PublicationItem
                    key={publication.id}
                    publication={publication}
                    delay={index * 150}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Achievements Content */}
          {activeTab === "achievements" && (
            <div>
              <h2 className="text-3xl font-bold mb-8 text-rose-500">
                Achievements
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {achievementsData.map((achievement, index) => (
                  <AchievementItem
                    key={achievement.id}
                    achievement={achievement}
                    delay={index * 150}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// Timeline Item Component
const TimelineItem = ({ item, type, delay = 0 }) => {
  const [itemRef, isItemVisible] = useIntersectionObserver({
    threshold: 0.1,
  });

  return (
    <div
      ref={itemRef}
      className={`mb-10 transition-all duration-700 ${
        isItemVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="absolute -left-8 top-16 mt-1.5 h-4 w-4 rounded-full bg-rose-500 border-4 border-zinc-900"></div>
      <div className="bg-zinc-800 p-6 rounded-lg shadow-lg border border-zinc-700 hover:border-rose-600/30 transition-all hover:-translate-y-1 hover:shadow-rose-600/10">
        <div className="flex flex-wrap justify-between items-center mb-2">
          <h3 className="text-xl font-bold text-white">
            {type === "education" ? item.degree : item.position}
          </h3>
          <span className="bg-rose-700/80 text-rose-50 px-2 py-1 rounded text-sm animate-pulse">
            {type === "education" ? item.score : item.location}
          </span>
        </div>
        <p className="text-teal-400 mb-4">
          {type === "education" ? item.institution : item.company}
        </p>
        <p className="text-gray-400">{item.description}</p>
      </div>
    </div>
  );
};

// Skill Item Component
const SkillItem = ({ skill, delay = 0 }) => {
  const [skillRef, isSkillVisible] = useIntersectionObserver({
    threshold: 0.1,
  });

  return (
    <div
      ref={skillRef}
      className={`bg-zinc-800 p-6 rounded-lg shadow-lg border border-zinc-700 hover:border-teal-600/30 transition-all hover:-translate-y-1 hover:shadow-teal-600/10 ${
        isSkillVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-xl font-medium text-white">{skill.name}</h3>
        <span className="text-teal-400 text-sm">{skill.level}%</span>
      </div>
      <div className="w-full bg-zinc-700 rounded-full h-2">
        <div
          className="bg-gradient-to-r from-rose-600 to-teal-500 h-2 rounded-full transition-all duration-1000"
          style={{
            width: isSkillVisible ? `${skill.level}%` : "0%",
            transitionDelay: `${delay + 300}ms`,
          }}
        ></div>
      </div>
    </div>
  );
};

// Achievement Item Component
const AchievementItem = ({ achievement, delay = 0 }) => {
  const [achievementRef, isAchievementVisible] = useIntersectionObserver({
    threshold: 0.1,
  });

  return (
    <div
      ref={achievementRef}
      className={`bg-zinc-800 p-6 rounded-lg shadow-lg border border-zinc-700 hover:border-rose-600/30 transition-all hover:-translate-y-1 hover:shadow-rose-600/10 ${
        isAchievementVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex items-start">
        <div className="shrink-0">
          <div className="w-10 h-10 bg-rose-500 rounded-full flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
        </div>
        <div className="ml-4">
          <h3 className="text-lg font-medium text-teal-400 mb-1">
            {achievement.title}
          </h3>
          <p className="text-gray-300 text-sm">{achievement.description}</p>
        </div>
      </div>
    </div>
  );
};

const PublicationItem = ({ publication, delay = 0 }) => {
  const [publicationRef, isPublicationVisible] = useIntersectionObserver({
    threshold: 0.1,
  });

  return (
    <div
      ref={publicationRef}
      className={`bg-zinc-800 p-6 rounded-lg shadow-lg border border-zinc-700 hover:border-rose-600/30 transition-all hover:-translate-y-1 hover:shadow-rose-600/10 ${
        isPublicationVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex items-start">
        <div className="shrink-0">
          <div className="w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
        </div>

        <div className="ml-4">
          <h3 className="text-lg font-medium text-teal-400 mb-1">
            {publication.title}
          </h3>

          <p className="text-gray-300 pb-2 text-sm">
            {publication.description}
          </p>

          {/* Rose Button Link */}
          {publication.link && (
            <a
              href={publication.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 px-3 py-1 text-sm bg-rose-500 rounded-lg text-white hover:bg-rose-600 transition"
            >
              View Publication
            </a>
          )}
        </div>
      </div>
    </div>
  );
};


