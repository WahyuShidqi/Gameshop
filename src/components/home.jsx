// import image1 from "../assets/gallery/image1.jpg";
//import { Link } from "react-router-dom";

import Banner from "./homecomponent/banner";
import Carousel from "./homecomponent/carousel";
// import Footer from "./homecomponent/footer";
import HeroSection from "./homecomponent/herosection";
import PromoSection from "./homecomponent/promosection";
import Quotes from "./homecomponent/quotes";
// import Subscribe from "./homecomponent/subscribe";
import Devices from "./homecomponent/supporteddevices";

function Home() {
  return (
    <div className="Main-container">
      <section id="Hero-section">
        <HeroSection />
        <Carousel />
        <Quotes
          Quote="Its not about how good you are, its about how good you want to be."
          text="With our service, you can find the game that will challenge you or
          comfortable for you."
        />
        <Banner />
        <Devices />
        <PromoSection />
      </section>
    </div>
  );
}
export default Home;
