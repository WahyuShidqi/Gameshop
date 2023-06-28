// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";
// import "../../../node_modules/swiper/swiper.css";

// import Apex from "../../assets/apex.png";
// import LOL from "../../assets/LeagueofLegend.png";
// import Crysis from "../../assets/crysis.png";
// import Stray from "../../assets/stray.png";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function Carousel() {
  // const slides = [
  //   {
  //     image: "../../assets/apex.png",
  //     title: "Apex Legend",
  //     price: "Rp.120000",
  //   },
  //   {
  //     image: "../../assets/leagueoflegend.png",
  //     title: "LOL",
  //     price: "Rp.120000",
  //   },
  //   {
  //     image: "../../assets/crysis.png",
  //     title: "crysis",
  //     price: "Rp.120000",
  //   },
  //   {
  //     image: "../../assets/stray.png",
  //     title: "stray",
  //     price: "Rp.120000",
  //   },
  // ];
  return (
    <div className="carousel-section px-40">
      <div className=" flex items-center justify-between mb-14">
        <h1 className=" h-14 font-bold text-3xl">Currently trending games</h1>
        <Link className="See All" to="/#">
          <ul>
            <li className=" w-36 h-14 font-medium text-2xl px-8 py-3 bg-darkpurple rounded-xl seeallhover">
              See all
            </li>
          </ul>
        </Link>
      </div>
      <Swiper
        className="text-center"
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={0}
        slidesPerView={4}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide className="flex flex-col items-center">
          <img src="/src/assets/apex.png" alt="Apex" />
          <h3 className="harga pt-2">
            Apex <br />
            Rp. 120.000
          </h3>
        </SwiperSlide>
        <SwiperSlide className="flex flex-col items-center">
          <img src="/src/assets/leagueoflegend.png" alt="LOL" />
          <h3 className="harga pt-2">
            League of Legends
            <br />
            Rp. 120.000
          </h3>
        </SwiperSlide>
        <SwiperSlide className="flex flex-col items-center">
          <img src="/src/assets/crysis.png" alt="crysis" />
          <h3 className="harga pt-2">
            Crysis
            <br />
            Rp. 120.000
          </h3>
        </SwiperSlide>
        <SwiperSlide className="flex flex-col items-center">
          <img src="/src/assets/stray.png" alt="Stray" />
          <h3 className="harga pt-2">
            Stray
            <br />
            Rp. 120.000
          </h3>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Carousel;
