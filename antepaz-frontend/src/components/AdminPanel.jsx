import React, { useState } from 'react';
import './AdminPanel.css';
import AddProduct from './AddProduct';
import ProductList from './ProductList';

function AdminPanel() {
  const [activeTab, setActiveTab] = useState('list'); // Seteado por defecto en 'list' para ver la tabla directo

  const handleGoHome = () => {
    window.history.pushState({}, '', '/antepazSurfExperience/');
    window.dispatchEvent(new Event('popstate'));
  };

  return (
    <div className="admin-page">
      <div className="mobile-warning">
        <div className="warning-card">
          <h2>Acceso Restringido</h2>
          <p>El Panel de Administración de <strong>Antepaz Surf Experience</strong> no está disponible para dispositivos móviles.</p>
          <p>Por favor, ingresá desde una computadora de escritorio o laptop.</p>
        </div>
      </div>

      <div className="admin-container">
        <aside className="admin-sidebar">
          <h3>Panel Admin</h3>
          <nav className="admin-menu">
            <button
              className={activeTab === 'list' ? 'active' : ''}
              onClick={() => setActiveTab('list')}
            >
              📦 Listado de Productos
            </button>
            <button
              className={activeTab === 'addProduct' ? 'active' : ''}
              onClick={() => setActiveTab('addProduct')}
            >
              ➕ Agregar Producto
            </button>
            <button
              className={activeTab === 'stats' ? 'active' : ''}
              onClick={() => setActiveTab('stats')}
            >
              📊 Estadísticas
            </button>
            
            <hr style={{ margin: '15px 0', borderColor: '#eee' }} />
            
            <button className="btn-go-home" onClick={handleGoHome} style={{ textAlign: 'left' }}>
              ⬅️ Volver a la Tienda
            </button>
          </nav>
        </aside>

        <main className="admin-content">
          {activeTab === 'addProduct' && <AddProduct />}
          {activeTab === 'list' && <ProductList />}
          {activeTab === 'stats' && <p>Estadísticas del negocio próximamente.</p>}
        </main>
      </div>
    </div>
  );
}

export default AdminPanel;