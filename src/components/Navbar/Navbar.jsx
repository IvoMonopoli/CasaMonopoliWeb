// src/components/Navbar/Navbar.jsx

import React, { useEffect, useState, useCallback } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "Inicio", href: "/inicio", id: "inicio" },
    { label: "Equipos", href: "/productos", id: "productos" },
    {
      label: "¿Por qué elegirnos?",
      href: "/por-que-elegirnos",
      id: "por-que-elegirnos",
    },
    { label: "Preguntas", href: "/preguntas", id: "preguntas" },
    { label: "Contacto", href: "/contacto", id: "contacto" },
  ];

  const scrollToSection = useCallback((id) => {
    const target = document.getElementById(id);

    if (!target) return false;

    target.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    return true;
  }, []);

  const handleNavClick = (e, link) => {
    e.preventDefault();

    scrollToSection(link.id);

    const newPath = "/" + link.id;

    if (location.pathname !== newPath) {
      history.pushState(null, "", newPath);
    } else {
      history.replaceState(null, "", newPath);
    }

    if (open) {
      setOpen(false);
    }
  };

  useEffect(() => {
    const onPop = () => {
      const path = location.pathname.replace(/^\/+/, "").toLowerCase();

      if (path) {
        scrollToSection(path);
      } else {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }
    };

    window.addEventListener("popstate", onPop);

    return () => {
      window.removeEventListener("popstate", onPop);
    };
  }, [scrollToSection]);

  useEffect(() => {
    const path = location.pathname.replace(/^\/+/, "").toLowerCase();

    if (path) {
      setTimeout(() => {
        scrollToSection(path);
      }, 50);
    }
  }, [scrollToSection]);

  return (
    <nav
      className="nav-root"
      role="navigation"
      aria-label="Navegación principal"
    >
      <div className="nav-inner">

        <div className="nav-brand"></div>

        <div className="nav-links-desktop">
          {links.map((link) => (
            <a
              key={link.label}
              className={`nav-link ${
  link.id === "contacto" ? "nav-link-contacto" : ""
}`}
              href={link.href}
              onClick={(e) => handleNavClick(e, link)}
            >
              {link.label}
            </a>
          ))}
        </div>

        <button
          className="nav-toggle"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span className="nav-toggle-icon">
            {open ? "✕" : "☰"}
          </span>
        </button>

      </div>

      <div
        id="nav-mobile"
        className={`nav-mobile ${open ? "nav-mobile--open" : ""}`}
        aria-hidden={!open}
      >
        {links.map((link) => (
          <a
            key={link.label}
            className="nav-mobile-link"
            href={link.href}
            onClick={(e) => handleNavClick(e, link)}
          >
            {link.label}
          </a>
        ))}
      </div>

    </nav>
  );
}