import BtnComponent from "../components/BtnComponent";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { CarritoLogic } from "../components/subComponent/CarritoLogic";
import { NavLink } from "react-router-dom";

export const ShopPage = () => {
  function shopCarro() {
    const { carrito } = useContext(AuthContext);

    if (carrito.length === 0) {
      return (
        <main className="Main Wrapper">
          <section className="Main-ShopNone ShopNone">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="ShopNone-svg"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
              />
              <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
            </svg>

            <h2 className="ShopNone-h2">Tu carrito parece vacío</h2>
            <span className="ShopNone-span">
              Agregue articulos a su carrito
            </span>
            <NavLink to={"/"}>
              <BtnComponent value={"Seguir comprando"} />
            </NavLink>
          </section>
        </main>
      );
    } else {
      return (
        <main className="Main Wrapper">
          <section className="Main-shop Shop">
            <h2 className="Shop-h2">Su carrito</h2>
            <CarritoLogic />
          </section>
        </main>
      );
    }
  }

  return shopCarro();
};
