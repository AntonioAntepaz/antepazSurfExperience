// 1. Importamos React y useState para manejar el estado visual si fuera necesario
import React from 'react';
import './ImageGallery.css'; // Estilos CSS de la galería

// 2. Recibimos la propiedad 'images' que nos manda el componente padre (ProductDetail)
function ImageGallery({ images = [] }) {
  
  // 3. Normalizamos los datos: 
  // El Backend envía un arreglo de objetos [{ id: 1, imageUrl: '...' }, ...].
  // Extraemos únicamente la propiedad 'imageUrl' de cada objeto. Si 'images' viene vacío, fallback a un array vacío.
  const formattedImages = images.map((img) => (typeof img === 'object' ? img.imageUrl : img));

  // 4. Si por alguna razón no hay imágenes cargadas desde la BD, mostramos un placeholder por defecto
  const fallbackImage = "https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&w=800&q=80";

  // Foto principal (lado izquierdo del grid): Usamos la primera del arreglo o la de respaldo
  const mainImage = formattedImages.length > 0 ? formattedImages[0] : fallbackImage;

  // Fotos secundarias (lado derecho del grid): Tomamos las siguientes 4 fotos (del índice 1 al 4)
  const secondaryImages = formattedImages.slice(1, 5);

  return (
    <div className="gallery-container">
      {/* Mitad izquierda: Imagen principal en tamaño grande */}
      <div className="main-image-container">
        <img 
          src={mainImage} 
          alt="Imagen principal del producto" 
          className="gallery-img main-img" 
        />
      </div>

      {/* Mitad derecha: Grilla 2x2 con las 4 imágenes secundarias */}
      <div className="secondary-grid">
        {secondaryImages.map((imgUrl, index) => (
          <div key={index} className="secondary-image-container">
            <img 
              src={imgUrl} 
              alt={`Vista ${index + 2}`} 
              className="gallery-img" 
            />
          </div>
        ))}

        {/* Botón 'Ver más' en la región inferior derecha de la galería */}
        <button className="see-more-btn">
          Ver más
        </button>
      </div>
    </div>
  );
}

export default ImageGallery;