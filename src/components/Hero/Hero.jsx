import React from "react";
import "./Hero.css";

import heroAvif from "../../assets/hero.avif";
import heroWebp from "../../assets/hero.webp";

export default function Hero() {
  const phoneHref = "tel:+5491131521097";
  const whatsappHref = "https://wa.me/5491131521097";

  return (
    <section className="hero">

      <picture className="hero-picture">
        <source srcSet={heroAvif} type="image/avif" />
        <source srcSet={heroWebp} type="image/webp" />

        <img
          src={heroWebp}
          alt="Oxigenoterapia domiciliaria"
          className="hero-image"
          loading="eager"
          fetchPriority="high"
        />
      </picture>

      <div className="hero-overlay" />

      <div className="hero-content">

        <h1 className="hero-title">
          Oxigenoterapia domiciliaria
        </h1>

        <p className="hero-sub">
          Alquiler de concentradores de oxígeno, mochilas de oxígeno y tubos hospitalarios.
          Más de 30 años acompañando pacientes con oxigenoterapia domiciliaria.
          Instalación y asesoramiento incluidos.
        </p>

        <div className="hero-cta">

          <a
            href={phoneHref}
            className="btn btn-call"
          >
            Hablar con un asesor
          </a>

          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp"
          >
            WhatsApp
          </a>

        </div>

      </div>

    </section>
  );
}