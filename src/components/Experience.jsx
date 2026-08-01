// src/components/Experience.jsx
import React from "react";
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
  SiTypescript,
} from "react-icons/si";
import { FaRobot, FaNetworkWired } from "react-icons/fa";

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
  TypeScript: <SiTypescript className={styles.typescript} />,
};

const experiences = [
  // ===== FINLAND =====
  {
    country: "🇫🇮 Finland",
    period: "2023 – PRESENT",
    companies: [
      {
        name: "Cyber Security Finland",
        type: "TRAINEE · HYBRID",
        roles: [
          {
            title: "ICT Trainee",
            period: "JUN 2026 – PRESENT",
            achievements: [
              "Redesigning the company website using modern frontend technologies",
              "Building secure and responsive user interfaces with Astro, HTML, CSS and JavaScript",
              "Improving accessibility, usability, and security best practices",
              "Collaborating with the team on real-world cybersecurity projects"
            ]
          }
        ],
        skills: ["Astro", "JavaScript", "HTML", "CSS", "Security"]
      },
      {
        name: "Seure Henkilöstöpalvelut Oy",
        type: "FULL-TIME · HELSINKI",
        roles: [
          {
            title: "Lasten Hoitaja - learning Finnish language and culture",
            period: "OCT 2023 – JUL 2026",
            achievements: [
              "Worked in a Finnish-speaking environment",
              "Developed strong communication and teamwork skills",
              "Strengthened adaptability and problem-solving in daily situations",
              "Built confidence working in a new culture while improving Finnish"
            ]
          }
        ],
        skills: ["Communication", "Teamwork", "Finnish", "Adaptability"]
      }
    ]
  },

  // ===== MALAYSIA =====
  {
    country: "🇲🇾 Malaysia",
    period: "2014 – 2019",
    companies: [
      {
        name: "HappyFresh",
        type: "FULL-TIME",
        roles: [
          {
            title: "Senior Quality Control Executive",
            period: "MAR 2016 – AUG 2019",
            achievements: [
              "Managed quality assurance processes for e-commerce content",
              "Improved data accuracy and workflow efficiency",
              "Collaborated with cross-functional international teams",
              "Maintained high quality standards in a fast-paced environment"
            ]
          }
        ],
        skills: ["Quality Assurance", "Data", "Teamwork", "Problem Solving"]
      },
      {
        name: "Shopee",
        type: "FULL-TIME",
        roles: [
          {
            title: "Content Executive",
            period: "JUN 2015 – MAR 2016",
            achievements: [
              "Reviewed and validated digital content",
              "Maintained platform quality and consistency",
              "Worked closely with internal teams to improve processes"
            ]
          }
        ],
        skills: ["Content", "Quality", "Communication"]
      },
      {
        name: "National University of Malaysia (UKM)",
        type: "RESEARCH",
        roles: [
          {
            title: "Research Assistant",
            period: "JUN 2014 – SEP 2015",
            achievements: [
              "Conducted research on thermoelectric power generation",
              "Performed technical analysis and data collection",
              "Supported engineering experiments and documentation"
            ]
          }
        ],
        skills: ["Research", "Engineering", "Analysis"]
      }
    ]
  },

  // ===== IRAN =====
  {
    country: "🇮🇷 Iran",
    period: "2009 – 2013",
    companies: [
      {
        name: "Iman Electronic",
        type: "FULL-TIME",
        roles: [
          {
            title: "Commercial Expert",
            period: "APR 2009 – AUG 2013",
            achievements: [
              "Managed customer communication and supplier coordination",
              "Supported international electronics import operations",
              "Prepared technical and commercial documentation"
            ]
          }
        ],
        skills: ["Electronics", "Communication", "Documentation"]
      }
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className={styles.experience}>
      <div className={styles.container}>
        {/* Header - matching Projects section */}
        <div className={styles.header}>
          <h2 className={styles.title}>EXPERIENCE</h2>
          <span className={styles.label}>05-EXPERIENCE</span>
        </div>

        {/* Experience by Country */}
        <div className={styles.experienceList}>
          {experiences.map((countryExp, index) => (
            <div key={index} className={styles.countryBlock}>
              {/* Country Header with Period */}
              <div className={styles.countryHeader}>
                <span className={styles.countryFlag}>{countryExp.country}</span>
                <span className={styles.countryPeriod}>{countryExp.period}</span>
              </div>

              {/* Companies in this country */}
              <div className={styles.companies}>
                {countryExp.companies.map((company, companyIndex) => (
                  <div key={companyIndex} className={styles.companyBlock}>
                    {/* Company Header */}
                    <div className={styles.companyHeader}>
                      <h3 className={styles.companyName}>{company.name}</h3>
                      <span className={styles.companyType}>{company.type}</span>
                    </div>

                    {/* Roles */}
                    <div className={styles.roles}>
                      {company.roles.map((role, roleIndex) => (
                        <div key={roleIndex} className={styles.roleItem}>
                          <div className={styles.roleHeader}>
                            <h4 className={styles.roleTitle}>{role.title}</h4>
                            <span className={styles.rolePeriod}>{role.period}</span>
                          </div>
                          <ul className={styles.achievements}>
                            {role.achievements.map((item, i) => (
                              <li key={i}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>

                    {/* Skills */}
                    <div className={styles.skills}>
                      {company.skills.map((skill) => (
                        <span key={skill} className={styles.skillTag}>
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
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;