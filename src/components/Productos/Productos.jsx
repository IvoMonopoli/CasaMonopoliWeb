import React from "react";
import "./Productos.css";
import concentrador from '../../assets/concentrador.png';
import cpap from '../../assets/CPAP.jpg';
import mochila from '../../assets/TuboMochila.png';
import tubo from '../../assets/TuboHospitalario.png';
import aspirador from '../../assets/aspirador.jpg';
import nebulizador from '../../assets/nebulizador.jpg';
import bpap from '../../assets/BPAP.png';
import co2medicinal from '../../assets/co2medicinal.png';
import co2industrial from '../../assets/co2industrial.png';
import reductorG from '../../assets/reductorG.png';
import reductorC from '../../assets/reductorC.png';
import bigotera from '../../assets/bigotera.png';
import mascaraR from '../../assets/mascaraR.png';
import mascaraM from '../../assets/mascaraM.png';
import mascaraC from '../../assets/mascaraC.png';

const productosData = [
  {
    id: 1,
    title: "Concentrador de oxígeno",
    img: concentrador,
  },
  {
    id: 2,
    title: "Mochila de transporte",
    img: mochila,
  },
  {
    id: 3,
    title: "Tubo Hospitalario",
    img: tubo,
  },
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
    title: "Co2 Medicinal",
    img: co2medicinal,
  },
  {
    id: 8,
    title: "Co2 Industrial",
    img: co2industrial,
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
          <h2>Nuestros Productos</h2>
        </header>

        <div className="productos-grid">
          {productosData.map((p) => (
            <article key={p.id} className="producto-card">
              <div className="producto-media">
                <img src={p.img} alt={p.title} />
              </div>
              <h3 className="producto-title">{p.title}</h3>
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