import Navbar from "./views/navbar";
import Home from "./views/home";
import Skills from "./views/skills";
import Projects from "./views/projects";
import Resume from "./views/resume";
import Contact from "./views/contact";
import Footer from "./views/footer";
import React from "react";

export default function App() {
  return (
    <>
      <Navbar />
      <div id="home" className="section">
        <Home />
      </div>
      <div id="skills" className="section">
        <Skills />
      </div>
      <div id="projects" className="section">
        <Projects />
      </div>
      <div id="resume" className="section">
        <Resume />
      </div>
      <div id="organizations" className="section">
        <Resume />
      </div>
      <div id="contact" className="section">
        <Contact />
      </div>
      <Footer />
    </>
  );
}