import React, { useState, useEffect } from "react";
import "./Promo.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import PromoSlideOne from "../promoSildes/promoSlideOne/PromoSlideOne";
import { useNavigate } from "react-router-dom";

import threePlusOnebanner from "./PromoImg/bdb605dd99229bb048b21dcbb1ebab2b.webp";
import mobileImage from "./PromoImg/434dc5578d3294e42a717b164369df0b-crop-mobile.webp";

import ChampionCashbackBannerDesc from "./PromoImg/cd2ae01edf686feac3a8da7386010447.webp";
import ChampionCashbackBannerMob from "./PromoImg/73a02b623ecb380d7295ec94fd1c75d0-crop-mobile.webp";

const Promo: React.FC = () => {
  const navigate = useNavigate();

  // State to detect if it's mobile view
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check the screen width and set isMobile
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 940); // Set 940px as the breakpoint for mobile
    };

    // Add event listener on component mount
    window.addEventListener("resize", handleResize);

    // Initial check
    handleResize();

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const slidesData = [
    {
      route: "/threeplusone",
      imageDesc: isMobile ? mobileImage : threePlusOnebanner,
    }, // First slide
    {
      route: "/championCashback",
      imageDesc: isMobile
        ? ChampionCashbackBannerMob
        : ChampionCashbackBannerDesc,
    }, // Second slide
    {
      route: "/route3",
      imageDesc: isMobile ? mobileImage : "/path/to/image3.jpg",
    }, // Third slide
    {
      route: "/route4",
      imageDesc: isMobile ? mobileImage : "/path/to/image4.jpg",
    }, // Fourth slide
    {
      route: "/route5",
      imageDesc: isMobile ? mobileImage : "/path/to/image5.jpg",
    }, // Fifth slide
    {
      route: "/route6",
      imageDesc: isMobile ? mobileImage : "/path/to/image6.jpg",
    }, // Sixth slide
    {
      route: "/route7",
      imageDesc: isMobile ? mobileImage : "/path/to/image7.jpg",
    }, // Seventh slide
    {
      route: "/route8",
      imageDesc: isMobile ? mobileImage : "/path/to/image8.jpg",
    }, // Eighth slide
  ];

  const handleSlideClick = (route: string) => {
    navigate(route);
  };

  return (
    <div className="promoPage">
      <div className="promoPage__swiper">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={10}
          slidesPerView={1.03}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
        >
          {slidesData.map((slide, index) => (
            <SwiperSlide
              key={index}
              className="promoSLIdes"
              onClick={() => handleSlideClick(slide.route)}
            >
              {/* Pass the image based on screen size */}
              <PromoSlideOne image={slide.imageDesc} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>
      </div>
    </div>
  );
};

export default Promo;
