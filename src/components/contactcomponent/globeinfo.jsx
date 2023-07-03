import globe from "../../assets/Huge Globalglobe.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faMap, faPhone } from "@fortawesome/free-solid-svg-icons";

function GlobeInfo() {
  return (
    <>
      <div className="flex justify-center">
        <img className=" w-[66.25rem] h-[34rem]" src={globe} alt="globe.png" />
      </div>

      <div className="contact-container mt-20 flex justify-center">
        <div className="social-media mb-5 border-r-2 border-white w-1/3 h-28">
          <h2 className="mb-10 font-extrabold text-lg">Follow us</h2>
          <div className="sosmedList">
            <ul className="flex gap-4">
              <li>
                <a href="https://www.facebook.com/UbisoftSEA/?brand_redir=81174647292">
                  <FontAwesomeIcon
                    className="sosmed-iconhover w-8 h-8 text-black"
                    icon={faFacebook}
                  />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/ubisoft/?hl=en">
                  <FontAwesomeIcon
                    className="sosmed-iconhover w-8 h-8 text-black"
                    icon={faInstagram}
                  />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/Ubisoft?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor">
                  <FontAwesomeIcon
                    className="sosmed-iconhover w-8 h-8 text-black"
                    icon={faTwitter}
                  />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/company/ubisoft/">
                  <FontAwesomeIcon
                    className="sosmed-iconhover w-8 h-8 text-black"
                    icon={faLinkedin}
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="phonenumber  border-r-2 border-white pl-10 w-1/3 h-28">
          <h2 className="mb-10 font-extrabold text-lg">Contact </h2>
          <p>
            <FontAwesomeIcon className="pr-1" icon={faPhone} />
            +6282129039123
          </p>
        </div>

        <div className="main-address pl-10 w-1/3 h-28">
          <h1 className="text-lg font-extrabold mb-10 ">Main Office</h1>
          <div className="mb-2">
            <a
              className="hover:text-[#DC7000]"
              href="https://goo.gl/maps/7YSg5qWy2ur3dLGKA"
            >
              <FontAwesomeIcon className="w-4 h-4 pr-1" icon={faMap} /> 2 Av.
              Pasteur, 94160 Saint-Mandé, France
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
export default GlobeInfo;
