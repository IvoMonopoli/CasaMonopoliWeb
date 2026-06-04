import React from "react";
import "./Contact.css";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="contact-section" id="contacto" aria-labelledby="contact-title">
      <div className="contact-inner">
        <h2 id="contact-title" className="contact-title">Contáctenos</h2>

        <div className="contact-grid">
          <article className="contact-card">
            <div className="card-icon"><FaEnvelope /></div>
            <div className="card-body">
              <h3>Mail</h3>
              <p><a href="mailto:oxigenocasamonopoli@gmail.com">oxigenocasamonopoli@gmail.com</a></p>
            </div>
          </article>

          <article className="contact-card">
            <div className="card-icon"><FaPhone /></div>
            <div className="card-body">
              <h3>Teléfono</h3>
              <p><a href="tel:+541131521097">(011) 3152-1097</a></p>
              <p><a href="tel:+541147505285">(011) 4750-5285</a></p>
            </div>
          </article>

          <article className="contact-card">
            <div className="card-icon"><FaMapMarkerAlt /></div>
            <div className="card-body">
              <h3>Dirección</h3>
              <p>Asamblea 4180, Santos Lugares, Tres de Febrero</p>
            </div>
          </article>

          <article className="contact-card">
            <div className="card-icon"><FaClock /></div>
            <div className="card-body">
              <h3>Horario</h3>
              <p>Lun a Vie 8:00 / 18:00</p>
              <p>Sab y Dom 8:00 / 17:00</p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
