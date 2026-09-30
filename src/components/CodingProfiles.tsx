import React from "react";
import { SiLeetcode, SiGeeksforgeeks, SiHackerrank } from "react-icons/si";
import { FaCode, FaExternalLinkAlt, FaFire, FaTrophy, FaMedal } from "react-icons/fa";
import "./styles/CodingProfiles.css";

interface CodingProfile {
  platform: string;
  icon: React.ReactNode;
  accent: string;
  glow: string;
  highlight: string;
  stats: string[];
  link: string;
}

const profilesData: CodingProfile[] = [
  {
    platform: "LeetCode",
    icon: <SiLeetcode className="platform-icon" style={{ color: "#ffa116" }} />,
    accent: "#ffa116",
    glow: "rgba(255, 161, 22, 0.25)",
    highlight: "100 Days Badge",
    stats: [
      "317+ Problems Solved",
      "Global Rank: 371,761",
      "100 Days Badge Achieved",
    ],
    link: "https://leetcode.com/u/Sairam_mugala/",
  },
  {
    platform: "GeeksforGeeks",
    icon: <SiGeeksforgeeks className="platform-icon" style={{ color: "#2f8d46" }} />,
    accent: "#2f8d46",
    glow: "rgba(47, 141, 70, 0.25)",
    highlight: "Institute Rank: 344",
    stats: [
      "140+ Problems Solved",
      "Institute Rank: 344 (IARE)",
      "Core Data Structures & Algorithms",
    ],
    link: "https://www.geeksforgeeks.org/profile/22951ane7x",
  },
  {
    platform: "Naukri Code360",
    icon: <FaCode className="platform-icon" style={{ color: "#ff5a00" }} />,
    accent: "#ff5a00",
    glow: "rgba(255, 90, 0, 0.25)",
    highlight: "100+ Solved",
    stats: [
      "100+ Problems Solved",
      "Algorithmic Problem Solving",
      "Coding Ninjas Platform",
    ],
    link: "https://www.naukri.com/code360/profile/acbb4064-6334-4d63-aac9-ede84a3ba861",
  },
  {
    platform: "HackerRank",
    icon: <SiHackerrank className="platform-icon" style={{ color: "#00ea64" }} />,
    accent: "#00ea64",
    glow: "rgba(0, 234, 100, 0.25)",
    highlight: "Gold & Silver Badges",
    stats: [
      "Java – Gold Badge",
      "Python – Silver Badge",
      "SQL Certified & Verified",
    ],
    link: "https://www.hackerrank.com/profile/22951A66B5",
  },
];

const CodingProfiles = () => {
  return (
    <div className="coding-profiles-section" id="coding">
      <div className="coding-profiles-header">
        <h2>
          Coding <span>Profiles</span>
        </h2>
        <p className="coding-subtitle">
          Algorithmic problem-solving milestones &amp; competitive programming track record
        </p>
      </div>

      <div className="coding-summary-bar">
        <div className="summary-pill">
          <FaFire className="pill-accent" />
          <span>
            <strong>550+</strong> Problems Solved Across Platforms
          </span>
        </div>
        <div className="summary-pill">
          <FaTrophy className="pill-accent" />
          <span>
            <strong>100 Days</strong> LeetCode Consistency Badge
          </span>
        </div>
        <div className="summary-pill">
          <FaMedal className="pill-accent" />
          <span>
            <strong>Java Gold</strong> HackerRank Specialist
          </span>
        </div>
      </div>

      <div className="coding-profiles-grid">
        {profilesData.map((profile, index) => (
          <div
            className="coding-card"
            key={index}
            style={
              {
                "--card-accent": profile.accent,
                "--card-glow": profile.glow,
                "--card-border-hover": profile.accent,
              } as React.CSSProperties
            }
          >
            <div>
              <div className="coding-card-top">
                <div className="platform-badge">
                  {profile.icon}
                  <span>{profile.platform}</span>
                </div>
                <span className="highlight-badge">{profile.highlight}</span>
              </div>

              <div className="coding-stats-list">
                {profile.stats.map((stat, sIdx) => (
                  <div className="coding-stat-item" key={sIdx}>
                    <FaMedal size={13} />
                    <span>{stat}</span>
                  </div>
                ))}
              </div>
            </div>

            <a
              href={profile.link}
              target="_blank"
              rel="noreferrer"
              className="coding-action-btn"
              data-cursor="disable"
            >
              View Profile <FaExternalLinkAlt size={12} />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CodingProfiles;
