function Campaigns() {
  function CampaignsButton({ href, children }) {
    return (
      <button className="btnCampaign">
        <a href={href} className="campaignLinkBtn">
          {children}
        </a>
      </button>
    );
  }
  const campaigns = [
    {
      imgSrc: `${process.env.PUBLIC_URL}/campaigns/Campaigns1.jpg`,
      title: "Help To Build a Secure Life Of a Poor Children.",
      thumb: "Education",
      percent: "65%",
      goal: "$3,000.00",
      raised: "$2,000.00",
      person: "Laura Faiary",
    },
    {
      imgSrc: `${process.env.PUBLIC_URL}/campaigns/Campaigns2.jpg`,
      title: "Ensure Clean Water To The African Kids.",
      thumb: "Food",
      percent: "75%",
      goal: "$3,000.00",
      raised: "$2,000.00",
      person: "Laura Faiary",
    },
    {
      imgSrc: `${process.env.PUBLIC_URL}/campaigns/Campaigns3.jpg`,
      title: "Your Help Can Save A Human Life From Death.",
      thumb: "Medicine",
      percent: "85%",
      goal: "$3,000.00",
      raised: "$2,000.00",
      person: "Laura Faiary",
    },
  ];
  return (
    <div>
      <section className="sectionCampaigns">
        <div className="containerCampaigns">
          <div className="textBoxCampaigns">
            <span className="subTitleCampaigns">We Love To Help Poor</span>
            <h2 className="headingCampaigns">Our Featured Campaigns.</h2>
            <p className="paragraphCampaigns">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form,
            </p>
          </div>
          <div className="campaignsCardBox">
            <div className="campaignsCardItem">
              <div className="campaignsCardImgBox">
                <img
                  className="cardImg"
                  src={`${process.env.PUBLIC_URL}/campaigns/Campaigns1.jpg`}
                  alt="cart1"
                />
                <span className="thumb">Education</span>
              </div>
              <h2 className="cardTitle">
                Help To Build a Secure Life Of a Poor Children.
              </h2>
              <p className="procentBarCampaigns">
                <span className="procent1">65%</span>
              </p>

              <div className="progress">
                <div className="progressBarContainer">
                  <div className="progressBar1"></div>
                </div>
                <p></p>
              </div>
              <div className="cardSpanBox">
                <div>
                  <span className="cardSpanText">Goal:</span>
                  <span className="cardSpanNumber">$3,000.00</span>
                </div>
                <div>
                  <span className="cardSpanText">Raised:</span>
                  <span className="cardSpanNumber">$2,000.00</span>
                </div>
              </div>
              <hr />
              <div>
                <div className="cardDetailsBox">
                  {" "}
                  <div className="cardDetails">
                    <img
                      className="cartImgPerson"
                      src={`${process.env.PUBLIC_URL}/campaigns/cartPerson.png`}
                      alt="cartPerson"
                    />
                    <span className="cardName">Laura Faiary</span>
                  </div>
                  <CampaignsButton href="http://">Donate Now</CampaignsButton>
                </div>
              </div>
            </div>
            <div className="campaignsCardItem">
              <div className="campaignsCardImgBox">
                <img
                  className="cardImg"
                  src={`${process.env.PUBLIC_URL}/campaigns/Campaigns2.jpg`}
                  alt="cart1"
                />
                <span className="thumb">Food</span>
              </div>
              <h2 className="cardTitle">
                Ensure Clean Water To The African Kids.
              </h2>
              <p className="procentBarCampaigns">
                <span className="procent2">75%</span>
              </p>
              <div className="progress">
                <div className="progressBarContainer">
                  <div className="progressBar2"></div>
                </div>
                <p></p>
              </div>
              <div className="cardSpanBox">
                <div>
                  <span className="cardSpanText">Goal:</span>
                  <span className="cardSpanNumber">$3,000.00</span>
                </div>
                <div>
                  <span className="cardSpanText">Raised:</span>
                  <span className="cardSpanNumber">$2,000.00</span>
                </div>
              </div>
              <hr />
              <div>
                <div className="cardDetailsBox">
                  {" "}
                  <div className="cardDetails">
                    <img
                      className="cartImgPerson"
                      src={`${process.env.PUBLIC_URL}/campaigns/cartPerson.png`}
                      alt="cartPerson"
                    />

                    <span className="cardName">Laura Faiary</span>
                  </div>
                  <CampaignsButton href="http://">Donate Now</CampaignsButton>
                </div>
              </div>
            </div>
            <div className="campaignsCardItem">
              <div className="campaignsCardImgBox">
                <img
                  className="cardImg"
                  src={`${process.env.PUBLIC_URL}/campaigns/Campaigns3.jpg`}
                  alt="cart1"
                />
                <span className="thumb">Medicine</span>
              </div>
              <h2 className="cardTitle">
                Your Help Can Save A Human Life From Death.
              </h2>
              <p className="procentBarCampaigns">
                <span className="procent3">85%</span>
              </p>
              <div className="progress">
                <div className="progressBarContainer">
                  <div className="progressBar3"></div>
                </div>
                <p></p>
              </div>
              <div className="cardSpanBox">
                <div>
                  <span className="cardSpanText">Goal:</span>
                  <span className="cardSpanNumber">$3,000.00</span>
                </div>
                <div>
                  <span className="cardSpanText">Raised:</span>
                  <span className="cardSpanNumber">$2,000.00</span>
                </div>
              </div>
              <hr />
              <div>
                <div className="cardDetailsBox">
                  {" "}
                  <div className="cardDetails">
                    <img
                      className="cartImgPerson"
                      src={`${process.env.PUBLIC_URL}/campaigns/cartPerson.png`}
                      alt="cartPerson"
                    />
                    <span className="cardName">Laura Faiary</span>
                  </div>
                  <CampaignsButton href="http://">Donate Now</CampaignsButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Campaigns;
