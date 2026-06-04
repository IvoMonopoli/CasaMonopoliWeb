// src/App.jsx
import React from "react";
import Header from "./components/Header/Header.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Hero from "./components/Hero/Hero.jsx";
import Productos from "./components/Productos/Productos.jsx";
import Servicios from "./components/Services/Services.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Footer from "./components/Footer/Footer.jsx";
import FloatingWhatsApp from "./components/FloatingWhatsApp/FloatingWhatsApp.jsx";
import "./Styles.css";

export default function App() {
  return (
    <div className="app-root">
      <Header />
      <Navbar />

      <main>
        <section id="inicio"><Hero /></section>
        <section id="servicios"><Servicios /></section>
        <section id="productos"><Productos /></section>
        <section id="contacto"><Contact /></section>
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}