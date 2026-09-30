import { useEffect, useRef, useState } from "react";
import "./styles/Loading.css";
import { useLoading } from "../context/LoadingProvider";

import Marquee from "react-fast-marquee";

const Loading = ({ percent }: { percent: number }) => {
  const { setIsLoading } = useLoading();
  const [loaded, setLoaded] = useState(false);
  const [clicked, setClicked] = useState(false);
  const transitionedRef = useRef(false);

  const enterPortfolio = () => {
    if (transitionedRef.current) return;
    transitionedRef.current = true;
    setLoaded(true);
    setClicked(true);

    setTimeout(() => {
      import("./utils/initialFX")
        .then((module) => {
          try {
            if (module.initialFX) {
              module.initialFX();
            }
          } catch (err) {
            console.warn("initialFX animation warning:", err);
          } finally {
            setIsLoading(false);
          }
        })
        .catch(() => {
          setIsLoading(false);
        });
    }, 450);
  };

  useEffect(() => {
    if (percent >= 100 && !transitionedRef.current) {
      setLoaded(true);
      const timer = setTimeout(() => {
        enterPortfolio();
      }, 250);
      return () => clearTimeout(timer);
    }
  }, [percent]);

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
      <div
        className={`loading-screen ${clicked ? "loading-screen-out" : ""}`}
        onClick={enterPortfolio}
      >
        <div className="loading-marquee">
          <Marquee speed={35}>
            <span> FULL-STACK DEVELOPER</span> <span>AI SPECIALIST</span>
            <span> PROBLEM SOLVER</span> <span>SOFTWARE ENGINEER</span>
          </Marquee>
        </div>
        <div
          className={`loading-wrap ${clicked ? "loading-clicked" : ""}`}
          onMouseMove={(e) => handleMouseMove(e)}
          onClick={(e) => {
            e.stopPropagation();
            enterPortfolio();
          }}
          title="Click to enter"
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

  // Fluid progressive simulation
  const step = () => {
    if (isResolved) return;

    let increment = 1;
    if (percent < 45) {
      increment = Math.floor(Math.random() * 5) + 3; // +3 to 7
    } else if (percent < 80) {
      increment = Math.floor(Math.random() * 3) + 2; // +2 to 4
    } else if (percent < 92) {
      increment = 1;
    } else {
      increment = 0;
    }

    percent = Math.min(percent + increment, 92);
    setLoading(percent);

    if (percent < 92) {
      const delay = percent < 45 ? 20 : percent < 80 ? 35 : 75;
      timer = setTimeout(step, delay);
    }
  };

  timer = setTimeout(step, 20);

  // Safety fallback: if 3D model takes more than 2.5s (e.g. slow connection), glide directly to 100%
  const fallbackTimer = setTimeout(() => {
    if (!isResolved) {
      loaded();
    }
  }, 2500);

  function clear() {
    isResolved = true;
    if (timer) clearTimeout(timer);
    if (fallbackTimer) clearTimeout(fallbackTimer);
    setLoading(100);
  }

  function loaded() {
    return new Promise<number>((resolve) => {
      isResolved = true;
      if (timer) clearTimeout(timer);
      if (fallbackTimer) clearTimeout(fallbackTimer);

      const startPercent = percent;
      const targetPercent = 100;
      const duration = 200; // Snappy 200ms ease-out glide to 100%
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
