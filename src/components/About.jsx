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
          <p className={styles.typewriter}>Aspiring Fullstack Developer</p>
        </div>

        <div className={styles.text}>
          <p>
            I am a{" "}
            <strong>
              Software Development student at Business College Helsinki
            </strong>{" "}
            with a unique technical background in{" "}
            <strong>Electronic Engineering and Renewable Energy</strong>. My
            studies have strengthened my analytical thinking and problem-solving
            skills, which I now apply to building modern, responsive web
            applications.
          </p>

          <p>
            I have hands-on experience with{" "}
            <strong>
              React, JavaScript, HTML, CSS, WordPress,Python SQL, PHP, UI/UX
              design, and testing
            </strong>
            . I enjoy turning design ideas into functional, user-friendly
            applications and improving workflows with clean, maintainable code.
            For example, I have built small projects that focus on responsive
            design and accessibility, experimenting with modern web development
            best practices.
          </p>

          <p>
            I thrive in team environments and bring strong soft skills,
            including{" "}
            <strong>adaptability, collaboration, and a growth mindset</strong>.
            I am eager to contribute from day one, learn quickly, and tackle
            challenges creatively. My diverse technical background allows me to
            approach problems with a broad perspective and innovative thinking.
          </p>

          <p>
            I am highly motivated to start a full-time trainee position in March
            2026, contribute to real-world projects, and grow as a professional
            developer in a bilingual, forward-thinking team.
          </p>
        </div>
      </div>

      <section id="languages" className={styles.languages}>
        <h3>Languages & Availability</h3>
        <ul>
          <li>
            <strong>Finnish:</strong> B1–B2, actively learning
          </li>
          <li>
            <strong>English:</strong> Fluent
          </li>
          <li>Available for full-time trainee position starting March 2026</li>
        </ul>
      </section>
    </section>
  );
};

export default About;
