import { Outlet, useNavigate} from "react-router-dom";
import { useState} from "react";
import { IoIosArrowDown } from "react-icons/io";

export default function Layout() {
  const navigate = useNavigate();

  const safeNavigate = (path) => {
  setIsModalOpen(false);
  setIsNosotrosOpen(false);
  navigate(path);
};


  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isNosotrosOpen, setIsNosotrosOpen] = useState(false);

  const openModal = (e) => {
    e.stopPropagation();
    setIsModalOpen(true);
  };

  const openNosotros = (e) => {
    e.stopPropagation();
    setIsNosotrosOpen(true);
  };

  const handleOverlayClick = (closeFn) => (e) => {
    if (e.target === e.currentTarget) closeFn(false);
  };

  return (
    <>
      <section className="container">

        {/* ===== HEADER (FIJO) ===== */}
        <header className="header">
          <nav className="nav">
            <img
              className="nav_logo"
              src="/logo.png"
              alt="logo"
              onClick={() => navigate("/")}
              style={{ cursor: "pointer" }}
            />

            <ul className="nav_list">
              <li onClick={openModal}>
                PRODUCTOS <span><IoIosArrowDown /></span>
              </li>

              <li onClick={() => navigate("/reconocimientos")}>
                RECONOCIMIENTOS
              </li>

              <li onClick={openNosotros}>
                NOSOTROS <span><IoIosArrowDown /></span>
              </li>

              <li onClick={() => navigate("/trabajadores")}>
                TRABAJADORES
              </li>
            </ul>
          </nav>
        </header>

        {/* ===== MAIN (DINÁMICO) ===== */}
        <main className="main">
          <Outlet />
        </main>

        {/* ===== FOOTER (FIJO) ===== */}
        <footer className="footer">
          <div className="footer-column">
            <h3>PRODUCTOS</h3>
            <ul>
              <li>Shilibombones</li>
              <li>Chocotejas</li>
              <li>Chocolate comestible</li>
              <li>Chocolate en chapa</li>
              <li>Chocolate en caja</li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>RECONOCIMIENTOS</h3>
          </div>

          <div className="footer-column">
            <h3>NOSOTROS</h3>
            <ul>
              <li>Nuestra historia</li>
              <li>Misión y visión</li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>TRABAJADORES</h3>
          </div>
        </footer>
      </section>

      {/* ===== MODAL PRODUCTOS ===== */}
      {isModalOpen && (
        <div
          className="modal-overlay"
          onClick={handleOverlayClick(setIsModalOpen)}
        >
          <div className="modal-content">
            <div className="productos-grid">

              <div
                className="producto-card"
                onClick={() => safeNavigate("/producto/shilibombones")}
              >
                <h3>Shilibombones</h3>
              </div>

              <div
                className="producto-card"
                onClick={() => safeNavigate("/producto/chocotejas")}
              >
                <h3>Chocotejas</h3>
              </div>

              <div
                className="producto-card"
                onClick={() => safeNavigate("/producto/chocolate-comestible")}
              >
                <h3>Chocolate comestible</h3>
              </div>

              <div
                className="producto-card"
                onClick={() => safeNavigate("/producto/chocolate-en-chapa")}
              >
                <h3>Chocolate en chapa</h3>
              </div>

              <div
                className="producto-card"
                onClick={() => safeNavigate("/producto/chocolate-en-caja")}
              >
                <h3>Chocolate en caja</h3>
              </div>

            </div>
          </div>
        </div>
      )}

      {/* ===== MODAL NOSOTROS ===== */}
      {isNosotrosOpen && (
        <div
          className="modal-overlayy"
          onClick={handleOverlayClick(setIsNosotrosOpen)}
        >
          <div className="nosotros-modal">
            <div className="nosotros-options">

              <div
                className="nosotros-item"
                onClick={() => safeNavigate("/nosotros/historia")}
              >
                <h3>Nuestra Historia</h3>
              </div>

              <div
                className="nosotros-item"
                onClick={() => safeNavigate("/nosotros/mision-vision")}
              >
                <h3>Misión y Visión</h3>
              </div>

            </div>
          </div>
        </div>
      )}
    </>
  );
}
