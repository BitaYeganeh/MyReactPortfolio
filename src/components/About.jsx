import React from "react";
import styles from "./About.module.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const About = () => {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        {/* Two-column layout */}
        <div className={styles.aboutGrid}>
          {/* Left Column - Title with 01 and bar */}
          <div className={styles.leftColumn}>
            <span className={styles.number}>01</span>
            <h2 className={styles.title}>ABOUT</h2>
            <div className={styles.bar}></div>
          </div>

          {/* Right Column - Content */}
          <div className={styles.rightColumn}>
            {/* Description */}
            <div className={styles.description}>
              <p>
                Software Developer and ICT student based in Helsinki, Finland, with 
                a multidisciplinary background in <strong>Electronic Engineering</strong> and 
                <strong> Renewable Energy</strong>. I create responsive, user-friendly applications 
                and turn complex challenges into clean, maintainable code.
              </p>
              <p>
                Currently working as a <strong>Cybersecurity Trainee</strong>, I bridge 
                frontend development with security best practices — building experiences 
                that are both beautiful and robust.
              </p>
            </div>

            {/* Stats Grid */}
            <div className={styles.statsGrid}>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>20+</span>
                <span className={styles.statLabel}>PROJECTS BUILT</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>98%</span>
                <span className={styles.statLabel}>SUCCESS RATE</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>40%</span>
                <span className={styles.statLabel}>EFFICIENCY GAIN</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>16</span>
                <span className={styles.statLabel}>TECH STACK</span>
              </div>
            </div>

            {/* Divider */}
            <hr className={styles.divider} />

            {/* Footer */}
            <div className={styles.footer}>
              <div className={styles.techStack}>
                <span>React</span>
                <span>JavaScript</span>
                <span>Python</span>
                <span>Astro</span>
                <span>SQL</span>
                <span>PHP</span>
              </div>
              
              <div className={styles.socials}>
                <a
                  href="https://github.com/BitaYeganeh"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://www.linkedin.com/in/bita-yeganeh-503144237/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;