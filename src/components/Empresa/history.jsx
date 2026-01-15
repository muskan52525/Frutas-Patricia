import React from "react";
import arrow from "../../assets/Empresa/arrow.png";
import { useTranslation } from "react-i18next";

export default function HistoriaWithSvgArrow() {
  const { t } = useTranslation();
  return (
    <section className="bg-[#F3F6F7] py-14 sm:py-16 lg:py-25">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Heading + intro (optional) */}
        <header className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900">
            {t("empresa.historytitle")}
          </h2>
          <p className="mt-5 text-[var(--color-dark)] leading-relaxed text-base sm:text-lg">
            {t("empresa.historytext")}
          </p>
        </header>

        {/* ===== Tablet/Desktop with SVG arrow ===== */}
        <div className="hidden md:grid mt-12 lg:mt-16 gap-0">
          {/* Top milestones (columns 2 and 4) */}
          <div className="grid grid-cols-5 gap-6 items-end">
            <div />
            <MilestoneTop
              title="1995–1998"
              text="empresa.year2"
              imgSrc={arrow}
              imgAlt="1995–1998"
            />
            <div />
            <MilestoneTop
              title="2000–2018"
              text="empresa.year4"
              imgSrc={arrow}
              imgAlt="2000–2018"
            />
            <div />
          </div>

          {/* Bottom milestones (columns 1, 3, 5) */}
          <div className="grid grid-cols-5 gap-6 items-start -mt-8 lg:-mt-9.5">
            <MilestoneBottom
              title="1992–1995"
              text="empresa.year1"
              imgSrc={arrow}
              imgAlt="1992–1995"
            />
            <div />
            <MilestoneBottom
              title="1998–2000"
              text="empresa.year3"
              imgSrc={arrow}
              imgAlt="1998–2000"
            />
            <div />
            <MilestoneBottom
              title="empresa.year5t"
              text="empresa.year5"
              imgSrc={arrow}
              imgAlt="Atualmente"
            />
          </div>
        </div>

        {/* ===== Mobile (vertical only; images hidden) ===== */}
        <div className="md:hidden mt-10 space-y-8">
          {[
            {
              t: "1992–1995",
              d: "empresa.year1",
            },
            {
              t: "1995–1998",
              d: "empresa.year2",
            },
            {
              t: "1998–2000",
              d: "empresa.year3",
            },
            {
              t: "2000–2018",
              d: "empresa.year4",
            },
            {
              t: "empresa.year5t",
              d: "empresa.year5",
            },
          ].map((it, i) => (
            <div key={i} className="relative pl-8">
              <img src={arrow} className="absolute rotate-90 w-20 sm:w-15 sm:-left-5 -left-7  top-8 bottom-0" />
              <h4 className="text-emerald-600 font-extrabold text-xl">
                {t(it.t)}
              </h4>
              <p className="mt-1 text-slate-700 text-sm leading-relaxed">
                {t(it.d)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ===== helpers (with images) ===== */
function MilestoneTop({ title, text, imgSrc, imgAlt = "" }) {
  const { t } = useTranslation();
  return (
    <div className="text-center flex flex-col items-center">
      <div className="px-2 max-w-[16rem]">
        <h3 className="text-[var(--color-prime)] font-bold text-xl lg:text-3xl">
          {t(title)}
        </h3>
        <p className="mt-2 text-slate-700 text-sm leading-relaxed">{t(text)}</p>
      </div>

      {/* Image appears UNDER the text (desktop/tablet only) */}
      {imgSrc && (
        <img
          src={imgSrc}
          alt={imgAlt}
          className="hidden md:block mt-4 w-40 sm:w-48 lg:w-56 h-auto sm:h-auto lg:h-auto object-cover"
          loading="lazy"
        />
      )}
    </div>
  );
}

function MilestoneBottom({ title, text, imgSrc, imgAlt = "" }) {
  const { t } = useTranslation();
  return (
    <div className="text-center flex flex-col items-center">
      {/* Image appears ABOVE the text (desktop/tablet only) */}
      {imgSrc && (
        <img
          src={imgSrc}
          alt={imgAlt}
          className="hidden md:block mt-4 w-40 sm:w-48 lg:w-56 h-auto sm:h-auto lg:h-auto object-cover mb-5"
          loading="lazy"
        />
      )}

      <div className="px-2 max-w-[16rem]">
        <h3 className="text-[var(--color-prime)] font-bold text-xl lg:text-3xl">
          {t(title)}
        </h3>
        <p className="mt-2 text-slate-700 text-sm leading-relaxed">{t(text)}</p>
      </div>
    </div>
  );
}
