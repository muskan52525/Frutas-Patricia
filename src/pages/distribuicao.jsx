import React from "react";
import { data as allSections } from "../data/form.js";
import icon1 from "../assets/Empresa/icon1.png";
import icon3 from "../assets/Empresa/icon3.png";
import { useTranslation } from "react-i18next";

export default function Distribution() {
  const section = allSections.find((s) => s.id === "distribution") || {
    images: [],
  };
  const stats = [
    { value: "+50", label: "distribuicao.stat1" },
    { value: "+18", label: "distribuicao.stat2" },
    { value: "+182M", label: "distribuicao.stat3" },
  ];
  const { t } = useTranslation();
  return (
    <div className="max-w-auto mx-auto">
      <section className="bg-[var(--color-whitecustom)] py-14 sm:py-16 lg:py-30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Title + Subtitle */}
          <header className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl sm:text-5xl font-bold text-[var(--color-dark)]">
              {t("distribuicao.title")}
            </h2>
            <p className="mt-4 text-[var(--color-gray2)] text-base sm:text-lg leading-relaxed">
              {t("distribuicao.text")}
            </p>
          </header>

          {/* Grid */}
          <div className="mt-10 sm:mt-12 lg:mt-14 grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
            {section.images.map((img, i) => (
              <figure
                key={i}
                className={`relative overflow-hidden rounded-2xl ${
                  i === 1 ? "lg:col-span-2" : "lg:col-span-1"
                }`}
              >
                <img
                  src={img.src}
                  alt={img.name}
                  loading="lazy"
                  className="w-full h-[60vh] sm:h-[70vh] lg:h-[460px] object-cover"
                />
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20 md:pb-30">
        <div className="mx-auto max-w-5xl px-4">
          {/* Pill */}
          <div
            className="mx-auto w-full md:w-auto bg-[var(--color-prime)] text-[var(--color-whitecustom)] justify-center flex
                        rounded-4xl md:rounded-full shadow-xl ring-1 ring-black/5
                        px-6 sm:px-10 py-8"
          >
            <ul className="grid grid-cols-1 sm:grid-cols-3 gap-y-6 sm:gap-y-0 sm:gap-x-12 text-center w-full items-center pr-0 lg:pr-3">
            {/* <ul className="grid grid-cols-1 sm:grid-cols-3 gap-y-6 sm:gap-y-0 sm:gap-x-12 text-center max-w-3xl items-center pr-0 lg:pr-3"> */}
              {stats.map((s, i) => (
                <li
                  key={i}
                  className="flex flex-col items-center justify-center sm:pr-7"
                >
                  <span className="text-3xl sm:text-4xl lg:text-[60px] font-bold leading-none">
                    {s.value}
                  </span>
                  <span className="mt-2 text-sm sm:text-base lg:text-xl opacity-95">
                    {t(s.label)}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-[#F2F5F6] py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Title + short intro */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-15 mb-10 sm:mb-15">
            <div className="lg:col-span-3 sm:col-span-6 md:col-span-6">
              <h2 className="text-center sm:text-start text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--color-dark)] leading-tight">
                <span className="block">{t("distribuicao.titlep1")}</span>
                <span className="block">{t("distribuicao.titlep2")}</span>
              </h2>
            </div>

            <div className="text-center sm:text-start lg:col-span-9 sm:col-span-6 md:col-span-6">
              <p className="text-[var(--color-gray2)] text-base sm:text-lg leading-relaxed">
                {t("distribuicao.intro")}
              </p>
            </div>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-5 mx-0 sm:mx-6 lg:mx-40 md:-mx-5">
            {/* Card 1 */}
            <article className="h-full rounded-2xl bg-[var(--color-prime)] text-[var(--color-whitecustom)] shadow-lg ring-1 ring-black/5 p-6 sm:p-8 flex flex-col max-w-full lg:max-w-sm">
              <div className="flex justify-center sm:justify-start">

              <img
                src={icon1}
                alt=""
                className="h-30 w-30 mb-4 sm:mb-6 opacity-95"
                loading="lazy"
              />
              </div>
              <h3 className="text-2xl sm:text-2xl font-bold text-center sm:text-start">
                {t("distribuicao.card1title")}
              </h3>
              <div className="mt-4 space-y-3 text-sm sm:text-base leading-relaxed text-[var(--color-whitecustom)] w-full text-center sm:text-start">
                <p>
                  {t("distribuicao.card1text1")}
                </p>
                <p>{t("distribuicao.card1text2")}</p>
              </div>
            </article>

            {/* Card 2 */}
            <article className="h-full rounded-2xl bg-[var(--color-prime)] text-[var(--color-whitecustom)] shadow-lg ring-1 ring-black/5 p-6 sm:p-8 flex flex-col max-w-full lg:max-w-sm">
             <div className="flex justify-center sm:justify-start">

              <img
                src={icon3}
                alt=""
                className="h-30 w-30 mb-4 sm:mb-6 opacity-95"
                loading="lazy"
              />
             </div>
              <h3 className="text-2xl sm:text-2xl font-bold text-center sm:text-start">
                {t("distribuicao.card2title")}
              </h3>
              <div className="mt-4 space-y-3 text-sm sm:text-base leading-relaxed text-[var(--color-whitecustom)] text-center sm:text-start ">
                <p>
                  {t("distribuicao.card2text1")}
                </p>
                <p>
                  {t("distribuicao.card2text2")}
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
}
