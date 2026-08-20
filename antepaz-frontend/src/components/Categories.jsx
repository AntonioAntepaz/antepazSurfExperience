// 1. Importamos React y los Hooks necesarios:
// - useState: para crear una "variable con memoria" que guarde la lista de categorías.
// - useEffect: para ejecutar código automáticamente cuando el componente se carga en pantalla.
import React, { useState, useEffect } from 'react';
import './Categories.css'; // Importamos los estilos CSS para esta sección

function Categories() {
  // 2. Definimos el estado 'categories' inicializado como un arreglo vacío [].
  // 'categories' guardará la lista que traigamos de la base de datos.
  // 'setCategories' es la función que usamos para actualizar ese estado.
  const [categories, setCategories] = useState([]);

  // 3. useEffect se ejecuta una sola vez cuando el componente se renderiza por primera vez (gracias al [] del final).
  useEffect(() => {
    // Hacemos una petición HTTP GET a nuestra API de Spring Boot
    fetch('http://localhost:8080/api/categories')
      .then((res) => res.json()) // Convertimos la respuesta del servidor a formato JSON (objeto JavaScript)
      .then((data) => {
        // Guardamos los datos recibidos dentro de nuestro estado 'categories'
        setCategories(data);
      })
      .catch((err) => {
        // Si hay un error de conexión o en el servidor, lo mostramos en la consola del navegador
        console.error('Error al cargar categorías desde el Backend:', err);
      });
  }, []); // <-- El arreglo vacío asegura que la consulta a la API se haga SOLO una vez

  return (
    <section className="categories-section">
      {/* Título de la sección */}
      <h2 className="categories-title">Nuestras Experiencias</h2>

      {/* Grilla contenedora de las tarjetas */}
      <div className="categories-grid">
        {/* 
          4. Usamos el método .map() para iterar/recorrer el arreglo 'categories' 
          y transformar cada objeto de la BD en un bloque JSX (tarjeta HTML).
        */}
        {categories.map((category) => (
          // Cada elemento de una lista en React DEBE llevar una propiedad 'key' única (usamos el id de la BD)
          <div key={category.id} className="category-card">
            
            {/* 5. Condicional: Si existe 'imageUrl' renderizamos la etiqueta <img>, sino mostramos un icono */}
            {category.imageUrl ? (
              <img 
                src={category.imageUrl} 
                alt={category.title} 
                className="category-image" 
                style={{ width: '60px', height: '60px', objectFit: 'contain', marginBottom: '1rem' }}
              />
            ) : (
              <div className="category-icon">🏄</div>
            )}
            
            {/* Título dinámico que viene de la BD */}
            <h3>{category.title}</h3>
            
            {/* Descripción dinámica que viene de la BD */}
            <p>{category.description}</p>
            
            {/* Botón interactivo */}
            <button className="category-btn">Ver más</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Categories;