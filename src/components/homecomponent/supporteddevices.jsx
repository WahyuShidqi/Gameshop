import { Link } from "react-router-dom";

function Devices() {
  return (
    <section className="supported-device my-52 h-[55rem] w-screen">
      <div className="bg-darkalpha py-24  px-40 m-0">
        <div className="text-line text-center">
          <h1 className="text-3xl font-extrabold">
            Find the game you like for any device you are using
          </h1>
          <p className="text-base mt-6 px-20">
            Regardless of the device you have, we can help you find a game
            you'll enjoy. Just let us know what platform you're using, and we'll
            recommend popular games that suit your preferences.
          </p>
        </div>

        <div className="devices-icon flex justify-around items-center mt-28 h-1/2 text-center">
          <div id="mobile-icon" className="flex flex-col items-center">
            <div className="mobile-circle w-20 h-20 py-5 pl-4">
              <div className="mobile-icon w-16 h-16 py-5 pl-4"></div>
            </div>
            <div className="pr-3">
              <h2 className=" textlinkhover transition-transform">
                <Link className="Android-IOS" to="/#">
                  Android/IOS
                </Link>
              </h2>
            </div>
          </div>

          <div id="PC-icon" className="flex flex-col items-center">
            <div className="PC-circle w-20 h-20 pt-5 pl-4">
              <div className="PC-icon w-16 h-16 "></div>
            </div>
            <div>
              <h2 className="textlinkhover transition-transform pr-4">
                <Link className="PC" to="/#">
                  PC
                </Link>
              </h2>
            </div>
          </div>

          <div id="PS-icon" className="flex flex-col items-center">
            <div className="PS-circle w-20 h-20 pt-3 pl-4">
              <div className="PS-icon w-16 h-16 pb-5"></div>
            </div>
            <div>
              <h2 className="textlinkhover transition-transform">
                <Link className="Playstation" to="/#">
                  Playstation
                </Link>
              </h2>
            </div>
          </div>

          <div id="VR-icon" className="flex flex-col items-center">
            <div className="VR-circle w-20 h-20 py-5 pl-4">
              <div className="VR-icon w-16 h-16"></div>
            </div>
            <div className="pr-2">
              <h2 className="textlinkhover transition-transform">
                <Link className="VR/AR" to="/#">
                  VR/AR
                </Link>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Devices;
