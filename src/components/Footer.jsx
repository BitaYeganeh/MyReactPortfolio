import styles from "./Footer.module.css";

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className={styles.footer}>
      <p>
        Created @ {new Date().getFullYear()} —{" "}
        <a
          href="https://github.com/BitaYeganeh"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.footerLink}
        >
          Check my GitHub
        </a>
      </p>
      <button className={styles.backToTop} onClick={scrollToTop}>
        ⬆ Back to Top
      </button>
    </footer>
  );
};

export default Footer;
