import React from 'react';
import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="main-footer">
      <div className="footer-left">
        <span className="footer-logo">AS</span>
        <p>© {currentYear} Antepaz Surf Experience. Todos los derechos reservados.</p>
      </div>
      <div className="footer-right">
        {/* Acá irán las redes sociales en el futuro */}
        <span>Hecho en Panamá</span>
      </div>
    </footer>
  );
}