import React, { useState } from 'react';
import './AddProduct.css';

// Lista de productos existentes de prueba para validar duplicados
const INITIAL_PRODUCTS = [
  "Clase Principiante Individual",
  "Alquiler Tabla Softboard",
  "Surf Trip Playa Venao"
];

function AddProduct() {
  const [productName, setProductName] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [productsList, setProductsList] = useState(INITIAL_PRODUCTS);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage('');
    setSuccessMessage('');

    // Criterio 6: Validar si el nombre ya existe
    const exists = productsList.some(
      (item) => item.toLowerCase() === productName.trim().toLowerCase()
    );

    if (exists) {
      setErrorMessage('⚠️ El nombre del producto ya está en uso. Intentá con otro.');
      return;
    }

    // Criterio 5: Guardar el producto
    setProductsList([...productsList, productName.trim()]);
    setSuccessMessage('✅ ¡Producto registrado con éxito!');

    // Limpiar formulario
    setProductName('');
    setDescription('');
    setImageUrl('');
  };

  return (
    <div className="admin-container">
      {/* Criterio 2: Panel con botón/encabezado "Agregar producto" */}
      <div className="admin-header">
        <h2>Panel de Administración</h2>
        <button className="btn-add-header">
          + Agregar producto
        </button>
      </div>

      <form className="add-product-form" onSubmit={handleSubmit}>
        <h3>Registrar Nuevo Producto</h3>

        {errorMessage && <div className="alert alert-error">{errorMessage}</div>}
        {successMessage && <div className="alert alert-success">{successMessage}</div>}

        {/* Criterio 3: Campos para nombre, descripción e imagen */}
        <div className="form-group">
          <label htmlFor="name">Nombre del Producto *</label>
          <input
            type="text"
            id="name"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            placeholder="Ej: Clase Surf Avanzada"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Descripción *</label>
          <textarea
            id="description"
            rows="4"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Escribí una descripción detallada..."
            required
          />
        </div>

        {/* Criterio 4: Carga de URL o subida de imagen */}
        <div className="form-group">
          <label htmlFor="image">URL de la Imagen *</label>
          <input
            type="url"
            id="image"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            placeholder="https://ejemplo.com/imagen.jpg"
            required
          />
        </div>

        <button type="submit" className="btn-submit">
          Guardar Producto
        </button>
      </form>
    </div>
  );
}

export default AddProduct;