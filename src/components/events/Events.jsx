import React, { useRef, useEffect, useState } from "react";
import "./Events.css";

const Events = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef(null);

  const [isSticky, setIsSticky] = useState(false);
  const [innerScroll, setInnerScroll] = useState(0);

  const innerScrollRef = useRef(0);
  const touchStartYRef = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const sectionTop = sectionRef.current.getBoundingClientRect().top;

      if (sectionTop <= 0 && !isSticky) {
        setIsSticky(true);
        innerScrollRef.current = innerScroll;
      } else if (sectionTop > 0 && isSticky) {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isSticky, innerScroll]);

  useEffect(() => {
    const cardContainer = cardsRef.current;
    if (!cardContainer) return;

    const getMaxScroll = () => {
      return Math.max(0, cardContainer.scrollHeight - window.innerHeight);
    };
    const applyScroll = (newScroll) => {
      innerScrollRef.current = newScroll;
      cardContainer.style.transform = `translateX(-50%) translateY(${-newScroll}px)`;
    };

    const onWheel = (e) => {
      if (!isSticky) return;
      e.preventDefault();
      const delta = e.deltaY;
      const max = getMaxScroll();

      let next = innerScrollRef.current + delta;
      next = Math.max(0, Math.min(next, max));

      applyScroll(next);

      if (next >= max - 1) {
        setTimeout(() => setIsSticky(false), 30);
      }
    };

    const onTouchStart = (e) => {
      if (!isSticky) return;
      touchStartYRef.current = e.touches[0].clientY;
    };
    const onTouchMove = (e) => {
      if (!isSticky) return;
      e.preventDefault();
      const touchY = e.touches[0].clientY;
      const delta = touchStartYRef.current - touchY;
      touchStartYRef.current = touchY;

      const max = getMaxScroll();
      let next = innerScrollRef.current + delta;
      next = Math.max(0, Math.min(next, max));
      applyScroll(next);

      if (next >= max - 1) {
        setTimeout(() => setIsSticky(false), 30);
      }
    };

    if (isSticky) {
      window.addEventListener("wheel", onWheel, { passive: false });
      window.addEventListener("touchstart", onTouchStart, { passive: false });
      window.addEventListener("touchmove", onTouchMove, { passive: false });

      document.documentElement.style.overscrollBehavior = "none";
      document.body.style.overscrollBehavior = "none";
    }

    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);

      document.documentElement.style.overscrollBehavior = "";
      document.body.style.overscrollBehavior = "";
    };
  }, [isSticky]);


  return (
    <>
      <div
        ref={sectionRef}
        className={`events-wrapper ${isSticky ? "sticky-events" : ""}`}
      >
        <div className="events-overlay">
          <marquee
            className="events-marquee"
            behavior="scroll"
            direction="left"
            scrollAmount="6"
            aria-hidden="true"
          >
            EVENTS&nbsp; EVENTS&nbsp; EVENTS&nbsp; EVENTS&nbsp; EVENTS&nbsp;
            EVENTS&nbsp; EVENTS&nbsp; EVENTS&nbsp; EVENTS&nbsp; EVENTS&nbsp;
          </marquee>
        </div>
      </div>

      <div className={`business-scroll-section ${isSticky ? "touch-lock" : ""}`}>
        <div className="business-container" ref={cardsRef}>
          <div className="business-area">
            <div className="business-box">
              <p>Business Meetings</p>
              <p className="business-txt">
                Host your next business meeting at The Luxe Grand—where cutting-edge tech, elegant spaces, and premium catering come together.
                After work, unwind at our spa or dine in style. Book now for an unforgettable experience.
              </p>
              <button>Explore</button>
            </div>
          </div>
          <div className="business-area">
            <div className="business-box">
              <p>Wedding Events</p>
              <p className="business-txt">
                Celebrate your special day in style at the Luxe Grand Hotel. With its breathtaking setting, elegant decor, fantastic ballroom and impeccable service, it's the perfect place to say "I do."
                Our expert team will work with you to create a bespoke wedding package tailored to your needs, ensuring a day to remember forever.
              </p>
              <button>Explore</button>
            </div>
          </div>
          <div className="business-area">
            <div className="business-box">
              <p>Private Events</p>
              <p className="business-txt">
                Looking to celebrate a special occasion? The Luxe Grand Hotel is the perfect place to host your private event. Our team of experts will work with you to create a personalized and unforgettable experience, from exquisite dining options to stunning decor. Plus, our luxurious accommodations and spa facilities are sure to make your stay truly indulgent.
                Book now and make your celebration one to remember!
              </p>
              <button>Explore</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Events;
