import React, { useState } from "react";
import "./Navigation.css";

const navItems = [
  "About",
  "Rooms & Suites",
  "Events & Meetings",
  "Gallery",
  "Dining",
  "Spa & Leisure",
  "Special Offers",
];

const Navigation = () => {
  const [active, setActive] = useState("About");

  return (
    <nav className="nav-container">
      {navItems.map((item) => (
        <span
          key={item}
          className={`nav-item ${active === item ? "active" : ""}`}
          onClick={() => setActive(item)}
        >
          {item}
        </span>
      ))}
    </nav>
  );
};

export default Navigation;
