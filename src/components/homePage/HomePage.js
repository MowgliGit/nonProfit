import ResponsiveNavigation from "./ResponsiveNavigation";
import Home from "./Home";
import Features from "./Features";
import About from "./About";
import Campaigns from "./Campaigns";
import Team from "./Team";
import Carousel from "./Carousel";
import Testimonial from "./Testimonial";
import Events from "./Events";
import Blog from "./Blog";
import Logo from "./Logo";
import Footer from "./Footer";

export default function HomePage({ menu }) {
  return (
    <div>
      <ResponsiveNavigation />
      <Home />
      <Features />
      <About />
      <Campaigns />
      <Team />
      <Carousel />
      <Testimonial />
      <Events />
      <Blog />
      <Logo />
      <Footer />
    </div>
  );
}
