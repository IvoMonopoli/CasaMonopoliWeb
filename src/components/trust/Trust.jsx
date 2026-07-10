import React from "react";
import "./Trust.css";
import {
  FaTruckMedical,
  FaHouseMedical,
  FaUserDoctor,
  FaHeadset,
  FaAward,
  FaClock
} from "react-icons/fa6";

const ventajas = [
  {
    icon: <FaAward />,
    title: "Más de 30 años",
    text: "Acompañando pacientes desde 1994."
  },
  {
    icon: <FaTruckMedical />,
    title: "Entrega rápida",
    text: "En CABA y Gran Buenos Aires."
  },
  {
    icon: <FaHouseMedical />,
    title: "Instalación incluida",
    text: "Colocamos el equipo y enseñamos su uso."
  },
  {
    icon: <FaUserDoctor />,
    title: "Asesoramiento",
    text: "Te ayudamos a elegir el equipo indicado."
  },
  {
    icon: <FaClock />,
    title: "Atención todos los días",
    text: "También sábados y domingos."
  },
  {
    icon: <FaHeadset />,
    title: "Soporte técnico",
    text: "Durante todo el período de alquiler."
  }
];

export default function Trust() {
  return (
    <section className="trust-section">

      <div className="trust-inner">

        <header className="trust-header">

          <h2>
            ¿Por qué elegir Casa Monopoli?
          </h2>

          <p>
            Más de tres décadas brindando soluciones de oxigenoterapia
            domiciliaria con atención personalizada, entrega rápida y
            acompañamiento durante todo el tratamiento.
          </p>

        </header>

        <div className="trust-grid">

          {ventajas.map((item) => (

            <article
              key={item.title}
              className="trust-card"
            >

              <div className="trust-icon">
                {item.icon}
              </div>

              <h3>
                {item.title}
              </h3>

              <p>
                {item.text}
              </p>

            </article>

          ))}

        </div>

      </div>

    </section>
  );
}