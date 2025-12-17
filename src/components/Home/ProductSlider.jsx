import React, { useEffect, useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";

import productslider1 from "../../assets/Home/ABÓBORA-BUTTERNUT.png";
import productslider2 from "../../assets/Home/ABÓBORA-COMPRIDA.png";
import productslider3 from "../../assets/Home/BATATA-DOCE.png";
import productslider5 from "../../assets/Home/COURGETE.png";
import productslider6 from "../../assets/Home/FEIJÃO-VERDE.png";
import productslider7 from "../../assets/Home/MAÇÃ-FUJI.png";
import productslider8 from "../../assets/Home/MAÇÃ-ROYAL-GALA.png";
import productslider9 from "../../assets/Home/MAÇÃ-REINETA.png";
import productslider10 from "../../assets/Home/PERA-ROCHA.png";
import productslider4 from "../../assets/Home/ABÓBORA-MUSQUEE.png";
import { useTranslation } from "react-i18next";


const products = [
  {
    id: 1,
    title: "products.item1",
    blurb: "products.item1desc",
    image: productslider10,
  },
  {
    id: 2,
    title: "products.item2",
    blurb: "products.item2desc",
    image: productslider9,
  },
  {
    id: 3,
    title: "products.item3",
    blurb: "products.item3desc",
    image: productslider8,
  },
  {
    id: 4,
    title: "products.item4",
    blurb: "products.item4desc",
    image: productslider7,
  },
  {
    id: 5,
    title: "products.item5",
    blurb:
      "products.item5desc",
    image: productslider5,
  },
  {
    id: 6,
    title: "products.item6",
    blurb: "products.item6desc",
    image: productslider6,
  },
  {
    id: 7,
    title: "products.item7",
    blurb: "products.item7desc",
    image: productslider3,
  },
  // {
  //   id: 8,
  //   title: "Feijão Verde",
  //   blurb:
  //     "A pré-refrigeração é feita após a colheita, de forma a não comprometer o tempo de con...",
  //   image: productslider6,
  // },
  {
    id: 9,
    title: "products.item8",
    blurb: "products.item8desc",
    image: productslider1,
  },
  {
    id: 10,
    title: "products.item9",
    blurb: "products.item9desc",
    image: productslider2,
  },
  {
    id: 11,
    title: "products.item10",
    blurb: "products.item10desc",
    image: productslider4,
  },
  // {
  //   id: 12,
  //   title: "Abóbora Comprida",
  //   blurb: "Armazenamento em atmosfera controlada ou em frio normal.",
  //   image: productslider10,
  // },
]; 



export default function OutrosProdutosSlider() {
  const [slidesToShow, setSlidesToShow] = useState(2);
  const updateSlides = () => {
    const w = window.innerWidth;
    if (w >= 1280) setSlidesToShow(2);
    else if (w >= 1024) setSlidesToShow(2);
    else setSlidesToShow(1);
  };

  useEffect(() => {
    updateSlides();
    window.addEventListener("resize", updateSlides);
    return () => window.removeEventListener("resize", updateSlides);
  }, []);
  const navigate = useNavigate();

  const handleOnProductRedirect = () => {
    navigate("/produtos");
  };

 const settings = {
  dots: true,
  arrows: false,
  infinite: true,
  speed: 450,
  slidesToShow: slidesToShow,
  slidesToScroll: slidesToShow,
  autoplay: true,
  autoplaySpeed: 3000,
  mobileFirst: false,   // <-- THIS FIXES THE MOBILE BREAKPOINT

  dotsClass: "slick-dots custom-dots",
  customPaging: () => <button className="dot" />,
  appendDots: (dots) => (
    <div className="mt-8">
      <ul className="custom-dots-row">{dots}</ul>
    </div>
  ),
};

  const { t } = useTranslation();

  return (
    <section className="w-full bg-[var(--color-graycustom)] py-12 sm:py-16 lg:py-25">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-3xl sm:text-3xl lg:text-[48px] font-bold text-[var(--color-dark)]">
            {t("products.title")}
          </h2>
          <button
            onClick={() => (window.location.href = "/produtos")}
            className="cursor-pointer inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-dark)] hover:opacity-80"
          >
            {t("products.more")}{" "}
            <span aria-hidden>
              <img src="../src/assets/Home/greenarrow.svg" alt="" />
            </span>
          </button>
        </div>

        <Slider {...settings}>
          {products.map((p) => (
            <div key={p.id} className="px-3 py-5">
              {/* lg:grid-cols-2 -> lg:grid-cols-[55%_45%] */}
              <article className="grid lg:grid-cols-2 items-center justify-between gap-3 rounded-2xl bg-[var(--color-whitecustom)] px-5 py-5 md:h-[275px] h-[375px]">
                <div className="max-w-full sm:max-w-xl lg:max-w-lg order-2 lg:order-1">
                  <h3 className="text-lg sm:text-3xl font-extrabold text-[#111827] text-center sm:text-start">
                    {t(p.title)}
                  </h3>
                  <p className="mt-2 text-sm text-[var(--color-dark)] leading-relaxed text-center sm:text-start">
                    {t(p.blurb)}
                  </p>
                  <div
                    className="flex justify-center sm:justify-start"
                    onClick={handleOnProductRedirect}
                  >
                    <button className="mt-4 inline-flex items-center rounded-full bg-[var(--color-prime)] cursor-pointer px-4 py-1.5 text-lg font-semibold text-[var(--color-whitecustom)] hover:bg-[var(--color-prime)]">
                      {t("products.next")}
                    </button>
                  </div>
                </div>
                <div className="shrink-0 mt-5 order-1 lg:order-2 flex justify-center sm:justify-start">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="h-24 w-auto sm:h-28 lg:h-30 object-cover"
                  />
                </div>
              </article>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
