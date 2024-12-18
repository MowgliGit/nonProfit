import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

function Home() {
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

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <div>
      <section className="sectionHero">
        <div className="grid grid--2-col">
          <div className="heroTextBox">
            <span className="subTitleAbout ">Help The Poor Children</span>
            <h1 className="heroHeadingTitle">
              Your Marcy Can Change Someone’s Life
            </h1>
            <p className="paragraph">
              We help local nonprofits access the funding, tools, training, and
              support they need to become more.
            </p>
            <button className="btn">
              <a href="http://" className="linkBtn">
                Get Started
              </a>
            </button>
          </div>
          <div className="heroImgBox grid grid--2-col">
            <div className="backgroundBlueHero"></div>
            {windowWidth > 990 && (
              <div className="firstHeroImgBox">
                <div>
                  <img
                    className="heroImg heroImgGirl"
                    src={`${process.env.PUBLIC_URL}/hero/hero-girl.png`}
                    alt="heroGirl"
                  />
                </div>
                {windowWidth > 1200 && (
                  <div className="personImgBox">
                    <div className="slider">
                      <img
                        className="heroPerson"
                        src={`${process.env.PUBLIC_URL}/hero/person1.png`}
                        alt="person"
                      />
                      <img
                        className="heroPerson"
                        src={`${process.env.PUBLIC_URL}/hero/person2.png`}
                        alt="person"
                      />
                      <img
                        className="heroPerson"
                        src={`${process.env.PUBLIC_URL}/hero/person3.png`}
                        alt="person"
                      />
                      <img
                        className="heroPerson"
                        src={`${process.env.PUBLIC_URL}/hero/person4.png`}
                        alt="person"
                      />
                      <img
                        className="heroPerson"
                        src={`${process.env.PUBLIC_URL}/hero/person1.png`}
                        alt="person"
                      />
                      <img
                        className="heroPerson"
                        src={`${process.env.PUBLIC_URL}/hero/person2.png`}
                        alt="person"
                      />
                      <img
                        className="heroPerson"
                        src={`${process.env.PUBLIC_URL}/hero/person3.png`}
                        alt="person"
                      />
                      <img
                        className="heroPerson"
                        src={`${process.env.PUBLIC_URL}/hero/person4.png`}
                        alt="person"
                      />
                    </div>
                  </div>
                )}
              </div>
            )}
            {windowWidth > 990 && (
              <div className="secondHeroImgBox">
                <div className="totalProjectHeroBox">
                  <div className="contentTotalProject">
                    <div className="heroImgSalaryIcon">
                      <img
                        src={`${process.env.PUBLIC_URL}/hero/salary.png`}
                        alt="Salary Icon"
                        className="heroIconImg"
                      />
                    </div>
                    <div className="totalProjectTextBox">
                      <h3 className="totalProjectTitle">252+</h3>
                      <p className="totalProjectText">Total Projects</p>
                    </div>
                  </div>
                  <div className="totalProjectImgBox">
                    <img
                      className="shapeTotalProjet"
                      src={`${process.env.PUBLIC_URL}/hero/small.png`}
                      alt="small"
                    />
                  </div>
                </div>
                <div className="heroImgBoyBox">
                  <img
                    className="heroImg heroImgBoy"
                    src={`${process.env.PUBLIC_URL}/hero/hero-boy.png`}
                    alt="heroGirl"
                  />
                </div>
              </div>
            )}
          </div>
          <button onClick={scrollToTop} className="scrollToTopButton">
            <FontAwesomeIcon icon={faArrowUp} className="iconScroll" />
          </button>
        </div>
      </section>
    </div>
  );
}

export default Home;
