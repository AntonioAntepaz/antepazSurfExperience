import React, { useState, useEffect } from 'react';
import './ProductList.css';

function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Estados para el Modal de Edición
  const [editingProduct, setEditingProduct] = useState(null);
  const [editFormData, setEditFormData] = useState({
    title: '',
    price: '',
    duration: '',
    image_url: ''
  });

  // Cargar productos desde la base de datos
  const fetchProducts = () => {
    fetch('http://localhost:8080/api/products')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error al obtener productos:', error);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Función para eliminar producto
  const handleDeleteProduct = (productId, productName) => {
    const confirmDelete = window.confirm(
      `¿Estás seguro de que deseas eliminar el producto "${productName}"?`
    );

    if (confirmDelete) {
      fetch(`http://localhost:8080/api/products/${productId}`, {
        method: 'DELETE',
      })
        .then((response) => {
          if (response.ok) {
            alert(`El producto "${productName}" fue eliminado con éxito.`);
            fetchProducts();
          } else {
            alert('Ocurrió un error al intentar eliminar el producto.');
          }
        })
        .catch((error) => {
          console.error('Error al eliminar producto:', error);
          alert('No se pudo conectar con el servidor.');
        });
    }
  };

  // Abrir Modal de Edición
  const handleEditClick = (product) => {
    setEditingProduct(product);
    setEditFormData({
      title: product.title,
      price: product.price,
      duration: product.duration || '',
      image_url: product.image_url || ''
    });
  };

  // Manejar cambios en el formulario de edición
  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  // Guardar Cambios (PUT)
  const handleUpdateProduct = (e) => {
    e.preventDefault();

    const updatedPayload = {
      ...editFormData,
      price: parseFloat(editFormData.price)
    };

    fetch(`http://localhost:8080/api/products/${editingProduct.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedPayload),
    })
      .then((response) => {
        if (response.ok) {
          alert('¡Producto actualizado correctamente!');
          setEditingProduct(null); // Cerrar modal
          fetchProducts(); // Refrescar lista
        } else {
          alert('Ocurrió un error al actualizar el producto.');
        }
      })
      .catch((error) => {
        console.error('Error al actualizar producto:', error);
        alert('No se pudo conectar con el servidor.');
      });
  };

  if (loading) {
    return (
      <div className="product-list-container">
        <h2>Cargando lista de administración...</h2>
      </div>
    );
  }

  return (
    <div className="product-list-container">
      <h2>Listado de Productos</h2>
      <p className="list-subtitle">
        Gestión de productos activos ({products.length} disponibles)
      </p>

      {products.length === 0 ? (
        <div className="empty-list-message">
          <p>No hay productos registrados en el sistema.</p>
        </div>
      ) : (
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
                <td className="col-name">{product.title}</td>
                <td className="col-actions">
                  <button
                    className="btn-action edit-btn"
                    onClick={() => handleEditClick(product)}
                  >
                    ✏️ Editar
                  </button>
                  <button
                    className="btn-action delete-btn"
                    onClick={() =>
                      handleDeleteProduct(product.id, product.title)
                    }
                  >
                    🗑️ Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {/* Modal / Overlay de Edición */}
      {editingProduct && (
        <div className="modal-overlay" style={modalOverlayStyle}>
          <div className="modal-content" style={modalContentStyle}>
            <h3>✏️ Editar Producto #{editingProduct.id}</h3>
            <form onSubmit={handleUpdateProduct}>
              <div style={{ marginBottom: '10px' }}>
                <label style={{ display: 'block', fontWeight: 'bold' }}>Título:</label>
                <input
                  type="text"
                  name="title"
                  value={editFormData.title}
                  onChange={handleEditChange}
                  style={inputStyle}
                  required
                />
              </div>

              <div style={{ marginBottom: '10px' }}>
                <label style={{ display: 'block', fontWeight: 'bold' }}>Precio ($):</label>
                <input
                  type="number"
                  name="price"
                  step="0.01"
                  value={editFormData.price}
                  onChange={handleEditChange}
                  style={inputStyle}
                  required
                />
              </div>

              <div style={{ marginBottom: '10px' }}>
                <label style={{ display: 'block', fontWeight: 'bold' }}>Duración:</label>
                <input
                  type="text"
                  name="duration"
                  value={editFormData.duration}
                  onChange={handleEditChange}
                  style={inputStyle}
                  required
                />
              </div>

              <div style={{ marginBottom: '15px' }}>
                <label style={{ display: 'block', fontWeight: 'bold' }}>URL Imagen:</label>
                <input
                  type="text"
                  name="image_url"
                  value={editFormData.image_url}
                  onChange={handleEditChange}
                  style={inputStyle}
                  required
                />
              </div>

              <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end' }}>
                <button
                  type="button"
                  onClick={() => setEditingProduct(null)}
                  style={{ padding: '8px 15px', cursor: 'pointer' }}
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  style={{
                    padding: '8px 15px',
                    backgroundColor: '#0288d1',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer'
                  }}
                >
                  Guardar Cambios
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

// Estilos rápidos inline para el modal
const modalOverlayStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 1000
};

const modalContentStyle = {
  backgroundColor: '#fff',
  padding: '25px',
  borderRadius: '8px',
  width: '400px',
  maxWidth: '90%'
};

const inputStyle = {
  width: '100%',
  padding: '8px',
  marginTop: '4px',
  boxSizing: 'border-box'
};

export default ProductList;