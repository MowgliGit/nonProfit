import { Link } from "react-router-dom";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
export default function AboutBackground() {
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  return (
    <section className="aboutSectionBackground">
      <div className="aboutBackgroundBox">
        <img
          className="aboutBackground"
          src={`${process.env.PUBLIC_URL}/aboutUs/AboutUs.jpg`}
          alt="aboutBackground"
        />
        <div className="aboutContent">
          <h1 className="aboutTitle">About Us</h1>
          <div className="aboutLinks">
            <Link to="/" className="aboutLinkHome">
              Home
            </Link>
            <span className="divider">/</span>
            <Link to="/about" className="aboutLinkAbout">
              About
            </Link>
          </div>
        </div>
        <button onClick={scrollToTop} className="scrollToTopButton">
          <FontAwesomeIcon icon={faArrowUp} className="iconScroll" />
        </button>
      </div>
    </section>
  );
}
