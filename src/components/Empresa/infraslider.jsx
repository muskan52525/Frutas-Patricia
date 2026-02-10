import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import slider1 from "../../assets/Empresa/slider1.png";
import slider2 from "../../assets/Empresa/slider2.png";
import slider3 from "../../assets/Empresa/slider3.png";
import slider4 from "../../assets/Empresa/slider4.png";
import { useTranslation } from "react-i18next";

export default function InfraestruturasSlider() {
  const sliderRef = useRef(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 640);
  const { t } = useTranslation();
  const slides = [
    {
      tag: "empresa.infratag",
      title: "empresa.infratitle1",
      desc: "empresa.infratext1",
      images: {
        left: slider2,
        main: slider1,
        right: slider4,
      },
    },
    {
      tag: "empresa.infratag",
      title: "empresa.infratitle2",
      desc: "empresa.infratext2",
      images: {
        left: slider1,
        main: slider4,
        right: slider3,
      },
    },
    {
      tag: "empresa.infratag",
      title: "empresa.infratitle3",
      desc: "empresa.infratext3",
      images: {
        left: slider4,
        main: slider3,
        right: slider2,
      },
    },
    {
      tag: "empresa.infratag",
      title: "empresa.infratitle4",
      desc: "empresa.infratext4",
      images: {
        left: slider3,
        main: slider2,
        right: slider1,
      },
    },
  ];
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 640);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    // if (isMobile) {
    const interval = setInterval(() => {
      sliderRef.current?.slickNext();
    }, 10000);
    return () => clearInterval(interval);
    // }
  }, []);

  const settings = {
    dots: false,
    dotsClass: "slick-dots mobile-dots",
    arrows: false,
    infinite: true,
    fade: true,
    speed: 600,
    autoplay: false,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: false,
    responsive: [
      {
        breakpoint: 640, // mobile
        settings: {
          dots: true,
          fade: false, // fade must be false for mobile infinite scroll
          swipe: true, // enable touch swipe
          infinite: true, // infinite scroll on mobile
        },
      },
    ],
  };



  return (
    <section className="bg-[#F3F6F7] py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Slider ref={sliderRef} {...settings}>
          {slides.map((s, idx) => (
            <div key={idx}>
              {/* 1-col on mobile/tablet (text above, image below); 12-col on desktop */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
                {/* Text */}
                <div
                  className="lg:col-span-5 flex flex-col justify-center sm:justify-start 
               lg:min-h-[360px] !min-h-[240px] 
               sm:min-h-[360px]
               mobile-fixed-text"
                >
                  <div className="flex justify-center sm:justify-start">
                    <span className="inline-flex items-center justify-center rounded-full bg-[var(--color-prime)] text-white px-5 py-2 text-sm font-semibold shadow-sm w-[130px]">
                      {t(s.tag)}
                    </span>
                  </div>

                  <h2 className="mt-6 whitespace-pre-line text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0F172A]  sm:text-start text-center">
                    {t(s.title)}
                  </h2>

                  <p className="mt-6 text-slate-700 text-base sm:text-lg leading-relaxed text-center md:text-left">
                    {t(s.desc)}
                  </p>
                </div>

                {/* Image area */}
                <div className="lg:col-span-7">
                  <div className="relative h-[40vh] sm:h-[340px] lg:h-[460px]">
                    {/* LEFT thumbnail (Prev) — hidden on mobile */}
                    <button
                      type="button"
                      className="hidden sm:block absolute left-0 top-1/2 -translate-y-1/2 focus:outline-none cursor-pointer"
                      aria-label="Slide anterior"
                    >
                      <img
                        src={s.images.left}
                        alt=""
                        className="h-[70%] w-28 sm:w-60 lg:w-68 object-cover rounded-[26px] hover:brightness-105 transition"
                        loading="lazy"
                      />
                    </button>

                    {/* MAIN image (fills container) */}
                    <div className="absolute lg:left-24 lg:right-24 sm:left-60 sm:right-60 z-10">
                      <img
                        src={s.images.main}
                        alt=""
                        className="h-auto sm:h-full lg:h-full w-full object-cover rounded-[32px]"
                        loading="eager"
                      />
                    </div>

                    {/* RIGHT thumbnail (Next) — hidden on mobile */}
                    <button
                      type="button"
                      className="hidden sm:block absolute right-0 top-1/2 -translate-y-1/2 focus:outline-none cursor-pointer"
                      aria-label="Próximo slide"
                    >
                      <img
                        src={s.images.right}
                        alt=""
                        className="h-[70%] w-28 sm:w-60 lg:w-68 object-cover rounded-[26px] hover:brightness-105 transition"
                        loading="lazy"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
