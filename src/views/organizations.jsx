// src/views/organizations.jsx
import { useState, useEffect, useRef } from "react";

// same style hook as in ResumeSection
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

const organizationsData = [
  {
    id: 1,
    name: "University of Moratuwa",
    subtitle: "University of Moratuwa",
    role: "Electrical Engineering Student",
    period: "May 2022 - June 2026",
    logo: "/organizations/uom.png", 
  },
  {
    id: 2,
    name: "Electrical Engineering Society",
    subtitle: "Electrical Engineering Society",
    role: "Web Editor",
    period: "Aug 2024 - Present",
    logo: "/organizations/eesoc.png",
  },
  {
    id: 3,
    name: "Jaseci Labs",
    subtitle: "Jaseci Labs",
    role: "AI/ML Engineer Intern",
    period: "Dec 2024 - May 2025",
    logo: "/organizations/jaseci.png",
  },
];

export default function Organizations() {
  const [headerRef, isHeaderVisible] = useIntersectionObserver({
    threshold: 0.1,
  });
  const [gridRef, isGridVisible] = useIntersectionObserver({
    threshold: 0.1,
  });

  return (
    <div className="min-h-screen bg-zinc-900 text-white py-20 px-6 md:px-12 lg:px-24">
      <div className="container mx-auto">
        {/* Header */}
        <div
          ref={headerRef}
          className={`mb-16 text-center transition-all duration-1000 ${
            isHeaderVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-rose-600 mb-2 uppercase tracking-wider font-medium">
            Where I belong
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-teal-300 to-teal-700 bg-clip-text text-transparent">
            Organizations
          </h2>
          <div className="w-32 h-1 bg-rose-600 mx-auto"></div>
        </div>

        {/* Organizations grid */}
        <div
          ref={gridRef}
          className={`grid grid-cols-1 md:grid-cols-3 gap-10 items-start text-center transition-all duration-700 ${
            isGridVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-6"
          }`}
        >
          {organizationsData.map((org, index) => (
            <OrganizationCard
              key={org.id}
              org={org}
              delay={index * 150}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

const OrganizationCard = ({ org, delay = 0 }) => {
  const [cardRef, isCardVisible] = useIntersectionObserver({
    threshold: 0.1,
  });

  return (
    <div
      ref={cardRef}
      className={`bg-zinc-800 p-6 rounded-lg shadow-lg border border-zinc-700 hover:border-rose-600/30 transition-all hover:-translate-y-1 hover:shadow-rose-600/10 flex flex-col items-center ${
        isCardVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Logo */}
      <div className="w-24 h-24 mb-4">
        <img
          src={org.logo}
          alt={org.name}
          className="w-full h-full object-contain"
        />
      </div>

      {/* Text block like in your screenshot */}
      <h3 className="text-lg font-semibold text-white">
        {org.name}
      </h3>
      <p className="text-sm text-slate-200 mt-1">
        {org.subtitle}
      </p>

      {org.role && (
        <p className="text-sm text-teal-300 mt-1">
          {org.role}
        </p>
      )}

      <p className="text-sm text-slate-300 mt-1">{org.period}</p>
    </div>
  );
};
