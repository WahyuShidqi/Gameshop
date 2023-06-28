import AboutHero from "./aboutcomponent/aboutHero";
import OurTeam from "./aboutcomponent/team";

import WhyTrustUs from "./aboutcomponent/whytrustus";
import Quotes from "./homecomponent/quotes";

function About() {
  return (
    <div>
      <AboutHero />
      <WhyTrustUs />
      <div className=" h-[30rem] bg-[#1C140F] aboutquotebackground">
        <div className="bg-darkalpha">
          <Quotes Quote="Unlock your gaming potential, explore new worlds, and create unforgettable adventures. Join us, where every game is a masterpiece waiting to be played." />
        </div>
      </div>
      <OurTeam />
    </div>
  );
}

export default About;
