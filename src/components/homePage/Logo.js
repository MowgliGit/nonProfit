import React, { useEffect, useRef } from "react";

const logoImages = [
  { image: "logo1.jfif" },
  { image: "logo2.jfif" },
  { image: "logo3.jfif" },
  { image: "logo4.jfif" },
  { image: "logo5.jfif" },
  { image: "logo6.jfif" },
];

export default function Logo() {
  const sliderRef = useRef(null);
  const slideInterval = useRef(null);
  const totalSlides = logoImages.length;
  const slideWidth = 220;

  useEffect(() => {
    let position = 0;

    slideInterval.current = setInterval(() => {
      position -= slideWidth;

      if (Math.abs(position) >= slideWidth * totalSlides) {
        position = 0;
      }

      if (sliderRef.current) {
        sliderRef.current.style.transition = "transform 0.5s ease-in-out";
        sliderRef.current.style.transform = `translateX(${position}px)`;
      }
    }, 3000);

    return () => clearInterval(slideInterval.current);
  }, [totalSlides]);

  return (
    <div className="sliderContainer">
      <section className="sectionTeams sectionLogo">
        <div className="containerTeams">
          <div className="textBoxTeam">
            <span className="subTitleTeam">Who help us</span>
            <h2 className="headingTeam">Our Partners & Donors</h2>
            <p className="paragraphTeam">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form,
            </p>
          </div>
          <div className="logoCardBox">
            <div className="sliderLogo" ref={sliderRef}>
              {[...logoImages, ...logoImages].map((person, index) => (
                <div className="logoItem" key={index}>
                  <div className="logoImgBox">
                    <img
                      className="logoImg"
                      src={`${process.env.PUBLIC_URL}/logo/${person.image}`}
                      alt={person.image}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
