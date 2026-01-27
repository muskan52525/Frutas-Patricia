import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    supportedLngs: ["en", "es", "pt"],

    fallbackLng: "pt",
    lng: "pt", // 👈 FORCE DEFAULT

    detection: {
      order: [
        "querystring",
        "cookie",        // 👈 ADD THIS
        "localStorage",
        "navigator",
        "htmlTag"
      ],

      caches: ["localStorage", "cookie"], // 👈 ADD COOKIE

      lookupCookie: "i18next",
      lookupLocalStorage: "i18nextLng"
    },

    backend: {
      loadPath: "/locales/{{lng}}/translation.json"
    },

    nonExplicitSupportedLngs: true, // 👈 en-US → en
    cleanCode: true,               // 👈 normalize lang

    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
