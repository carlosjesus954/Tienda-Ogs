import { useLocation } from "react-router-dom";
import { useCarrusel } from "../hooks/useCarrusel";

export const ClothsPages = () => {
  const { state } = useLocation();
  const {
    id,
    src1,
    src2,
    src3,
    src4,
    title,
    precio,
    text,
    text2,
    element1,
    element2,
    element3,
    element4,
  } = state.clothData;
  const images = [src1, src2, src3, src4];
  const { handleCarruselBack, handleCarruselForward, estadoCarrusel } =
    useCarrusel(images);
  return (
    <main className="Main Wrapper">
      <section className="Main-clothes Clothes">
        <div className="Clothes-carrusel">
          <div className="Clothes-carrusel--btns">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="Clothes-carrusel--svg Clothes-carrusel--left"
              viewBox="0 0 16 16"
              onClick={handleCarruselBack}
            >
              <path
                fillRule="evenodd"
                d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
              />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="Clothes-carrusel--svg Clothes-carrusel--right"
              viewBox="0 0 16 16"
              onClick={handleCarruselForward}
            >
              <path
                fillRule="evenodd"
                d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
              />
            </svg>
          </div>
          <div className={`Clothes-container--carrusel ${estadoCarrusel}`}>
            {images.map((img, index) => (
              <div className="Clothes-carrusel-subcontainer" key={index}>
                <img src={img} alt={title} className="Clothes-img" />
              </div>
            ))}
          </div>
        </div>
        <div className="Clothes-info">
          <h2>{title}</h2>
          <span>{precio}</span>
          <div className="Clothes-carrusel--small">
            <img src={src1} alt={title} className="Clothes-img--small" />
            <img src={src2} alt={title} className="Clothes-img--small" />
            <img src={src3} alt={title} className="Clothes-img--small" />
          </div>
          <ul className="Clothes-size">
            <button className="Clothes-btn--small">s</button>
            <button className="Clothes-btn--small">m</button>
            <button className="Clothes-btn--small">l</button>
            <button className="Clothes-btn--small">xl</button>
            <button className="Clothes-btn--small">xll</button>
          </ul>
          <button className="Clothes-btn">Añadir a la cesta</button>
          <div className="Clothes-container">
            <span className="Clothes-text">{text}</span>
            <span className="Clothes-text">{text2}</span>
            <ul className="Clothes-details">
              <li className="Clothes-li">{element1}</li>
              <li className="Clothes-li">{element2}</li>
              <li className="Clothes-li">{element3}</li>
              <li className="Clothes-li">{element4}</li>
            </ul>
          </div>
          <div className="Clothes-similar">
            <h3 className="Clothes-h3">Compra similar</h3>
            <img src={src1} alt={src1} className="Clothes-img--similar" />
            <img src={src2} alt={src2} className="Clothes-img--similar" />
          </div>
        </div>
      </section>
    </main>
  );
};
