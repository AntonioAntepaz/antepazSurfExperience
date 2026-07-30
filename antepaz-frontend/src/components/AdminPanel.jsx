// Importamos React y useState para controlar qué pestaña del menú de administración está activa
import React, { useState } from 'react';

// Importamos los estilos específicos para el panel de administración
import './AdminPanel.css';

// Importamos el componente de Agregar Producto que ya tenías creado
import AddProduct from './AddProduct';

function AdminPanel() {
  // Estado que guarda la pestaña/sección seleccionada en el menú lateral (por defecto 'addProduct')
  const [activeTab, setActiveTab] = useState('addProduct');

  return (
    // Contenedor general del panel
    <div className="admin-page">
      
      {/* ⚠️ Criterio 3: Bloque de mensaje exclusivo para celulares/pantallas chicas */}
      <div className="mobile-warning">
        <div className="warning-card">
          <h2>🚫 Acceso Restringido</h2>
          <p>
            El Panel de Administración de <strong>Antepaz Surf Experience</strong> no está disponible para dispositivos móviles.
          </p>
          <p>Por favor, ingresá desde una computadora de escritorio o laptop.</p>
        </div>
      </div>

      {/* 🖥️ Criterios 1 y 2: Estructura del Panel para Pantallas de Escritorio */}
      <div className="admin-container">
        
        {/* Barra lateral / Menú de navegación del panel */}
        <aside className="admin-sidebar">
          <h3>Panel Admin</h3>
          <nav className="admin-menu">
            
            {/* Botón 1: Pestaña Agregar Producto */}
            <button 
              // Si 'activeTab' es 'addProduct', le aplica la clase CSS 'active' para resaltarlo
              className={activeTab === 'addProduct' ? 'active' : ''} 
              // Al hacer clic, cambia el estado 'activeTab' a 'addProduct'
              onClick={() => setActiveTab('addProduct')}
            >
              ➕ Agregar Producto
            </button>

            {/* Botón 2: Pestaña Listado de Productos */}
            <button 
              className={activeTab === 'list' ? 'active' : ''} 
              onClick={() => setActiveTab('list')}
            >
              📦 Listado de Productos
            </button>

            {/* Botón 3: Pestaña Estadísticas */}
            <button 
              className={activeTab === 'stats' ? 'active' : ''} 
              onClick={() => setActiveTab('stats')}
            >
              📊 Estadísticas
            </button>

          </nav>
        </aside>

        {/* Área de contenido principal según la pestaña seleccionada */}
        <main className="admin-content">
          {/* Si la pestaña activa es 'addProduct', renderizamos tu formulario AddProduct */}
          {activeTab === 'addProduct' && <AddProduct />}
          
          {/* Si la pestaña es 'list', renderizamos un texto temporal de listado */}
          {activeTab === 'list' && <p>Aquí irá el listado de administración de productos.</p>}
          
          {/* Si la pestaña es 'stats', renderizamos un texto temporal de estadísticas */}
          {activeTab === 'stats' && <p>Estadísticas del negocio próximamente.</p>}
        </main>

      </div>
    </div>
  );
}

// Exportamos el componente para usarlo en App.jsx
export default AdminPanel;