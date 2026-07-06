import styles from "./Education.module.css";

const Education = () => {
  return (
    <section id="education" className={styles.education}>
      <h2>Education</h2>

      <div className={styles.card}>
        <div className={styles.entry}>
          <p>
            • Bachelor&apos;s Degree - Information and Communication Technology
            — Metropolia University of Applied Sciences
          </p>
          <p className={styles.date}>Oct 2025 – Dec 2027</p>
        </div>

        <div className={styles.entry}>
          <p>
            • Software Development (March 2025 – Oct 2026) — Business College
            Helsinki
          </p>
          <p className={styles.focus}>
            (Focus: React, JavaScript, WordPress, PHP, UI/UX Design,
            SQL, and Web Development)
          </p>
        </div>

        <div className={styles.entry}>
          <p>• Renewable Energy — 2013 - University Kebangsaan Malaysia</p>
        </div>

        <div className={styles.entry}>
          <p>• Bachelor&apos;s Degree - Electronic Engineering — 2009 - University Garmsar Iran</p>
        </div>
      </div>
    </section>
  );
};

export default Education;
