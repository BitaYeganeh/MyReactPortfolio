// src/data/projects.js

const projects = [
  {
    id: 1,
    title: "HR Management System",
    subtitle: "REACT · REST API",
    date: "NOV 2025",
    description:
      "A React app that helps small HR teams manage employee records and never miss key dates. It covers full create, read, update and delete for employees (department, salary, skills, contact details) on top of a REST API built with JSON Server and deployed on Render.",
    highlights: [
      {
        label: "Problem",
        text: "Small HR teams track staff in spreadsheets and easily miss probation reviews and work anniversaries.",
      },
      {
        label: "Challenge",
        text: "Automating reminders: a utility calculates time in the company from each hire date, flags employees under 6 months for a probation review and those reaching 5, 10 or 15 years for a recognition meeting.",
      },
      {
        label: "Built with",
        text: "A reusable useAxios() hook for all API calls, React Router with a 404 page, and CSS Modules.",
      },
      {
        label: "Tested",
        text: "39 automated tests with Vitest, React Testing Library and Playwright, run in GitHub Actions on every push. Writing them uncovered 6 bugs, all fixed, including duplicate employee IDs and wrong work-experience dates.",
      },
    ],
    tags: ["React", "React Router", "Axios", "JSON Server", "Vitest", "Playwright", "Render"],
    image: "/images/hrapp-screenshot.webp",
    alt: "HR Management System",
    github: "https://github.com/BitaYeganeh/hrApp",
    live: "https://hrapp-1-68tb.onrender.com",
  },
  {
    id: 2,
    title: "ABC of Media Website",
    subtitle: "WORDPRESS · PHP",
    date: "DEC 2025 – PRESENT",
    description:
      "Ongoing WordPress/PHP site built for a media literacy initiative, including custom page templates and content structure to support press releases, media, and educational resources.",
    tags: ["WordPress", "PHP"],
    image: "/images/abc.webp",
    alt: "WordPress/PHP Project - ABC OF MEDIA Website",
    github:
      "https://github.com/BitaYeganeh/WordPress-Project---ABC-OF-MEDIA",
  },
  {
    id: 3,
    otherWork: true,
    title: "Pancake Order System",
    subtitle: "JAVASCRIPT",
    date: "AUG 2025",
    description:
      "Interactive ordering system built in vanilla JavaScript, handling dynamic pricing, topping selection, and order summaries without any framework — focused on clean DOM manipulation and state logic.",
    tags: ["JavaScript", "DOM"],
    image: "/images/project2.webp",
    alt: "Pancake Order Project",
    github:
      "https://github.com/BitaYeganeh/Summer-tasks/tree/main/Pannukakku",
  },
  {
    id: 4,
    otherWork: true,
    title: "Cafe Website UI Design",
    subtitle: "FIGMA · UI/UX",
    date: "JUL 2025",
    description:
      "End-to-end UI/UX design for a café website, from wireframes to a clickable prototype — covering layout, typography, and interaction design for a warm, brand-driven feel.",
    tags: ["Figma", "UI/UX Design"],
    image: "/images/figma-cafe.webp",
    alt: "Café website UI design in Figma",
    live: "https://www.figma.com/proto/LOFz2qhMrQFBrMrCsotQfl/prototype-for-a-caf%C3%A9-website?node-id=1-2&starting-point-node-id=1%3A2&t=taVksUnCMCTiGYTj-1",
  },
];

export default projects;