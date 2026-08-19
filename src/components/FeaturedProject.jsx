// src/components/FeaturedProject.jsx
import React from "react";
import styles from "./FeaturedProject.module.css";

const comparisons = [
  {
    label: "Hero Section",
    before: "/images/cybersecurity-hero-before.png",
    after: "/images/cybersecurity-hero-after.png",
  },
  {
    label: "Core Capabilities",
    before: "/images/cybersecurity-capabilities-before.png",
    after: "/images/cybersecurity-capabilities-after.png",
    note: "Rebuilt as an interactive horizontal-scroll carousel with a progress indicator, replacing the original static grid.",
  },
];

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
        layout to a modern, gradient-driven visual identity with new
        interactive elements, while preserving the site's compliance-focused
        messaging (ISO 27001, NIS2, GDPR, DORA).
      </p>

      <div className={styles.featuredTags}>
        <span className={styles.tag}>Astro</span>
        <span className={styles.tag}>JavaScript</span>
        <span className={styles.tag}>HTML</span>
        <span className={styles.tag}>CSS</span>
        <span className={styles.tag}>Security</span>
      </div>

      {/* Before / After comparisons */}
      {comparisons.map((item, index) => (
        <div key={index} className={styles.comparisonBlock}>
          <span className={styles.comparisonSectionLabel}>{item.label}</span>

          <div className={styles.compareGrid}>
            <div className={styles.compareItem}>
              <span className={styles.compareLabel}>BEFORE</span>
              {/* Static image only — not linked, since the live URL will
                  show the new design once the redesign goes live */}
              <div className={styles.compareImageWrapper}>
                <img
                  src={item.before}
                  alt={`Cyber Security Finland — ${item.label} — original version`}
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
                  src={item.after}
                  alt={`Cyber Security Finland — ${item.label} — redesigned version`}
                  className={styles.compareImage}
                />
              </a>
            </div>
          </div>

          {item.note && <p className={styles.comparisonNote}>{item.note}</p>}
        </div>
      ))}

      {/* New addition — not a before/after, since this content is new */}
      <div className={styles.newAddition}>
        <span className={styles.newAdditionLabel}>+ NEW ADDITION</span>
        <div className={styles.newAdditionImageWrapper}>
          <img
            src="/images/cybersecurity-trustbar.png"
            alt="New trust bar with compliance certification badges (NIS2, DORA, ISO 27001, CRA) added to the redesigned site"
            className={styles.newAdditionImage}
          />
        </div>
        <p className={styles.comparisonNote}>
          Added a trust bar with compliance certification badges (NIS2,
          DORA, ISO 27001, CRA) alongside the existing content — a section
          that didn't exist on the original site.
        </p>
      </div>

      <div className={styles.featuredLinks}>
        <a
          href="https://www.cybersecurity.fi/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.liveLink}
        >
          View Redesign →
        </a>
      </div>
    </div>
  );
};

export default FeaturedProject;