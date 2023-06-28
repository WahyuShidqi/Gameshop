import { Link } from "react-router-dom";
import image1 from "../../assets/Rectangle 15.png";
import image2 from "../../assets/Rectangle 16.png";
import image3 from "../../assets/Rectangle 17.png";
import image4 from "../../assets/Rectangle 18.png";

function PromoSection() {
  return (
    <div className=" px-40">
      <div id="text-section" className="text-center flex items justify-between">
        <div>
          <h1 className="text-3xl font-extrabold">Promo of the day</h1>
          <p className="pl-5 pt-5 text-base leading-[120%]">
            Hurry up!... Don't miss your discount!
          </p>
        </div>
        <div>
          <Link className="See All" to="/#">
            <ul>
              <li className=" w-36 h-14 font-medium text-2xl px-8 py-3 bg-darkpurple rounded-xl seeallhover">
                See all
              </li>
            </ul>
          </Link>
        </div>
      </div>

      <div className="grid-container mt-20">
        <div className="wrapper grid grid-cols-3 grid-rows-2 gap-5">
          <div className="text-center">
            <img src={image1} alt="image1" />
            <h2 className="text-2xl font-semibold">call of duty</h2>
          </div>
          <div className="text-center">
            <img src={image2} alt="image2" />
            <h2 className="text-2xl font-semibold">call of duty</h2>
          </div>
          <div className="text-center">
            <img src={image3} alt="image3" />
            <h2 className="text-2xl font-semibold">call of duty</h2>
          </div>
          <div className="text-center">
            <img src={image2} alt="image2" />
            <h2 className="text-2xl font-semibold">call of duty</h2>
          </div>
          <div className="text-center">
            <img src={image4} alt="image4" />
            <h2 className="text-2xl font-semibold">call of duty</h2>
          </div>
          <div className="text-center">
            <img src={image1} alt="image1" />
            <h2 className="text-2xl font-semibold">call of duty</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
export default PromoSection;
