import styles from "./Experience.module.css";
import {
  SiReact,
  SiJavascript,
  SiPython,
  SiAstro,
  SiHtml5,
  SiCss,
  SiPhp,
  SiMysql,
  SiWordpress,
} from "react-icons/si";

const techIcons = {
  React: <SiReact className={styles.react} />,
  JavaScript: <SiJavascript className={styles.javascript} />,
  Python: <SiPython className={styles.python} />,
  Astro: <SiAstro className={styles.astro} />,
  HTML: <SiHtml5 className={styles.html} />,
  CSS: <SiCss className={styles.css} />,
  PHP: <SiPhp className={styles.php} />,
  SQL: <SiMysql className={styles.mysql} />,
  WordPress: <SiWordpress className={styles.wordpress} />,
};

const experiences = [
  {
    icon: "🛡️",
    role: "Cybersecurity Trainee",
    company: "Cyber Security Finland",
    period: "Jun 2026 – Present",
    location: "Helsinki, Finland · Hybrid",
    achievements: [
      "Redesigning the company website using modern frontend technologies.",
      "Building secure and responsive user interfaces with Astro, HTML, CSS and JavaScript.",
      "Improving accessibility, usability, and security best practices.",
      "Collaborating with the team on real-world cybersecurity projects."
    ],
    skills: ["Astro", "JavaScript", "HTML", "CSS", "Security"]
  },

  {
    icon: "👶",
    role: "Childcare Provider",
    company: "Seure Henkilöstöpalvelut Oy",
    period: "Oct 2023 – Jul 2026",
    location: "Helsinki, Finland",
    achievements: [
      "Worked in a Finnish-speaking environment.",
      "Developed strong communication and teamwork skills.",
      "Strengthened adaptability and problem-solving in daily situations.",
      "Built confidence working in a new culture while improving Finnish."
    ],
    skills: ["Communication", "Teamwork", "Finnish", "Adaptability"]
  },

  {
    icon: "📦",
    role: "Senior Quality Control Executive",
    company: "HappyFresh",
    period: "Mar 2016 – Aug 2019",
    location: "Malaysia",
    achievements: [
      "Managed quality assurance processes for e-commerce content.",
      "Improved data accuracy and workflow efficiency.",
      "Collaborated with cross-functional international teams.",
      "Maintained high quality standards in a fast-paced environment."
    ],
    skills: ["Quality Assurance", "Data", "Teamwork", "Problem Solving"]
  },

  {
    icon: "🛒",
    role: "Content Executive",
    company: "Shopee",
    period: "Jun 2015 – Mar 2016",
    location: "Malaysia",
    achievements: [
      "Reviewed and validated digital content.",
      "Maintained platform quality and consistency.",
      "Worked closely with internal teams to improve processes."
    ],
    skills: ["Content", "Quality", "Communication"]
  },

  {
    icon: "🔬",
    role: "Research Assistant",
    company: "National University of Malaysia (UKM)",
    period: "Jun 2014 – Sep 2015",
    location: "Selangor, Malaysia",
    achievements: [
      "Conducted research on thermoelectric power generation.",
      "Performed technical analysis and data collection.",
      "Supported engineering experiments and documentation."
    ],
    skills: ["Research", "Engineering", "Analysis"]
  },

  {
    icon: "⚡",
    role: "Commercial Expert",
    company: "Iman Electronic",
    period: "Apr 2009 – Aug 2013",
    location: "Iran",
    achievements: [
      "Managed customer communication and supplier coordination.",
      "Supported international electronics import operations.",
      "Prepared technical and commercial documentation."
    ],
    skills: ["Electronics", "Communication", "Documentation"]
  }
];

const Experience = () => {
  return (
    <section id="experience" className={styles.experience}>
      <h2>Experience</h2>

      <div className={styles.timeline}>
        {experiences.map((exp) => (
          <div className={styles.card} key={exp.role}>

            <div className={styles.header}>
              <div className={styles.icon}>{exp.icon}</div>

              <div>
                <h3>{exp.role}</h3>
                <h4>{exp.company}</h4>

                <div className={styles.meta}>
                  <span>📅 {exp.period}</span>
                  <span>📍 {exp.location}</span>
                </div>
              </div>
            </div>

<div className={styles.content}>

  <div className={styles.left}>

    <ul className={styles.achievements}>
      {exp.achievements.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>

  </div>

  <div className={styles.right}>

    <h5>Tech Stack</h5>

<div className={styles.skills}>
  {exp.skills.map((skill) => (
    <span key={skill}>
      {techIcons[skill] && (
        <span className={styles.skillIcon}>
          {techIcons[skill]}
        </span>
      )}
      {skill}
    </span>
  ))}
</div>
  </div>

</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;