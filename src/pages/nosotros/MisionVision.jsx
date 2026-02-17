import "./MisionVision.css";

export default function MisionVision() {
  return (
    <section className="container_MVV">
      <h1>Misión, Visión y Valores</h1>
      <div className="mision_vision">
        <h3>Misión</h3>
        <p>
          Crear productos chocolateros artesanales y sostenibles que deleiten
          los sentidos y satisfagan las necesidades de nuestros clientes amantes
          del chocolate, mientras fomentamos la innovación, la calidad y el
          respeto por el medio ambiente y nuestra cultura Celendina.
        </p>
      </div>

      <div className="mision_vision">
        <h3>Visión</h3>
        <p>
          Ser la empresa líder en la industria chocolatera de la región,
          reconocida por ofrecer chocolates de alta calidad que deleitan los
          sentidos y nutren el cuerpo, mientras generamos un impacto positivo en
          el mundo. Aspiramos a construir una marca confiable y querida, que
          inspire momentos memorables, promueva la innovación responsable y
          refleje nuestro compromiso con el medio ambiente y el bienestar de
          nuestra comunidad
        </p>
      </div>

      <div className="valores_container">
        <h3>Valores</h3>
        <div  className="valores">
          <h4>Calidad</h4>
          <ul>
            <li>En Shilicolate, la calidad no es solo un estándar, es una promesa.</li>
            <li>Seleccionamos cuidadosamente el mejor cacao de la región.</li>
            <li>Seleccionamos cuidadosamente el mejor cacao de la región.</li>
            <li>Usamos ingredientes naturales, sin aditivos ni conservantes artificiales.</li>
            <li>La calidad también se refleja en el empaque, la presentación y la  experiencia del cliente.</li>
          </ul>
        </div>

        <div className="valores">
          <h4>Innovación</h4>
          <ul>
            <li>Creamos productos únicos como Shilibombones, Chocolate al 70%,  chocolate al 50%.</li>
            <li>Experimentamos con nuevas combinaciones, texturas y formatos que  sorprenden al consumidor.</li>
            <li>Apostamos por empaques sostenibles y diseños que cuentan historias  locales.</li>
          </ul>
        </div>

        <div className="valores">
          <h4>Compromiso con la comunidad</h4>
          <ul>
            <li>Trabajamos directamente con agricultores locales y promoviendo  prácticas sostenibles.</li>
            <li>Ofrecemos empleo digno y oportunidades a jóvenes y mujeres de la zona.</li>
            <li>Participamos en iniciativas culturales, educativas y ambientales que  fortalecen el tejido social.</li>
            <li>Cada tableta de Shilicolate lleva el sabor de la tierra y el esfuerzo de su  gente.</li>
          </ul>
        </div>

        <div className="valores">
          <h4>Pasión por el chocolate</h4>
          <ul>
            <li>El chocolate es nuestro arte, nuestra inspiración.</li>
            <li>Cada creación nace del amor por el cacao y el deseo de compartirlo con  el mundo.</li>
            <li>Nos emociona descubrir nuevos sabores, perfeccionar recetas y ver  sonrisas al probar nuestros productos.</li>
            <li>Vivimos el chocolate como una experiencia sensorial, cultural y  emocional.</li>
            <li>En Shilicolate, no vendemos dulces: compartimos momentos, memorias y  orgullo local.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
