import "./Trabajadores.css";

export default function Trabajadores() {
  return (
    <section className="max_container_trabajadores">
      <div className="trabajadores">
        <img src="./perfil_trabajador.png" alt="img perfil trabajador" />
        <div className="info_trabajador">
          <div className="info_trabajador_nombre">
            <h3>JESUS HAYDEE <br /> BRIONES SANCHEZ</h3>
          </div>
          <h4>Dueña de la empresa</h4>
          <p>
            Emprendedora dedicada a la elaboración de cacao y chocolate y
            productos de confiteria artesanales de alta calidad, comprometida
            con mantener la tradición, el sabor y la identidad de Cajamarca en
            cada producto, su liderazgo y pasión por la producción local han
            permitido que cada chocolate refleje esfuerzo, cultura y orgullo,
            ofreciendo experiencias auténticas inspiradas en los sabores de
            Celendín.
          </p>
        </div>
      </div>
    </section>
  );
}
