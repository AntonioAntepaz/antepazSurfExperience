import React, { useState } from 'react';
import './ImageGallery.css';

function ImageGallery({ images }) {
  // Lista por defecto de 5 imágenes de surf si no vienen por props
  const defaultImages = [
  "https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&w=800&q=80"
];

  const galleryImages = images && images.length >= 5 ? images : defaultImages;

  return (
    <div className="gallery-container">
      {/* Mitad izquierda: Imagen principal */}
      <div className="main-image-container">
        <img src={galleryImages[0]} alt="Imagen principal del producto" className="gallery-img main-img" />
      </div>

      {/* Mitad derecha: Grilla 2x2 con las 4 restantes */}
      <div className="secondary-grid">
        {galleryImages.slice(1, 5).map((img, index) => (
          <div key={index} className="secondary-image-container">
            <img src={img} alt={`Vista ${index + 2}`} className="gallery-img" />
          </div>
        ))}

        {/* Criterio 4: Texto/Botón "Ver más" en la región inferior derecha */}
        <button className="see-more-btn">
          Ver más
        </button>
      </div>
    </div>
  );
}

export default ImageGallery;