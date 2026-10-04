import React, { useEffect, useRef } from 'react';
import styles from './Hero.module.css';

const Hero = () => {
  const imageRef = useRef(null);
  const titleRef = useRef(null);
  const rightTextRef = useRef(null);
  const trackRef = useRef(null);

  const skills = [
    "REACT", "TYPESCRIPT", "JAVASCRIPT", "ASTRO", "NODE.JS", "PYTHON",
    "PLAYWRIGHT", "VITEST", "QA", "HTML", "CSS", "TAILWIND CSS",
    "SQL", "REST API", "DJANGO", "PHP", "WORDPRESS", "GIT",
    "GITHUB ACTIONS", "DOCKER", "FIGMA", "AI"
  ];

  const duplicatedSkills = [...skills, ...skills];

  useEffect(() => {
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
              <a
                href="/images/Bita_Yeganeh_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.resumeLink}
              >
                Resume/CV
              </a>
            </div>
            <a href="#contact" className={styles.contactLink}>
              <span className={styles.contactSlash}>//</span> Contact Me
            </a>
          </div>
        </nav>

        {/* Main Content */}
        <div className={styles.content}>
          {/* Center - Image with Title Overlay */}
          <div className={styles.centerContent}>
            {/* Title on top of image */}
            <div 
              ref={titleRef}
              className={styles.titleOverlay}
            >
              <h1 className={styles.title}>
                <span>JUNIOR</span>
                <span>FULLSTACK SOFTWARE</span>
                <span>DEVELOPER &amp; QA</span>
              </h1>
            </div>
            
            {/* Profile Image */}
            <div 
              ref={imageRef}
              className={styles.imageWrapper}
            >
              <img 
                src="/images/profile.webp"
                alt="Bita Yeganeh - Junior Full-Stack Developer & QA"
                className={styles.profileImage}
                fetchPriority="high"
              />
            </div>

            {/* Mobile Side Texts - Under Title */}
            <div className={styles.mobileSideTexts}>
              <div className={styles.mobileRightText}>
                <span className={styles.mobileSideTextLine}>// FORMER ELECTRONIC ENGINEER</span>
              </div>
            </div>
          </div>

          {/* Right Text - Hidden on mobile, shows under title on mobile */}
          <div 
            ref={rightTextRef}
            className={`${styles.sideText} ${styles.rightText}`}
          >
            <span className={styles.sideTextLine}>// FORMER ELECTRONIC ENGINEER</span>
          </div>
        </div>

        {/* Skills Bar - sits at the bottom of the hero so together they fill the screen */}
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
      </section>
    </>
  );
};

export default Hero;