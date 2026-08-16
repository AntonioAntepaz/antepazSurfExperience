import React, { useState, useEffect } from 'react';
import './FeaturedProducts.css';
import Pagination from './Pagination'; // Importamos el componente de paginación

function FeaturedProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // Criterio 1: Máximo 10 productos por página

  // Petición al backend cuando el componente se monta
  useEffect(() => {
    fetch('http://localhost:8080/api/products')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error al obtener los productos:', error);
        setLoading(false);
      });
  }, []);

  // Cálculo de Paginación Dinámica
  const totalPages = Math.ceil(products.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  // Productos a mostrar dinámicamente según la página
  const currentProducts = products.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  if (loading) {
    return (
      <section className="featured-container">
        <h2>Cargando experiencias...</h2>
      </section>
    );
  }

  return (
    <section className="featured-container">
      <h2>Recomendados</h2>

      <div className="products-grid">
        {currentProducts.map((product) => (
          <div key={product.id} className="product-card">
            <div className="product-image-container">
              <img
                src={product.imageUrl}
                alt={product.title}
                className="product-image"
              />
            </div>
            <div className="product-info">
              <h3>{product.title}</h3>
              <p className="product-duration">⏰ {product.duration}</p>
              <div className="product-footer">
                <span className="product-price">${product.price}</span>
                <button className="btn-reserve">Reservar ahora</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Componente de paginación con botones y números */}
      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}
    </section>
  );
}

export default FeaturedProducts;