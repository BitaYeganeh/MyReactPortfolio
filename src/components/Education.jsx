import styles from "./Education.module.css";

const Education = () => {
  return (
    <section id="education" className={styles.education}>
      <h2>Education</h2>

      <div className={styles.card}>
        <p>
          • Software Development (March 2025 – Present) — Business College
          Helsinki
        </p>
        <p className={styles.focus}>
          (Focus: HTML, CSS, JavaScript, WordPress, PHP, UI/UX Design, React)
        </p>

        <p>• Renewable Energy — 2013, University Kebangsaan Malaysia</p>
        <p>• Electronic Engineering — 2009, University Garmsar Iran</p>
      </div>
    </section>
  );
};

export default Education;
