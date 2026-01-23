import { PiWhatsappLogoBold } from "react-icons/pi";
import "./Shilibombones.css";

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
            <h4>Sabor 1</h4>
            <p>Elaborado de fruta selecta para lograr 
              un sabor perfecto y armonioso con lo 
              que se puede deleitar, encuentrelo solo aqui.
            </p>
          </article>
          <article className="product-description-container-title-text">
            <h4>Sabor 1</h4>
            <p>Elaborado de fruta selecta para lograr 
              un sabor perfecto y armonioso con lo 
              que se puede deleitar, encuentrelo solo aqui.
            </p>
          </article>
          <article  className="product-description-container-title-text">
            <h4>Sabor 1</h4>
            <p>Elaborado de fruta selecta para lograr 
              un sabor perfecto y armonioso con lo 
              que se puede deleitar, encuentrelo solo aqui.
            </p>
          </article>
        </div>
          
        <div className="product-description-container-img">
          <img src="/img-prueba.png" alt="producto" />
        </div>

        <div className="product-description-container-title">
          <article className="product-description-container-title-text">
            <h4>Sabor 1</h4>
            <p>Elaborado de fruta selecta para lograr 
              un sabor perfecto y armonioso con lo 
              que se puede deleitar, encuentrelo solo aqui.
            </p>
          </article>
          <article className="product-description-container-title-text">
            <h4>Sabor 1</h4>
            <p>Elaborado de fruta selecta para lograr 
              un sabor perfecto y armonioso con lo 
              que se puede deleitar, encuentrelo solo aqui.
            </p>
          </article>
          <article className="product-description-container-title-text">
            <h4>Sabor 1</h4>
            <p>Elaborado de fruta selecta para lograr 
              un sabor perfecto y armonioso con lo 
              que se puede deleitar, encuentrelo solo aqui.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}