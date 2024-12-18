import React from "react";

const Map = () => {
  return (
    <section className="sectionMap">
      <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387191.0361667778!2d-74.30934281004731!3d40.69753994660521!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2smk!4v1730394123819!5m2!1sen!2smk"
          width="100%"
          height="500"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Map of New York"
        ></iframe>
      </div>
    </section>
  );
};

export default Map;
