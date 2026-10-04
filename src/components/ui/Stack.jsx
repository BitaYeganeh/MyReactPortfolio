import React from "react";
import styles from "./Stack.module.css";

const Stack = () => {
  const techCategories = [
    {
      title: "LANGUAGES",
      icon: "💻",
      items: ["Python", "TypeScript", "JavaScript", "PHP", "HTML5", "CSS3"]
    },
    {
      title: "FRONTEND / WEB",
      icon: "🎨",
      items: ["React", "Astro", "Next.js", "Tailwind CSS", "WordPress", "UI/UX Design"]
    },
    {
      title: "BACKEND & DATA",
      icon: "🔧",
      items: ["Node.js", "Django", "FastAPI", "REST API", "Sharetribe API", "SQL"]
    },
    {
      title: "QUALITY & TESTING",
      icon: "✅",
      items: ["Playwright", "Vitest", "React Testing Library", "GitHub Actions (CI)", "Manual QA & QC"]
    },
    {
      title: "AI & AUTOMATION",
      icon: "⚡",
      items: ["Claude", "Copilot", "ChatGPT", "DeepSeek"]
    },
    {
      title: "TOOLS & DEPLOYMENT",
      icon: "🛠️",
      items: ["Git", "GitHub", "VS Code", "Figma", "Docker", "Vercel", "Render"]
    }
  ];

  return (
    <section id="stack" className={styles.stack}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>STACK</h2>
          <span className={styles.label}>02-STACK</span>
        </div>

        <div className={styles.grid}>
          {techCategories.map((category, index) => (
            <div key={index} className={styles.category}>
              <div className={styles.categoryHeader}>
                <span className={styles.categoryIcon}>{category.icon}</span>
                <h3 className={styles.categoryTitle}>{category.title}</h3>
              </div>
              <div className={styles.techList}>
                {category.items.map((tech, i) => (
                  <span key={i} className={styles.techItem}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stack;