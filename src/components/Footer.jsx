import styles from "./Footer.module.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = ({ scrollToTop }) => {
  return (
    <footer className={styles.footer}>
      <div className={styles.links}>
        <a
          href="https://github.com/BitaYeganeh"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.footerLink}
        >
          <FaGithub /> GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/bita-yeganeh-503144237/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.footerLink}
        >
          <FaLinkedin /> LinkedIn
        </a>
      </div>

      <p>Created @ {new Date().getFullYear()}</p>

      {/* Scroll button */}
      <button className={styles.backToTop} onClick={scrollToTop}>
        ⬆ Back to Top
      </button>
    </footer>
  );
};

export default Footer;
