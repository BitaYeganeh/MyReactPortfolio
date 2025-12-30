// src/components/Projects.jsx
import React from "react";
import projects from "../data/projects";
import ProjectCard from "./ProjectCard";
import styles from "./Projects.module.css";

const Projects = () => {
  return (
    <section id="projects" className={styles.projectsSection}>
      <h2>Projects</h2>

      <div className={styles.projectsGrid}>
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            image={project.image}
            github={project.github}
            live={project.live}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
