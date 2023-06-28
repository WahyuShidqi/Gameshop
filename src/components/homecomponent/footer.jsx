import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faMap, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer() {
  return (
    <div className=" mt-44  bg-black h-full w-screen">
      <div className="info-wrapper flex justify-around items-center py-20 px-28">
        <div className="logo-address">
          <h1 className="text-2xl font-extrabold mb-10">Gameshop</h1>
          <div className="mb-2">
            <a
              className="hover:text-[#DC7000]"
              href="https://goo.gl/maps/7YSg5qWy2ur3dLGKA"
            >
              <FontAwesomeIcon className="w-4 h-4 pr-1" icon={faMap} /> 2 Av.
              Pasteur, 94160 Saint-Mandé, France
            </a>
          </div>
          <p className=" text-slate-500">@Gameshop</p>
        </div>

        <div className="contactus">
          <h2 className="mb-10 font-extrabold text-lg">Contact us</h2>
          <p className="mb-5">
            <FontAwesomeIcon className="pr-1" icon={faEnvelope} />
            customerhelp@gameshop.com
          </p>
          <p>
            <FontAwesomeIcon className="pr-1" icon={faPhone} />
            +6282129039123
          </p>
        </div>

        <div className="social-media mb-5">
          <h2 className="mb-10 font-extrabold text-lg">Our social media</h2>
          <div className="sosmedList">
            <ul className="flex justify-center gap-5">
              <li>
                <a href="https://www.facebook.com/UbisoftSEA/?brand_redir=81174647292">
                  <FontAwesomeIcon
                    className="sosmed-iconhover w-8 h-8"
                    icon={faFacebook}
                  />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/ubisoft/?hl=en">
                  <FontAwesomeIcon
                    className="sosmed-iconhover w-8 h-8"
                    icon={faInstagram}
                  />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/Ubisoft?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor">
                  <FontAwesomeIcon
                    className="sosmed-iconhover w-8 h-8"
                    icon={faTwitter}
                  />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/company/ubisoft/">
                  <FontAwesomeIcon
                    className="sosmed-iconhover w-8 h-8"
                    icon={faLinkedin}
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="copyright border-t-2 border-solid border-white h-auto text-center pt-8">
        <p className="copyright text-slate-400 h-14 font-medium">
          Copyright ® 2023 HSB All rights Reserved
        </p>
      </div>
    </div>
  );
}
export default Footer;
