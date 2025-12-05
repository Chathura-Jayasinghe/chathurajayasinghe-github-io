import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import TypingText from "../components/typingtext_navbar";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  // Change navbar styling on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`sticky top-0 w-full h-20 flex items-center justify-between px-6 md:px-12 transition-all duration-300 z-50 ${
        scrolled
          ? "bg-zinc-800 shadow-2xl "
          : "bg-zinc-800 border-b-2 border-teal-600"
      }`}
    >
      {/* Left side - Your Name */}
      {/* <div className="text-amber-50 font-mono text-xl transition duration-300 ease-in-out cursor-pointer">
        The less you know, the more I reveal—fragments of me.
      </div> */}
      <TypingText
        phrases={[
          "Hey there...!!!",
          "Thanks for stopping by — I'm Chathura...",
          "Welcome to my digital space!!!",
          "Curious minds make great company...",
          "Scroll on to discover what I create, build, and believe in...",
        ]}
      />

      {/* Right side - Navigation Links */}
      <div className="hidden md:flex items-center space-x-1">
        <NavLink to="home" title="Home" />
        <NavLink to="skills" title="Skills" />
        <NavLink to="projects" title="Projects" />
        <NavLink to="resume" title="Resume" />
        <NavLink to="organizations" title="Organizations" />
        <NavLink to="contact" title="Contact" />
      </div>

      {/* Mobile menu button */}
      <div className="md:hidden flex items-center">
        <button className="text-white hover:text-amber-400 focus:outline-none">
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
};

// NavLink component for consistent styling
const NavLink = ({ to, title }) => (
  <Link
    to={to}
    spy={true}
    smooth={true}
    offset={-56} // Offset for the navbar height
    duration={500}
    className="px-3 py-2 text-white transition delay-150 duration-300 ease-in-out hover:text-teal-500 hover:scale-125 cursor-pointer"
  >
    {title}
  </Link>
);

export default Navbar;
