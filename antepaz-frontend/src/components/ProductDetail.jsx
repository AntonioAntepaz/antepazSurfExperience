import React from 'react';
import './ProductDetail.css';
import ImageGallery from './ImageGallery'; // <--- Importamos la galería

function ProductDetail({ product }) {
  const defaultProduct = {
    name: "Clase Principiante Individual",
    description: "Aprende a correr tus primeras olas con instructores certificados. Incluye tabla de surf, traje de neopreno y 2 horas de instrucción personalizada con teoría y práctica en el agua.",
    price: 45,
    duration: "2 horas"
  };

  const item = product || defaultProduct;

  return (
    <div className="product-detail-container">
      {/* Header 100% */}
      <div className="product-detail-header">
        <h1 className="product-detail-title">{item.name}</h1>
        <button className="back-arrow-btn">← Volver</button>
      </div>

      {/* TARJETA #6: Galería de 5 imágenes */}
      <ImageGallery />

      {/* Body con la descripción (removimos la imagen simple que estaba acá antes) */}
      <div className="product-detail-body">
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