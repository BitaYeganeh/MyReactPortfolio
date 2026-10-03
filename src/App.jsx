import React, { useRef } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Stack from "./components/ui/Stack";
import Experience from "./components/Experience";
import Certificates from "./components/Certificates";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  // Create a ref to the scrollable container
  const scrollContainerRef = useRef(null);

  const scrollToTop = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div ref={scrollContainerRef} className="app-container">
      <main className="app-main">
        {/* Hero - Full screen, no wrapper section */}
        <Hero />
        
        {/* All other sections with container class */}
        <div className="sections-wrapper">
          <section id="about" className="section-container">
            <About />
          </section>

          <section id="stack" className="section-container">
            <Stack />
          </section>
          
          <section id="projects" className="section-container">
            <Projects />
          </section>
          
          <section id="education" className="section-container">
            <Education />
          </section>
          
          <section id="experience" className="section-container">
            <Experience />
          </section>
          
          <section id="certificates" className="section-container">
            <Certificates />
          </section>

          <section id="contact" className="section-container">
            <Contact />
          </section>
        </div>
      </main>

      <Footer scrollToTop={scrollToTop} />
    </div>
  );
}

export default App;