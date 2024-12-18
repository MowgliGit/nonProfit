import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faWallet } from "@fortawesome/free-solid-svg-icons";
function About() {
  const aboutLinks = [
    "The standard chunk of Lorem Ipsum used since.",
    "Randomised words which don't look even slightly believable.",
    "Making this the first true generator on the Internet.",
  ];
  function AboutButton({ href, children }) {
    return (
      <button className="btn btnAbout">
        <a href={href} className="aboutLinkBtn">
          {children}
        </a>
      </button>
    );
  }
  return (
    <section className="sectionAbout">
      <div className="container">
        <div className="about">
          <div className="aboutImgBox">
            <div className="squarePinkBox">&nbsp;</div>
            <div className="squareBox">
              <div className="squareGreen">&nbsp;</div>
              <div className="squareRed">&nbsp;</div>
            </div>
            <div className="pointsBox">
              <img
                src={`${process.env.PUBLIC_URL}/about/points.png`}
                className="pointsImg"
                alt="aboutPoints"
              />
            </div>
            <img
              className="aboutImg"
              src={`${process.env.PUBLIC_URL}/about/about.jpg`}
              alt="aboutGirl"
            />
            <div className="totalRaisedBox">
              <div className="iconWalletBox">
                <FontAwesomeIcon icon={faWallet} className="aboutIconWallet" />
              </div>
              <div className="totalRaisedTextBoxDetails">
                <div className="totalRaisedTextBox">
                  <p className="totalTitle">Total Raised</p>
                  <p className="totalValue">$25000</p>
                </div>
                <div className="progressAbout">
                  <div className="progressBarContainer">
                    <div className="progressBar"></div>
                  </div>
                  <p></p>
                </div>
              </div>
            </div>
          </div>
          <div className="aboutTextBox">
            <span className="subTitle aboutSubTitle">About us</span>
            <h2 className="aboutHeading">
              We Can Save More Lifes With Your Helping Hand.
            </h2>
            <p className="aboutParagraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
              accumsan lacus vel facilisis.
            </p>
            <ul className="aboutList">
              {aboutLinks.map((text, index) => (
                <li key={index} className="aboutLinkItem">
                  <div className="aboutIconBox">
                    <FontAwesomeIcon icon={faCheck} className="aboutIcon" />
                  </div>
                  <span>{text}</span>
                </li>
              ))}
            </ul>
            <AboutButton href="http://">More About</AboutButton>
          </div>
        </div>
      </div>
    </section>
  );
}
export default About;
