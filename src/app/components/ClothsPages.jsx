import { NavLink, useLocation } from "react-router-dom";
import { useCarrusel } from "../hooks/useCarrusel";
import { useState } from "react";
import BtnComponent from "./BtnComponent";

export const ClothsPages = () => {
  const [sizeClothes, setSizeClothes] = useState("");
  const [sizeActive, setSizeActive] = useState({
    s: false,
    m: false,
    l: false,
    xl: false,
    xll: false,
  });
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
    comprasimilar1,
    comprasimilar2,
    altsimilar1,
    altsimilar2,
    complementocolor1,
    complementocolor2,
    to1,
    to2,
  } = state.clothData;
  const images = [src1, src2, src3, src4];
  const { handleCarruselBack, handleCarruselForward, estadoCarrusel } =
    useCarrusel(images);

  const handleSize = (ele) => {
    const newSize = ele.target.value;
    const newActive = Object.keys(sizeActive).reduce((acc, key) => {
      return { ...acc, [key]: key === newSize };
    }, {});

    setSizeClothes(newSize);
    setSizeActive(newActive);
  };
  function renderComplementImages() {
    if (complementocolor1 && complementocolor2) {
      return (
        <div className="Clothes-carrusel--small">
          <img
            src={complementocolor1}
            alt={title}
            className="Clothes-img--small"
          />
          <img
            src={complementocolor2}
            alt={title}
            className="Clothes-img--small"
          />
        </div>
      );
    }
  }
  function renderSrcImages() {
    if (src1 && src2 && src3 && src4) {
      return (
        <div className={`Clothes-container--carrusel ${estadoCarrusel}`}>
          {images.map((img, index) => (
            <div className="Clothes-carrusel-subcontainer" key={index}>
              <img src={img} alt={title} className="Clothes-img" />
            </div>
          ))}
        </div>
      );
    } else {
      return <h1>Falta Content</h1>;
    }
  }
  console.log(to1);
  return (
    <main className="Main Wrapper">
      <section className="Main-clothes Clothes">
        <div className="Clothes-global">
          <div className="Clothes-carrusel">
            <div className="Clothes-carrusel--btns">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                // fill="currentColor"
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
                // fill="currentColor"
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
            {renderSrcImages()}
          </div>
          <div className="Clothes-info">
            <h2 className="Clothes-h2">{title}</h2>
            <span>{precio}</span>
            {renderComplementImages()}
            <ul className="Clothes-size">
              <button
                className={`Clothes-btn--small ${
                  sizeActive["s"] ? "Clothes-btn--smallColor" : ""
                }`}
                onClick={handleSize}
                value={"s"}
              >
                s
              </button>
              <button
                className={`Clothes-btn--small ${
                  sizeActive["m"] ? "Clothes-btn--smallColor" : ""
                }`}
                onClick={handleSize}
                value={"m"}
              >
                m
              </button>
              <button
                className={`Clothes-btn--small ${
                  sizeActive["l"] ? "Clothes-btn--smallColor" : ""
                }`}
                onClick={handleSize}
                value={"l"}
              >
                l
              </button>
              <button
                className={`Clothes-btn--small ${
                  sizeActive["xl"] ? "Clothes-btn--smallColor" : ""
                }`}
                onClick={handleSize}
                value={"xl"}
              >
                xl
              </button>
              <button
                className={`Clothes-btn--small ${
                  sizeActive["xll"] ? "Clothes-btn--smallColor" : ""
                }`}
                onClick={handleSize}
                value={"xll"}
              >
                xll
              </button>
            </ul>
            <BtnComponent value={"Añadir al carrito"} />
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
          </div>
        </div>
        <div className="Clothes-similar">
          <h3 className="Clothes-h3">Compra similar</h3>
          <div className="Clothes-similar--subcontainer">
            <NavLink to={to1}>
              <img
                src={comprasimilar1}
                alt={altsimilar1}
                className="Clothes-img--similar"
              />
            </NavLink>
            <NavLink to={to2}>
              <img
                src={comprasimilar2}
                alt={altsimilar2}
                className="Clothes-img--similar"
              />
            </NavLink>
          </div>
        </div>
      </section>
    </main>
  );
};
