// src/components/Services/Services.jsx
import React from 'react';
import './Services.css';
import placeholder from '../../assets/medicoCanula.jpg';

export default function Services() {
  const items = [
    "Alquiler de concentradores fijos y portatiles",
    "Mochilas de oxígeno para movilidad , CPAP Y BPAP",
    "Tubos hospitalarios y recambios",
    "Entrega, instalación y soporte técnico"
  ];

  return (
    <section className="services" aria-labelledby="services-title" role="region">
      <div className="services-inner">
        <div className="services-text">
          <h2 id="services-title" className="services-title">
            Oxigenoterapia Medicinal
          </h2>

          <p className="services-lead">
            Soluciones respiratorias a tu puerta. Alquilamos concentradores portátiles y domiciliarios, mochilas de oxígeno, tubos hospitalarios, CPAP Y BPAP.
          </p>

          <p className="services-desc">
            Entrega e instalación a domicilio, mantenimiento y soporte técnico.
            Atendemos particulares y derivaciones por obras sociales y prepagas.
          </p>

          <ul className="services-list">
            {items.map((t) => (
              <li key={t}><span>{t}</span></li>
            ))}
          </ul>
        </div>

        <div className="services-media">
          <div className="services-media-inner">
            <img
              src={placeholder}
              alt="Profesional asistiendo a paciente con concentrador de oxígeno"
              className="services-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
}