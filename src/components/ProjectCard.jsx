import { useState } from "react";
import styles from "./ProjectCard.module.css";

const ProjectCard = ({ title, image, github, live }) => {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  return (
    <div
      className={styles.card}
      // Desktop hover: open popup
      onMouseEnter={() =>
        window.matchMedia("(hover: hover) and (pointer: fine)").matches &&
        setIsPreviewOpen(true)
      }
      onMouseLeave={() =>
        window.matchMedia("(hover: hover) and (pointer: fine)").matches &&
        setIsPreviewOpen(false)
      }
    >
      <div className={styles.imageWrapper}>
        <img src={image} alt={title} />
      </div>

      <div className={styles.overlay}>
        <h3>{title}</h3>
        <div className={styles.links}>
          {github && (
            <a href={github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          )}
          {live && (
            <a href={live} target="_blank" rel="noopener noreferrer">
              Live
            </a>
          )}
        </div>
      </div>

      {/* ---------- POPUP PREVIEW ---------- */}
      {isPreviewOpen && (
        <div className={styles.popup}>
          <button
            className={styles.closeBtn}
            onClick={() => setIsPreviewOpen(false)}
          >
            ×
          </button>
          <img src={image} alt={title} />
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
