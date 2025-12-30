import React, { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import "./App.css"; // global styles and dark/light mode
import { SpinningText } from "./components/ui/spinning-text";

function App() {
  const [isSkillsOpen, setIsSkillsOpen] = useState(false);
  return (
    <>
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

      <Footer />
    </>
  );
}

export default App;
