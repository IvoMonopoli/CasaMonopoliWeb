// src/components/Header/Header.jsx
import React from "react";
import "./Header.css";
import logo from "../../assets/logoCM.png"; // ruta donde guardes el PNG

export default function Header() {
  return (
    <>
      <div className="promo-banner" role="region" aria-label="Promoción envío gratis">
        <div className="promo-inner">
          <span className="promo-text">¡ENVÍO GRATIS A TODA CAPITAL FEDERAL Y ALREDEDORES!</span>
        </div>
      </div>

      <header className="header-root banner-visible">
        <div className="header-inner">
          <div className="header-logo" aria-label="Casa Monopoli - Inicio" role="img">
             <img
               src={logo}
               alt="Casa Monopoli — Oxigenoterapia"
               className="logo-img"
               width="480"
               height="144"
               loading="eager"
               decoding="async"
             />
          </div>

          <div className="header-utils" aria-hidden="true">
            {/* utilidades a la derecha */}
          </div>
        </div>
      </header>
    </>
  );
}
