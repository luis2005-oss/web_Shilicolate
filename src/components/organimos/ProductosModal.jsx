import { useNavigate } from "react-router-dom";

function ProductosModal() {
  const navigate = useNavigate();

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="productos-grid">
          <div onClick={() => navigate("/producto/shilibombones")}>Shilibombones</div>
          <div onClick={() => navigate("/producto/chocotejas")}>Chocotejas</div>
          <div onClick={() => navigate("/producto/chocoate-comestible")}>Chocolate comestible</div>
          <div onClick={() => navigate("/producto/chocolate-en-chapa")}>Chocolate en chapa</div>
          <div onClick={() => navigate("/producto/chocolate-en-caja")}>Chocolate en caja</div>
        </div>
      </div>
    </div>
  );
}

export default ProductosModal;
