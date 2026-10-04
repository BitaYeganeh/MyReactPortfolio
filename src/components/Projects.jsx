// src/components/Projects.jsx
import React from "react";
import projects from "../data/projects";
import styles from "./Projects.module.css";
import FeaturedProject from "./FeaturedProject";

const mainProjects = projects.filter((project) => !project.otherWork);
const otherProjects = projects.filter((project) => project.otherWork);

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
          {mainProjects.map((project) => (
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
                {project.highlights && (
                  <dl className={styles.highlights}>
                    {project.highlights.map((item) => (
                      <div key={item.label} className={styles.highlight}>
                        <dt>{item.label}</dt>
                        <dd>{item.text}</dd>
                      </div>
                    ))}
                  </dl>
                )}
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
                <img src={project.image} alt={project.alt || project.title} width={1600} height={1000} loading="lazy" decoding="async" />
              </div>
            </div>
          ))}
        </div>

        {/* Smaller learning projects - compact list, no images */}
        {otherProjects.length > 0 && (
          <div className={styles.otherWork}>
            <h3 className={styles.otherWorkTitle}>Other work</h3>
            <ul className={styles.otherWorkList}>
              {otherProjects.map((project) => (
                <li key={project.id} className={styles.otherWorkItem}>
                  <div className={styles.otherWorkInfo}>
                    <span className={styles.otherWorkName}>{project.title}</span>
                    <span className={styles.otherWorkMeta}>
                      {project.subtitle} · {project.date}
                    </span>
                  </div>
                  <div className={styles.cardLinks}>
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noopener noreferrer" className={styles.liveLink}>
                        Live →
                      </a>
                    )}
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className={styles.githubLink}>
                        GitHub
                      </a>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;