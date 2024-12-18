import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faQuoteRight,
  faArrowRight,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";

const teamCarousel = [
  {
    name: "Harverd Tommy",
    job: "Manager Of MNTR",
    icon: faQuoteRight,
    description:
      "Lorem ipsum dolor sit amet, consectetur adiping elit,  do eiusmod tempor incididunt ut labore et doliore magna aliqjtua. Quis ipsum suspendisse ultrices gravida. Risus commodo maepac cenas.",
    image: "carousel0.jpg",
  },
  {
    name: "Marry Jenefer",
    job: "CEO Of Golden Bravo",
    icon: faQuoteRight,
    description:
      "Lorem ipsum dolor sit amet, consectetur adiping elit,  do eiusmod tempor incididunt ut labore et doliore magna aliqjtua. Quis ipsum suspendisse ultrices gravida. Risus commodo maepac cenas.",
    image: "carousel1.jpg",
  },
  {
    name: "William Robert",
    job: "CEO Of Bexima",
    icon: faQuoteRight,
    description:
      "Lorem ipsum dolor sit amet, consectetur adiping elit,  do eiusmod tempor incididunt ut labore et doliore magna aliqjtua. Quis ipsum suspendisse ultrices gravida. Risus commodo maepac cenas.",
    image: "carousel2.jpg",
  },
];

function Carousel() {
  const sliderRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      sliderRef.current.slickNext();
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 900,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div>
      <section className="sectionTeamsCarousel">
        <div className="textBoxTeamCarousel">
          <span className="subTitleTeam">Testimonial</span>
          <h2 className="headingTeam">What People Say About Us</h2>
          <p className="paragraphTeam">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form.
          </p>
        </div>

        <div className="teamsCardBoxCarousel w-3/4 m-auto">
          <Slider {...settings} ref={sliderRef}>
            {teamCarousel.map((member, index) => (
              <div className="personTeamCarouselItem" key={index}>
                <div className="teamCarouselImgBox">
                  <img
                    className="carouselTeamImg"
                    src={`${process.env.PUBLIC_URL}/team/${member.image}`}
                    alt={member.name}
                  />
                </div>

                <div className="carouselDescriptionBox">
                  <FontAwesomeIcon
                    icon={member.icon}
                    className="carouselIcon"
                  />
                  <p className="carouselTeamDescription">
                    {member.description}
                  </p>
                </div>
                <h2 className="teamTitle">{member.name}</h2>
                <span className="teamJob">{member.job}</span>
              </div>
            ))}
          </Slider>
          {windowWidth > 990 && (
            <div className="carouselIconButtonsBox">
              <button
                className="btnCarousel"
                onClick={() => sliderRef.current.slickPrev()}
              >
                <FontAwesomeIcon
                  icon={faArrowLeft}
                  className="carouselIconButton"
                />
              </button>
              <button
                className="btnCarousel"
                onClick={() => sliderRef.current.slickNext()}
              >
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="carouselIconButton"
                />
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default Carousel;
