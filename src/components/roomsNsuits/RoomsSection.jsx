import React from "react";
import "./RoomsSection.css";
import Header from "../header/Header";
import mask1 from './../../../public/mask1.svg';
import mask2 from './../../../public/mask2.svg';
import mask3 from './../../../public/mask3.svg';

const RoomsSection = () => {
  const rooms = [
    {
      img: mask1,
      title: "Deluxe Room With Balcony",
      text: "Thoughtfully designed rooms from which to relax and take in the energy of Dubai’s vistas.",
    },
    {
      img: mask2,
      title: "Penthouse Suite",
      text: "Elevated sanctuaries overlooking Dubai’s skyline with calming views out to sea.",
    },
    {
      img: mask3,
      title: "Luxury Grand Suite",
      text: "One, two, and three-bedroom residences, with the finest amenities.",
    },
  ];

  return (
    <div className="rooms-blocks">
      <Header
        title="ROOMS & SUITES"
        description="We Offers 196 luxurious and spacious rooms and suites. Each room and suite is elegantly decorated with a classic yet modern touch, featuring high ceilings, beautiful windows, and modern in-room amenities. Most rooms and suites also include a private balcony or terrace with breathtaking views of Lake Geneva, the Swiss Alps and Lausanne city."
      />

      <section className="rooms-section">
        <div className="rooms-grid">
          {rooms.map((room, index) => (
            <div className="room-card" key={index}>
              <div className="image-wrapper">
                <img className="image-room" src={room.img} alt={room.title} />
              </div>
              <h3 className="rooms-title">{room.title}</h3>
              <p>{room.text}</p>
            </div>
          ))}
        </div>

        <div className="explore-btn-wrapper">
          <button className="explore-btn-rooms">Explore</button>
        </div>
      </section>
    </div>
  );
};

export default RoomsSection;
