import { useCounter } from "../hooks/useCounter";

export const CarritoMuestra = (props) => {
  const { carrito, estadoCarrito, setEstadoCarrito, borrarRopa } = props;
  const { counter, increment, reset } = useCounter();
  // console.log(counter);
  // console.log(complementoRopa, estadoCarrito);
  const handleCerrarCarrito = () => {
    setEstadoCarrito(!estadoCarrito);
  };

  function mostrarCarro() {
    if (carrito.length === 0) {
      return <h3 className="Carrito-h3--vacio">El carrito esta vacío</h3>;
    } else {
      // console.log(ropaArray);
      return (
        <div className="Carrito-subglobal">
          {carrito.map((elem, index) => {
            const { id, src1, src3, size, nombre, color, precio } = elem;
            console.log(color.color1);

            const handleEliminarRopa = () => {
              borrarRopa(index);
            };

            return (
              <div className="Carrito-cards" key={index}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="Carrito-icon"
                  viewBox="0 0 16 16"
                  onClick={handleEliminarRopa}
                >
                  <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                </svg>
                <img
                  src={color.color1 === true ? src1 : src3}
                  alt={nombre}
                  className="Carrito-img"
                />
                <div className="Carrito-container">
                  <h3 className="Carrito-h3">{`${nombre} / ${size.toUpperCase()}`}</h3>
                  <div className="Carrito-subcontainer">
                    <span className="Carrito-text">Cantidad: {counter}</span>
                    <span className="Carrito-text">{precio}</span>
                  </div>
                </div>
              </div>
            );
          })}
          <div className="Carrito-cuentas">
            <h4>Total:</h4>
          </div>
        </div>
      );
    }
  }

  return (
    <div
      className={`Clothes-carrito Carrito ${
        estadoCarrito === true ? "Carrito--show" : ""
      }`}
    >
      <div className="Carrito-global">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          className="Carrito-icon--close"
          viewBox="0 0 16 16"
          onClick={handleCerrarCarrito}
        >
          <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
        </svg>
        <h2 className="Carrito-h2">Su carrito</h2>
        <div className="Carrito-container--spacebeetwen">
          {mostrarCarro()}

          <button className="Carrito-btn">Ver carrito</button>
        </div>
      </div>
    </div>
  );
};
