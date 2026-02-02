// src/pages/ProductsPage.jsx
import React, { useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { data as allData } from "../data/form.js";
import rightArrow from "../assets/Home/rightarrow.svg";
import { useTranslation } from "react-i18next";

export default function ProductsPage() {
  const marcas = Array.isArray(allData)
    ? allData.find((s) => s.id === "marcas")?.items ?? []
    : [];
  const empresas = Array.isArray(allData)
    ? allData.find((s) => s.id === "empresas")?.items ?? []
    : [];

  const [active, setActive] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  console.log("Active ID:", active?.id);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 640;
      setIsMobile(mobile);
      console.log("📱 Window resized, isMobile =", mobile);
    };

    handleResize(); // run on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // 👇 Add this inside your component, not outside
  console.log("🔍 Current isMobile:", isMobile);

  // --- modal helpers ---
  const onClose = useCallback(() => setActive(null), []);
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    if (active) {
      document.body.classList.add("overflow-hidden");
      window.addEventListener("keydown", onKey);
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
      window.removeEventListener("keydown", onKey);
    };
  }, [active, onClose]);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  console.log("isMobile:", isMobile);
  const { t } = useTranslation();

  return (
    <section className="bg-[#F5F7F8] py-12 sm:py-16 lg:py-25">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* ====== MARCAS DO GRUPO ====== */}
        <header className="text-center max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl lg:text-[48px] font-extrabold text-slate-900">
            {t("marcas.title1")}
          </h1>
          <p className="my-8 text-[14px] md:text-[18px] text-[var(--color-dark)]">
            {t("marcas.text1")}
          </p>
        </header>

        <CardsGrid items={marcas} onCardClick={setActive} />

        {/* ====== EMPRESAS DO GRUPO ====== */}
        <header className="text-center max-w-3xl mx-auto mt-16 sm:mt-20 lg:mt-24">
          <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-extrabold text-slate-900">
            {t("marcas.title2")}
          </h2>
          <p className="my-8 text-[14px] md:text-[18px] text-[var(--color-dark)]">
            {t("marcas.text2")}
          </p>
        </header>

        <CardsGrid items={empresas} onCardClick={setActive} />
      </div>

      {/* ===== Modal shared by both sections ===== */}
      {active && (
        <Modal onClose={onClose}>
          <div className="flex flex-col justify-center items-center sm:text-start sm:grid sm:grid-cols-1 md:grid-cols-2 gap-8 p-5">
            <div className="w-full">
              <h3 className="text-center sm:text-start text-2xl lg:text-3xl font-extrabold text-slate-900">
                {t(`marcas.${active.name}`)}
              </h3>

              {active.mheading && (
                <p className="mt-6 text-[var(--color-dark)] font-bold text-justify text-[14px] md:text-[18px] leading-relaxed">
                  {t(`marcas.${active.mheading}`)}
                </p>
              )}

              <div className="mt-6 text-[var(--color-dark)] leading-relaxed space-y-4">
                {Array.isArray(active.story) ? (
                  active.story.map((para, i) => (
                    <p
                      key={i}
                      className="text-justify text-[14px] md:text-[18px]"
                    >
                      {t(`marcas.${para}`)}
                    </p>
                  ))
                ) : (
                  <p className="text-justify text-[14px] md:text-[18px]">
                    {active.story}
                  </p>
                )}
              </div>
              <div className="flex justify-center sm:justify-start">
                {active?.button?.show &&
                  !(
                    isMobile &&
                    [
                      "crush",
                      "westfarm",
                      "mrred",
                      "luxnuts",
                      "dodu",
                      "quintas",
                    ].includes(
                      active?.id
                        ?.toLowerCase()
                        .normalize("NFD") // break accented characters (ã → a + ˜)
                        .replace(/[\u0300-\u036f]/g, "") // remove accent marks
                        .replace(/[^a-z0-9]/g, "") // remove spaces, dots, etc.
                    )
                  ) && (
                    <Link
                      to={active.button.link}
                      className="mt-8 inline-flex items-center gap-3 rounded-full bg-[var(--color-prime)] px-6 py-3 font-semibold text-white shadow-sm ring-1 ring-emerald-700/20 hover:bg-[#27a95b] focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
                    >
                      {t(`marcas.${active.button.label}`)}
                      <span className="inline-grid place-items-center rounded-full bg-[#27a95b] p-1">
                        <img src={rightArrow} alt="Arrow" />
                      </span>
                    </Link>
                  )}
              </div>
            </div>

            <div className="flex items-center justify-center w-[35%] h-22 md:h-full md:w-full lg:h-full -order-1 md:order-0">
              <img
                src={active.logo || active.thumb}
                alt={active.name}
                className="max-h-[320px] w-auto  object-contain"
              />
            </div>
          </div>
        </Modal>
      )}
    </section>
  );
}

function CardsGrid({ items, onCardClick }) {
  const { t } = useTranslation();
  return (
    <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
      {items.map((it) => (
        <article
          key={it.id}
          onClick={() => onCardClick(it)}
          className="flex flex-col justify-center sm:justify-start items-center sm:items-start group cursor-pointer rounded-[20px] bg-white shadow-[0px_4px_23.5px_0_rgba(0,0,0,0.25)] ring-1 ring-black/5 p-7"
        >
          <div className="flex items-center gap-4 h-32 w-32">
            <img
              src={it.thumb || it.logo}
              alt={it.name}
              className="h-full w-full object-contain"
              loading="lazy"
            />
          </div>

          {it.short && (
            <p className="text-center sm:text-start mt-4 text-base text-[var(--color-dark)] leading-relaxed line-clamp-3">
              {t(`marcas.${it.short}`)}
            </p>
          )}

          <div className="mt-4">
            <Link
              onClick={(e) => {
                e.stopPropagation();
                onCardClick(it); // open modal with this card's data
              }}
              className="inline-flex items-center gap-2 text-[var(--color-prime)] font-bold hover:text-emerald-700"
            >
             {t("marcas.cardbutton")}
            </Link>
          </div>
        </article>
      ))}
    </div>
  );
}

// function Modal({ children, onClose }) {
//   return (
//     <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
//       <div className="absolute inset-0 bg-black/50" onClick={onClose} />
//       <div className="relative z-[101] w-full max-w-5xl rounded-2xl bg-white p-3 sm:p-8 shadow-xl">
//         <button
//           onClick={onClose}
//           aria-label="Fechar"
//           className="absolute right-3 top-3 rounded-full p-2 text-slate-500 hover:bg-slate-100 hover:text-slate-700 cursor-pointer"
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-6 w-6"
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M6 18L18 6M6 6l12 12"
//             />
//           </svg>
//         </button>
//         {children}
//       </div>
//     </div>
//   );
// }

function Modal({ children, onClose }) {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
      />

      {/* Modal */}
      <div
        className="
           min-h-dvh flex items-center justify-center
            pt-[env(safe-area-inset-top)] pb-[env(safe-area-inset-bottom)]
            md:min-h-auto md:block md:items-start md:justify-start md:pt-0 md:pb-0
          relative z-[101]
          w-screen h-screen
          sm:h-auto sm:max-w-5xl sm:rounded-2xl
          bg-white
          p-4 sm:p-8
          shadow-xl
          overflow-y-auto
        "
      >
        {/* Close button */}
        <button
          onClick={onClose}
          aria-label="Fechar"
          className="absolute right-3 top-3 rounded-full p-2 text-slate-500 hover:bg-slate-100 hover:text-slate-700 top-[15%] md:top-[2%]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {children}
      </div>
    </div>
  );
}

