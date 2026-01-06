import React, { useRef, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  const [isSkillsOpen, setIsSkillsOpen] = useState(false);

  // Create a ref to the scrollable container
  const scrollContainerRef = useRef(null);

  const scrollToTop = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div ref={scrollContainerRef} style={{ height: "100%", overflowY: "auto" }}>
      <Header onOpenSkills={() => setIsSkillsOpen(true)} />

      <main>
        <section id="hero">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="education">
          <Education />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>

      <Skills isOpen={isSkillsOpen} onClose={() => setIsSkillsOpen(false)} />

      <Footer scrollToTop={scrollToTop} />
    </div>
  );
}

export default App;
