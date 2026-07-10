import React from "react";
import "./Productos.css";
import concentrador from '../../assets/concentrador.png';
import cpap from '../../assets/CPAP.jpg';
import mochila from '../../assets/TuboMochila.png';
import tubo from '../../assets/TuboHospitalario.png';
import aspirador from '../../assets/aspirador.jpg';
import bpap from '../../assets/BPAP.png';
import co2medicinal from '../../assets/co2medicinal.png';
import reductorG from '../../assets/reductorG.png';
import reductorC from '../../assets/reductorC.png';
import bigotera from '../../assets/bigotera.png';
import mascaraR from '../../assets/mascaraR.png';
import mascaraM from '../../assets/mascaraM.png';
import mascaraC from '../../assets/mascaraC.png';

const productosDestacados = [
  {
    id: 1,
    title: "Concentrador de oxígeno",
    subtitle: "Ideal para tratamientos domiciliarios continuos.",
    badge: "⭐ Más solicitado",
    info: [
      "Entrega rápida",
      "Instalación incluida"
    ],
    img: concentrador,
  },
  {
    id: 2,
    title: "Mochila de transporte",
    subtitle: "Movilidad y autonomía para pacientes activos.",
    badge: "🚶 Portátil",
    info: [
      "Liviana",
      "Lista para usar"
    ],
    img: mochila,
  },
  {
    id: 3,
    title: "Tubo Hospitalario",
    subtitle: "Oxígeno medicinal para tratamientos domiciliarios.",
    badge: "🏥 Alta demanda",
    info: [
      "Entrega inmediata",
      "Recarga disponible"
    ],
    img: tubo,
  },
];

const otrosProductos = [
  {
    id: 4,
    title: "Aspiradores",
    img: aspirador,
  },
  {
    id: 5,
    title: "CPAP",
    img: cpap,
  },
  {
    id: 6,
    title: "VPAP",
    img: bpap,
  },
  {
    id: 7,
    title: "CO₂ Medicinal",
    img: co2medicinal,
  },
];

// --- NUEVO: ACCESORIOS (agregá los tuyos acá) ---
const accesoriosData = [
  // Ejemplo: descomentá y cambiá la imagen
   {
    id: 101,
    title: "Reductor de Mochila",
    img: reductorC,
  },
   {
    id: 102,
    title: "Reductor de Cilindro",
    img: reductorG,
  },
     {
    id: 103,
    title: "Bigotera de oxigeno",
    img: bigotera,
  },
     {
    id: 104,
    title: "Mascara de oxigeno con reservorio",
    img: mascaraR,
  },
     {
    id: 105,
    title: "Mascara de oxigeno con multiporcentaje",
    img: mascaraM,
  },
     {
    id: 106,
    title: "Mascara CPAP y VPAP",
    img: mascaraC,
  },
];

export default function Productos() {
  return (
    <section className="productos-section" id="productos">
      <div className="productos-inner">
        <header className="productos-header">
  <h2>Equipos disponibles para alquiler</h2>

  <p className="productos-subtitle">
    Los equipos más solicitados para tratamientos de oxigenoterapia domiciliaria.
  </p>
</header>

<div className="productos-destacados">

  {productosDestacados.map((p) => (

  <article
    key={p.id}
    className="producto-card producto-destacado"
  >

    <span className="producto-badge">
      {p.badge}
    </span>

    <div className="producto-media">

      <img
        src={p.img}
        alt={p.title}
      />

    </div>

    <h3 className="producto-title">
      {p.title}
    </h3>

    <p className="producto-desc">
      {p.subtitle}
    </p>

    <div className="producto-beneficios">

      {p.info.map((item) => (

        <span
          key={item}
          className="producto-beneficio"
        >
          ✓ {item}
        </span>

      ))}

    </div>

    <a
      href={`https://wa.me/5491131521097?text=${encodeURIComponent(
  `Hola, quiero consultar por el ${p.title}.`
)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="producto-btn"
    >
      Consultar por WhatsApp
    </a>

  </article>

))}

</div>

<h3 className="otros-title">
  Otros equipos
</h3>

<div className="productos-grid">

  {otrosProductos.map((p) => (

    <article
      key={p.id}
      className="producto-card"
    >

      <div className="producto-media">

        <img
          src={p.img}
          alt={p.title}
        />

      </div>

      <h3 className="producto-title">
        {p.title}
      </h3>

    </article>

  ))}

</div>

        {/* --- NUEVO BLOQUE ACCESORIOS (misma sección, mismo estilo) --- */}
        <header className="productos-header accesorios-header">
          <h2>Accesorios</h2>
        </header>

        <div className="productos-grid">
          {accesoriosData.length > 0 ? (
            accesoriosData.map((a) => (
              <article key={a.id} className="producto-card">
                <div className="producto-media">
                  <img src={a.img} alt={a.title} />
                </div>
                <h3 className="producto-title">{a.title}</h3>
              </article>
            ))
          ) : (
            <p className="accesorios-empty">Próximamente: bigoteras, máscaras, filtros y más.</p>
          )}
        </div>

      </div>
    </section>
  );
}