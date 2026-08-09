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

        {/* Framing note */}
        <p className={styles.intro}>
          Currently completing a vocational ICT qualification at Business
          College Helsinki alongside a Bachelor's degree in ICT at
          Metropolia University of Applied Sciences.
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
                    MAR 2025 – OCT 2026
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

              {/* Education 2 - Metropolia (Bachelor's, in progress) */}
              <div className={styles.entry}>
                <div className={styles.entryHeader}>
                  <span className={styles.entryDate}>
                    OCT 2025 – DEC 2027
                    <span className={styles.statusBadge}>IN PROGRESS</span>
                  </span>
                  <h4 className={styles.entryTitle}>
                    Bachelor's Degree — Information and Communication
                    Technology
                  </h4>
                </div>
                <p className={styles.entrySchool}>
                  Metropolia University of Applied Sciences
                </p>
                <p className={styles.entryDetail}>
                  Completed coursework: Python Programming, English for ICT
                  Students, Mathematics (Expressions and Equations)
                </p>
              </div>

              {/* Education 3 - UKM Master's */}
              <div className={styles.entry}>
                <div className={styles.entryHeader}>
                  <span className={styles.entryDate}>JAN 2014 – DEC 2015</span>
                  <h4 className={styles.entryTitle}>
                    Postgraduate Studies (Master's) — Renewable Energy
                  </h4>
                </div>
                <p className={styles.entrySchool}>
                  National University of Malaysia (UKM)
                </p>
                <p className={styles.entryDetail}>
                  Research on thermoelectric power generation; awarded FRGS
                  grant studentship and published 3 papers in international
                  journals
                </p>
              </div>

              {/* Education 4 - Garmsar Bachelor's */}
              <div className={styles.entry}>
                <div className={styles.entryHeader}>
                  <span className={styles.entryDate}>JAN 2005 – JUN 2009</span>
                  <h4 className={styles.entryTitle}>
                    Bachelor's Degree — Electrical Engineering (Electronics)
                  </h4>
                </div>
                <p className={styles.entrySchool}>University of Garmsar</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;