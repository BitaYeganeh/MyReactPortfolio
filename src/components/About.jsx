import React from "react";
import styles from "./About.module.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const About = () => {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        {/* Two-column layout */}
        <div className={styles.aboutGrid}>
          {/* Left Column - Title + Tagline */}
          <div className={styles.leftColumn}>
            <h2 className={styles.title}>ABOUT</h2>
            <span className={styles.label}>01-ABOUT</span>
            
            {/* Tagline under the title */}
            <div className={styles.tagline}>
              <p>
                I build <span className={styles.orangeText}>secure, scalable</span> solutions <br />
                that<br />
                <em>bridge <span className={styles.orangeText}>engineering and design.</span></em>
              </p>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className={styles.rightColumn}>
            {/* Description */}
            <div className={styles.description}>
              <p>
                My work combines frontend development, cybersecurity, and engineering principles to create 
                applications that businesses can trust. <br /><br />
                With a background in Electronic Engineering and 
                Renewable Energy, I bring a unique perspective to software development.
              </p>
            </div>

            {/* Divider */}
            <hr className={styles.divider} />

            {/* Stats - 2 columns with orange labels */}
            <div className={styles.statsGrid}>
              <div className={styles.statItem}>
              <span className={styles.statNumber}>3</span> 
              <span className={styles.statLabel}>PROJECTS</span>
            </div>

            <div className={styles.statItem}>
              <span className={styles.statNumber}>448</span>
              <span className={styles.statLabel}>CONTRIBUTIONS</span>
            </div>

            <div className={styles.statItem}>
              <span className={styles.statNumber}>33</span>
              <span className={styles.statLabel}>COMMITS</span>
             </div>

             <div className={styles.statItem}>
               <span className={styles.statNumber}>100%</span>
              <span className={styles.statLabel}>SUCCESS RATE</span>
            </div>
        </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;