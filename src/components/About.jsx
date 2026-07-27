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
            <div className={styles.bar}></div>
            
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
                applications that businesses can trust. With a background in Electronic Engineering and 
                Renewable Energy, I bring a unique perspective to software development.
              </p>
            </div>

            {/* Divider */}
            <hr className={styles.divider} />

            {/* Stats - 2 columns with orange labels */}
            <div className={styles.statsGrid}>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>20+</span>
                <span className={styles.statLabel}>API INTEGRATIONS</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>40%</span>
                <span className={styles.statLabel}>MANUAL WORK CUT</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>98%</span>
                <span className={styles.statLabel}>WORKFLOW SUCCESS</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>16</span>
                <span className={styles.statLabel}>PROJECTS SHIPPED</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;