import { useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";
import { NavLink } from "react-router-dom";
import { useState } from "react";

export const CarritoLogic = () => {
  const { carrito, borrarRopa, PrecioTotal, vaciarCarrito } =
    useContext(AuthContext);
  const [mostrarAlerta, setMostrarAlerta] = useState(false);
  const enviarPedido = (event) => {
    event.preventDefault();
    setMostrarAlerta(true);
  };
  const handleEliminarAlerta = () => {
    vaciarCarrito();
    setMostrarAlerta(false);
  };
  return (
    <div className="Shop-globalcontainer">
      <div className="Shop-globalCards">
        {carrito.map((producto, index) => {
          const { id, src1, src3, size, nombre, color, precio, cantidad } =
            producto;
          const handleEliminarRopa = () => {
            borrarRopa(index);
          };
          return (
            <div className="Shop-cards" key={index}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="Shop-icon"
                viewBox="0 0 16 16"
                onClick={handleEliminarRopa}
              >
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
              </svg>
              <img
                src={color.color1 === true ? src1 : src3}
                alt={nombre}
                className="Shop-img"
              />
              <div className="Shop-subcontainer">
                <h3 className="Shop-h3">{`${nombre} / ${size.toUpperCase()}`}</h3>
                <div className="Shop-textcontainer">
                  <span className="Shop-text">Cantidad: {cantidad}</span>
                  <span className="Shop-text">{precio}€</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="Shop-container">
        <PrecioTotal carrito={carrito} />
        <button className="Shop-btn" onClick={enviarPedido}>
          Finalizar Pedido
        </button>

        {mostrarAlerta && (
          <div className="Container-alerta">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="Icon-alert"
              viewBox="0 0 16 16"
              onClick={handleEliminarAlerta}
            >
              <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
            </svg>
            <h4 className="Alerta-compra">Tu pedido ha sido enviado!</h4>
          </div>
        )}
      </div>
    </div>
  );
};
