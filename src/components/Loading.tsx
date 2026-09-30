import { useEffect, useState } from "react";
import "./styles/Loading.css";
import { useLoading } from "../context/LoadingProvider";

import Marquee from "react-fast-marquee";

const Loading = ({ percent }: { percent: number }) => {
  const { setIsLoading } = useLoading();
  const [loaded, setLoaded] = useState(false);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    if (percent >= 100 && !loaded) {
      // 1. Brief pause to show 100% and seamlessly switch to "Welcome"
      const t1 = setTimeout(() => {
        setLoaded(true);
      }, 250);

      // 2. Trigger the silky smooth dissolve / reveal animation
      const t2 = setTimeout(() => {
        setClicked(true);
      }, 750);

      // 3. Initialize hero animations and remove the loading screen
      const t3 = setTimeout(() => {
        import("./utils/initialFX").then((module) => {
          if (module.initialFX) {
            module.initialFX();
          }
          setIsLoading(false);
        });
      }, 1250);

      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
        clearTimeout(t3);
      };
    }
  }, [percent, loaded, setIsLoading]);

  function handleMouseMove(e: React.MouseEvent<HTMLElement>) {
    const { currentTarget: target } = e;
    const rect = target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    target.style.setProperty("--mouse-x", `${x}px`);
    target.style.setProperty("--mouse-y", `${y}px`);
  }

  return (
    <>
      <div className={`loading-header ${clicked ? "loading-header-out" : ""}`}>
        <a href="/#" className="loader-title" data-cursor="disable">
          SAIRAM<span className="loader-dot">.</span>
        </a>
        <div className={`loaderGame ${clicked ? "loader-out" : ""}`}>
          <div className="loaderGame-container">
            <div className="loaderGame-in">
              {[...Array(27)].map((_, index) => (
                <div className="loaderGame-line" key={index}></div>
              ))}
            </div>
            <div className="loaderGame-ball"></div>
          </div>
        </div>
      </div>
      <div className={`loading-screen ${clicked ? "loading-screen-out" : ""}`}>
        <div className="loading-marquee">
          <Marquee speed={35}>
            <span> FULL-STACK DEVELOPER</span> <span>AI SPECIALIST</span>
            <span> PROBLEM SOLVER</span> <span>SOFTWARE ENGINEER</span>
          </Marquee>
        </div>
        <div
          className={`loading-wrap ${clicked ? "loading-clicked" : ""}`}
          onMouseMove={(e) => handleMouseMove(e)}
        >
          <div className="loading-hover"></div>
          <div className={`loading-button ${loaded ? "loading-complete" : ""}`}>
            <div className="loading-container">
              <div className="loading-content">
                <div className="loading-content-in">
                  Loading <span>{percent}%</span>
                </div>
              </div>
              <div className="loading-box"></div>
            </div>
            <div className="loading-content2">
              <span>Welcome</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Loading;

export const setProgress = (setLoading: (value: number) => void) => {
  let percent: number = 0;
  let isResolved = false;
  let timer: any = null;

  // Fluid progressive simulation without awkward pauses
  const step = () => {
    if (isResolved) return;

    let increment = 1;
    if (percent < 35) {
      increment = Math.floor(Math.random() * 4) + 2; // +2 to 5
    } else if (percent < 65) {
      increment = Math.floor(Math.random() * 3) + 1; // +1 to 3
    } else if (percent < 85) {
      increment = Math.random() < 0.6 ? 1 : 0;
    } else if (percent < 92) {
      increment = Math.random() < 0.35 ? 1 : 0;
    } else {
      increment = 0;
    }

    percent = Math.min(percent + increment, 92);
    setLoading(percent);

    if (percent < 92) {
      const delay = percent < 40 ? 35 : percent < 70 ? 55 : 100;
      timer = setTimeout(step, delay);
    }
  };

  timer = setTimeout(step, 40);

  function clear() {
    isResolved = true;
    if (timer) clearTimeout(timer);
    setLoading(100);
  }

  function loaded() {
    return new Promise<number>((resolve) => {
      isResolved = true;
      if (timer) clearTimeout(timer);

      const startPercent = percent;
      const targetPercent = 100;
      const duration = 280; // Silky 280ms ease-out glide to 100%
      const startTime = performance.now();

      const glide = (now: number) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const ease = 1 - Math.pow(1 - progress, 3); // Cubic ease-out
        const current = Math.round(
          startPercent + (targetPercent - startPercent) * ease
        );

        percent = current;
        setLoading(percent);

        if (progress < 1) {
          requestAnimationFrame(glide);
        } else {
          setLoading(100);
          resolve(100);
        }
      };

      requestAnimationFrame(glide);
    });
  }

  return { loaded, percent, clear };
};
