import React from 'react'; // Trae la librería de React para poder usar componentes
import './Search.css';    // Vincula este archivo con sus estilos visuales específicos

function Search() {
  return (
    // Contenedor principal de toda la sección del buscador
    <div className="search-container"> 
      
      {/* Título llamativo para indicarle al usuario qué hacer */}
      <h2>Busca tu próxima experiencia de surf</h2>
      
      {/* Caja que agrupa el input de texto y el botón al lado */}
      <div className="search-box">
        
        {/* Campo de texto donde el usuario escribe su búsqueda */}
        <input 
          type="text" 
          placeholder="¿Qué estás buscando? (Clases, tablas, spots...)" 
          className="search-input" // Clase para darle estilo en el CSS
        />
        
        {/* Botón encargado de disparar la acción de buscar */}
        <button className="search-button">Buscar</button>
        
      </div>
    </div>
  );
}

// Exporta el componente para que pueda ser usado en App.jsx (u otros archivos)
export default Search;