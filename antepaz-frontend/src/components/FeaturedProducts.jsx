import React, { useState, useEffect } from 'react';
import './FeaturedProducts.css';

// Pool de datos de prueba para simular los productos existentes
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
  { id: 10, name: "Experiencia Sunset Surf", duration: "2 horas", price: 50, image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80" },
  { id: 11, name: "Clase Grupal Amigos (4 Pax)", duration: "2 horas", price: 100, image: "https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&w=600&q=80" },
  { id: 12, name: "Surf Guiding Bocas del Toro", duration: "1 Día", price: 150, image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80" }
];

function FeaturedProducts() {
  const [randomProducts, setRandomProducts] = useState([]);

  useEffect(() => {
    // Función para obtener productos aleatorios sin repetir y máximo 10
    const getRandomProducts = () => {
      // 1. Algoritmo de mezclado (Fisher-Yates Shuffle) para aleatoriedad real
      const shuffled = [...ALL_PRODUCTS].sort(() => 0.5 - Math.random());

      // 2. Criterios 1 y 2: Tomar máximo 10 productos únicos
      const selected = shuffled.slice(0, 10);

      setRandomProducts(selected);
    };

    getRandomProducts();
  }, []);

  return (
    <section className="featured-container">
      <h2>Recomendados</h2>
      
      {/* Grilla para Criterio 3: 2 columnas */}
      <div className="products-grid">
        {randomProducts.map((product) => (
          <div key={product.id} className="product-card">
            <div className="product-image-container">
              <img src={product.image} alt={product.name} className="product-image" />
            </div>
            <div className="product-info">
              <h3>{product.name}</h3>
              <p className="product-duration">⏱️ {product.duration}</p>
              <div className="product-footer">
                <span className="product-price">${product.price}</span>
                <button className="btn-reserve">Reservar ahora</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeaturedProducts;