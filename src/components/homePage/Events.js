import React from "react";

function Events() {
  return (
    <div>
      <section className="sectionCampaigns">
        <div className="containerCampaigns">
          <div className="textBoxCampaigns">
            <span className="subTitleCampaigns">Events</span>
            <h2 className="headingCampaigns">Fundraising Events</h2>
            <p className="paragraphCampaigns">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form.
            </p>
          </div>
          <div className="campaignsCardBox">
            {[
              {
                imgSrc: `${process.env.PUBLIC_URL}/events/eventimg1.jpg`,
                date: "25 Nov, 2021",
                title: "Help The Poor From Your Soul",
                description:
                  "There are many variations of passages of Lorem Ipsum available.",
              },
              {
                imgSrc: `${process.env.PUBLIC_URL}/events/eventimg2.jpg`,
                date: "26 Nov, 2021",
                title: "Help Children Raise Out Of Proverty.",
                description:
                  "There are many variations of passages of Lorem Ipsum available.",
              },
              {
                imgSrc: `${process.env.PUBLIC_URL}/events/eventimg3.jpg`,
                date: "27 Nov, 2021",
                title: "Provideing Education Is The Valuable Gift",
                description:
                  "There are many variations of passages of Lorem Ipsum available.",
              },
            ].map((event, index) => (
              <div className="eventCardItem" key={index}>
                <div className="eventCardImgBox">
                  <img
                    className="eventCardImg"
                    src={event.imgSrc}
                    alt={`Event: ${event.title}`}
                  />
                </div>
                <span className="eventDate">{event.date}</span>
                <h2 className="cardTitle cardTitleEvent">{event.title}</h2>
                <p className="eventsDescription">{event.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Events;
