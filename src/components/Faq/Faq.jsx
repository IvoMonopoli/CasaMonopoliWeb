import React, { useState } from "react";
import "./Faq.css";
import { FaChevronDown } from "react-icons/fa";

const preguntas = [
  {
    pregunta: "¿Cuánto demora la entrega del equipo?",
    respuesta:
      "En la mayoría de los casos realizamos la entrega el mismo día o dentro de las 24 horas, dependiendo de la ubicación y la disponibilidad.",
  },
  {
    pregunta: "¿Necesito una receta médica?",
    respuesta:
      "No en todos los casos. Si tenés dudas, comunicate con nosotros y te orientaremos según el equipo que necesites y tu situación particular.",
  },
  {
    pregunta: "¿Instalan el equipo en el domicilio?",
    respuesta:
      "Sí. Realizamos la instalación y explicamos el funcionamiento del equipo para que el paciente y su familia puedan utilizarlo con tranquilidad.",
  },
  {
    pregunta: "¿Atienden sábados y domingos?",
    respuesta:
      "Sí. También brindamos atención durante los fines de semana para resolver consultas y coordinar entregas.",
  },
  {
    pregunta: "¿Cómo sé qué equipo necesito?",
    respuesta:
      "Nuestro equipo te asesora según la indicación médica para ayudarte a elegir el equipo más adecuado para el tratamiento.",
  },
 
];

export default function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <section className="faq-section" id="preguntas">

      <div className="faq-inner">

        <header className="faq-header">

          <h2>Preguntas frecuentes</h2>

          <p>
            Respondemos las consultas más habituales para que puedas tomar una
            decisión con tranquilidad.
          </p>

        </header>

        <div className="faq-list">

          {preguntas.map((item, index) => (

            <div
              key={index}
              className={`faq-item ${open === index ? "active" : ""}`}
            >

              <button
                className="faq-question"
                onClick={() =>
                  setOpen(open === index ? null : index)
                }
              >

                <span>{item.pregunta}</span>

                <FaChevronDown
                  className={open === index ? "rotate" : ""}
                />

              </button>

              <div
                className={`faq-answer ${
                  open === index ? "show" : ""
                }`}
              >

                <p>{item.respuesta}</p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}