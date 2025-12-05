import React, { useEffect, useRef } from "react";
import "./HeroSection.css";
import heroImg from "../../../public/HeroImage.svg";

const HeroSection = () => {
  const curtainRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0);

    const liftTimer = setTimeout(() => {
      if (curtainRef.current) {
        curtainRef.current.classList.add("lift-up");
      }
    }, 150);


    const onCurtainEnd = (e) => {
      if (e.propertyName === "transform") {
        if (textRef.current) {
          setTimeout(() => textRef.current.classList.add("text-reveal"), 80);
        }
      }
    };

    const cEl = curtainRef.current;
    if (cEl) cEl.addEventListener("transitionend", onCurtainEnd);

    return () => {
      clearTimeout(liftTimer);
      if (cEl) cEl.removeEventListener("transitionend", onCurtainEnd);
    };
  }, []);

  return (
    <div className="hero-wrapper">
      <section
        className="hero-main"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="hero-text" ref={textRef}>
          <div></div>
          <div>
            <p className="welcome-txt">WELCOME TO</p>

            <h1 className="hero-heading">LUXE PLAZA</h1>
          </div>

          <p className="explore-txt">Explore</p>
        </div>

        <div className="curtain" ref={curtainRef} />
      </section>
    </div>
  );
};

export default HeroSection;
