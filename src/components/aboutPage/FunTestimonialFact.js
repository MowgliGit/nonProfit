function Testimonial() {
  return (
    <section className="sectionTestimonialsAbout">
      <div className="containerTestimonial">
        <div className="testimonialBoxFun">
          <div className="gridFunTestimonialFactBox">
            <div class="info">
              <h3 className="testimonialFunNumber">250+</h3>
              <p className="testimonialFunText">Expert Volunteer</p>
            </div>
            <div class="info">
              <h3 className="testimonialFunNumber">1026+</h3>
              <p className="testimonialFunText">Happy Families</p>
            </div>
            <div class="info">
              <h3 className="testimonialFunNumber">25M</h3>
              <p className="testimonialFunText">Total Donation</p>
            </div>
            <div class="info">
              <h3 className="testimonialFunNumber">1250</h3>
              <p className="testimonialFunText">Successful Campains</p>
            </div>
          </div>
          <div className="testimonialImgBox"></div>
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
