import AboutUs from "./Components/AboutUs/AboutUs";
import BusinessInfo from "./Components/BusinessInfo/BusinessInfo";
import Footer from "./Components/Footer/Footer";
import Hero from "./Components/Hero/Hero";
import Locations from "./Components/Locations/Locations";
import Navbar from "./Components/Navbar/Navbar";
import OurServices from "./Components/OurServices/OurServices";
import { primaryWhatsapp } from "./data/contact";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutUs />
      <OurServices />
      <BusinessInfo />
      <Locations />
      <Footer />
      <a
        className="whatsapp-float"
          href={`https://wa.me/${primaryWhatsapp}`}
        target="_blank"
        rel="noreferrer"
        aria-label="تواصل واتساب"
      >
        WhatsApp
      </a>
    </>
  );
}

export default App;
