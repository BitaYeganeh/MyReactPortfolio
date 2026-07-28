// src/components/Projects.jsx
import React, { useState } from "react";
import projects from "../data/projects";
import styles from "./Projects.module.css";

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const initialProjects = 4; // Show first 4 projects initially
  const visibleProjects = showAll ? projects : projects.slice(0, initialProjects);

  // Function to generate description from title
  const getDescription = (title) => {
    if (title.includes("HR Management")) return "Full-stack HR management system with React and Node.js";
    if (title.includes("Tech News")) return "WordPress/PHP based tech news website";
    if (title.includes("Cafe Website")) return "Modern cafe website UI design in Figma";
    if (title.includes("Pancake Order")) return "Interactive pancake ordering system with JavaScript";
    if (title.includes("ABC OF MEDIA")) return "WordPress/PHP website for media content";
    if (title.includes("Eläintarha")) return "JavaScript-based zoo management system";
    if (title.includes("Business College")) return "WordPress networking page for Business College Helsinki";
    if (title.includes("Mood Board")) return "Personal mood board UI design in Figma";
    if (title.includes("Social-links")) return "Social links profile card component";
    if (title.includes("Base Apparel")) return "Coming soon page with email signup";
    return "Web development project";
  };

  // Function to generate tags from title
  const getTags = (title) => {
    const tags = [];
    if (title.includes("React")) tags.push("React");
    if (title.includes("WordPress")) tags.push("WordPress");
    if (title.includes("Figma")) tags.push("Figma");
    if (title.includes("JavaScript") || title.includes("JS")) tags.push("JavaScript");
    if (title.includes("PHP")) tags.push("PHP");
    if (title.includes("CSS")) tags.push("CSS");
    if (title.includes("HTML")) tags.push("HTML");
    if (tags.length === 0) tags.push("Web Dev");
    return tags;
  };

  // Function to generate date from id
  const getDate = (id) => {
    const dates = {
      1: "DEC 2025 – PRESENT",
      2: "NOV 2025",
      3: "OCT 2025",
      4: "SEP 2025",
      5: "AUG 2025",
      6: "JUL 2025",
      7: "JUN 2025",
      8: "MAY 2025",
      9: "APR 2025",
      10: "MAR 2025"
    };
    return dates[id] || "2025";
  };

  return (
    <section id="projects" className={styles.projectsSection}>
      <div className={styles.container}>
        {/* Header - matching Stack section */}
        <div className={styles.header}>
          <h2 className={styles.title}>PROJECTS</h2>
          <span className={styles.label}>03-PROJECTS</span>
        </div>

        {/* Projects Grid - Single Column */}
        <div className={styles.projectsGrid}>
          {visibleProjects.map((project) => (
            <div 
              key={project.id} 
              className={styles.projectCard}
              onClick={() => {
                if (project.live) {
                  window.open(project.live, '_blank');
                } else if (project.github) {
                  window.open(project.github, '_blank');
                }
              }}
            >
              {/* Left: Content */}
              <div className={styles.cardContent}>
                <div className={styles.cardHeader}>
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                  <span className={styles.projectDate}>{getDate(project.id)}</span>
                </div>
                <p className={styles.projectDescription}>{getDescription(project.title)}</p>
                <div className={styles.projectTags}>
                  {getTags(project.title).map((tag, index) => (
                    <span key={index} className={styles.tag}>{tag}</span>
                  ))}
                </div>
                <div className={styles.cardLinks}>
                  {project.live && (
                    <a 
                      href={project.live} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className={styles.liveLink}
                      onClick={(e) => e.stopPropagation()}
                    >
                      Live →
                    </a>
                  )}
                  {project.github && (
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className={styles.githubLink}
                      onClick={(e) => e.stopPropagation()}
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>

              {/* Right: Image */}
              <div className={styles.cardImage}>
                <img src={project.image} alt={project.alt || project.title} />
              </div>
            </div>
          ))}
        </div>

        {/* See All Button - shows only if more than 4 projects */}
        {projects.length > initialProjects && (
          <div className={styles.seeMoreWrapper}>
            <button 
              className={styles.seeMoreButton}
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? 'Show Less ↑' : `See More Projects (${projects.length}) ↓`}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;