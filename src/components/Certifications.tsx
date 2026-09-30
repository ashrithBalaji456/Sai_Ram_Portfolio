import { MdVerified } from "react-icons/md";
import { FaExternalLinkAlt } from "react-icons/fa";
import "./styles/Certifications.css";

interface CertificationItem {
  title: string;
  issuer: string;
  date: string;
  description: string;
  skills: string[];
  link: string;
}

const certificationsData: CertificationItem[] = [
  {
    title: "Java Full Stack",
    issuer: "Wipro Talent Next",
    date: "Oct 2025",
    description:
      "Enterprise certification covering comprehensive Java backend development, Spring Boot RESTful microservices, database connectivity, and scalable application architecture.",
    skills: ["Java", "Spring Boot", "REST APIs", "Backend Development"],
    link: "https://drive.google.com/file/d/18bmDsHLxk0-JH9WIuo927CiLURnVBVeJ/view?usp=drive_link",
  },
  {
    title: "SQL Certification",
    issuer: "HackerRank",
    date: "Dec 2023",
    description:
      "Verified proficiency in advanced relational database querying, complex JOINs, aggregations, subqueries, schema optimization, and data filtering across MySQL and PostgreSQL.",
    skills: ["SQL", "MySQL", "PostgreSQL", "Relational Databases"],
    link: "https://www.hackerrank.com/certificates/3b433c69a48e",
  },
];

const Certifications = () => {
  return (
    <div className="certifications-section" id="certifications">
      <div className="certifications-header">
        <h2>
          My <span>Certifications</span>
        </h2>
        <p className="certifications-subtitle">
          Verified industry credentials &amp; technical proficiencies
        </p>
      </div>

      <div className="certifications-grid">
        {certificationsData.map((cert, index) => (
          <div className="cert-card" key={index}>
            <div>
              <div className="cert-top">
                <span className="cert-issuer-badge">
                  <MdVerified /> {cert.issuer}
                </span>
                <span className="cert-date">{cert.date}</span>
              </div>

              <div className="cert-body">
                <h3>{cert.title}</h3>
                <p className="cert-desc">{cert.description}</p>

                <div className="cert-skills-wrap">
                  <h5>Competencies</h5>
                  <div className="cert-tags-flex">
                    {cert.skills.map((skill, sIdx) => (
                      <span className="cert-tag" key={sIdx}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <a
              href={cert.link}
              target="_blank"
              rel="noreferrer"
              className="cert-action-btn"
              data-cursor="disable"
            >
              View Credential <FaExternalLinkAlt size={12} />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
