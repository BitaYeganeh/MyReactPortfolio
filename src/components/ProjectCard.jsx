import React from "react";
import styles from "./ProjectCard.module.css";

const ProjectCard = ({ 
  title, 
  subtitle,      // ← Added for date
  description, 
  techTags, 
  image, 
  liveUrl, 
  githubUrl 
}) => {
  return (
    <div className={styles.card}>
      {/* Content - Left Side */}
      <div className={styles.content}>
        {subtitle && (
          <p className={styles.subtitle}>{subtitle}</p>
        )}
        <h3 className={styles.title}>{title}</h3>
        {description && (
          <p className={styles.description}>{description}</p>
        )}
        {techTags && techTags.length > 0 && (
          <div className={styles.techTags}>
            {techTags.map((tag, index) => (
              <span key={index} className={styles.techTag}>
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Image - Right Side */}
      <div className={styles.imageWrapper}>
        <img src={image} alt={title} />
        <div className={styles.overlay}>
          <div className={styles.links}>
            {liveUrl && (
              <a href={liveUrl} target="_blank" rel="noopener noreferrer" className={styles.liveLink}>
                Live Demo
              </a>
            )}
            {githubUrl && (
              <a href={githubUrl} target="_blank" rel="noopener noreferrer" className={styles.githubLink}>
                GitHub
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;