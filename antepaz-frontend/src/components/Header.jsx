import React from 'react';
import './Header.css';
import logo from '../assets/logo.png';

export default function Header() {
  return (
    <header className="main-header">
      <div className="header-left" onClick={() => window.location.href = '/'}>
        <img src={logo} alt="Antepaz Surf Experience" className="brand-logo" />
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