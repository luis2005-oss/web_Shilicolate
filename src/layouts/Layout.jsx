import { Outlet, useNavigate } from "react-router-dom";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

export default function Layout() {
  const navigate = useNavigate();


  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isNosotrosOpen, setIsNosotrosOpen] = useState(false);


  const safeNavigate = (path) => {
    setIsModalOpen(false);
    setIsNosotrosOpen(false);
    navigate(path);
  };

const scrollToProduct = (id) => {
  setIsModalOpen(false);
  setIsNosotrosOpen(false);

  navigate("/products");


  setTimeout(() => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }, 350);
};


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

        {/* ===== HEADER ===== */}
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
                PRODUCTOS <IoIosArrowDown />
              </li>

              <li onClick={() => safeNavigate("/reconocimientos")}>
                RECONOCIMIENTOS
              </li>

              <li onClick={openNosotros}>
                NOSOTROS <IoIosArrowDown />
              </li>

              <li onClick={() => safeNavigate("/trabajadores")}>
                TRABAJADORES
              </li>
            </ul>
          </nav>
        </header>

        {/* ===== MAIN ===== */}
        <main className="main">
          <Outlet />
        </main>

        {/* ===== FOOTER ===== */}
        <footer className="footer">
          <div className="footer-column">
            <h3>PRODUCTOS</h3>
            <ul>
              <li onClick={() => scrollToProduct("shilibombones")}>Shilibombones</li>
              <li onClick={() => scrollToProduct("chocotejas")}>Chocotejas</li>
              <li onClick={() => scrollToProduct("chocolate-comestible")}>Chocolate comestible</li>
              <li onClick={() => scrollToProduct("chocolate-en-chapa")}>Chocolate en chapa</li>
              <li onClick={() => scrollToProduct("chocolate-en-caja")}>Chocolate en caja</li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>RECONOCIMIENTOS</h3>
          </div>

          <div className="footer-column">
            <h3>NOSOTROS</h3>
            <ul>
              <li onClick={() => safeNavigate("/nosotros/historia")}>Nuestra historia</li>
              <li onClick={() => safeNavigate("/nosotros/mision-vision")}>Misión y visión</li>
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
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="productos-grid">

              <div className="producto-card" onClick={() => scrollToProduct("shilibombones")}>
                <h3>Shilibombones</h3>
              </div>

              <div className="producto-card" onClick={() => scrollToProduct("chocotejas")}>
                <h3>Chocotejas</h3>
              </div>

              <div className="producto-card" onClick={() => scrollToProduct("chocolate-comestible")}>
                <h3>Chocolate comestible</h3>
              </div>

              <div className="producto-card" onClick={() => scrollToProduct("chocolate-en-chapa")}>
                <h3>Chocolate en chapa</h3>
              </div>

              <div className="producto-card" onClick={() => scrollToProduct("chocolate-en-caja")}>
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
          <div
            className="nosotros-modal"
            onClick={(e) => e.stopPropagation()}
          >
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