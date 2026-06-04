import React from "react";
import "./Productos.css";
import concentrador from '../../assets/concentrador.png';
import cpap from '../../assets/CPAP.jpg';
import mochila from '../../assets/TuboMochila.png';
import tubo from '../../assets/TuboHospitalario.png';
import aspirador from '../../assets/aspirador.jpg';
import nebulizador from '../../assets/nebulizador.jpg';
import bpap from '../../assets/BPAP.png';

const productosData = [
  {
    id: 1,
    title: "Concentrador de oxígeno",
    img: concentrador,
  },
  {
    id: 3,
    title: "Mochila de transporte",
    img: mochila,
  },
  {
    id: 4,
    title: "Tubo Hospitalario",
    img: tubo,
  },
  {
    id: 5,
    title: "Aspiradores",
    img: aspirador,
  },
    {
    id: 2,
    title: "CPAP",
    img: cpap,
  },  {
    id: 2,
    title: "BPAP",
    img: bpap,
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
      </div>
    </section>
  );
}
