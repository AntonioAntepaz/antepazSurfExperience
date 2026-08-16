import React, { useState } from 'react';
import axios from 'axios';
import './AddProduct.css';

export default function AddProduct() {
  const [formData, setFormData] = useState({
    title: '',
    price: '',
    duration: '',
    image_url: ''
  });

  const [statusMessage, setStatusMessage] = useState({ type: '', text: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatusMessage({ type: '', text: '' });

    // Limpiamos la URL quitando espacios vacíos que rompen la imagen en la DB
    const cleanImageUrl = formData.image_url.trim();

    const payload = {
      title: formData.title.trim(),
      price: parseFloat(formData.price),
      duration: formData.duration.trim(),
      image_url: cleanImageUrl
    };

    axios.post('http://localhost:8080/api/products', payload)
      .then((response) => {
        setStatusMessage({
          type: 'success',
          text: '¡Producto creado exitosamente!'
        });
        setFormData({
          title: '',
          price: '',
          duration: '',
          image_url: ''
        });
      })
      .catch((error) => {
        console.error('Error al crear el producto:', error);
        setStatusMessage({
          type: 'error',
          text: 'Ocurrió un error al guardar el producto.'
        });
      });
  };

  return (
    <div className="add-product-container">
      <h2>➕ Agregar Nuevo Producto</h2>

      {statusMessage.text && (
        <div className={`status-alert ${statusMessage.type}`}>
          {statusMessage.text}
        </div>
      )}

      <form onSubmit={handleSubmit} className="add-product-form">
        <div className="form-group">
          <label htmlFor="title">Título del Producto</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="price">Precio ($)</label>
          <input
            type="number"
            id="price"
            name="price"
            step="0.01"
            value={formData.price}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="duration">Duración</label>
          <input
            type="text"
            id="duration"
            name="duration"
            value={formData.duration}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="image_url">URL de la Imagen</label>
          <input
            type="url"
            id="image_url"
            name="image_url"
            placeholder="Ej: https://images.unsplash.com/photo-..."
            value={formData.image_url}
            onChange={handleChange}
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