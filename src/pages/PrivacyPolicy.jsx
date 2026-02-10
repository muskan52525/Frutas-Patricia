import React from "react";
import { useTranslation } from "react-i18next";

function PrivacyPolicy() {
  const { t } = useTranslation();
  return (
    <div className="max-w-7xl mx-auto p-6 text-left py-30">
      <h1 className="text-5xl lg:text-[60px] font-bold text-[var(--color-prime)] mb-15">
        {t("privacypolicy.clause1")}
      </h1>
      <p className="mb-4">
        {t("privacypolicy.clause1p1")}
      </p>
      <p className="mb-4">
        {t("privacypolicy.clause1p2")}
      </p>
      <p className="mb-4">
        {t("privacypolicy.clause1p3")}
      </p>
      <p className="mb-4">
        {t("privacypolicy.clause1p4")}
      </p>
      <p className="mb-4 mt-8">
        {t("privacypolicy.addressp1")}
        <br />{" "}
        <i>
          Rua Poço de Arroz Nº2
          <br />
          2560-030 A-dos-Cunhados <br />
          Torres Vedras – Portugal <br />
        </i>
        {t("privacypolicy.addressp5")}
      </p>

      <h2 className="text-3xl text-[var(--color-prime)] font-bold mt-11 mb-5">
        {t("privacypolicy.clause2title")}
      </h2>
      <p className="mb-4">
        {t("privacypolicy.clause2p1")}
      </p>
      <p className="mb-4">
        {t("privacypolicy.clause2p2")}
      </p>
      <p className="mb-4">
        {t("privacypolicy.clause2p3")}
      </p>
      <p className="mb-4">
        {t("privacypolicy.clause2p4")}
      </p>

      <h2 className="text-3xl text-[var(--color-prime)] font-bold mt-11 mb-3">
        {t("privacypolicy.definitiontitle")}
      </h2>
      <h2 className="text-xl text-[var(--color-dark)] font-bold mb-5">
        {t("privacypolicy.defheading")}
      </h2>
      <p className="mb-4">
        {t("privacypolicy.deftext")}
      </p>

      <h2 className="text-3xl text-[var(--color-prime)] font-bold mt-11 mb-3">
        {t("privacypolicy.datacollectiontitle")}
      </h2>
      <h2 className="text-xl text-[var(--color-dark)] font-bold mb-5 mt-3">
        {t("privacypolicy.data1")}
      </h2>
      <p className="mb-4">
        {t("privacypolicy.data1text1")}
      </p>
      <p className="mb-4">
        {t("privacypolicy.data1text2")}
      </p>
      <p className="mb-4">
        {t("privacypolicy.data1text3")}
      </p>

      <h2 className="text-xl text-[var(--color-dark)] font-bold mb-5 mt-11">
        {t("privacypolicy.data2")}
      </h2>
      <p className="mb-4">
        {t("privacypolicy.data2text1")}
      </p>
      <p className="mb-4">
        {t("privacypolicy.data2text2")}
      </p>
      <p className="mb-4">
        {t("privacypolicy.data2text3")}
      </p>

      <h2 className="text-xl text-[var(--color-dark)] font-bold mb-5 mt-11">
        {t("privacypolicy.data3")}
      </h2>
      <p className="mb-4">
        {t("privacypolicy.data3text1")}
      </p>
      <p className="mb-4">
        {t("privacypolicy.data3text2")}
      </p>

      <h2 className="text-xl text-[var(--color-dark)] font-bold mb-5 mt-11">
        {t("privacypolicy.data4")}
      </h2>
      <p className="mb-4">
        {t("privacypolicy.data4text1")}
      </p>

      <h2 className="text-xl text-[var(--color-dark)] font-bold mb-5 mt-11">
        {t("privacypolicy.clause3title")}
      </h2>
      <p className="mb-4">
        {t("privacypolicy.clause3p1")}
      </p>
      <p className="mb-4">
        {t("privacypolicy.clause3p2")}
      </p>

      <h2 className="text-xl text-[var(--color-dark)] font-bold mb-5 mt-11">
        {t("privacypolicy.data5")}
      </h2>
      <p className="mb-4">
        {t("privacypolicy.data5text")}
      </p>

      <h2 className="text-3xl text-[var(--color-prime)] font-bold mt-11 mb-3">
        Cookies
      </h2>
      <h2 className="text-xl text-[var(--color-dark)] font-bold mb-5 mt-3">
        {t("privacypolicy.cookies1")}
      </h2>
      <p className="mb-4">
        {t("privacypolicy.cookies1p1")}.
      </p>
      <p className="mb-4">
        {t("privacypolicy.cookies1p2")}
      </p>
      <p className="mb-4">
        {t("privacypolicy.cookies2")}
      </p>
      <p className="mb-4">
        <b>{t("privacypolicy.cookies2p1")}</b> {t("privacypolicy.cookies2text1")}
      </p>
      <p className="mb-4">
        <b>{t("privacypolicy.cookies2p2")}</b> {t("privacypolicy.cookies2text2")}
      </p>
      <p className="mb-4">
        <b>{t("privacypolicy.cookies2p3")}</b> {t("privacypolicy.cookies2text3")}
      </p>
      <p className="mb-4">
        <b>{t("privacypolicy.cookies2p4")}</b> {t("privacypolicy.cookies2text4")}
      </p>
      <p className="mb-4">
        <b>{t("privacypolicy.cookies2p5")}</b> {t("privacypolicy.cookies2text5")}
      </p>
      <p className="mb-4">
        {t("privacypolicy.cookies2text")}
      </p>

      <h2 className="text-xl text-[var(--color-dark)] font-bold mb-3 mt-8">
        {t("privacypolicy.cookies3")}
      </h2>
      <p className="mb-4">
        {t("privacypolicy.cookies3text")}
      </p>
      <p className="mb-4">
        {t("privacypolicy.cookies4")}
      </p>
      <p className="mb-4">
        {t("privacypolicy.cookies4text")}
      </p>

      <h2 className="text-3xl text-[var(--color-prime)] font-bold mt-11 mb-3">
        {t("privacypolicy.clause5")}
      </h2>
      <h2 className="text-xl text-[var(--color-dark)] font-bold mb-5 mt-3">
        {t("privacypolicy.clause5subtitle")}
      </h2>
      <p className="mb-4">
        {t("privacypolicy.clause5p1")}
      </p>
      <p className="mb-4">
        {t("privacypolicy.clause5p2")}
      </p>
      <p className="mb-4 mt-8">
        Frutas Patricia Pilar SA
        <br />{" "}
        <i>
          Rua Poço de Arroz Nº2
          <br />
          2560-030 A-dos-Cunhados <br />
          Torres Vedras – Portugal <br />
        </i>
        {t("privacypolicy.addressp5")}
      </p>

      <h2 className="text-xl text-[var(--color-dark)] font-bold mb-3 mt-8">
        {t("privacypolicy.clause6")}
      </h2>
      <p className="mb-4">
        {t("privacypolicy.clause6subtitle")}
      </p>
      <p className="mb-4">
        {t("privacypolicy.clause6p1")}
      </p>
      <p className="mb-4">
        {t("privacypolicy.clause6p2")}
        <i>rgpd@patriciapilar.pt</i>
      </p>

      <h2 className="text-xl text-[var(--color-dark)] font-bold mb-3 mt-8">
        {t("privacypolicy.clause7")}
      </h2>
      <p className="mb-4">
        {t("privacypolicy.clause7p1")}
      </p>
      <p className="mb-4">
        {t("privacypolicy.clause7p2")}
      </p>
      <p className="mb-4">
        {t("privacypolicy.clause7p3")}
      </p>
      <p className="mb-4">
        {t("privacypolicy.clause7p4")}
      </p>
      <p className="mb-4">
        {t("privacypolicy.clause7p5")}
      </p>
      <p className="mb-4">
        {t("privacypolicy.clause7p6")}
      </p>
      <p className="mb-4">
        {t("privacypolicy.clause7p7")}
      </p>
      <p className="mb-4">
        {t("privacypolicy.clause7p8")}
      </p>
      <p className="mb-4">
        {t("privacypolicy.clause7p9")}
      </p>

      <h2 className="text-xl text-[var(--color-dark)] font-bold mb-3 mt-8">
        {t("privacypolicy.clause8")}
      </h2>
      <p className="mb-4">
        {t("privacypolicy.clause8text")}
      </p>
    </div>
  );
}

export default PrivacyPolicy;
