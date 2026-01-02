import styles from "./ProjectCard.module.css";

const ProjectCard = ({ title, image, github, live }) => {
  return (
    <div className={styles.card}>
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
    </div>
  );
};

export default ProjectCard;
