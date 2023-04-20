export const CarritoMuestra = (props) => {
  const { complementoRopa, estadoCarrito } = props;

  console.log(complementoRopa, estadoCarrito);
  function mostrarCarro() {
    if (complementoRopa === null) {
      return <h1>Error: Falta content</h1>;
    } else {
      // console.log(ropaArray);
      return (
        <div className="Carrito-subglobal">
          {complementoRopa.map((elem, index) => {
            const { id, src1, src3, size, nombre, color, precio } = elem;
            return (
              <div className="Carrito-cards" key={index}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="Carrito-icon"
                  viewBox="0 0 16 16"
                >
                  <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                </svg>
                <img src={src1} alt={nombre} className="Carrito-img" />
                <div className="Carrito-container">
                  <h3 className="Carrito-h3">{`${nombre} / ${size}`}</h3>
                  <div className="Carrito-subcontainer">
                    <span className="Carrito-size">Cantidad: {id}</span>
                    <span className="Carrito-precio">{precio}</span>
                  </div>
                </div>
              </div>
            );
          })}
          <button className="Carrito-btn">Ver carrito</button>
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
        <h2 className="Carrito-h2">Su carrito</h2>
        {mostrarCarro()}
      </div>
    </div>
  );
};
