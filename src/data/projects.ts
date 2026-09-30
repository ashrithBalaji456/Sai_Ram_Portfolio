export interface Project {
  title: string;
  category: string;
  period: string;
  tools: string;
  description: string;
  bullets: string[];
  image: string;
  link: string;
}

export const projects: Project[] = [
  {
    title: "Journal Application",
    category: "Backend & Systems",
    period: "Jan 2025 – Mar 2025",
    tools: "Java, Spring Boot, MongoDB, Redis, Swagger",
    description:
      "Designed and implemented RESTful backend services using Spring Boot to support a multi-user journal management system with RBAC, secure session authorization, and Redis caching.",
    bullets: [
      "Designed and implemented RESTful backend services using Spring Boot to support a multi-user journal management system.",
      "Implemented role-based access control and session management to ensure secure authentication and authorization.",
      "Built and tested modular CRUD APIs backed by MongoDB, with Redis used for caching, and documented endpoints using Swagger.",
    ],
    image: "/images/journal_app.jpg",
    link: "https://github.com/Moogala-SaiRam/Journal-App",
  },
  {
    title: "EV Energy Forecasting & Charging Optimization",
    category: "Machine Learning & AI",
    period: "Mar 2025 – May 2025",
    tools: "Python, FastAPI, TensorFlow, XGBoost",
    description:
      "Developed a hybrid GRU–XGBoost machine learning model to predict EV energy consumption from historical charging data, deployed as a real-time FastAPI microservice.",
    bullets: [
      "Developed a hybrid GRU–XGBoost machine learning model to predict EV energy consumption from historical charging data.",
      "Deployed the trained model as a RESTful prediction service using FastAPI to enable real-time inference.",
      "Validated prediction accuracy and optimized model performance through iterative testing and evaluation.",
    ],
    image: "/images/ev_forecasting.jpg",
    link: "https://github.com/Moogala-SaiRam/EV-Energy-Forecasting-and-Charging-Optimization",
  },
  {
    title: "Job Portal Application",
    category: "Full-Stack Development",
    period: "Apr 2025 – May 2025",
    tools: "Java, Spring Boot, PostgreSQL, React",
    description:
      "Full-stack job recruitment application with a Spring Boot REST API, React UI, search filters, and optimized PostgreSQL relational database schemas.",
    bullets: [
      "Developed a full-stack job portal application with a Spring Boot backend and React frontend to manage job postings.",
      "Implemented CRUD operations, search functionality, and REST APIs to efficiently retrieve and manage job listings.",
      "Designed relational database schemas using PostgreSQL and integrated frontend components with backend services.",
    ],
    image: "/images/job_portal.jpg",
    link: "https://github.com/Moogala-SaiRam/JobPortal",
  },
];
