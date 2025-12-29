"use client";
import React, { useRef } from "react";
import Slider from "react-slick";
import banner1 from "../../assets/Home/Banner1_LAPTOP.png";
import banner2 from "../../assets/Home/Banner2_LAPTOP.png";
import banner3 from "../../assets/Home/Banner3_LAPTOP.png";
import banner4 from "../../assets/Home/Banner4_LAPTOP.png";
import banner5 from "../../assets/Home/Banner5_LAPTOP.png";
import banner1mobile from "../../assets/Home/Banner1_MOBILE.png";
import banner2mobile from "../../assets/Home/Banner2_MOBILE.png";
import banner3mobile from "../../assets/Home/Banner3_MOBILE.png";
import banner4mobile from "../../assets/Home/Banner4_MOBILE.png";
import banner5mobile from "../../assets/Home/Banner5_MOBILE.png";
import { useTranslation } from "react-i18next";

export default function HeroSlider() {
  const sliderRef = useRef(null);

  const slides = [banner1, banner2, banner3, banner4, banner5];

  const slidesmobile = [banner1mobile, banner2mobile, banner3mobile, banner4mobile, banner5mobile];

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,      
    autoplaySpeed: 4000, 
    cssEase: "ease",    
  };

  const { t } = useTranslation();

  return (
    <section className="relative w-full h-[400px] sm:h-[500px] lg:h-[98vh]">
      {/* Background slider */}
      <Slider ref={sliderRef} {...settings}
      className="slick-desktop">
        {slides.map((image, idx) => (
          <div key={idx}>
            <div
              className="hidden lg:block md:block w-full h-[400px] sm:h-[500px] lg:h-[98vh] bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${image})` }}
            />
          </div>
        ))}
      </Slider>

      {/* Mobile Slider */}
      <Slider ref={sliderRef} {...settings}>
        {slidesmobile.map((image, idx) => (
          <div key={idx}>
            <div
              className="lg:hidden md:hidden w-full h-[400px] sm:h-[500px] lg:h-[98vh] bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${image})` }}
            />
          </div>
        ))}
      </Slider>

      {/* Static content overlay */}
      <div className="absolute inset-0 flex flex-col justify-center items-center lg:items-end px-6 lg:px-20 text-center lg:text-right z-10">
        <h2 className="italic text-[var(--color-whitecustom)] text-2xl sm:text-3xl lg:text-[52px] font-bold leading-snug max-w-4xl">
          {t("home.herosliderh1")} <span className="text-[var(--color-whitecustom) md:text-[var(--color-prime)]">{t("home.herosliderh2")}</span> {t("home.herosliderh3")} <br />
          {t("home.herosliderh4")}
        </h2>
        <p className="mt-4 text-[var(--color-whitecustom)] text-sm sm:text-base lg:text-xl leading-relaxed max-w-2xl">
          {t("home.herotext1")}<br/>
          {t("home.herotext2")}
        </p>
      </div>
    </section>
  );
}
