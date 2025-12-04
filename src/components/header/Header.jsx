import React from "react";
import "./Header.css";

const Header = ({ title, description }) => {
  return (
    <section className="about-section">
      <h2 className="about-title">{title}</h2>
      <div className="underline"></div>
      <p className="about-description">{description}</p>
    </section>
  );
};

export default Header;
