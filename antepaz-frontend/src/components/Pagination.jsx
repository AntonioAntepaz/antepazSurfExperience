import React from 'react';
import './Pagination.css';

function Pagination({ currentPage, totalPages, onPageChange }) {
  if (totalPages <= 1) return null;

  // Generamos el array con los números de página [1, 2, 3...]
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="pagination-container">
      {/* Botón Ir al Inicio */}
      <button 
        className="pagination-btn"
        onClick={() => onPageChange(1)} 
        disabled={currentPage === 1}
      >
        «
      </button>

      {/* Botón Anterior */}
      <button 
        className="pagination-btn"
        onClick={() => onPageChange(currentPage - 1)} 
        disabled={currentPage === 1}
      >
        Anterior
      </button>

      {/* Números de página */}
      <div className="pagination-numbers">
        {pageNumbers.map((number) => (
          <button
            key={number}
            className={`pagination-number ${currentPage === number ? 'active' : ''}`}
            onClick={() => onPageChange(number)}
          >
            {number}
          </button>
        ))}
      </div>

      {/* Botón Siguiente */}
      <button 
        className="pagination-btn"
        onClick={() => onPageChange(currentPage + 1)} 
        disabled={currentPage === totalPages}
      >
        Siguiente
      </button>

      {/* Botón Ir al Final */}
      <button 
        className="pagination-btn"
        onClick={() => onPageChange(totalPages)} 
        disabled={currentPage === totalPages}
      >
        »
      </button>
    </div>
  );
}

export default Pagination;