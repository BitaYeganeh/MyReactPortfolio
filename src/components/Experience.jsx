import styles from "./Experience.module.css";

const experiences = [
  {
    role: "ICT Trainee / Cybersecurity Trainee",
    company: "Cyber Security Finland",
    type: "Full-time",
    period: "Jun 2026 – Present",
    location: "Helsinki Metropolitan Area · Hybrid",
    description:
      "Currently working on web redesign, security assessments, and secure frontend development using React, HTML, CSS, JavaScript, and Astro.",
  },
  {
    role: "Lastenhoitaja",
    company: "Seure Henkilöstöpalvelut Oy",
    type: "Full-time",
    period: "Oct 2023 – Jul 2026",
    location: "Helsinki, Uusimaa, Finland · On-site",
    description:
      "Provided daily care and education for children in a Finnish-speaking environment while strengthening communication, patience, and crisis management skills. This role also supported my Finnish language learning and helped me build confidence in a new cultural and professional setting.",
  },
  {
    role: "Senior Quality Control Executive",
    company: "HappyFresh",
    type: "Full-time",
    period: "Mar 2016 – Aug 2019",
    location: "Malaysia · On-site",
    description:
      "Managed quality assurance processes, improved content accuracy, and supported cross-functional teams in a fast-paced e-commerce environment.",
  },
  {
    role: "Content Executive",
    company: "Shopee",
    type: "Full-time",
    period: "Jun 2015 – Mar 2016",
    location: "Malaysia",
    description:
      "Reviewed digital content and improved platform consistency through systematic quality control and cross-team coordination.",
  },
  {
    role: "Research Assistant",
    company: "National University of Malaysia (UKM)",
    type: "Part-time",
    period: "Jun 2014 – Sep 2015",
    location: "Selangor, Malaysia",
    description:
      "Supported academic research on thermoelectric power generation, contributing to technical analysis, data handling, and engineering problem-solving.",
  },
  {
    role: "Commercial Expert",
    company: "Iman Electronic",
    type: "Full-time",
    period: "Apr 2009 – Aug 2013",
    location: "Iran",
    description:
      "Managed customer communication and commercial operations in the electronics import industry while strengthening teamwork and technical documentation skills.",
  },
];

const Experience = () => {
  return (
    <section id="experience" className={styles.experience}>
      <h2>Experience</h2>

      <div className={styles.card}>
        {experiences.map((item) => (
          <div className={styles.entry} key={item.role}>
            <p className={styles.role}>{item.role}</p>
            <p className={styles.company}>
              {item.company} · {item.type}
            </p>
            <p className={styles.date}>{item.period}</p>
            <p className={styles.location}>{item.location}</p>
            <p className={styles.description}>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
