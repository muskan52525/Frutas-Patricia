import React from "react";
import { Link } from "react-router-dom";
import { data } from "../data/form.js";
 import { useTranslation } from "react-i18next";

export default function Ethics() {
  const codigos =
    data.find((section) => section.id === "CódigosData")?.items ?? [];
    const { t } = useTranslation();
   
  return (
    <div className="max-w-7xl mx-auto p-6 text-center py-30">
      <h1 className="text-5xl lg:text-[60px] font-bold text-[var(--color-prime)] mb-15">
        Códigos de Conduta
      </h1>

      <div className="flex flex-col gap-[25px] max-w-full sm:max-w-[986px] w-full text-start mx-auto ">
        {codigos.map((item) => (
          <div
            key={item.id}
            className="py-3 sm:py-5 bg-white shadow-[0_4px_23.5px_0_#00000040] rounded-[20px] px-5 sm:px-10"
          >
            <p className="text-sm sm:text-2xl text-black sm:font-bold font-medium">
              {item.title}
            </p>
            <a
              href={t(item.link)}
              target="_blank"
              className="font-medium sm:font-bold text-sm sm:text-lg text-[#009B3E] leading-7 pt-3 "
            >
              ver mais
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
