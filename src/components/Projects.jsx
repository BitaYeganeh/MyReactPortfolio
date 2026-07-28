// src/components/Projects.jsx
import React, { useState } from "react";
import projects from "../data/projects";
import ProjectCard from "./ProjectCard";
import styles from "./Projects.module.css";

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const initialProjects = 3; // Show first 3 projects

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

  // Get displayed projects
  const displayedProjects = showAll ? projects : projects.slice(0, initialProjects);

  return (
    <section id="projects" className={styles.projectsSection}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <h2 className={styles.title}>FEATURED WORK</h2>
          <span className={styles.label}>03-Featured work</span>
        </div>

        {/* Projects Grid with ProjectCard */}
        <div className={styles.projectsGrid}>
          {displayedProjects.map((project, index) => (
            <div key={project.id} className={styles.projectWrapper}>
              {/* Project Number */}
              <div className={styles.projectNumber}>
                {String(index + 1).padStart(2, '0')}
              </div>
              <ProjectCard
                title={project.title}
                subtitle={getDate(project.id)}
                description={getDescription(project.title)}
                techTags={getTags(project.title)}
                image={project.image}
                liveUrl={project.live}
                githubUrl={project.github}
              />
            </div>
          ))}
        </div>

        {/* See More Button */}
        {projects.length > initialProjects && (
          <div className={styles.seeMoreWrapper}>
            <button 
              className={styles.seeMoreButton}
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? 'Show Less ↑' : `See All Projects (${projects.length}) ↓`}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;