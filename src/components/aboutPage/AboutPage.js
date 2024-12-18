import ResponsiveNavigation from "../homePage/ResponsiveNavigation";
import Aboutus from "./AboutUs";
import AboutBackground from "./AboutBackground";
import Video from "./Video";
import FeaturesAbout from "./FeaturesAbout";
import FunTestimonialFact from "./FunTestimonialFact";
import Campaigns from "../homePage/Campaigns";
import Team from "../homePage/Team";
import Logo from "../homePage/Logo";
import Footer from "../homePage/Footer";

export default function AboutPage() {
  return (
    <div>
      <ResponsiveNavigation />
      <AboutBackground />
      <Video />
      <FeaturesAbout />
      <Aboutus />
      <FunTestimonialFact />
      <Campaigns />
      <Team />
      <Logo />
      <Footer />
    </div>
  );
}
