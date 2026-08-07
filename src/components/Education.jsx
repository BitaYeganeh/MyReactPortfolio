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

        {/* Framing note for the pathway relationship */}
        <p className={styles.intro}>
          Currently completing a vocational ICT qualification at Business
          College Helsinki, with an active study-cooperation pathway into
          further studies at Metropolia University of Applied Sciences.
        </p>

        {/* Content */}
        <div className={styles.content}>
          {/* EDUCATION SECTION */}
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>EDUCATION</h3>
            <div className={styles.entries}>
              {/* Education 1 - Business College (current vocational qualification) */}
              <div className={styles.entry}>
                <div className={styles.entryHeader}>
                  <span className={styles.entryDate}>
                    MAR 2025 – PRESENT
                    <span className={styles.statusBadge}>ENROLLED</span>
                  </span>
                  <h4 className={styles.entryTitle}>
                    Vocational Qualification — Information & Communications
                    Technology
                  </h4>
                </div>
                <p className={styles.entrySchool}>
                  Business College Helsinki
                </p>
                <p className={styles.entryDetail}>
                  Focus: React, JavaScript, WordPress, PHP, UI/UX Design,
                  SQL, and Web Development
                </p>
              </div>

              {/* Education 2 - Metropolia (parallel study-cooperation pathway) */}
              <div className={styles.entry}>
                <div className={styles.entryHeader}>
                  <span className={styles.entryDate}>
                    OCT 2025 – 2027
                    <span className={styles.statusBadge}>ACTIVE</span>
                  </span>
                  <h4 className={styles.entryTitle}>
                    Study Cooperation Pathway — Information and Communication
                    Technology
                  </h4>
                </div>
                <p className={styles.entrySchool}>
                  Metropolia University of Applied Sciences
                </p>
              </div>

              {/* Education 3 */}
              <div className={styles.entry}>
                <div className={styles.entryHeader}>
                  <span className={styles.entryDate}>2013</span>
                  <h4 className={styles.entryTitle}>Renewable Energy</h4>
                </div>
                <p className={styles.entrySchool}>
                  University Kebangsaan Malaysia
                </p>
              </div>

              {/* Education 4 */}
              <div className={styles.entry}>
                <div className={styles.entryHeader}>
                  <span className={styles.entryDate}>2009</span>
                  <h4 className={styles.entryTitle}>
                    Bachelor's Degree - Electronic Engineering
                  </h4>
                </div>
                <p className={styles.entrySchool}>
                  Islamic Azad University, Garmsar Branch
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;