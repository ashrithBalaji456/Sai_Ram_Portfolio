import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { projects } from "../data/projects";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Work = () => {
  useGSAP(() => {
    const workFlex = document.querySelector(".work-flex") as HTMLElement;
    if (!workFlex) return;

    function getTranslateX(): number {
      const scrollWidth = workFlex.scrollWidth;
      const viewportWidth = window.innerWidth;
      return Math.max(0, scrollWidth - viewportWidth + 80);
    }

    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: () => `+=${getTranslateX()}`,
        scrub: true,
        pin: true,
        pinType: !ScrollTrigger.isTouch ? "transform" : "fixed",
        anticipatePin: 1,
        invalidateOnRefresh: true,
        id: "work",
      },
    });

    timeline.to(".work-flex", {
      x: () => -getTranslateX(),
      ease: "none",
    });

    const refreshHandler = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener("resize", refreshHandler);
    window.addEventListener("load", refreshHandler);

    return () => {
      window.removeEventListener("resize", refreshHandler);
      window.removeEventListener("load", refreshHandler);
      timeline.kill();
      ScrollTrigger.getById("work")?.kill();
    };
  }, []);
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {projects.map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>

                  <div>
                    <h4>{project.title}</h4>
                    <p>{project.period}</p>
                  </div>
                </div>
                <h4>Technologies</h4>
                <p className="work-tools">{project.tools}</p>
                <ul className="work-bullets">
                  {project.bullets.map((bullet, bIdx) => (
                    <li key={bIdx}>{bullet}</li>
                  ))}
                </ul>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="work-github-btn"
                  data-cursor="disable"
                >
                  [GitHub Repository ↗]
                </a>
              </div>
              <WorkImage
                image={project.image}
                alt={project.title}
                link={project.link}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
