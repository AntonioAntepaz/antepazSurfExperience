import React from 'react';
import './Categories.css'; // Vincula este componente con sus estilos visuales

function Categories() {
  // Creamos un array (lista) de objetos con la información de cada categoría.
  // Esto es muy útil porque si el día de mañana agregás más servicios, solo sumás un objeto acá.
  const categoriesData = [
    {
      id: 1,
      title: 'Surf Lessons',
      description: 'Aprende a correr tus primeras olas con instructores certificados.',
      icon: '🏄‍♂️'
    },
    {
      id: 2,
      title: 'Surf Camp',
      description: 'Una experiencia exclusiva para convivir y respirar surf 24/7.',
      icon: '🏕️'
    },
    {
      id: 3,
      title: 'Surf Trip',
      description: 'Viajes guiados a los mejores secretos y spots de surf en Panamá.',
      icon: '🌴'
    }
  ];

  return (
    <section className="categories-section">
      {/* Título principal de la sección */}
      <h2 className="categories-title">Nuestras Experiencias</h2>
      
      {/* Contenedor tipo grilla que va a envolver a las tres tarjetas */}
      <div className="categories-grid">
        {/* Usamos .map() para recorrer la lista de categorías y dibujar una tarjeta por cada una */}
        {categoriesData.map((category) => (
          <div key={category.id} className="category-card">
            {/* Icono representativo de la experiencia */}
            <div className="category-icon">{category.icon}</div>
            {/* Título de la tarjeta */}
            <h3>{category.title}</h3>
            {/* Breve descripción del servicio */}
            <p>{category.description}</p>
            {/* Botón de acción para ver más detalles */}
            <button className="category-btn">Ver más</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Categories;