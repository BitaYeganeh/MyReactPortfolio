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
                I build web apps{" "}
                <span className={styles.orangeText}>that work,</span>{" "}
                <em>
                  and I test them{" "}
                  <span className={styles.orangeText}>to prove it.</span>
                </em>
              </p>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className={styles.rightColumn}>
            {/* Description */}
            <div className={styles.description}>
              <p>
                I'm a junior full-stack developer and QA tester in Espoo,
                Finland. I build with React, TypeScript and Python/Django, and
                I write automated tests (Playwright, Vitest, Django) that run
                in CI: 84 so far, and they've caught 8 real bugs.
              </p>
              <p>
                Before software, I earned a B.Eng. in Electronics and spent
                three years in quality control at HappyFresh and Shopee.
                That's where I learned to care about the details users notice.
              </p>
              <p>
                I'm looking for junior developer or QA roles in the Helsinki
                area or remote. I speak English, Persian and Finnish (B2).
              </p>
            </div>

            {/* Divider */}
            <hr className={styles.divider} />

            {/* Stats - real, verifiable numbers instead of vanity metrics */}
            <div className={styles.statsGrid}>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>11</span>
                <span className={styles.statLabel}>PROJECTS</span>
              </div>

              <div className={styles.statItem}>
                <span className={styles.statNumber}>84</span>
                <span className={styles.statLabel}>AUTOMATED TESTS</span>
              </div>

              <div className={styles.statItem}>
                <span className={styles.statNumber}>2</span>
                <span className={styles.statLabel}>CERTIFICATIONS</span>
              </div>

              <div className={styles.statItem}>
                <span className={styles.statNumber}>3</span>
                <span className={styles.statLabel}>LANGUAGES</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;