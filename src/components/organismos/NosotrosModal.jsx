import { useNavigate } from "react-router-dom";

function NosotrosModal() {
  const navigate = useNavigate();

  return (
    <div className="modal-overlayy">
      <div className="nosotros-modal">
        <div onClick={() => navigate("/nosotros/historia")}>
          Nuestra Historia
        </div>
        <div onClick={() => navigate("/nosotros/mision-vision")}>
          Misión y Visión
        </div>
      </div>
    </div>
  );
}

export default NosotrosModal;
