import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <section className="home">
      <div className="home-img">
        <img src="/logo.png" className="home-img-logo" />
        <div className="home-buttons">
          <button onClick={() => navigate("/productos")}>
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

export default Home;
