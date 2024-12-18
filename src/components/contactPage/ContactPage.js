import ResponsiveNavigation from "../homePage/ResponsiveNavigation";
import ContactBackground from "./ContactBackground";
import OfficeInfo from "./OfficeInfo";
import ContactFormArea from "./ContactFormArea";
import Footer from "../homePage/Footer";
import MapComponent from "./MapComponent";

export default function AboutPage() {
  return (
    <div>
      <ResponsiveNavigation />
      <ContactBackground />
      <OfficeInfo />
      <ContactFormArea />
      <MapComponent />
      <Footer />
    </div>
  );
}
