import React, { useEffect } from "react";
import "./SocialSection.css";
import Header from "../header/Header";
import { FaInstagram } from "react-icons/fa";

import col1 from './../../../public/col1.svg';
import col2 from './../../../public/col2.svg';
import col3 from './../../../public/col3.svg';
import col4 from './../../../public/col4.svg';

const SocialSection = () => {
  const images = [col1, col2, col3, col4];

  const tripleArray = [...images, ...images, ...images];
  const startIndex = images.length;

  useEffect(() => {
    const track = document.getElementById("sliderTrack");
    let index = startIndex;

    track.style.transform = `translateX(-${index * 20}% )`;

    const slideStep = () => {
      index++;

      track.style.transition = "transform 0.5s ease-in-out";
      track.style.transform = `translateX(-${index * 20}% )`;

      if (index === images.length * 2) {
        setTimeout(() => {
          track.style.transition = "none";
          index = images.length;
          track.style.transform = `translateX(-${index * 20}% )`;
        }, 600);
      }
    };

    const interval = setInterval(slideStep, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="social-section">
      <Header title="LET’S GET SOCIAL" description="" />

      <p className="social-username">
        Instagram: <span>@luxeplazadxb</span>
      </p>

      <div className="social-slider">
        <div className="slider-track" id="sliderTrack">
          {tripleArray.map((img, index) => (
            <div className="slide" key={index}>
              <div className="social-image-wrapper">
                <img src={img} alt={`social-${index}`} />
                <div className="insta-icon">
                  <FaInstagram />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default SocialSection;
