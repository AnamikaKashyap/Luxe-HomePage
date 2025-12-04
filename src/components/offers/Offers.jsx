import React from "react";
import "./Offers.css";
import Header from "../header/Header";
import offerImg1 from './../../../public/offers1.svg';
import offerImg2 from './../../../public/offers2.svg';
import offerImg3 from './../../../public/offer3.svg';

const offers = [
  {
    title: "Romantic Getaway Package",
    discount: "15% Off",
    image: offerImg1,
  },
  {
    title: "Family Fun Package",
    discount: "25% Off",
    image: offerImg2,
  },
  {
    title: "Ultimate Luxury Package",
    discount: "10% Off",
    image: offerImg3,
  },
];

const Offers = () => {
  return (
    <section className="offers-section">
      <Header
        title="EXCLUSIVE OFFERS"
        description="We Offers 196 luxurious and spacious rooms and suites. Each room and suite is elegantly decorated with a classic yet modern touch, featuring high ceilings, beautiful windows, and modern in-room amenities. Most rooms and suites also include a private balcony or terrace with breathtaking views of Lake Geneva, the Swiss Alps and Lausanne city."
      />

      <div className="offers-container">
        {offers.map((offer, index) => (
          <div className="offer-card" key={index}>
            <div className="offer-image-wrapper">
              <img src={offer.image} alt={offer.title} className="offer-img" />
            </div>

            {/* <div className="offer-content">
              <h3>{offer.title}</h3>
              <span className="offer-discount">{offer.discount}</span>
            </div> */}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Offers;
