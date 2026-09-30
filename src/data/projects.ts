export interface Project {
  title: string;
  category: string;
  tools: string;
  description: string;
  image: string;
  link: string;
}

export const projects: Project[] = [
  {
    title: "Journal Application",
    category: "Backend & Security",
    tools: "Java, Spring Boot, MongoDB, Redis, Swagger",
    description:
      "Multi-user journal management with RBAC, secure session auth, and Redis caching.",
    image: "/images/journal_app.jpg",
    link: "https://github.com/Moogala-SaiRam/Journal-App",
  },
  {
    title: "EV Energy Forecasting",
    category: "Machine Learning & AI",
    tools: "Python, FastAPI, TensorFlow, XGBoost",
    description:
      "Hybrid GRU-XGBoost ML model predicting EV energy consumption with FastAPI real-time inference.",
    image: "/images/ev_forecasting.jpg",
    link: "https://github.com/Moogala-SaiRam/EV-Energy-Forecasting-and-Charging-Optimization",
  },
  {
    title: "Job Portal Platform",
    category: "Full-Stack Development",
    tools: "Java, Spring Boot, PostgreSQL, React",
    description:
      "Full-stack recruitment application with search filters, CRUD workflows, and PostgreSQL relational schemas.",
    image: "/images/job_portal.jpg",
    link: "https://github.com/Moogala-SaiRam/JobPortal",
  },
  {
    title: "Algorithmic DSA Engine",
    category: "Competitive Programming",
    tools: "Java, Python, LeetCode 317+, GeeksforGeeks",
    description:
      "550+ solved challenges across advanced data structures, graph algorithms, and dynamic programming.",
    image: "/images/dsa_showcase.jpg",
    link: "https://github.com/Moogala-SaiRam",
  },
];
