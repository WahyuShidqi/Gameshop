import { Link } from "react-router-dom";
import aboutHeroImg from "../../assets/aboutus-image 6.png";

function AboutHero() {
  return (
    <div className="px-40 flex justify-between mb-[8.25rem]">
      <div className="Hero-Text pt-[12.688rem]">
        <h1 className="text-white font-extrabold text-5xl h-[14.625rem] leading-[155.2%]">
          Welcome to our gaming site, where passion meets play!
        </h1>
        <p className="w-[32.938rem] h-[6.313rem] text-base font-medium leading-[200%]">
          We are a dedicated team of gamers and gaming enthusiasts who have come
          together to create a platform that celebrates the incredible world of
          gaming. Whether you're a casual player, a competitive gamer, or simply
          someone who appreciates the artistry and storytelling in games, we've
          got something for you.
        </p>
        <div className="button mt-24">
          <Link
            className="text-base w-[12.188rem] h-[3.313rem] px-7 py-4 rounded-[40px] buttonlineargradient"
            to="/Contact-us"
          >
            Get in touch
          </Link>
        </div>
      </div>

      <div className="Hero-Image pl-[8.25rem]">
        <div className="aboutushero-img w-[37.5rem] h-[50rem]">
          <img className="pt-40" src={aboutHeroImg} alt="hero-image.png" />
        </div>
      </div>
    </div>
  );
}

export default AboutHero;
