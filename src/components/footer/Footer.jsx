import React from "react";
import "./footer.css";
import { FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa";
import logo from './../../../public/logo.svg'
import instagram from './../../../public/instagram2.svg';
import trip from './../../../public/trip.svg';
import facebookImg from './../../../public/facebookImg.svg';
import youtube from './../../../public/youtubeImg.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">

        <div className="footer-col">
          <h3 className="footer-title">Address</h3>
          <p>742 Evergreen Terrace</p>
          <p>Brooklyn, NY 11201</p>
        </div>

        <div className="footer-center">
          <img
            src={logo}
            alt="Luxe Hotels"
            className="footer-logo"
          />

          <div className="footer-icons">

            <img src={trip} />

            <img src={instagram} />
            <img src={facebookImg} />
            <img src={youtube} />
          </div>
        </div>

        <div className="footer-col">
          <h3 className="footer-title">Contact Us</h3>
          <p>T. +929 333 9296</p>
          <p>M. contact@almaris.com</p>
        </div>

      </div>

      <div className="footer-line"></div>

      <p className="footer-copy">
        Copyright 2025 - Luxe Plaza Hotel. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
