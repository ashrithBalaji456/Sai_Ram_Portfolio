import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import { TbMail, TbNotes } from "react-icons/tb";
import "./styles/SocialIcons.css";
import { useEffect } from "react";
import HoverLinks from "./HoverLinks";

const SocialIcons = () => {
  useEffect(() => {
    const social = document.getElementById("social") as HTMLElement;

    social.querySelectorAll("span").forEach((item) => {
      const elem = item as HTMLElement;
      const link = elem.querySelector("a") as HTMLElement;

      const rect = elem.getBoundingClientRect();
      let mouseX = rect.width / 2;
      let mouseY = rect.height / 2;
      let currentX = 0;
      let currentY = 0;
      let isHovered = false;

      const updatePosition = () => {
        currentX += (mouseX - currentX) * 0.1;
        currentY += (mouseY - currentY) * 0.1;

        link.style.setProperty("--siLeft", `${currentX}px`);
        link.style.setProperty("--siTop", `${currentY}px`);

        if (isHovered) {
          requestAnimationFrame(updatePosition);
        }
      };

      const onMouseMove = (e: MouseEvent) => {
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        if (x < 40 && x > 10 && y < 40 && y > 5) {
          mouseX = x;
          mouseY = y;
          if (!isHovered) {
            isHovered = true;
            requestAnimationFrame(updatePosition);
          }
        } else {
          mouseX = rect.width / 2;
          mouseY = rect.height / 2;
          isHovered = false;
        }
      };

      document.addEventListener("mousemove", onMouseMove);

      return () => {
        document.removeEventListener("mousemove", onMouseMove);
      };
    });
  }, []);

  return (
    <div className="icons-section">
      <div className="social-icons" data-cursor="icons" id="social">
        <span>
          <a
            href="https://github.com/Moogala-SaiRam"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub"
          >
            <FaGithub />
          </a>
        </span>
        <span>
          <a
            href="https://www.linkedin.com/in/moogala-sairam-39446927b/"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
          >
            <FaLinkedinIn />
          </a>
        </span>
        <span>
          <a
            href="https://github.com/Moogala-SaiRam"
            target="_blank"
            rel="noopener noreferrer"
            title="LeetCode Profile"
          >
            <SiLeetcode />
          </a>
        </span>
        <span>
          <a
            href="mailto:mugala.sairam@gmail.com"
            title="Email"
          >
            <TbMail />
          </a>
        </span>
      </div>
      <a
        className="resume-button"
        href="/Sai_Ram_Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        download="Moogala_Sairam_Resume.pdf"
      >
        <HoverLinks text="RESUME" />
        <span>
          <TbNotes />
        </span>
      </a>
    </div>
  );
};

export default SocialIcons;
