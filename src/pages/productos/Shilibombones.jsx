import { PiWhatsappLogoBold } from "react-icons/pi";
import "./Shilibombones.css";

  const lista1 = [
    {
      id: 1,
      titulo: "sabor 1",
      descripcion: "Elaborado de fruta selecta para lograr un sabor perfecto y armonioso con lo que se puede deleitar, encuentrelo solo aqui."
    },
    {
      id: 2,
      titulo: "sabor 2",
      descripcion: "Elaborado de fruta selecta para lograr un sabor perfecto y armonioso con lo que se puede deleitar, encuentrelo solo aqui."
    },
    {
      id: 3,
      titulo: "sabor 3",
      descripcion: "Elaborado de fruta selecta para lograr un sabor perfecto y armonioso con lo que se puede deleitar, encuentrelo solo aqui."
    }
  ];

  const lista2 = [
    {
      id: 1,
      titulo: "sabor 4",
      descripcion: "Elaborado de fruta selecta para lograr un sabor perfecto y armonioso con lo que se puede deleitar, encuentrelo solo aqui."
    },
    {
      id: 2,
      titulo: "sabor 5",
      descripcion: "Elaborado de fruta selecta para lograr un sabor perfecto y armonioso con lo que se puede deleitar, encuentrelo solo aqui."
    },
    {
      id: 3,
      titulo: "sabor 6",
      descripcion: "Elaborado de fruta selecta para lograr un sabor perfecto y armonioso con lo que se puede deleitar, encuentrelo solo aqui."
    }
  ];

export default function Shilibombones() {
  return (
    <section className="max-container">
      <div className="product-container-sup">
        <div className="product-info-container">
          <p className="product-info">
            Esquisitos bombones elaborados con granos selectos de cacao al 55%, que brindan una experiencia unica al sabor, equilibrando 
            perfectamente el dulzor y la intensidad del cacao de alta calidad.
          </p>
          <h3 className="product-info-recordatori">
            Disfruta de 6 sabores en una sola caja
          </h3>
        </div>
        <div className="product-info-title">
          <h2>Shilibombones</h2>
        </div>
      </div>
      <div className="product-container-bot">
        <PiWhatsappLogoBold />
        <span>Pedir</span>
      </div>
      <div className="product-container-img">
        <img src="/img-prueba.png" alt="producto" />
      </div>

      {/* Seccion de descripcion del producto */}
      <div className="product-description-container">
        <div className="product-description-container-title">
          <article className="product-description-container-title-text">
            <h4>{lista1[0]?.titulo}</h4>
            <p>{lista1[0]?.descripcion}</p>
          </article>
          <article className="product-description-container-title-text">
            <h4>{lista1[1]?.titulo}</h4>
            <p>{lista1[1]?.descripcion}</p>
          </article>
          <article  className="product-description-container-title-text">
            <h4>{lista1[2]?.titulo}</h4>
            <p>{lista1[2]?.descripcion}</p>
          </article>

        </div>
          
        <div className="product-description-container-img">
          <img src="/img-prueba.png" alt="producto" />
        </div>

        <div className="product-description-container-title2">
          <article className="product-description-container-title-text2">
            <h4>{lista2[0]?.titulo}</h4>
            <p>{lista2[0]?.descripcion}</p>
          </article>
          <article className="product-description-container-title-text2">
            <h4>{lista2[1]?.titulo}</h4>
            <p>{lista2[1]?.descripcion}</p>
          </article>
          <article className="product-description-container-title-text2">
            <h4>{lista2[2]?.titulo}</h4>
            <p>{lista2[2]?.descripcion}</p>
          </article>
        </div>
      </div>
    </section>
  );
}