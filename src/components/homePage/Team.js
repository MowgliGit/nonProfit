import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faQuoteRight,
  faArrowRight,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";

const teamMembers = [
  {
    name: "Angelica Laura",
    job: "Volunteer",
    image: "teamPerson2.jpg",
  },
  {
    name: "Maria Belziana",
    job: "Volunteer",
    image: "teamPerson1.jpg",
  },
  {
    name: "Robert Chirls",
    job: "Team Leader",
    image: "teamPerson3.jpg",
  },
  {
    name: "William Frost",
    job: "Volunteer",
    image: "teamPerson4.jpg",
  },
  {
    name: "Zenefer Mary",
    job: "Volunteer",
    image: "teamPerson5.jpg",
  },
  {
    name: "David Harmin",
    job: "Volunteer",
    image: "teamPerson6.jpg",
  },
];

const teamCarousel = [
  {
    name: "Harverd Tommy",
    job: "Manager Of MNTR",
    icon: faQuoteRight,
    description:
      "Lorem ipsum dolor sit amet, consectetur adiping elit, do eiusmod tempor incididunt ut labore et doliore magna aliqjtua. Quis ipsum suspendisse ultrices gravida. Risus commodo maepac cenas.",
    image: "carousel0.jpg",
  },
  {
    name: "Marry Jenefer",
    job: "CEO Of Golden Bravo",
    icon: faQuoteRight,
    description:
      "Lorem ipsum dolor sit amet, consectetur adiping elit, do eiusmod tempor incididunt ut labore et doliore magna aliqjtua. Quis ipsum suspendisse ultrices gravida. Risus commodo maepac cenas.",
    image: "carousel1.jpg",
  },
  {
    name: "William Robert",
    job: "CEO Of Bexima",
    icon: faQuoteRight,
    description:
      "Lorem ipsum dolor sit amet, consectetur adiping elit, do eiusmod tempor incididunt ut labore et doliore magna aliqjtua. Quis ipsum suspendisse ultrices gravida. Risus commodo maepac cenas.",
    image: "carousel2.jpg",
  },
];

export default function Team() {
  const sliderRef = useRef(null);
  const slideInterval = useRef(null);
  const totalSlides = teamMembers.length;
  const slideWidth = 220;

  useEffect(() => {
    let position = 0;

    slideInterval.current = setInterval(() => {
      position -= slideWidth;

      if (Math.abs(position) >= slideWidth * totalSlides) {
        position = -slideWidth;
        setTimeout(() => {
          sliderRef.current.style.transition = "none";
          sliderRef.current.style.transform = `translateX(${position}px)`;
        }, 500);
      } else {
        sliderRef.current.style.transition = "transform 0.5s ease-in-out";
        sliderRef.current.style.transform = `translateX(${position}px)`;
      }
    }, 3000);

    return () => clearInterval(slideInterval.current);
  }, [totalSlides]);

  return (
    <div>
      <section className="sectionTeams">
        <div className="containerTeams">
          <div className="textBoxTeam">
            <span className="subTitleTeam">Expert Team</span>
            <h2 className="headingTeam">Meet Our Volunteer Team.</h2>
            <p className="paragraphTeam">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form.
            </p>
          </div>
          <div className="teamsCardBox">
            <div className="sliderTeam" ref={sliderRef}>
              {[...teamMembers, ...teamMembers].map((person, index) => (
                <div className="personTeamCardItem" key={index}>
                  <div className="teamCardImgBox">
                    <img
                      className="teamImg"
                      src={`${process.env.PUBLIC_URL}/team/${person.image}`}
                      alt={person.name}
                    />
                  </div>
                  <h2 className="teamTitle">{person.name}</h2>
                  <span className="teamJob">{person.job}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
