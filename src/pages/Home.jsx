import "./Home.css";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <section className="home">
      <div className="home-img">
        <img src="/logo.png" alt="logo" className="home-img-logo" />

        <div className="home-buttons">
          <button onClick={() => navigate("/products")}>
            Ver productos
          </button>
          <button onClick={() => navigate("/contacto")}>
            Contáctanos
          </button>
        </div>
      </div>
    </section>
  );
}
