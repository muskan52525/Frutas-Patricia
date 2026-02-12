import React from "react";
import Infraslider from "../components/Empresa/infraslider.jsx";
import NossaHistoria from "../components/Empresa/history.jsx";
import BrandMarqueeSlick from "../components/Comman/brandslider.jsx";
import lelio from "../assets/Empresa/lelio.png";
import propria2 from "../assets/Empresa/propria2.png";
import propria1 from "../assets/Empresa/propria1.png";
import icon1 from "../assets/Empresa/icon1.png";
import icon2 from "../assets/Empresa/icon2.png";
import icon3 from "../assets/Empresa/icon3.png";
import hero1 from "../assets/Empresa/hero1.png";
import hero2 from "../assets/Empresa/hero2.png";
import hero3 from "../assets/Empresa/hero3.png";
import hero4 from "../assets/Empresa/hero4.png";
import hero1mobile from "../assets/Empresa/Image1.png";
import hero2mobile from "../assets/Empresa/Image2.png";
import hero3mobile from "../assets/Empresa/Image3.png";
import hero4mobile from "../assets/Empresa/Image4.png";
import { useTranslation } from "react-i18next";

export default function EmpresaThirtyYears() {
  const { t } = useTranslation();

  return (
    <div className="max-w-auto mx-auto">
      {/* hero section empresa */}

      <div className="bg-cover bg-center flex flex-col items-center justify-center p-6 sm:pb-0 pt-[50px] lg:pt-[100px] md:pt-50 bg-[url('../src/assets/Home/bg.jpg')] pb-[30px]">
        <div className="relative mx-auto max-w-7xl">
          {/* Top row: title (left) + paragraph (right) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-15 pb-5 mt-6">
            <div className="lg:col-span-1 text-[var(--color-whitecustom)] text-center lg:text-left md:text-center max-w-2xl">
              <p className="text-2xl sm:text-3xl lg:text-[48px] font-bold italic">
                +30 {t("empresa.anos")}
              </p>
              <h2 className="mt-1 text-3xl sm:text-4xl lg:text-[48px] font-extrabold leading-tight">
                {t("empresa.bannertitle")}
              </h2>
            </div>

            <div className="lg:col-span-1 text-[var(--color-whitecustom)] text-justify flex justify-end max-w-xl">
              <p className="text-base sm:text-lg leading-relaxed max-w-sm mx-auto lg:mx-0">
                {t("empresa.bannertext")}
              </p>
            </div>
          </div>

          {/* Images row: 4 cards, responsive */}
          <div className="hidden lg:flex md:flex mt-10 grid grid-cols-1 md:grid-cols-4 gap-4 sm:gap-6">
            <figure className="overflow-hidden rounded-[25px] sm:rounded-b-none sm:rounded-t-2xl shadow-md bg-white/5 mt-[23px]">
              <img
                src={hero1}
                alt="Fundadores"
                className="[32vh] lg:h-[100%] w-full object-cover"
                loading="lazy"
              />
            </figure>

            <figure className="overflow-hidden rounded-[25px] sm:rounded-b-none sm:rounded-t-2xl shadow-md bg-white/5 mt-0 sm:mt-21.5 md:mt-[100px]">
              <img
                src={hero2}
                alt="Sede"
                className="h-auto sm:h-[23vh] lg:h-[100%] w-full object-cover"
                loading="lazy"
              />
            </figure>

            <figure className="overflow-hidden rounded-[25px] sm:rounded-b-none sm:rounded-t-2xl shadow-md bg-white/5 mt-[23px]">
              <img
                src={hero3}
                alt="Estufas"
                className="h-auto sm:h-[32vh] lg:h-[100%]  w-full object-cover"
                loading="lazy"
              />
            </figure>

            <figure className="overflow-hidden rounded-[25px] sm:rounded-b-none sm:rounded-t-2xl shadow-md bg-white/5 mt-0 md:mt-[100px] sm:mt-21.5">
              <img
                src={hero4}
                alt="Frota"
                className="h-auto sm:h-[23vh] lg:h-[100%] w-full object-cover"
                loading="lazy"
              />
            </figure>
          </div>
          <div className="lg:hidden md:hidden mt-10 grid grid-cols-1 md:grid-cols-4 gap-4 sm:gap-6">
            <figure className="overflow-hidden rounded-[25px] sm:rounded-b-none sm:rounded-t-2xl bg-white/5">
              <img
                src={hero1mobile}
                alt="Fundadores"
                className="[32vh] lg:h-[100%] w-full object-cover"
                loading="lazy"
              />
            </figure>

            <figure className="overflow-hidden rounded-[25px] sm:rounded-b-none sm:rounded-t-2xl bg-white/5 mt-0 sm:mt-21.5 md:mt-[100px]">
              <img
                src={hero2mobile}
                alt="Sede"
                className="h-auto sm:h-[23vh] lg:h-[100%] w-full object-cover"
                loading="lazy"
              />
            </figure>

            <figure className="overflow-hidden rounded-[25px] sm:rounded-b-none sm:rounded-t-2xl bg-white/5">
              <img
                src={hero3mobile}
                alt="Estufas"
                className="h-auto sm:h-[32vh] lg:h-[100%]  w-full object-cover"
                loading="lazy"
              />
            </figure>

            <figure className="overflow-hidden rounded-[25px] sm:rounded-b-none sm:rounded-t-2xl bg-white/5 mt-0 md:mt-[100px] sm:mt-21.5">
              <img
                src={hero4mobile}
                alt="Frota"
                className="h-auto sm:h-[23vh] lg:h-[100%] w-full object-cover"
                loading="lazy"
              />
            </figure>
          </div>
        </div>
      </div>

      {/* history section */}
      <div className="history">
        <NossaHistoria />
      </div>

      {/* propria */}
      <div className="propria">
        <section className="bg-[var(--color-whitecustom)] py-12 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            {/* Heading + copy */}
            <div className="text-center">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--color-dark)]">
                {t("empresa.propriatitle")}
              </h2>
              <p className="mt-5 max-w-4xl mx-auto text-[var(--color-gray2)] text-base sm:text-lg leading-relaxed">
                {t("empresa.propriatext")}
              </p>
            </div>

            {/* Images */}
            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Left (portrait, narrower) */}
              <figure className="md:col-span-1 overflow-hidden rounded-2xl shadow-sm">
                <img
                  src={propria1}
                  alt="Colheita de tomate"
                  className="w-full h-[280px] sm:h-[360px] md:h-[460px] object-cover"
                  loading="lazy"
                />
              </figure>

              {/* Right (landscape, wider) */}
              <figure className="md:col-span-2 overflow-hidden rounded-2xl shadow-sm">
                <img
                  src={propria2}
                  alt="Tomates na estufa"
                  className="w-full h-[280px] sm:h-[320px] md:h-[460px] object-cover"
                  loading="lazy"
                />
              </figure>
            </div>
          </div>
        </section>
      </div>

      {/* linhas section */}
      <div className="linhas">
        <section className="bg-[#F2F5F6] py-12 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Title + short intro */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-15 mb-10 sm:mb-15 items-center">
              <div className="lg:col-span-6">
                <h2 className="text-3xl text-center sm:text-start sm:text-4xl lg:text-5xl font-bold text-[var(--color-dark)] leading-tight">
                  <span className="block">{t("empresa.linhatitlep1")}</span>
                  <span className="block">{t("empresa.linhatitlep2")}</span>
                </h2>
              </div>

              <div className="lg:col-span-6 flex justify-end">
                <p className="text-center sm:text-start text-[var(--color-gray2)] text-base sm:text-lg leading-relaxed max-w-sm">
                  {t("empresa.linhastext")}
                </p>
              </div>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {/* Card 1 */}
              <article className="h-full rounded-2xl bg-[var(--color-prime)] text-[var(--color-whitecustom)] shadow-lg ring-1 ring-black/5 p-6 sm:p-8 flex flex-col items-center sm:items-start">
                <img
                  src={icon1}
                  alt=""
                  className="h-25 w-25 mb-4 sm:mb-6 opacity-95"
                  loading="lazy"
                />
                <h3 className="text-2xl sm:text-2xl font-bold">{t("empresa.card1title")}</h3>
                <div className="mt-4 space-y-3 text-sm sm:text-base leading-relaxed text-[var(--color-whitecustom)] text-center sm:text-start">
                  <p>
                    {t("empresa.card1para1")}
                  </p>
                  <p>
                    {t("empresa.card1para2")}
                  </p>
                  <p>
                    {t("empresa.card1para3")}
                  </p>
                  <p>
                    {t("empresa.card1para4")}
                  </p>
                </div>
              </article>

              {/* Card 2 */}
              <article className="h-full rounded-2xl bg-[var(--color-prime)] text-[var(--color-whitecustom)] shadow-lg ring-1 ring-black/5 p-6 sm:p-8 flex flex-col items-center sm:items-start">
                <img
                  src={icon2}
                  alt=""
                  className="h-25 w-25 mb-4 sm:mb-6 opacity-95"
                  loading="lazy"
                />
                <h3 className="text-2xl sm:text-2xl font-bold">
                  {t("empresa.card2title")}
                </h3>
                <div className="mt-4 space-y-3 text-sm sm:text-base leading-relaxed text-[var(--color-whitecustom)] text-center sm:text-start">
                  <p>
                    {t("empresa.card2para1")}
                  </p>
                  <p>
                    {t("empresa.card2para2")}
                  </p>
                  <p>
                    {t("empresa.card2para3")}
                  </p>
                </div>
              </article>

              {/* Card 3 */}
              <article className="h-full rounded-2xl bg-[var(--color-prime)] text-[var(--color-whitecustom)] shadow-lg ring-1 ring-black/5 p-6 sm:p-8 flex flex-col items-center sm:items-start">
                <img
                  src={icon3}
                  alt=""
                  className="h-25 w-25 mb-4 sm:mb-6 opacity-95"
                  loading="lazy"
                />
                <h3 className="text-2xl sm:text-2xl font-bold">{t("empresa.card3title")}</h3>
                <div className="mt-4 space-y-3 text-sm sm:text-base leading-relaxed text-[var(--color-whitecustom)] text-center sm:text-start">
                  <p>{t("empresa.card3para1")}</p>
                  <p>
                    {t("empresa.card3para2")}
                  </p>
                  <p>
                    {t("empresa.card3para3")}
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>
      </div>

      {/* lelio section */}
      <div className="lelio">
        <section className="w-full bg-[var(--color-whitecustom)] py-12 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-22 items-center">
              {/* Right: Image */}
              <div className="order-first lg:order-none">
                <div className="overflow-hidden">
                  <img
                    src={lelio}
                    alt="Produção própria zona oeste"
                    className="w-full h-auto sm:h-auto lg:h-auto object-cover"
                  />
                </div>
              </div>

              {/* Left: Text content */}
              <div className="text-center lg:text-left">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight">
                  <span className="text-[var(--color-prime)]">{t("empresa.lileotitle1")}</span>
                  <br />
                  <span className="text-[var(--color-dark)]">
                    {t("empresa.lileotitle2")}
                  </span>
                </h2>

                <p className="mt-6 text-[var(--color-gray2)] text-base sm:text-lg leading-relaxed max-w-lg mx-auto lg:mx-0">
                  {t("empresa.lileotext")}
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* infra slider */}
      <div className="infraslider" id="infrastructure">
        <Infraslider />
      </div>
      {/* Brand Slider Section */}
      <div className="branslider">
        <BrandMarqueeSlick />
      </div>
    </div>
  );
}
