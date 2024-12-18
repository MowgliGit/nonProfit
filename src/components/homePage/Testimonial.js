import React, { useEffect, useState } from "react";
function Testimonial() {
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
  return (
    <section className="sectionTestimonials">
      <div className="containerTestimonial">
        <div className="testimonialBox">
          <div className="testimonialContent">
            <h2 className="testimonialTitle">
              Lets Chenge The World With Humanity
            </h2>

            <a href="/volunteer" className="testimonialLink">
              <button className="testimonialLinkBtn">Become A Volunteer</button>
            </a>
          </div>
          {windowWidth > 767 && (
            <div className="testimonialImgBox">
              <img
                className="patternVolunterImg"
                src={`${process.env.PUBLIC_URL}/testimonial/volunteer.png`}
                alt="volunterTestimonial"
              />
            </div>
          )}
          <div className="testimonialShapeImgBox">
            <img
              className="shapeTestimonialImg"
              src={`${process.env.PUBLIC_URL}/testimonial/shape.png`}
              alt="shapeTestimonial"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
export default Testimonial;
