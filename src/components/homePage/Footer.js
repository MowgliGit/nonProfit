import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { faMapMarker } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitterSquare,
  faInstagramSquare,
  faGooglePlusG,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <section className="sectionFooter">
      <div className="containerFooter">
        <div className="footerBox">
          <div className="logoBox logoImgBox">
            <img
              className="logoImage"
              src={`${process.env.PUBLIC_URL}/footer/logo.png`}
              alt="logo"
            />
            <p className="footerDescription">
              Welcome and open yourself to your truest love this year with us!
              With the Release Process
            </p>
            <div className="footerIcons">
              <FontAwesomeIcon icon={faFacebook} className="footerIcon" />
              <FontAwesomeIcon icon={faTwitterSquare} className="footerIcon" />
              <FontAwesomeIcon
                icon={faInstagramSquare}
                className="footerIcon"
              />
              <FontAwesomeIcon icon={faGooglePlusG} className="footerIcon" />
            </div>
          </div>
          <div className="services">
            <h6 className="footerTitle">Services</h6>
            <ul className="footerLinks">
              <li>
                <a href="#" className="footerLink">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="footerLink">
                  Causes
                </a>
              </li>
              <li>
                <a href="#" className="footerLink">
                  Latest News
                </a>
              </li>
              <li>
                <a href="#" className="footerLink">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="footerLink">
                  Events
                </a>
              </li>
            </ul>
          </div>
          <div className="contact">
            <h6 className="footerTitle">Contact</h6>
            <p className="footerDescription">
              Would you have any enquiries. Please feel free to contuct us
            </p>
            <div className="contactBox">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="footerIconContact"
              />
              <a href="#" className="footerLink">
                charitio@gmail.com
              </a>
            </div>
            <div className="contactBox">
              <FontAwesomeIcon
                icon={faPhoneAlt}
                className="footerIconContact"
              />
              <a href="#" className="footerLink">
                +888 (123) 869523
              </a>
            </div>
            <div className="contactBox">
              <FontAwesomeIcon
                icon={faMapMarker}
                className="footerIconContact"
              />
              <a href="#" className="footerLink">
                New York – 1075 Firs Avenue
              </a>
            </div>
          </div>
          <div className="projects">
            <h6 className="footerTitle">Projects</h6>
            <div>
              <div className="projectImgsBox">
                <img
                  className="footerImage"
                  src={`${process.env.PUBLIC_URL}/footer/project1.jpg`}
                  alt="project"
                />
                <img
                  className="footerImage"
                  src={`${process.env.PUBLIC_URL}/footer/project2.jpg`}
                  alt="project"
                />
                <img
                  className="footerImage"
                  src={`${process.env.PUBLIC_URL}/footer/project3.jpg`}
                  alt="project"
                />
              </div>
              <div className="projectImgsBox">
                <img
                  className="footerImage"
                  src={`${process.env.PUBLIC_URL}/footer/project4.jpg`}
                  alt="project"
                />
                <img
                  className="footerImage"
                  src={`${process.env.PUBLIC_URL}/footer/project5.jpg`}
                  alt="project"
                />
                <img
                  className="footerImage"
                  src={`${process.env.PUBLIC_URL}/footer/project6.jpg`}
                  alt="project"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyrightBox">
        <p className="copyright">
          © 2021 charitio Theme. Design By
          <a href="/index"> wpOcean</a>. All Rights Reserved.
        </p>
      </div>
    </section>
  );
}
export default Footer;
