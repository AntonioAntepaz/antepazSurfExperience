import React from 'react';
import './FeaturedProducts.css';

function FeaturedProducts() {
  const products = [
    {
      id: 1,
      title: 'Clase Principiante Individual',
      price: '$45',
      duration: '2 horas',
      image: 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&w=500&q=80',
      badge: 'Más Popular'
    },
    {
      id: 2,
      title: 'Alquiler Tabla Softboard',
      price: '$20',
      duration: 'Día completo',
      image: 'https://images.unsplash.com/photo-1531722569936-825d3dd91b15?auto=format&fit=crop&w=500&q=80',
      badge: 'Equipo'
    },
    {
      id: 3,
      title: 'Surf Trip Playa Venao',
      price: '$120',
      duration: '1 Día',
      image: 'https://images.unsplash.com/photo-1512100356356-de1b84283e18?auto=format&fit=crop&w=500&q=80',
      badge: 'Aventura'
    }
  ];

  return (
    <section className="featured-section">
      <h2 className="featured-title">Experiencias Destacadas</h2>
      <p className="featured-subtitle">Elegí la opción ideal para tu próximo día de olas en Panamá</p>
      
      <div className="products-grid">
        {products.map((item) => (
          <div key={item.id} className="product-card">
            <div className="product-image-container">
              <span className="product-badge">{item.badge}</span>
              <img src={item.image} alt={item.title} className="product-image" />
            </div>
            
            <div className="product-content">
              <h3>{item.title}</h3>
              <div className="product-info">
                <span className="product-duration">⏱️ {item.duration}</span>
                <span className="product-price">{item.price}</span>
              </div>
              <button className="reserve-btn">Reservar ahora</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeaturedProducts;