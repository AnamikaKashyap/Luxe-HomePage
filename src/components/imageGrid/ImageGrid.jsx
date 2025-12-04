import React from "react";
import "./ImageGrid.css";
import Header from "../header/Header";

const ImageGrid = ({ images }) => {
  if (!images || images.length !== 5) {
    return <p>Please provide exactly 5 images.</p>;
  }

  return (
    <>

      <Header
        title="ABOUT US"
        description="Nestled in the heart of the city, Luxe Hotel offers a refined escape from the ordinary. With world-class hospitality, sophisticated interiors, and personalized service, every stay becomes an unforgettable experience. Whether you're here for business or leisure, Luxe Hotel invites you to indulge in the perfect blend of luxury and warmth."
      />

      <div className="image-grid">
        <div className="left-top">
          <img src={images[0]} alt="img1" />
        </div>
        <div className="left-bottom">
          <img src={images[1]} alt="img2" />
        </div>
        <div className="center-big">
          <img src={images[2]} alt="img3" />
        </div>
        <div className="right-top">
          <img src={images[3]} alt="img4" />
        </div>
        <div className="right-bottom">
          <img src={images[4]} alt="img5" />
        </div>
      </div>

    </>
  );
};

export default ImageGrid;
