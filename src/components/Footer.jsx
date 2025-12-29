  import React from "react";
  import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaYoutube,
  } from "react-icons/fa";
  import { FiMapPin, FiMail, FiPhone } from "react-icons/fi";
  import { useTranslation } from "react-i18next";

  const leftPages = [
    { label: "header.empresa", href: "/empresa" },
    { label: "header.produtos", href: "/produtos" },
    { label: "header.producao", href: "/producao" },
    { label: "header.distribuicao", href: "/distribuicao" },
    { label: "header.contactos", href: "/contact" },
  ];

  const rightPages = [
    { label: "header.recrutamento", href: "/recrutamento" },
    { label: "header.leilao", href: "https://leilao.patriciapilar.pt/login.php" },
    { label: "footer.apoios", href: "/support" },
    { label: "footer.codigos", href: "/códigos-de-conduta" },
  ];

  function Social({ href, label, children }) {
    return (
      <a
        href={href}
        aria-label={label}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-prime)] text-[var(--color-whitecustom)] transition hover:bg-[#27a95b]"
      >
        <span className="text-lg">{children}</span>
      </a>
    );
  }

  // function Contact({ icon, text, href }) {
  //   const inner = (
  //     <div className="flex flex-col sm:flex-row sm:items-start gap-3 items-center">
  //       <span className="mt-0.5 text-[var(--color-prime)]">{icon}</span>
  //       <span className="leading-6 break-words break-all whitespace-normal">
  //         {text}
  //       </span>
  //     </div>
  //   );
  //   return (
  //     <li className="max-w-full">
  //       {href ? (
  //         <a
  //           href={href}
  //           className="hover:text-emerald-700 break-words break-all whitespace-normal"
  //         >
  //           {inner}
  //         </a>
  //       ) : (
  //         inner
  //       )}
  //     </li>
  //   );
  // }

  function Contact({ icon, text, href, target }) {
  const inner = (
    <div className="flex flex-col sm:flex-row sm:items-start gap-3 items-center">
      <span className="mt-0.5 text-[var(--color-prime)]">{icon}</span>
      <span className="leading-6 break-words break-all whitespace-normal">
        {text}
      </span>
    </div>
  );

  

  return (
    <li className="max-w-full">
      {href ? (
        <a
          href={href}
          target={target}
          rel={target === "_blank" ? "noopener noreferrer" : undefined}
          className="hover:text-emerald-700 break-words break-all whitespace-normal"
        >
          {inner}
        </a>
      ) : (
        inner
      )}
    </li>
  );
}


  export default function Footer() {
    const { t } = useTranslation();
    return (
      <footer className="bg-[var(--color-whitecustom)]">
        {/* main grid */}
        <div className="mx-auto max-w-7xl px-4 py-10 md:py-14">
          <div className="flex flex-col items-center sm:items-start justify-center sm:grid sm:grid-cols-2 gap-10 md:gap-10 md:grid-cols-12 items-top">
            {/* Brand + description */}
            <div className="md:col-span-4 sm:text-start text-center">
              <div className="flex items-center gap-4 justify-center sm:justify-start">
                <img
                  src="/logo.png"
                  alt="Patrícia Pilar"
                  className="h-25 w-25 object-contain"
                />
              </div>
              <p className="mt-5 max-w-xs text-[var(--color-gray2)] text-center sm:text-start">
                {t("footer.text1")} <br/>
                {t("footer.text2")} <br/>
                {t("footer.text3")}
              </p>

              {/* Socials */}
              <div className="mt-6 flex items-center gap-3 justify-center sm:justify-start">
                <Social href="https://www.facebook.com/frutaspatriciapilar.lda" label="Facebook">
                  <FaFacebookF />
                </Social>
                <Social href="https://www.instagram.com/frutaspatriciapilar/" label="Instagram">
                  <FaInstagram />
                </Social>
                <Social href="https://www.linkedin.com/company/frutaspatriciapilar/" label="LinkedIn">
                  <FaLinkedinIn />
                </Social>
                <Social href="https://www.youtube.com/@frutaspatriciapilar6362" label="YouTube">
                  <FaYoutube />
                </Social>
              </div>
            </div>

            {/* Pages column 1 */}
            <div className="md:col-span-2 ">
              <h3 className="text-xl font-semibold text-[var(--color-prime)] text-center sm:text-start">
                {t("footer.col1")}
              {/* <h3 className="text-xl font-semibold text-[var(--color-prime)]">
                Menu */} 
              </h3>
              <ul className="mt-5 space-y-3 text-[var(--color-gray2)]">
                {leftPages.map((i) => (
                  <li key={i.label} className="text-center sm:text-start">
                    <a className="hover:text-emerald-700" href={i.href}>
                      {t(i.label)}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Pages column 2 */}
            <div className="md:col-span-2 text-center sm:text-start">
              <h3 className="text-xl font-semibold text-[var(--color-prime)]">
                {t("footer.col2")}
              </h3>
              <ul className="mt-5 space-y-3 text-[var(--color-gray2)]">
                {rightPages.map((i) => (
                  <li key={i.label}>
                    <a className="hover:text-emerald-700" href={i.href}>
                      {t(i.label)}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contacts */}
            <div className="md:col-span-4 sm:text-start text-center">
              <h3 className="text-xl font-semibold text-[var(--color-prime)]">
                {t("footer.col3")}
              </h3>
              <ul className="mt-5 space-y-4 text-[var(--color-gray2)]">
                <Contact
                  icon={<FiMapPin />}
                   href="https://www.google.com/maps/search/?api=1&query=Rua+Poço+de+Arroz+Nº2,+Casal+da+Lapa+2560-030+A-dos-Cunhados"
                    target="_blank"
                  text={
                    <>
                      Rua Poço de Arroz Nº2, Casal da
                      <br />
                      Lapa 2560-030 A-dos-Cunhados
                    </>
                  }
                />
                <Contact
                  icon={<FiMail />}
                  text="geral@patriciapilar.pt"
                  href="mailto:geral@patriciapilar.pt"
                />
                <Contact
                  icon={<FiPhone />}
                  text="(+351) 261 982 465"
                  href="tel:+351261982465"
                />
              </ul>
            </div>
          </div>
        </div>

        {/* bottom bar */}
        <div className="hidden lg:block bg-[var(--color-graycustom)]">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-4 text-sm font-medium text-[#92A7B0] md:flex-row">
            <p>©2025 DEVTECH.</p>
            <ul className="flex flex-wrap items-center gap-x-6 gap-y-2 justify-center">
              <li>
                <a className="hover:text-[#009B3E]" href="/códigos-de-conduta">
                  {t("footer.codigos")}
                </a>
              </li>
              <li>
                <a className="hover:text-[#009B3E]" href="support">
                  {t("footer.apoios")}
                </a>
              </li>
              <li>
                <a className="hover:text-[#009B3E]" href="privacy-policy">
                  {t("footer.política")}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="lg:hidden bg-[var(--color-graycustom)]">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-4 text-sm font-medium text-[#92A7B0] md:flex-row">
            <ul className="flex text-center items-center gap-x-6 gap-y-2 justify-center">
              <li>
                <a className="hover:text-[#009B3E]" href="/códigos-de-conduta">
                  {t("footer.codigos")}
                </a>
              </li>
              <li>
                <a className="hover:text-[#009B3E]" href="support">
                  {t("footer.apoios")}
                </a>
              </li>
              <li>
                <a className="hover:text-[#009B3E]" href="privacy-policy">
                  {t("footer.política")}
                </a>
              </li>
            </ul>
            <p>©2025 DEVTECH.</p>
          </div>
        </div>
      </footer>
    );
  }
