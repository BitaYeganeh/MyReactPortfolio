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
    id: 5,
    title: "The Swap Cabinet — Sharetribe Hackathon",
    subtitle: "REACT · TYPESCRIPT · SHARETRIBE API",
    date: "OCT 2026",
    description:
      "A two-day Tieto Bootcamp Sharetribe hackathon at Tieto HQ. The case: make search faster and more intuitive on an existing secondhand-clothing marketplace, without losing accuracy. Our team of four built a proof-of-concept where buyers describe what they want in plain words or upload a photo, instead of working through keyword filters.",
    highlights: [
      {
        label: "My role",
        text: "Front-end developer. I built the buyer-facing experience: the landing page with typing search hints, category menu, sticky filter bar (size, brand, colour and a two-handle price slider), item popup, basket and saved items. I also made the server port configurable and documented the setup.",
      },
      {
        label: "Results",
        text: "Tested on 11 searches against the live marketplace, the team's AI search showed 54% correct items vs 27% for the built-in search, and the right items on the first page 88% of the time vs 67%. It also handles typos and Finnish words.",
      },
      {
        label: "Team solution",
        text: "Listings come from the Sharetribe Marketplace API. Teammates built the AI search: Claude labels each listing and a vector database (LanceDB) matches meaning and photos.",
      },
    ],
    tags: ["React", "TypeScript", "Tailwind CSS", "Sharetribe API", "Node.js", "Teamwork"],
    image: "/images/swap-cabinet.webp",
    alt: "The Swap Cabinet search prototype home page",
    github: "https://github.com/BitaYeganeh/swap-cabinet-hackathon",
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
    live: "https://bitayeganeh.github.io/WordPress-Project---ABC-OF-MEDIA/",
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