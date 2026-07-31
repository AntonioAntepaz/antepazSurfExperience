// Importamos React y useState para manejar el listado dinámico de productos
import React, { useState } from 'react';

// Importamos los estilos de la lista
import './ProductList.css';

// Lista inicial de productos de prueba
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
  // Criterio 3: Convertimos los productos en un Estado para poder eliminar elementos dinámicamente
  const [products, setProducts] = useState(INITIAL_PRODUCTS);

  // Función para manejar la eliminación de un producto
  const handleDeleteProduct = (productId, productName) => {
    // Criterio 2: Al presionar "Eliminar producto" mostramos un mensaje de confirmación
    const confirmDelete = window.confirm(
      `¿Estás seguro de que deseas eliminar el producto "${productName}"?`
    );

    // Criterio 3 y 4: Evaluamos si el usuario aceptó la confirmación
    if (confirmDelete) {
      // Si ACEPTA: Filtramos el arreglo eliminando el producto con ese ID
      const updatedProducts = products.filter(product => product.id !== productId);
      setProducts(updatedProducts);
      alert(`El producto "${productName}" fue eliminado con éxito.`);
    }
    // Si NO ACEPTA: Simplemente no hace nada y mantiene la lista sin cambios (Criterio 4)
  };

  return (
    <div className="product-list-container">
      <h2>Listado de Productos</h2>
      <p className="list-subtitle">
        Gestión de productos activos ({products.length} disponibles)
      </p>

      {/* Si la lista queda vacía, mostramos un mensaje */}
      {products.length === 0 ? (
        <div className="empty-list-message">
          <p>No hay productos registrados en el sistema.</p>
        </div>
      ) : (
        /* Criterio 1: Tabla con la lista de productos */
        <table className="admin-table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Nombre</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td className="col-id">#{product.id}</td>
                <td className="col-name">{product.name}</td>
                <td className="col-actions">
                  <button className="btn-action edit-btn">✏️ Editar</button>
                  
                  {/* Criterio 1: Botón Eliminar con su listener de clic */}
                  <button 
                    className="btn-action delete-btn"
                    onClick={() => handleDeleteProduct(product.id, product.name)}
                  >
                    🗑️ Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default ProductList;