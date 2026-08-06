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
        tier: "featured",
        roles: [
          {
            title: "ICT Trainee",
            period: "JUN 2026 – PRESENT",
            achievements: [
              "Redesigning and modernizing the company website, improving accessibility and UX",
              "Conducting security assessments and applying web security best practices",
              "Building responsive, secure interfaces with React, Astro, HTML, CSS and JavaScript",
              "Improved site performance and security scores through hands-on remediation work",
            ],
          },
        ],
        skills: ["React", "Astro", "JavaScript", "HTML", "CSS", "Security"],
      },
      {
        name: "Seure Henkilöstöpalvelut Oy",
        type: "FULL-TIME · HELSINKI",
        tier: "minimal",
        roles: [
          {
            title: "Lastenhoitaja",
            period: "OCT 2023 – JUL 2026",
            oneLiner:
              "Full-time role in a Finnish-speaking environment while relocating to Finland — built fluency, adaptability, and cross-cultural communication skills.",
          },
        ],
        skills: [],
      },
    ],
  },

  // ===== MALAYSIA =====
  {
    country: "🇲🇾 Malaysia",
    period: "2014 – 2019",
    companies: [
      {
        name: "HappyFresh",
        type: "FULL-TIME",
        tier: "compact",
        roles: [
          {
            title: "Senior Quality Control Executive",
            period: "MAR 2016 – AUG 2019",
            oneLiner:
              "Led QA processes achieving 100% data accuracy across the platform; promoted from QC to Senior QC Executive within 2 years.",
          },
        ],
        skills: ["Quality Assurance", "Process Improvement"],
      },
      {
        name: "Shopee",
        type: "FULL-TIME",
        tier: "compact",
        roles: [
          {
            title: "Content Executive",
            period: "JUN 2015 – MAR 2016",
            oneLiner:
              "Reviewed and validated platform content, implementing systematic checks that improved content accuracy.",
          },
        ],
        skills: ["Quality Control"],
      },
      {
        name: "National University of Malaysia (UKM)",
        type: "RESEARCH",
        tier: "compact",
        roles: [
          {
            title: "Research Assistant — Thermoelectric Power Generation",
            period: "JUN 2014 – SEP 2015",
            oneLiner:
              "Published 3 papers in international journals and was awarded an FRGS government research grant for work on thermoelectric generator efficiency.",
          },
        ],
        skills: ["Research", "Data Analysis"],
      },
    ],
  },

  // ===== IRAN =====
  {
    country: "🇮🇷 Iran",
    period: "2009 – 2013",
    companies: [
      {
        name: "Iman Electronic",
        type: "FULL-TIME",
        tier: "minimal",
        roles: [
          {
            title: "Commercial Expert",
            period: "APR 2009 – AUG 2013",
            oneLiner:
              "Managed supplier negotiations and technical documentation for international electronics import operations.",
          },
        ],
        skills: [],
      },
    ],
  },
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

        {/* Framing intro */}
        <p className={styles.intro}>
          My path into software combines an engineering background,
          international work across three countries, and a deliberate shift
          into development and cybersecurity.
        </p>

        {/* Experience by Country */}
        <div className={styles.experienceList}>
          {experiences.map((countryExp, index) => (
            <div key={index} className={styles.countryBlock}>
              {/* Country Header with Period */}
              <div className={styles.countryHeader}>
                <span className={styles.countryFlag}>
                  {countryExp.country}
                </span>
                <span className={styles.countryPeriod}>
                  {countryExp.period}
                </span>
              </div>

              {/* Companies in this country */}
              <div className={styles.companies}>
                {countryExp.companies.map((company, companyIndex) => (
                  <div
                    key={companyIndex}
                    className={styles.companyBlock}
                    data-tier={company.tier}
                  >
                    {/* Company Header */}
                    <div className={styles.companyHeader}>
                      <h3 className={styles.companyName}>{company.name}</h3>
                      <span className={styles.companyType}>
                        {company.type}
                      </span>
                    </div>

                    {/* Roles */}
                    <div className={styles.roles}>
                      {company.roles.map((role, roleIndex) => (
                        <div key={roleIndex} className={styles.roleItem}>
                          <div className={styles.roleHeader}>
                            <h4 className={styles.roleTitle}>
                              {role.title}
                            </h4>
                            <span className={styles.rolePeriod}>
                              {role.period}
                            </span>
                          </div>

                          {company.tier === "featured" && (
                            <ul className={styles.achievements}>
                              {role.achievements.map((item, i) => (
                                <li key={i}>{item}</li>
                              ))}
                            </ul>
                          )}

                          {(company.tier === "compact" ||
                            company.tier === "minimal") && (
                            <p className={styles.oneLiner}>
                              {role.oneLiner}
                            </p>
                          )}
                        </div>
                      ))}
                    </div>

                    {/* Skills */}
                    {company.skills.length > 0 && (
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
                    )}
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