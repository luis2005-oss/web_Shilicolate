import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronDown } from "lucide-react";

function Header() {
  const navigate = useNavigate();
  const [OpenProductos, setOpenProductos] = useState(false);
  const [OpenNosotros, setOpenNosotros] = useState(false);

  return (
    <header className="header">
      <nav className="nav">
        <img
          src="/logo.png"
          className="nav_logo"
          alt="logo"
          onClick={() => navigate("/")}
        />

        <ul className="nav_list">
          <li onClick={() => setOpenProductos(true)}>
            PRODUCTOS <ChevronDown size={30} />
          </li>

          <li onClick={() => navigate("/reconocimientos")}>
            RECONOCIMIENTOS
          </li>

          <li onClick={() => setOpenNosotros(true)}>
            NOSOTROS <ChevronDown size={30} />
          </li>

          <li onClick={() => navigate("/trabajadores")}>
            TRABAJADORES
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
