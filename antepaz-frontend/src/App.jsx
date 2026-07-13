import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Header />
      
      <main className="main-content">
        {/* Aquí irá el buscador, las categorías y los productos más adelante */}
        <div className="welcome-box">
          <h2>¡Bienvenidos a Antepaz Surf Experience! Panamá</h2>
          <p>Pronto podrás reservar tus clases de surf y alquilar las mejores tablas de Panamá.</p>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;