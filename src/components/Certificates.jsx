import styles from "./Certificates.module.css";
import chatgptExcel from "../assets/certificates/ChatGPT - Käyttö Excelin kanssa.pdf";
import chatgptWriting from "../assets/certificates/ChatGPT - Kirjoittaminen ja tekstin tuottaminen.pdf";
import chatgptExtra from "../assets/certificates/ChatGPT - Lisätoiminnot.pdf";
import chatgptBasics from "../assets/certificates/ChatGPT - Perusteet.pdf";
import chatgptSecurity from "../assets/certificates/ChatGPT 6 - Tietoturva.pdf";
import copyright from "../assets/certificates/Copyright Online.pdf";
import cyberBasics from "../assets/certificates/Cyber Security Basics.pdf";
import cyberIntro from "../assets/certificates/Introduction to Cyber Security.pdf";
import protection from "../assets/certificates/Protection from threats.pdf";
import qaJam from "../assets/certificates/QAjam.pdf";
import scams from "../assets/certificates/Scams.pdf";
import teamsSecurity from "../assets/certificates/Teams and Office 365 security.pdf";
import search from "../assets/certificates/Tiedonhaku verkosta.pdf";
import contentGeneration from "../assets/certificates/sisällön-tuottamiseen.pdf";

const certificates = [
  {
    title: "QA Jam - Software Testing & Quality Assurance",
    issuer: "Tietoala ry",
    date: "Issued May 2026",
    preview: qaJam,
  },
  {
    title: "ChatGPT 7 - Tiedonhaku verkosta",
    issuer: "Eduhouse Oy",
    date: "Issued Feb 2025",
    preview: search,
  },
  {
    title: "Teams and Office 365 security",
    issuer: "Eduhouse Oy",
    date: "Issued Feb 2026",
    preview: teamsSecurity,
  },
  {
    title: "ChatGPT 5 – ChatGPT:n ohjaaminen halutun sisällön tuottamiseen",
    issuer: "Eduhouse Oy",
    date: "Issued Feb 2026",
    preview: contentGeneration,
  },
  {
    title: "Scams",
    issuer: "Eduhouse Oy",
    date: "Issued Feb 2026",
    preview: scams,
  },
  {
    title: "Protection from threats",
    issuer: "Eduhouse Oy",
    date: "Issued Feb 2026",
    preview: protection,
  },
  {
    title: "Introduction to Cyber Security",
    issuer: "Eduhouse Oy",
    date: "Issued Feb 2026",
    preview: cyberIntro,
  },
  {
    title: "Cyber Security Basics",
    issuer: "Eduhouse Oy",
    date: "Issued Feb 2026",
    preview: cyberBasics,
  },
  {
    title: "Copyright Online",
    issuer: "Eduhouse Oy",
    date: "Issued Feb 2026",
    preview: copyright,
  },
  {
    title: "ChatGPT 6 - Tietoturva",
    issuer: "Eduhouse Oy",
    date: "Issued Feb 2026",
    preview: chatgptSecurity,
  },
  {
    title: "ChatGPT 1 - Perusteet",
    issuer: "Eduhouse Oy",
    date: "Issued Feb 2026",
    preview: chatgptBasics,
  },
  {
    title: "ChatGPT 4 - Lisätoiminnot",
    issuer: "Eduhouse Oy",
    date: "Issued Feb 2026",
    preview: chatgptExtra,
  },
  {
    title: "ChatGPT 2 - Kirjoittaminen ja tekstin tuottaminen",
    issuer: "Eduhouse Oy",
    date: "Issued Feb 2026",
    preview: chatgptWriting,
  },
  {
    title: "ChatGPT 3 - Käyttö Excelin kanssa",
    issuer: "Eduhouse Oy",
    date: "Issued Feb 2026",
    preview: chatgptExcel,
  },
];

const Certificates = () => {
  return (
    <section id="certificates" className={styles.certificates}>
      <h2>Certificates</h2>

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
    </section>
  );
};

export default Certificates;
