import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { SplitText } from "gsap/SplitText";

interface ParaElement extends HTMLElement {
  anim?: gsap.core.Animation;
  split?: SplitText;
}

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

let isSplitInitialized = false;

export default function setSplitText() {
  ScrollTrigger.config({ ignoreMobileResize: true });
  if (window.innerWidth < 900) return;
  if (isSplitInitialized) return;
  isSplitInitialized = true;

  const paras: NodeListOf<ParaElement> = document.querySelectorAll(".para");
  const titles: NodeListOf<ParaElement> = document.querySelectorAll(".title");

  const TriggerStart = window.innerWidth <= 1024 ? "top 80%" : "top 75%";
  const ToggleAction = "play none none none";

  paras.forEach((para: ParaElement) => {
    para.classList.add("visible");
    if (para.anim) {
      para.anim.kill();
      para.split?.revert();
    }

    try {
      para.split = new SplitText(para, {
        type: "lines,words",
        linesClass: "split-line",
      });

      para.anim = gsap.fromTo(
        para.split.words,
        { autoAlpha: 0, y: 35 },
        {
          autoAlpha: 1,
          scrollTrigger: {
            trigger: para.parentElement?.parentElement || para,
            toggleActions: ToggleAction,
            start: TriggerStart,
            once: true,
          },
          duration: 0.9,
          ease: "power3.out",
          y: 0,
          stagger: 0.015,
        }
      );
    } catch {
      // Fallback if SplitText cannot process
      gsap.to(para, { opacity: 1, duration: 0.5 });
    }
  });

  titles.forEach((title: ParaElement) => {
    if (title.anim) {
      title.anim.kill();
      title.split?.revert();
    }
    try {
      title.split = new SplitText(title, {
        type: "chars,lines",
        linesClass: "split-line",
      });
      title.anim = gsap.fromTo(
        title.split.chars,
        { autoAlpha: 0, y: 35, rotate: 4 },
        {
          autoAlpha: 1,
          scrollTrigger: {
            trigger: title.parentElement?.parentElement || title,
            toggleActions: ToggleAction,
            start: TriggerStart,
            once: true,
          },
          duration: 0.8,
          ease: "power2.out",
          y: 0,
          rotate: 0,
          stagger: 0.02,
        }
      );
    } catch {
      gsap.to(title, { opacity: 1, duration: 0.5 });
    }
  });
}
