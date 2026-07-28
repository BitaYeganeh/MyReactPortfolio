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
      title: "WEB / FRONTEND",
      icon: "🎨",
      items: ["React", "Next.js", "Tailwind CSS", "WordPress", "UI/UX Design"]
    },
    {
      title: "BACKEND",
      icon: "🔧",
      items: ["FastAPI", "Node.js"]
    },
    {
      title: "DATABASES",
      icon: "🗄️",
      items: ["PostgreSQL", "MySQL"]
    },
    {
      title: "QUALITY & TESTING",
      icon: "✅",
      items: ["QC", "QA", "Testing"]
    },
    {
    title: "AI & AUTOMATION",
    icon: "⚡",
    items: ["ChatGPT", "DeepSeek", "Claude", "Copilot", "Cursor AI", "n8n", "LangChain"]
    },
    {
      title: "INFRA / CLOUD",
      icon: "☁️",
      items: ["Docker"]
    },
    {
      title: "TOOLS",
      icon: "🛠️",
      items: ["Git", "GitHub", "VS Code", "Copilot", "Figma"]
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