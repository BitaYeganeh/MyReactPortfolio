import React, { useEffect, useRef } from 'react';
import styles from './Hero.module.css';

const Hero = () => {
  const imageRef = useRef(null);
  const titleRef = useRef(null);
  const leftTextRef = useRef(null);
  const rightTextRef = useRef(null);
  const trackRef = useRef(null);

  // Your skills/technologies - matching the example
  const skills = [
    "PYTHON", "REACT", "NODE.JS", "JAVASCRIPT", "HTML", "CSS",
    "SQL", "GIT", "GITHUB", "SQL", "UI/UX","FIGMA", "DJANGO",
    "RESTAPI", "Docker", 
  "TypeScript", "QC", "QA", "PHP", "WORDPRESS", "AI"
  ];

  // Duplicate skills for seamless scrolling
  const duplicatedSkills = [...skills, ...skills];

  useEffect(() => {
    // Animation sequence
    const timer1 = setTimeout(() => {
      if (titleRef.current) {
        titleRef.current.style.opacity = '1';
        titleRef.current.style.transform = 'translateY(0)';
      }
    }, 300);

    const timer2 = setTimeout(() => {
      if (imageRef.current) {
        imageRef.current.style.opacity = '1';
        imageRef.current.style.transform = 'scale(1)';
      }
    }, 800);

    const timer3 = setTimeout(() => {
      if (leftTextRef.current) {
        leftTextRef.current.style.opacity = '1';
        leftTextRef.current.style.transform = 'translateX(0)';
      }
      if (rightTextRef.current) {
        rightTextRef.current.style.opacity = '1';
        rightTextRef.current.style.transform = 'translateX(0)';
      }
    }, 1200);

    const timer4 = setTimeout(() => {
      if (trackRef.current) {
        trackRef.current.classList.add(styles.visible);
      }
    }, 1600);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, []);

  return (
    <>
      <section className={styles.hero}>
        {/* Background Pattern */}
        <div className={styles.bgPattern}></div>

        {/* Top Navigation */}
        <nav className={styles.nav}>
          <div className={styles.navContainer}>
            <a href="/" className={styles.logo}>
              <span className={styles.logoText}>Bita</span>
              <span className={styles.logoAccent}>Yeganeh</span>
            </a>
            <div className={styles.navCenter}>
              <a href="#about" className={styles.navLink}>About</a>
              <a href="#projects" className={styles.navLink}>Projects</a>
              <a href="#experience" className={styles.navLink}>Experience</a>
            </div>
            <a href="#contact" className={styles.contactLink}>
              <span className={styles.contactSlash}>//</span> Contact Me
            </a>
          </div>
        </nav>

        {/* Main Content */}
        <div className={styles.content}>
          {/* Left Text - "FULL STACK" */}
          <div 
            ref={leftTextRef}
            className={`${styles.sideText} ${styles.leftText}`}
          >
            <span className={styles.sideTextLine}>// Passionate about creating intuitive and engaging user experiences. Specialize in transforming ideas into beautifully crafted products.</span>
          </div>

          {/* Center - Image with Title Overlay */}
          <div className={styles.centerContent}>
            {/* Title on top of image */}
            <div 
              ref={titleRef}
              className={styles.titleOverlay}
            >
              <h1 className={styles.title}>
                <span>FULLSTACK</span>
                <span>SOFTWARE DEVELOPER</span>
              </h1>
            </div>

            {/* Profile Image */}
            <div 
              ref={imageRef}
              className={styles.imageWrapper}
            >
              <img 
                src="/images/Bita.png"
                alt="Bita Yeganeh - Full Stack Developer"
                className={styles.profileImage}
              />
            </div>
          </div>

          {/* Right Text - "// I'M BITA" */}
          <div 
            ref={rightTextRef}
            className={`${styles.sideText} ${styles.rightText}`}
          >
            <span className={styles.sideTextLine}>// AUTOMATIONS THAT SHIP
WHILE YOU SLEEP</span>
          </div>
        </div>
      </section>

      {/* Thick Skills Bar - OUTSIDE hero section */}
      <div className={styles.skillsBar}>
        <div 
          ref={trackRef}
          className={styles.skillsTrack}
        >
          {duplicatedSkills.map((skill, index) => (
            <span key={index} className={styles.skillTag}>
              {skill}
            </span>
          ))}
        </div>
      </div>
    </>
  );
};

export default Hero