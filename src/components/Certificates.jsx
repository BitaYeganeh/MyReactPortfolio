import React from "react";
import styles from "./Certificates.module.css";
import qaJam from "../assets/certificates/QAjam.pdf";
import cyberBasics from "../assets/certificates/Cyber Security Basics.pdf";

const certificates = [
  {
    title: "QA Jam - Software Testing & Quality Assurance",
    issuer: "Tietoala ry",
    date: "Issued May 2026",
    preview: qaJam,
  },
  {
    title: "Cyber Security Basics",
    issuer: "Eduhouse Oy",
    date: "Issued Feb 2026",
    preview: cyberBasics,
  },
];

const Certificates = () => {
  return (
    <section id="certificates" className={styles.certificates}>
      <div className={styles.container}>
        {/* Header - matching other sections */}
        <div className={styles.header}>
          <h2 className={styles.title}>CERTIFICATES</h2>
          <span className={styles.label}>06-CERTIFICATES</span>
        </div>

        <div className={styles.grid}>
          {certificates.map((item) => (
            <article className={styles.card} key={item.title}>
              <div className={styles.previewBox}>
                {item.preview ? (
                  <iframe
                    className={styles.preview}
                    src={item.preview}
                    title={item.title}
                  />
                ) : (
                  <div className={styles.placeholder}>Certificate Preview</div>
                )}
              </div>

              <div className={styles.content}>
                <h3 className={styles.title}>{item.title}</h3>
                <p className={styles.issuer}>{item.issuer}</p>
                <p className={styles.date}>{item.date}</p>
              </div>
            </article>
          ))}
        </div>

        {/* Footnote for additional coursework instead of a wall of thin certs */}
        <p className={styles.footnote}>
          Plus 12 additional short courses in AI tools and digital security
          via Eduhouse — several are sub-modules of Cyber Security Basics.
        </p>
      </div>
    </section>
  );
};

export default Certificates;