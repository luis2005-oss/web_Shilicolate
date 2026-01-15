// src/layouts/Layout.jsx
import { Outlet, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { ChevronDown } from "lucide-react";

export default function Layout() {
  const navigate = useNavigate();
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isNosotrosOpen, setIsNosotrosOpen] = useState(false);

  const openModal = (e) => {
    e?.stopPropagation();
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  const openNosotros = (e) => {
    e?.stopPropagation();
    setIsNosotrosOpen(true);
  };

  const closeNosotros = () => setIsNosotrosOpen(false);

  const handleOverlayClick = (closeFn) => (e) => {
    if (e.target === e.currentTarget) closeFn();
  };

  return (
    <div className="app-wrapper">
      {/* Header fijo */}
      <header className="header">
        <nav className="nav">
          <img className="nav_logo" src="/logo.png" alt="Shilicolate logo" />
          <ul className="nav_list">
            <li onClick={openModal}>
              PRODUCTOS <ChevronDown size={35} strokeWidth={2} />
            </li>
            <li onClick={() => navigate('/reconocimientos')}>
              RECONOCIMIENTOS
            </li>
            <li onClick={openNosotros}>
              NOSOTROS <ChevronDown size={35} strokeWidth={2} />
            </li>
            <li onClick={() => navigate('/trabajadores')}>
              TRABAJADORES
            </li>
          </ul>
        </nav>
      </header>

      {/* Área que CAMBIA con la navegación */}
      <main className="main-content">
        <Outlet />  {/* ← Aquí van Home, Reconocimientos, Trabajadores, etc. */}
      </main>

      {/* Footer fijo */}
      <footer className="footer">
        <div className="footer-column">
          <h3>PRODUCTOS</h3>
          <ul>
            <li>Shilibombones</li>
            <li>Chocotejas</li>
            <li>Chocolate comestible</li>
            <li>Chocolate en forma de chapa</li>
            <li>Chocolate en caja</li>
          </ul>
        </div>
        {/* Las otras columnas... */}
      </footer>

      {/* Modales (controlados desde Layout) */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={handleOverlayClick(closeModal)}>
          <div className="modal-content">
            <div className="productos-grid">
              <div className="producto-card" onClick={() => { closeModal(); navigate('/producto/shilibombones'); }}>
                <h3>Shilibombones</h3>
              </div>
              {/* las otras tarjetas... */}
            </div>
          </div>
        </div>
      )}

      {isNosotrosOpen && (
        <div className="modal-overlayy" onClick={handleOverlayClick(closeNosotros)}>
          <div className="nosotros-modal">
            <div className="nosotros-options">
              <div className="nosotros-item" onClick={() => { closeNosotros(); navigate('/nosotros/historia'); }}>
                <h3>Nuestra Historia</h3>
              </div>
              {/* la otra opción... */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}