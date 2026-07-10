import React from "react";
import "./Services.css";
import placeholder from "../../assets/medicoCanula.jpg";

export default function Services() {

    const items = [
        "Entrega rápida en CABA y GBA",
        "Instalación y capacitación en el domicilio",
        "Más de 30 años de experiencia (desde 1994)",
        "Soporte técnico durante todo el alquiler"
    ];

    return (

        <section
            className="services"
            aria-labelledby="services-title"
        >

            <div className="services-inner">

                <div className="services-text">

                    <h2
                        id="services-title"
                        className="services-title"
                    >
                        ¿Necesitás oxígeno para un familiar?
                    </h2>

                    <p className="services-lead">

                        Sabemos que estos momentos generan muchas dudas.
                        Nuestro equipo te acompaña para elegir el equipo adecuado según la indicación médica y llevarlo rápidamente al domicilio del paciente.

                    </p>

                    <p className="services-desc">

                        Nos ocupamos de la entrega, instalación y explicación del funcionamiento para que el paciente y su familia puedan utilizar el equipo con tranquilidad desde el primer día.

                    </p>

                    <ul className="services-list">

                        {items.map(item => (

                            <li key={item}>
                                <span>{item}</span>
                            </li>

                        ))}

                    </ul>

                </div>

                <div className="services-media">

                    <div className="services-media-inner">

                        <img
                            src={placeholder}
                            alt="Profesional asistiendo a un paciente con oxigenoterapia domiciliaria"
                            className="services-img"
                        />

                    </div>

                </div>

            </div>

        </section>

    );

}