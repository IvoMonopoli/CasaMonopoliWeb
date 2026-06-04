// src/components/Hero/Hero.jsx
import React from 'react';
import './Hero.css';

import hero480 from '../../assets/hero-480.png';
import hero800 from '../../assets/hero-800.png';
import hero1200 from '../../assets/hero-1200.png';
import hero1920 from '../../assets/hero-1920.png';
import hero2560 from '../../assets/hero-2560.png';

export default function Hero() {
  // Reemplazá por tu número real (sin espacios ni signos)
  const phoneHref = 'tel:+5491131521097';
  const whatsappHref = 'https://wa.me/5491131521097';

  return (
    <section className="hero" aria-label="Fondo oxigenoterapia">
      <div className="hero-img-wrap" aria-hidden="true">
        <picture>
          {/* Mobile */}
          <source
            media="(max-width:600px)"
            srcSet={`${hero480} 480w, ${hero800} 800w`}
            sizes="100vw"
          />

          {/* Tablet */}
          <source
            media="(max-width:1200px)"
            srcSet={`${hero800} 800w, ${hero1200} 1200w`}
            sizes="100vw"
          />

          {/* Desktop */}
          <source
            srcSet={`${hero1200} 1200w, ${hero1920} 1920w, ${hero2560} 2560w`}
            sizes="(min-width:1200px) 100vw"
          />

          <img
            className="hero-fullimg"
            src={hero2560}
            alt="Oxigenoterapia domiciliaria"
            loading="eager"
            decoding="async"
          />
        </picture>
      </div>

      <div className="hero-content">
        <h1 className="hero-title">Oxigenoterapia domiciliaria</h1>

        <p className="hero-sub">
          Alquilamos concentradores de oxígeno portátiles, mochilas de oxígeno y tubos hospitalarios. CPAP y BPAP Entrega e instalación a domicilio, soporte técnico y asesoramiento profesional.
        </p>

        <div className="hero-cta" role="group" aria-label="Llamadas y contacto">
          <a className="btn btn-call" href={phoneHref} aria-label="Llámanos">
            ¡Llámanos!
          </a>

          <a
            className="btn btn-whatsapp"
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contactar por WhatsApp"
          >
            {/* SVG inline WhatsApp (usa currentColor) */}
            <svg className="icon icon-whatsapp" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path fill="currentColor" d="M20.52 3.48A11.94 11.94 0 0012 0C5.373 0 .01 5.373.01 12.001c0 2.116.553 4.183 1.6 6.01L0 24l6.2-1.6A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12 0-3.2-1.25-6.2-3.48-8.52zM12 21.6c-1.9 0-3.74-.5-5.34-1.44l-.38-.22-3.68.95.98-3.58-.25-.37A9.6 9.6 0 012.4 12c0-5.3 4.3-9.6 9.6-9.6 2.56 0 4.96.99 6.77 2.8A9.53 9.53 0 0121.6 12c0 5.3-4.3 9.6-9.6 9.6z"/>
              <path fill="currentColor" d="M17.1 14.1c-.3-.15-1.8-.9-2.1-1-.3-.1-.5-.15-.7.15-.2.3-.8 1-.98 1.2-.18.2-.36.22-.66.07-.3-.15-1.26-.46-2.4-1.48-.9-.8-1.5-1.8-1.68-2.1-.18-.3 0-.46.13-.61.13-.13.3-.36.45-.54.15-.18.2-.3.3-.5.1-.2 0-.38-.05-.53-.05-.15-.7-1.7-.96-2.34-.25-.62-.5-.54-.7-.55-.18-.01-.38-.01-.58-.01s-.53.07-.8.38c-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.06 2.88 1.2 3.08.14.2 2.06 3.2 5 4.48 2.94 1.28 2.94.85 3.46.8.52-.05 1.68-.68 1.92-1.34.24-.66.24-1.22.17-1.34-.07-.12-.26-.18-.56-.33z"/>
            </svg>

            <span className="btn-text">WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
