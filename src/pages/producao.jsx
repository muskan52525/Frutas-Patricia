import React from "react";
import BrandMarqueeSlick from "../components/Comman/brandslider.jsx";
import productsec from "../assets/Home/productsec.jpg";
import brand1 from "../assets/production/brand1.png";
import brand2 from "../assets/production/brand2.png";
import brand3 from "../assets/production/brand3.png";
import brand4 from "../assets/production/brand4.png";
import iso from "../assets/production/iso.png";
import grace from "../assets/production/grace.png";

import lelio from "../assets/Empresa/lelio.png";

import { useTranslation } from "react-i18next";

export default function Productions() {
  const { t } = useTranslation();
  return (
    <div className="max-w-auto mx-auto">
      <div className="product py-5">
        <section className="w-full bg-[var(--color-whitecustom)] py-8 lg:py-20">
          <div className="mx-auto max-w-full pl-0 sm:pl-6 lg:pl-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-20 gap-12 items-center lg:gap-60">
              {/* Left: Text content */}
              <div className="text-center lg:text-left justify-end sm:justify-center md:justify-center lg:justify-end grid px-5 ml-0">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight">
                  <span className="text-[var(--color-prime)]">
                    {t("producao.producaoheadingp1")} <br />
                    {t("producao.producaoheadingp2")}
                  </span>
                </h2>

                <p className="mt-6 text-[var(--color-gray2)] text-base sm:text-lg leading-relaxed max-w-lg mx-auto lg:mx-0">
                  {t("producao.producaotext")}
                </p>
              </div>
              {/* Right: Image */}
              <div className="order-first lg:order-none">
                <div className="overflow-hidden  rounded-l-2xl shadow-md">
                  <img
                    src={productsec}
                    alt="Produção própria zona oeste"
                    className="w-full h-[200px] sm:h-[420px] lg:h-[600px] object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div>
        <section className="w-full bg-[url('../src/assets/Home/bg.jpg')] bg-cover bg-center py-12 lg:py-20">
          <div className="mx-auto max-w-full pl-0 sm:pl-6 lg:pl-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center lg:gap-50">
              {/* Left: Text content */}
              <div className="text-center lg:text-left justify-end sm:justify-center md:justify-center lg:justify-end grid px-5">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight">
                  <br />
                  <span className="text-[var(--color-whitecustom)]">
                    {t("producao.propiaheadingp1")}
                    <br />
                    {t("producao.propiaheadingp2")} <br /> {t("producao.propiaheadingp3")}
                  </span>
                </h2>

                <p className="mt-6 text-[var(--color-whitecustom)] text-center sm:text-left text-base sm:text-lg  leading-relaxed max-w-lg mx-auto lg:mx-0">
                  {t("producao.propiatext1")}
                </p>
                <p className="mt-6 text-[var(--color-whitecustom)] text-center sm:text-left text-base sm:text-lg leading-relaxed max-w-lg mx-auto lg:mx-0">
                  {t("producao.propiatext2")}
                </p>
              </div>
              {/* Right: Image */}
              <div className="order-2 lg:order-none">
                <div className="overflow-hidden justify-end flex">
                  <img
                    src={t("producao.PTMap")}
                    alt="Produção própria zona oeste"
                    className="w-[75%] h-auto sm:h-auto md:h-auto lg:h-[82vh] object-contain justify-end flex"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* lelio section */}
      <div className="lelio">
        <section className="w-full bg-[var(--color-whitecustom)] py-12 lg:py-20 lg:pb-10" id="home-production">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-0">
            <div id="certifications" className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-22 items-center">
              {/* Right: Image */}
              <div className="order-first lg:order-none">
                <div className="overflow-hidden">
                  <img
                    src={lelio}
                    alt="Produção própria zona oeste"
                    className=" min-h-40vh sm:h-auto lg:min-h-20vh object-cover"
                  />
                </div>
              </div>

              {/* Left: Text content */}
              <div className="text-center lg:text-left">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight">
                  <span className="text-[var(--color-prime)]">{t("producao.qualidadetitle")}</span>
                  <br />
                  <span className="text-[var(--color-dark)]">
                    {t("producao.qualidadesubtitle")}
                  </span>
                </h2>

                <p className="mt-6 text-[var(--color-gray2)] text-base sm:text-lg leading-relaxed max-w-lg mx-auto lg:mx-0">
                  {t("producao.qualidadetext")}
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* logo */}
      <div className="logo">
        <section className="bg-white py-5">
          <div className="mx-auto max-w-7xl px-4 lg:px-0">
            <div className="grid grid-cols-2 md:grid-cols-4 items-center gap-x-10 gap-y-8">
              <div className="flex items-center justify-center">
                <img
                  src={brand1}
                  alt="IFS Food"
                  className="h-auto sm:h-auto md:h-auto w-auto object-cover"
                  loading="lazy"
                />
              </div>
              <div className="flex items-center justify-center">
                <img
                  src={brand2}
                  alt="BRC Food Certificated"
                  className="h-auto sm:h-auto md:h-auto w-auto object-cover"
                  loading="lazy"
                />
              </div>
              <div className="flex items-center justify-center gap-6">
                <img
                  src={brand3}
                  alt="GLOBALG.A.P."
                  className="h-auto sm:h-auto md:h-auto w-auto object-cover"
                  loading="lazy"
                />
              </div>
              <div className="flex items-center justify-center gap-6">
                <img
                  src={brand4}
                  alt="GRASP"
                  className="h-auto sm:h-auto md:h-auto w-auto object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* sustain */}
      <section className="bg-[var(--color-whitecustom)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 lg:py-30">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: copy */}
            <div>
              <h2 className="text-center sm:text-start text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight text-slate-900">
                {t("producao.sustentabilidadetitle")}
              </h2>

              <p className="mt-6 text-[var(--color-gray2)] text-base sm:text-lg leading-relaxed text-center sm:text-start">
                {t("producao.sustentabilidadetext")}
              </p>
            </div>

            {/* Right: two square cards */}
            <div className="flex flex-col gap-8 items-center">
              <div
                className="rounded-3xl bg-[var(--color-whitecustom)] p-6 sm:p-8 ring-1 ring-slate-900/5 shadow-[0_15px_35px_0_rgba(4,58,83,0.15)]"
              >
                <div className="h-40 w-40 sm:h-44 sm:w-44 md:h-35 md:w-35 lg:h-30 lg:w-30">
                  <img
                    src={iso}
                    alt="ISO 14001"
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>

              <div
                className="rounded-3xl bg-[var(--color-whitecustom)] p-6 sm:p-8 ring-1 ring-slate-900/5
                            shadow-[0_15px_35px_0_rgba(4,58,83,0.15)]"
              >
                <div className="h-40 w-40 sm:h-44 sm:w-44 md:h-35 md:w-35 lg:h-30 lg:w-30">
                  <img
                    src={grace}
                    alt="GRACE • Empresa Associada"
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Slider Section */}

      <div className="branslider">
        <BrandMarqueeSlick />
      </div>
    </div>
  );
}
