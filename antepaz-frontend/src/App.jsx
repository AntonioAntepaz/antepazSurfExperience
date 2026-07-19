import React from 'react';
import Header from './components/Header';
import Search from './components/Search';
import Categories from './components/Categories'; // <-- 1. Importamos las categorías
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Header />
      
      <Search />
      
      <Categories /> {/* <-- 2. Lo inyectamos justo acá abajo del buscador */}

      <main className="main-content">
        <div className="welcome-box">
          <h2>Bienvenidos a Antepaz Surf Experience! Panamá</h2>
          <p>Pronto podrás reservar tus clases de surf y alquilar las mejores tablas de Panamá.</p>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;