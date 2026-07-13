import React from 'react';
import './Header.css';

export default function Header() {
  return (
    <header className="main-header">
      <div className="header-left" onClick={() => window.location.href = '/'}>
        <div className="logo-placeholder">AS</div>
        <div className="brand-info">
          <h1>Antepaz Surf Experience</h1>
          <span>Panamá</span>
        </div>
      </div>
      <div className="header-right">
        <button className="btn-secondary">Crear cuenta</button>
        <button className="btn-primary">Iniciar sesión</button>
      </div>
    </header>
  );
}