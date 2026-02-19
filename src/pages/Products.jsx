import { PiWhatsappLogoBold } from "react-icons/pi";
import "./Products.css";

export default function Products() {
  return (
    <section id="productos" className="max-container">

      <div id="shilibombones" className="producto">
        <img src="/img-prueba.png" alt="Shilibombones" className="img-responsive" />
        <div className="descripcion-producto">
          <h2>Shilibombones</h2>
        <p>
          Exquisitos bombones elaborados con crema suave de coco,
          rellenos con ingredientes seleccionados que brindan una
          explosión de sabor en cada bocado.
        </p>

        <button className="btn-pedir">
          <PiWhatsappLogoBold /> Pedir
        </button>
        </div>
      </div>

      <div id="chocotejas" className="producto">
        <img src="/img-prueba.png" alt="Chocotejas" className="img-responsive" />
        <div className="descripcion-producto">
          <h2>Chocotejas</h2>
        <p>
          Deliciosas chocotejas artesanales con relleno de manjar,
          frutas secas y sabores variados, cubiertas con fino chocolate.
        </p>

        <button className="btn-pedir">
          <PiWhatsappLogoBold /> Pedir
        </button>
        </div>
      </div>

      <div id="chocolate-comestible" className="producto">
        <img src="/img-prueba.png" alt="Chocolate comestible" className="img-responsive" />
        <div className="descripcion-producto">
          <h2>Chocolate comestible</h2>
        <p>
          Suaves tabletas de chocolate ideales para disfrutar en
          cualquier momento, con una textura cremosa y sabor intenso.
        </p>

        <button className="btn-pedir">
          <PiWhatsappLogoBold /> Pedir
        </button>
        </div>
      </div>

      <div id="chocolate-chapa" className="producto">
        <img src="/img-prueba.png" alt="Chocolate en chapa" className="img-responsive" />
        <div className="descripcion-producto">
          <h2>Chocolate en chapa</h2>
        <p>
          Chocolate presentado en finas láminas, perfecto para decorar,
          regalar o disfrutar como un detalle especial.
        </p>

        <button className="btn-pedir">
          <PiWhatsappLogoBold /> Pedir
        </button>
        </div>
      </div>

      <div id="chocolate-caja" className="producto">
        <img src="/img-prueba.png" alt="Chocolate en caja" className="img-responsive" />
        <div className="descripcion-producto">
          <h2>Chocolate en caja</h2>
        <p>
          Presentaciones especiales en caja con variedad de chocolates,
          ideales para obsequios, celebraciones y momentos únicos.
        </p>

        <button className="btn-pedir">
          <PiWhatsappLogoBold /> Pedir
        </button>
        </div>
      </div>

    </section>
  );
}
