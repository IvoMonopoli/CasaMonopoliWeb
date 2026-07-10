import React from "react";
import "./Footer.css";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import logoFooter from "../../assets/cruz.png";

export default function Footer() {
  return (
    <footer className="site-footer" role="contentinfo">
      <div className="footer-inner">
        <div className="footer-brand">
          <div className="footer-logo">
            <img src={logoFooter} alt="CASA MONOPOLI logo" className="footer-logo-img" />
          </div>
          <div className="brand-text">

  <div className="brand-name">
    CASA MONOPOLI
  </div>

  <div className="brand-tag">
    Oxigenoterapia Medicinal
  </div>

  <p className="brand-description">
    Más de 30 años brindando soluciones de oxigenoterapia domiciliaria.
  </p>

</div>
        </div>

              <div className="footer-col">
        <h4 className="col-title">ENLACES</h4>

        <ul>
          <li><a href="#inicio">Inicio</a></li>
          <li><a href="#productos">Equipos</a></li>
          <li><a href="#por-que-elegirnos">¿Por qué elegirnos?</a></li>
          <li><a href="#preguntas">Preguntas frecuentes</a></li>
          <li><a href="#contacto">Contacto</a></li>
        </ul>
      </div>

       <div className="footer-col">

  <h4 className="col-title">CONTACTO</h4>

  <ul className="contact-list">

    <li>
      Teléfono:
      <a href="tel:+541131521097">
        (011) 3152-1097
      </a>
    </li>

    <li>
      Teléfono alternativo:
      <a href="tel:+541147505285">
        (011) 4750-5285
      </a>
    </li>

    <li>
      Mail:
      <a href="mailto:oxigenocasamonopoli@gmail.com">
        oxigenocasamonopoli@gmail.com
      </a>
    </li>

    <li className="footer-address">

  <strong>Dirección</strong>

  <span>Asamblea 4180</span>

  <span>Santos Lugares</span>

  <span>Tres de Febrero</span>

</li>

  </ul>

</div>

        <div className="footer-col">
          <h4 className="col-title">REDES SOCIALES</h4>
          <div className="socials">
            <a className="social-btn" href="https://wa.me/5491131521097" target="_blank" rel="noreferrer" aria-label="WhatsApp">
              <FaWhatsapp />
            </a>
            <a className="social-btn" href="https://www.instagram.com/casamonopolioxigeno" target="_blank" rel="noreferrer" aria-label="Instagram">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      <div className="copyright">
  © {new Date().getFullYear()} Casa Monopoli · Desde 1994 acompañando pacientes con oxigenoterapia domiciliaria.
</div>
    </footer>
  );
}
