// src/components/FeaturedProject.jsx
import React from "react";
import styles from "./FeaturedProject.module.css";

const FeaturedProject = () => {
  return (
    <div className={styles.featured}>
      <div className={styles.featuredLabel}>
        <span className={styles.pin}>★</span> FEATURED PROJECT
      </div>

      <div className={styles.featuredHeader}>
        <h3 className={styles.featuredTitle}>
          Cyber Security Finland — Website Redesign
        </h3>
        <span className={styles.featuredDate}>JUN 2026 – PRESENT</span>
      </div>

      <p className={styles.featuredDescription}>
        Redesigned the live company website for Cyber Security Finland as
        part of my ICT traineeship — moving from a traditional serif-heavy
        layout to a modern, gradient-driven visual identity, while
        preserving the site's compliance-focused messaging (ISO 27001,
        NIS2, GDPR, DORA).
      </p>

      <div className={styles.featuredTags}>
        <span className={styles.tag}>Astro</span>
        <span className={styles.tag}>JavaScript</span>
        <span className={styles.tag}>HTML</span>
        <span className={styles.tag}>CSS</span>
        <span className={styles.tag}>Security</span>
      </div>

      {/* Before / After comparison */}
      <div className={styles.compareGrid}>
        <div className={styles.compareItem}>
          <span className={styles.compareLabel}>BEFORE</span>
          {/* Static image only — not linked, since the live URL will show
              the new design once the redesign goes live on their domain */}
          <div className={styles.compareImageWrapper}>
            <img
              src="/images/cybersecurity-before.png"
              alt="Cyber Security Finland website — original version"
              className={styles.compareImage}
            />
          </div>
        </div>

        <div className={styles.compareArrow}>→</div>

        <div className={styles.compareItem}>
          <span className={`${styles.compareLabel} ${styles.afterLabel}`}>
            AFTER
          </span>
          <a
            href="https://cybersecurity-pearl.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.compareImageWrapper}
          >
            <img
              src="/images/cybersecurity-after.png"
              alt="Cyber Security Finland website — redesigned version"
              className={styles.compareImage}
            />
          </a>
        </div>
      </div>

      <div className={styles.featuredLinks}>
        <a
          href="https://cybersecurity-pearl.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.liveLink}
        >
          View Redesign →
        </a>
        <a
          href="https://cybersecurity.fi"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.originalLink}
        >
          Original Site
        </a>
      </div>
    </div>
  );
};

export default FeaturedProject;