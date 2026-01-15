import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronDown } from "lucide-react";

function App() {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isNosotrosOpen, setIsNosotrosOpen] = useState(false);

  const openModal = (e) => {
    e.stopPropagation();
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openNosotros = (e) => {
    e.stopPropagation();
    setIsNosotrosOpen(true);
  };

  const closeNosotros = () => {
    setIsNosotrosOpen(false);
  };

  const handleOverlayClick = (closeFn) => (e) => {
    if (e.target === e.currentTarget) {
      closeFn();
    }
  };

  return (
    <>
      <section className='container'>
        <header className='header'>
          <nav className='nav'>
            <img className='nav_logo' src="/logo.png" alt="logo" />
            <ul className='nav_list'>
              <li onClick={openModal}>
                PRODUCTOS <span><ChevronDown size={35} strokeWidth={2} /></span>
              </li>
              <li onClick={() => navigate('/reconocimientos')}>
                RECONOCIMIENTOS
              </li>
              <li onClick={openNosotros}>
                NOSOTROS <span><ChevronDown size={35} strokeWidth={2} /></span>
              </li>
              <li onClick={() => navigate('/trabajadores')}>
                TRABAJADORES
              </li>
            </ul>
          </nav>
        </header>

        <main className='home'>
          <div className='home-img'>
            <img src="/logo.png" alt="logo" className='home-img-logo'/>

            <div className='home-buttons'>
              <button onClick={openModal}>
                Ver productos
              </button>
              <button onClick={() => navigate('/contacto')}>
                Contáctanos
              </button>
            </div>
          </div>
        </main>

        <footer className='footer'>
          <div className='footer-column'>
            <h3>PRODUCTOS</h3>
            <ul>
              <li>Shilibombones</li>
              <li>Chocotejas</li>
              <li>Chocoate comestible</li>
              <li>Chocolate en forma de chapa</li>
              <li>Chocolate en caja</li>
            </ul>
          </div>
          <div className='footer-column'>
            <h3>RECONOCIMIENTOS</h3>
          </div>
          <div className='footer-column'>
            <h3>NOSOTROS</h3>
            <ul>
              <li>Nuestra historia</li>
              <li>Misión y visión</li>
            </ul>
          </div>
          <div className='footer-column'>
            <h3>TRABAJADORES</h3>
          </div>
        </footer>
      </section>

      {/* ================== MODAL DE PRODUCTOS ================== */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={handleOverlayClick(closeModal)}>
          <div className="modal-content">
            
            <div className="productos-grid">
              <div className="producto-card" onClick={() => { closeModal(); navigate('/producto/shilibombones'); }}>
                <h3>Shilibombones</h3>
              </div>
              
              <div className="producto-card" onClick={() => { closeModal(); navigate('/producto/chocotejas'); }}>
                <h3>Chocotejas</h3>
              </div>
              
              <div className="producto-card" onClick={() => { closeModal(); navigate('/producto/chocoate-comestible'); }}>
                <h3>Chocoate comestible</h3>
              </div>
              
              <div className="producto-card" onClick={() => { closeModal(); navigate('/producto/chocolate-en-chapa'); }}>
                <h3>Chocolate en forma de chapa</h3>
              </div>
              
              <div className="producto-card" onClick={() => { closeModal(); navigate('/producto/chocolate-en-caja'); }}>
                <h3>Chocolate en caja</h3>
              </div>
              
            </div>
          </div>
        </div>
      )}

      {/* ================== MODAL DE NOSOTROS ================== */}
      {isNosotrosOpen && (
        <div className="modal-overlayy" onClick={handleOverlayClick(closeNosotros)}>
          <div className="nosotros-modal">

            <div className="nosotros-options">
              <div className="nosotros-item" onClick={() => { closeNosotros(); navigate('/nosotros/historia'); }}>
                <h3>Nuestra Historia</h3>
              </div>

              <div className="nosotros-item" onClick={() => { closeNosotros(); navigate('/nosotros/mision-vision'); }}>
                <h3>Misión y Visión</h3>
              </div>

            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;