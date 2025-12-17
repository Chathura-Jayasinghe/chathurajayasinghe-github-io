import { useEffect, useRef, useState } from "react";
export default function Contact() {
  // Import React hooks at the top

  // Create a reference to the footer element and a state to track visibility
  const footerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Create an Intersection Observer to detect when the component is in view
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        // Update visibility state when intersection changes
        setIsVisible(entry.isIntersecting);
      },
      {
        // Options for the observer (adjust threshold as needed)
        threshold: 0.1, // Trigger when at least 10% of the element is visible
        rootMargin: "0px", // No margin around the root
      }
    );

    // Start observing the footer element
    const currentFooter = footerRef.current;
    if (currentFooter) {
      observer.observe(currentFooter);
    }

    // Clean up the observer when component unmounts
    return () => {
      if (currentFooter) {
        observer.unobserve(currentFooter);
      }
    };
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <footer ref={footerRef} className={`w-full bg-zinc-900 py-8}`}>
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-rose-500 text-center mb-6">
          Reach Me Out
        </h2>

        <div
          className={`max-w-4xl mx-auto bg-zinc-800 rounded-lg shadow-lg overflow-hidden transition-all duration-1000 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          <div className="flex flex-col md:flex-row">
            {/* Left side - Photo */}
            <div className="w-full md:w-1/3 p-2 border-e-1 border-zinc-600 flex items-center justify-center">
              <div className="w-32 h-32 md:w-52 md:h-52 rounded-full overflow-hidden border-2 border-teal-500">
                <img
                  src="/profile/pic_1.jpg"
                  alt="Your Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right side - Contact Details */}
            <div className="w-full md:w-2/3 p-4 md:p-6 bg-neutral-800">
              <h3 className="text-xl text-center font-bold text-white mb-3">
                Chathura Jayasinghe
              </h3>

              <div className="space-y-3 text-white">
                <div className="flex justify-center items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-teal-500 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span>chathurajayasinghe04@gmail.com</span>
                </div>

                <div className="flex justify-center items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-teal-500 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <span>+94 (70) 493-4655</span>
                </div>

                <div className="flex justify-center items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-teal-500 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span>Kandy, Sri Lanka</span>
                </div>

                <div className="pt-4 flex animate-pulse flex-wrap justify-center gap-3">
                  <a
                    href="https://github.com/Chathura-Jayasinghe"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center bg-zinc-900 shadow-md shadow-teal-300 hover:scale-105 px-3 py-1 rounded-md"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-teal-500 mr-1"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    <span>GitHub</span>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/chathura-jayasinghe-22493621a/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center bg-zinc-900 shadow-md shadow-teal-300 hover:scale-105 px-3 py-1 rounded-md"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-teal-500 mr-1"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                    <span>LinkedIn</span>
                  </a>
                  {/* <a
                    href="https://scholar.google.com/citations?user=epa4RPoAAAAJ&hl=en"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center bg-zinc-900 shadow-md shadow-teal-300 hover:scale-105 px-3 py-1 rounded-md"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-teal-500 mr-1"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 2L1 9l11 7 9-5.5V17h2V9L12 2z" />
                    </svg>
                    <span>Google Scholar</span>
                  </a> */}
                  <a
                    href="https://medium.com/@chathurajayasinghe04"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center bg-zinc-900 shadow-md shadow-teal-300 hover:scale-105 px-3 py-1 rounded-md"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-teal-500 mr-1 "
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M2.846 6.887c.03-.295-.083-.586-.303-.784l-2.24-2.7v-.403h6.958l5.378 11.795 4.728-11.795h6.633v.403l-1.916 1.837c-.165.126-.247.333-.213.538v13.498c-.034.204.048.411.213.537l1.871 1.837v.403h-9.412v-.403l1.939-1.882c.19-.19.19-.246.19-.537v-10.91l-5.389 13.688h-.728l-6.275-13.688v9.174c-.052.385.076.774.347 1.052l2.521 3.058v.404h-7.148v-.404l2.521-3.058c.27-.279.39-.67.325-1.052v-10.608z" />
                    </svg>
                    <span>Medium</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
