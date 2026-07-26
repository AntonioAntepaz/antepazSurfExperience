import React from 'react';
import './ProductDetail.css';

function ProductDetail({ product }) {
  // Producto por defecto en caso de que aún no le pasemos datos dinámicos
  const defaultProduct = {
    name: "Clase Principiante Individual",
    description: "Aprende a correr tus primeras olas con instructores certificados. Incluye tabla de surf, traje de neopreno y 2 horas de instrucción personalizada con teoría y práctica en el agua.",
    image: "https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&w=800&q=80",
    price: 45,
    duration: "2 horas"
  };

  const item = product || defaultProduct;

  return (
    <div className="product-detail-container">
      {/* CRITERIO 1, 2 y 3: Header 100% ancho con título a la izq y flecha a la der */}
      <div className="product-detail-header">
        <h1 className="product-detail-title">{item.name}</h1>
        <button className="back-arrow-btn" aria-label="Volver atrás">
          ← Volver
        </button>
      </div>

      {/* CRITERIO 4: Body con texto descriptivo e imagen */}
      <div className="product-detail-body">
        <div className="detail-image-container">
          <img src={item.image} alt={item.name} className="detail-image" />
        </div>
        <div className="detail-info-container">
          <h2>Descripción del producto</h2>
          <p className="detail-description">{item.description}</p>
          
          <div className="detail-extra">
            <p><strong>Duración:</strong> {item.duration}</p>
            <p className="detail-price"><strong>Precio:</strong> ${item.price}</p>
          </div>

          <button className="btn-reserve-detail">Reservar esta experiencia</button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;