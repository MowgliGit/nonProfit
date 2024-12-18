import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCarrot,
  faFaucet,
  faHandHoldingMedical,
  faUserGraduate,
} from "@fortawesome/free-solid-svg-icons";

function Features() {
  const features = [
    {
      title: "Healthy Food",
      icon: faCarrot,
      className: "featureIconBlueGreen",
      cardClass: "featureCardBlueGreen",
    },
    {
      title: "Clean Water",
      icon: faFaucet,
      className: "featureIconOrange",
      cardClass: "featureCardOrange",
    },
    {
      title: "Medical Care",
      icon: faHandHoldingMedical,
      className: "featureIconBlue",
      cardClass: "featureCardBlue",
    },
    {
      title: "Child Education",
      icon: faUserGraduate,
      className: "featureIconYellow",
      cardClass: "featureCardYellow",
    },
  ];
  return (
    <section className="sectionFeatures">
      <div className="featureCardBox">
        {features.map((feature, index) => (
          <div key={index} className={`featureCard ${feature.cardClass}`}>
            <div className="featuresIconBox">
              <FontAwesomeIcon
                icon={feature.icon}
                className={feature.className}
              />
            </div>
            <div className="featureTitleBox">
              <p className="featureTitle">{feature.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;
