import { Link } from "react-router-dom";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faPhoneAlt,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
export default function OfficeInfo() {
  const officeInf = [
    {
      name: "Address",
      info: "7 Green Lake Street ",
      text: "Crawfordsville, IN 47933",
      icon: faMapMarkerAlt,
    },
    {
      name: "Email Us",
      icon: faEnvelope,
      info: "charitio@gmail.com",
      text: "helloyou@gmail.com",
    },
    {
      name: "Call Now",
      icon: faPhoneAlt,
      info: "+1 800 123 456 789",
      text: "+1 800 123 654 987",
    },
  ];

  return (
    <section className="officeInfoSection">
      <div className="containerOfficeInfo">
        <div className="officeInfoBox">
          {officeInf.map((data, index) => (
            <div className="officeCard" key={index}>
              <div className="infIconBox">
                <FontAwesomeIcon icon={data.icon} className="officeIcon" />
              </div>
              <div className="officeInfoBoxData">
                <h2 className="officeTitle">{data.name}</h2>
                <div className="officeInfoDetails">
                  <p className="officeInfo">{data.info}</p>
                  <p className="officeText">{data.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
