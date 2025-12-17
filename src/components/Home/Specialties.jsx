import React from "react";
import tomate from "../../assets/Home/tomate.png";
import capisum from "../../assets/Home/capsicum.png";
import courgate from "../../assets/Home/courgate.png";
import apple from "../../assets/Home/apple.png";
import { useTranslation } from "react-i18next";


const products = [
  {
    name: "item1name",
    description1: "item1description1",
    description2: "item1description2",
    image: tomate,
  },
  {
    name: "item2name",
    description1: "item2description1",
    description2: "item2description2",
    image: capisum,
  },
  {
    name: "item3name",
    description1: "item3description1",
    description2: "item3description2",
    image: courgate,
  },
  {
    name: "item4name",
    description1: "item4description1",
    description2: "item4description2",
    image: apple  ,
  },
];

export default function Specialties() {
  const { t } = useTranslation();
  return (
    <section className="py-10 md:py-16 bg-[var(--color-whitecustom)]">
      <div className="max-w-6xl mx-auto px-4">
        {/* Tag */}
        <div className="flex justify-center mb-6">
          <span className="bg-[var(--color-prime)] text-[var(--color-whitecustom)] px-4 py-1 rounded-full text-lg font-regular">
            {t("home.specialitytag")}
          </span>
        </div>

        {/* Title */}
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
          {t("home.specialitytitle")}
        </h2>
        <p className="text-center text-lg md:text-lg text-[var(--color-gray2)] max-w-4xl mx-auto mb-12">
          {t("home.specialitytext")}
        </p>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((item, idx) => (
            <div
              key={idx}
              className="bg-[var(--color-graycustom)] rounded-2xl p-5 text-center shadow"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-40 h-40 object-contain mx-auto mb-4"
              />
              <div className="card-content">
                <h3 className="font-bold text-2xl mb-2">{t(`home.products.${item.name}`)}</h3>
                <p className="text-base text-[var(--color-gray2)] pb-5">{t(`home.products.${item.description1}`)}</p>
                <p className="text-base text-[var(--color-gray2)]">{t(`home.products.${item.description2}`)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
