// Importamos React
import React from 'react';

// Importamos los estilos para la tabla de productos
import './ProductList.css';

// Pool de datos de prueba de productos (mismos datos que en FeaturedProducts)
const INITIAL_PRODUCTS = [
  { id: 1, name: "Clase Principiante Individual", price: 45 },
  { id: 2, name: "Alquiler Tabla Softboard", price: 20 },
  { id: 3, name: "Surf Trip Playa Venao", price: 120 },
  { id: 4, name: "Clase Avanzada de Manejo de Olas", price: 65 },
  { id: 5, name: "Alquiler Neopren / Wetsuit", price: 15 },
  { id: 6, name: "Coaching Personalizado GoPro", price: 85 },
  { id: 7, name: "Surf Camp Fin de Semana", price: 250 },
  { id: 8, name: "Clase Grip & Balance en Tierra", price: 25 },
  { id: 9, name: "Alquiler Tabla Hardboard Epoxy", price: 30 },
  { id: 10, name: "Experiencia Sunset Surf", price: 50 },
  { id: 11, name: "Clase Grupal Amigos (4 Pax)", price: 100 },
  { id: 12, name: "Surf Guiding Bocas del Toro", price: 150 }
];

function ProductList() {
  return (
    <div className="product-list-container">
      <h2>Listado de Productos</h2>
      <p className="list-subtitle">Gestión de productos activos en la plataforma</p>

      {/* Tabla que cumple con el Criterio #3 */}
      <table className="admin-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Nombre</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {/* Mapeamos la lista para renderizar cada fila (Criterio #2) */}
          {INITIAL_PRODUCTS.map((product) => (
            <tr key={product.id}>
              <td className="col-id">#{product.id}</td>
              <td className="col-name">{product.name}</td>
              <td className="col-actions">
                <button className="btn-action edit-btn">✏️ Editar</button>
                <button className="btn-action delete-btn">🗑️ Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductList;