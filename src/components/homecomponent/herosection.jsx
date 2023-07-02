import { Link } from "react-router-dom";
import Joystick from "../../assets/joy_stick1.png";
import UnrealEngine from "../../assets/unreal1.png";
import CryEngine from "../../assets/cry 1.png";
import Unity from "../../assets/unity 1.png";

function HeroSection() {
  return (
    <div className="px-40 flex justify-between mb-[8.25rem]">
      <div className="Hero-Text pt-[12.688rem]">
        <p className="text-xl font-extrabold text-[#E87D0E]">
          Proved by HSB 5 - 6
        </p>
        <h1 className="text-white font-extrabold text-5xl w-[30rem] h-[14.625rem] leading-[155.2%]">
          Unleash your potential with the game of your choice
        </h1>
        <p className="w-[32.938rem] h-[6.313rem] text-base font-medium leading-[200%]">
          Find your favorite game, buy it and experience the beauty of the
          gaming world with us.
        </p>
        <div className="button">
          <Link
            className="text-base w-[12.188rem] h-[3.313rem] px-7 py-4 rounded-[40px] buttonlineargradient"
            to="/About-us"
          >
            Get more details
          </Link>
        </div>
      </div>

      <div className="Hero-Image pl-[8.25rem]">
        <div className="hero-img w-[37.5rem] h-[50rem]">
          <img src={Joystick} alt="joystick" />
        </div>
        <div className="hero-unrealengine-icon w-[3.688rem] h-[4rem]">
          <img src={UnrealEngine} alt="UnrealEngine" />
        </div>
        <div className="hero-cryengine-icon w-[6.313rem] h-[6.188rem]">
          <img src={CryEngine} alt="CryEngine" />
        </div>
        <div className="hero-unity-icon w-24 h-[1.875rem]">
          <img src={Unity} alt="Unity" />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
