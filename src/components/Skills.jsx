import styles from "./Skills.module.css";
import SkillsAnimated from "./SkillsAnimated";

const Skills = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <span className={styles.closeBtn} onClick={onClose}>
          &times;
        </span>

        <h2>My Skills</h2>

        <SkillsAnimated />
      </div>
    </div>
  );
};

export default Skills;
