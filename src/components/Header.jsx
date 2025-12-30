import React, { useState, useEffect } from "react";
import styles from "./Header.module.css";

const Header = ({ onOpenSkills }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Toggle mobile menu
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Toggle dark/light mode
  const toggleMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);

    if (newMode) {
      document.body.classList.add("dark-mode");
      document.body.classList.remove("light-mode");
    } else {
      document.body.classList.add("light-mode");
      document.body.classList.remove("dark-mode");
    }
  };

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) setIsMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Set default mode
  useEffect(() => {
    document.body.classList.add("light-mode");
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className={styles.header}>
      <div className={styles.logo}>Bita Yeganeh</div>

      <nav className={`${styles.nav} ${isMenuOpen ? styles.active : ""}`}>
        <a href="#about" onClick={closeMenu}>
          About
        </a>

        <a href="#projects" onClick={closeMenu}>
          Projects
        </a>

        <button
          className={styles.navButton}
          onClick={() => {
            closeMenu();
            onOpenSkills();
          }}
        >
          Skills
        </button>

        <a href="#education" onClick={closeMenu}>
          Education
        </a>

        <a href="#contact" onClick={closeMenu}>
          Contact Me
        </a>
      </nav>

      <button
        className={styles.modeToggle}
        onClick={toggleMode}
        aria-label="Toggle dark/light mode"
      >
        {darkMode ? "☀️" : "🌙"}
      </button>

      <button
        className={styles.menuToggle}
        onClick={toggleMenu}
        aria-label="Toggle navigation menu"
      >
        ☰
      </button>
    </header>
  );
};

export default Header;
