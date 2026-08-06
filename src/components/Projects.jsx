// src/components/Projects.jsx
import React from "react";
import projects from "../data/projects";
import styles from "./Projects.module.css";
import FeaturedProject from "./FeaturedProject";

const Projects = () => {
  return (
    <section id="projects" className={styles.projectsSection}>
      <div className={styles.container}>
        {/* Header - matching Stack section */}
        <div className={styles.header}>
          <h2 className={styles.title}>PROJECTS</h2>
          <span className={styles.label}>03-PROJECTS</span>
        </div>

        {/* Featured before/after project */}
        <FeaturedProject />

        {/* Projects Grid - Single Column */}
        <div className={styles.projectsGrid}>
          {projects.map((project) => (
            <div
              key={project.id}
              className={styles.projectCard}
              onClick={() => {
                if (project.live) {
                  window.open(project.live, "_blank");
                } else if (project.github) {
                  window.open(project.github, "_blank");
                }
              }}
            >
              {/* Left: Content */}
              <div className={styles.cardContent}>
                <div className={styles.cardHeader}>
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                  <span className={styles.projectDate}>{project.date}</span>
                </div>
                <p className={styles.projectDescription}>
                  {project.description}
                </p>
                <div className={styles.projectTags}>
                  {project.tags.map((tag, index) => (
                    <span key={index} className={styles.tag}>
                      {tag}
                    </span>
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
      </div>
    </section>
  );
};

export default Projects;