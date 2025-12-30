import React from "react";
import styles from "./About.module.css";
import profileImage from "../assets/CVimage.jpeg";

const About = () => {
  return (
    <section id="about" className={styles.about}>
      <h2>About Me</h2>
      <div className={styles.container}>
        <div className={styles.profileWrapper}>
          <img
            src={profileImage}
            alt="Bita Yeganeh Profile"
            className={styles.profileImage}
          />
          <p className={styles.typewriter}>
            Software Development Student & UI/UX Enthusiast
          </p>
        </div>

        <div className={styles.text}>
          <p>
            I am a software development student at{" "}
            <span className={styles.bold}>Business College Helsinki</span>,
            focused on building modern, responsive web applications.
          </p>

          <p>
            As part of my studies, I am required to complete{" "}
            <strong>full-time on-the-job training starting March 2026</strong>,
            and I am actively seeking a trainee position where I can grow
            professionally and contribute to real projects.
          </p>

          <p>
            My technical skills include{" "}
            <strong>
              HTML, CSS, JavaScript, React, WordPress, UI/UX design, and testing
            </strong>
            . I enjoy creating clean interfaces and writing maintainable code.
          </p>

          <p>
            I work well in collaborative environments and value feedback,
            continuous learning, and improving development workflows.
          </p>

          <p>
            Currently, I am focusing on{" "}
            <strong>
              React, Git, accessibility, and modern best practices
            </strong>{" "}
            to build meaningful and user-friendly products.
          </p>
          <p>
            I am comfortable working in English and currently improving my
            professional Finnish skills. I am highly motivated to grow in a
            bilingual work environment.
          </p>
        </div>
      </div>
      <section id="languages" className={styles.languages}>
        <h3>Languages & Availability</h3>
        <ul>
          <li>Finnish: B1–B2, actively studying and improving</li>
          <li>English: Fluent</li>
          <li>Available for full-time trainee position starting March 2026</li>
        </ul>
      </section>{" "}
    </section>
  );
};

export default About;
