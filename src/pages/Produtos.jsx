import React from "react";
import { Link } from "react-router-dom";
import { data as allData } from "../data/form.js";
import { useTranslation } from "react-i18next";

/* ---------- small UI blocks ---------- */
const ProductCard = ({ name, img, showInfo = true }) => {
  const { t } = useTranslation(); 

  return (
    <article className="group rounded-2xl bg-white p-8 sm:p-5 lg:p-5 shadow-[0_4px_23.5px_0px_rgba(0,0,0,0.26)] ring-1 ring-slate-900/5">
      <div className="products">
        <div className="h-20 sm:h-24 lg:h-28 flex items-center justify-center">
          <img
            src={img}
            alt={t(name)}
            className="h-30 lg:h-30 w-auto mt-4 object-cover group-hover:scale-[1.02] transition"
            loading="lazy"
          />
        </div>

        <h3 className="mt-6 text-center text-[18px] sm:text-[20px] lg:text-[24px] font-normal text-slate-900 min-h-[1.9rem]">
          {t(name)}
        </h3>

        {showInfo && <div className="mt-2 flex justify-center"></div>}
      </div>
    </article>
  );
};

const ProductGrid = ({ items, showInfo = true }) => (
  <div className="mt-6 sm:mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
    {items.map((p, i) => (
      <ProductCard key={i} {...p} showInfo={showInfo} />
    ))}
  </div>
);

/* ---------- page ---------- */
export default function Produtos() {
  // read ONLY product arrays from JSON
  const specialties = Array.isArray(allData)
    ? allData.find((b) => b.id === "products_specialties")?.items ?? []
    : [];

  const packaged = Array.isArray(allData)
    ? allData.find((b) => b.id === "products_packaged")?.items ?? []
    : [];

    const { t } = useTranslation();

  return (
    <main className="bg-[#F3F6F7] py-12 sm:py-16 lg:py-25">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-0 mt-6">
        {/* Section 1 (static text) */}
        <header className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-3xl lg:text-[48px] font-bold text-slate-900">
            {t("productos.title1")}
          </h2>
          <p className="mt-3 text-xs sm:text-sm lg:text-lg pb-8 text-slate-700">
            {t("productos.text")}
          </p>
        </header>

        <ProductGrid items={specialties} showInfo />


        {/* Section 2 (static title; no "Mais info") */}
        <header className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-[48px] py-8 pt-30 font-bold text-slate-900">
            {t("productos.title2")}
          </h2>
        </header>

        <ProductGrid items={packaged} showInfo={false} />
      </div>
    </main>
  );
}
