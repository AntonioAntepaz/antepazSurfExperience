import React, { useState } from 'react';
import './FeaturedProducts.css';
import Pagination from './Pagination'; // Importamos el componente de paginación

const ALL_PRODUCTS = [
  { id: 1, name: "Clase Principiante Individual", duration: "2 horas", price: 45, image: "https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&w=600&q=80" },
  { id: 2, name: "Alquiler Tabla Softboard", duration: "Día completo", price: 20, image: "https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&w=600&q=80" },
  { id: 3, name: "Surf Trip Playa Venao", duration: "1 Día", price: 120, image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80" },
  { id: 4, name: "Clase Avanzada de Manejo de Olas", duration: "3 horas", price: 65, image: "https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&w=600&q=80" },
  { id: 5, name: "Alquiler Neopren / Wetsuit", duration: "Día completo", price: 15, image: "https://images.unsplash.com/photo-1512353087810-25dfcd100962?auto=format&fit=crop&w=600&q=80" },
  { id: 6, name: "Coaching Personalizado GoPro", duration: "2 horas", price: 85, image: "https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&w=600&q=80" },
  { id: 7, name: "Surf Camp Fin de Semana", duration: "2 Días", price: 250, image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80" },
  { id: 8, name: "Clase Grip & Balance en Tierra", duration: "1 hora", price: 25, image: "https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&w=600&q=80" },
  { id: 9, name: "Alquiler Tabla Hardboard Epoxy", duration: "Día completo", price: 30, image: "https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&w=600&q=80" },
  { id: 10, name: "Experiencia Sunset Surf", duration: "2 horas", price: 50, image: "https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&w=600&q=80" },
  { id: 11, name: "Clase Grupal Amigos (4 Pax)", duration: "2 horas", price: 100, image: "https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&w=600&q=80" },
  { id: 12, name: "Surf Guiding Bocas del Toro", duration: "1 Día", price: 150, image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80" }
];

function FeaturedProducts() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // Criterio 1: Máximo 10 productos por página

  // Cálculo de Paginación Dinámica
  const totalPages = Math.ceil(ALL_PRODUCTS.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  
  // Productos a mostrar dinámicamente según la página
  const currentProducts = ALL_PRODUCTS.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <section className="featured-container">
      <h2>Recomendados</h2>
      
      <div className="products-grid">
        {currentProducts.map((product) => (
          <div key={product.id} className="product-card">
            <div className="product-image-container">
              <img src={product.image} alt={product.name} className="product-image" />
            </div>
            <div className="product-info">
              <h3>{product.name}</h3>
              <p className="product-duration">🕒 {product.duration}</p>
              <div className="product-footer">
                <span className="product-price">${product.price}</span>
                <button className="btn-reserve">Reservar ahora</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Criterios 2 y 3: Componente de paginación con botones y números */}
      <Pagination 
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </section>
  );
}

export default FeaturedProducts;