import React from "react";
import styles from "./About.module.css";
import profileImage from "../assets/CVimage.jpeg";

const About = () => {
  return (
    <section id="about" className={styles.about}>
      <h2>About Me</h2>

      <div className={styles.container}>
        {/* Left Side */}
        <div className={styles.profileWrapper}>
          <img
            src={profileImage}
            alt="Bita Yeganeh"
            className={styles.profileImage}
          />

          <h3 className={styles.title}>
            Software Developer
          </h3>

          <p className={styles.subtitle}>
            📍 Helsinki, Finland • ICT Student
          </p>

          <div className={styles.badges}>
            <span>React</span>
            <span>JavaScript</span>
            <span>Python</span>
            <span>Astro</span>
          </div>

          <p className={styles.status}>
            🚀 Open to Trainee Opportunities
          </p>
        </div>

        {/* Right Side */}
        <div className={styles.text}>
          <p>
            I'm a <strong>Software Developer and ICT student</strong> based in
            Helsinki, Finland, with a multidisciplinary background in{" "}
            <strong>Electronic Engineering and Renewable Energy</strong>. I
            enjoy building responsive, user-friendly web applications and
            solving real-world problems through clean, maintainable code.
          </p>

          <p>
            I've built several React-based projects and I'm currently working
            as a <strong>Cybersecurity Trainee</strong>, where I contribute to
            redesigning company websites with a focus on frontend development,
            usability, accessibility, and security best practices.
          </p>

          <p>
            My technical toolkit includes{" "}
            <strong>
              React, JavaScript, HTML, CSS, Astro, Python, SQL, PHP, and
              WordPress
            </strong>
            . I enjoy turning ideas into intuitive digital experiences while
            following modern development, accessibility, and clean coding
            principles.
          </p>

          <p>
            My diverse background has strengthened my adaptability,
            communication, and analytical thinking. I'm currently seeking a{" "}
            <strong>
              Software Developer, Frontend Developer, or Full-Stack Trainee
            </strong>{" "}
            opportunity where I can contribute to meaningful projects, continue
            learning, and grow as a professional developer.
          </p>
        </div>
      </div>

      <section id="languages" className={styles.languages}>
        <h3>Languages & Availability</h3>

        <ul>
          <li>
            <strong>Finnish:</strong> B1–B2 (actively improving)
          </li>

          <li>
            <strong>English:</strong> Fluent
          </li>

          <li>
            <strong>Availability:</strong> Full-time trainee opportunities
          </li>
        </ul>
      </section>
    </section>
  );
};

export default About;