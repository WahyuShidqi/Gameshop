// import image1 from "../assets/gallery/image1.jpg";
//import { Link } from "react-router-dom";

import Banner from "./homecomponent/banner";
import Carousel from "./homecomponent/carousel";
import Footer from "./homecomponent/footer";
import HeroSection from "./homecomponent/herosection";
import PromoSection from "./homecomponent/promosection";
import Quotes from "./homecomponent/quotes";
import Subscribe from "./homecomponent/subscribe";
import Devices from "./homecomponent/supporteddevices";

function Home() {
  return (
    <div className="Main-container">
      <section id="Hero-section">
        <HeroSection />
        <Carousel />
        <Quotes />
        <Banner />
        <Devices />
        <PromoSection />
        <Subscribe />
        <Footer />
      </section>
    </div>
  );
}
export default Home;
