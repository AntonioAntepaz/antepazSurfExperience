// Importamos React y los hooks useState (para manejar estado) y useEffect (para efectos secundarios/eventos)
import React, { useState, useEffect } from 'react';

// Importamos todos los componentes visuales de nuestra aplicación
import Header from './components/Header';
import Search from './components/Search';
import Categories from './components/Categories';
import FeaturedProducts from './components/FeaturedProducts';
import ProductDetail from './components/ProductDetail';
import AdminPanel from './components/AdminPanel';
import Footer from './components/Footer';

// Importamos el archivo de estilos generales
import './App.css';

function App() {
  // Estado para guardar la ruta/URL actual donde se encuentra el usuario (ej: "/" o "/administracion")
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    // Función que se ejecuta cuando el usuario navega (ej: usa los botones de ir atrás/adelante en el navegador)
    const handleLocationChange = () => {
      // Actualizamos nuestro estado con la nueva ruta de la URL
      setCurrentPath(window.location.pathname);
    };

    // Escuchamos el evento 'popstate' que dispara el navegador al cambiar de historial de navegación
    window.addEventListener('popstate', handleLocationChange);

    // Función de limpieza: remueve el listener cuando el componente se desmonta para no saturar memoria
    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []); // El array vacío [] asegura que este efecto solo se ejecute una vez al montar la App

  return (
    // Contenedor principal de toda la aplicación
    <div className="app-container">
      {/* El encabezado (Header) se muestra SIEMPRE en todas las páginas */}
      <Header />
      
      {/* Evaluamos si la ruta incluye 'administracion' o 'admin' */}
{currentPath.includes('administracion') || currentPath.includes('admin') ? (
  <AdminPanel />
) : (
  <>
    <Search />
    <Categories />
    <FeaturedProducts />
    <ProductDetail />
  </>
)}

      {/* El pie de página (Footer) también se muestra SIEMPRE al final de todo */}
      <Footer />
    </div>
  );
}

// Exportamos el componente App para que lo consuma index.html / main.jsx
export default App;