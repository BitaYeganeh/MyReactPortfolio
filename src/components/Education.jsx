// src/components/Education.jsx
import React from "react";
import styles from "./Education.module.css";

const Education = () => {
  return (
    <section id="education" className={styles.education}>
      <div className={styles.container}>
        {/* Header - matching other sections */}
        <div className={styles.header}>
          <h2 className={styles.title}>EDUCATION</h2>
          <span className={styles.label}>04-EDUCATION</span>
        </div>

        {/* Content */}
        <div className={styles.content}>
          {/* EDUCATION SECTION */}
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>EDUCATION</h3>
            
            <div className={styles.entries}>
              {/* Education 1 */}
              <div className={styles.entry}>
                <div className={styles.entryHeader}>
                  <span className={styles.entryDate}>OCT 2025 – DEC 2027</span>
                  <h4 className={styles.entryTitle}>Bachelor's Degree - Information and Communication Technology</h4>
                </div>
                <p className={styles.entrySchool}>Metropolia University of Applied Sciences</p>
              </div>

              {/* Education 2 */}
              <div className={styles.entry}>
                <div className={styles.entryHeader}>
                  <span className={styles.entryDate}>MAR 2025 – OCT 2026</span>
                  <h4 className={styles.entryTitle}>Software Development</h4>
                </div>
                <p className={styles.entrySchool}>Business College Helsinki</p>
                <p className={styles.entryDetail}>Focus: React, JavaScript, WordPress, PHP, UI/UX Design, SQL, and Web Development</p>
              </div>

              {/* Education 3 */}
              <div className={styles.entry}>
                <div className={styles.entryHeader}>
                  <span className={styles.entryDate}>2013</span>
                  <h4 className={styles.entryTitle}>Renewable Energy</h4>
                </div>
                <p className={styles.entrySchool}>University Kebangsaan Malaysia</p>
              </div>

              {/* Education 4 */}
              <div className={styles.entry}>
                <div className={styles.entryHeader}>
                  <span className={styles.entryDate}>2009</span>
                  <h4 className={styles.entryTitle}>Bachelor's Degree - Electronic Engineering</h4>
                </div>
                <p className={styles.entrySchool}>University Garmsar Iran</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Education;