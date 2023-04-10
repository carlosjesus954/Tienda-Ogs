import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { NavLink } from "react-router-dom";
export const Main = () => {
  const { mainConjuntos, mainConjuntos2 } = useContext(AuthContext);
  const [hoveredConjuntoId, setHoveredConjuntoId] = useState(null);

  const onToggleShowh2 = (conjuntoId) => {
    setHoveredConjuntoId(conjuntoId);
  };

  const onToggleHiddenh2 = () => {
    setHoveredConjuntoId(null);
  };

  return (
    <main className="Main Wrapper">
      <div className="Main-global">
        <div className="Main-container--2modules">
          {mainConjuntos.map((conjunto) => (
            <NavLink
              className="Main-cards"
              key={conjunto.id}
              to={conjunto.to}
              onMouseEnter={() => onToggleShowh2(conjunto.id)}
              onMouseLeave={onToggleHiddenh2}
            >
              <img
                src={conjunto.src}
                alt={conjunto.title}
                className="Main-img--grande"
              />
              <h2
                className={`Main-h2--grande ${
                  hoveredConjuntoId === conjunto.id
                    ? "Main-h2--mostrar"
                    : "Main-h2--hidden"
                }`}
              >
                {conjunto.title}
              </h2>
            </NavLink>
          ))}
        </div>
        <div className="Main-container--3modules">
          {mainConjuntos2.map((conjunto) => (
            <NavLink className="Main-cards" key={conjunto.id} to={conjunto.to}>
              <img
                src={conjunto.src}
                alt={conjunto.title}
                className="Main-img"
                to={conjunto.to}
                onMouseEnter={() => onToggleShowh2(conjunto.id)}
                onMouseLeave={onToggleHiddenh2}
              />
              <h2
                className={`Main-h2 ${
                  hoveredConjuntoId === conjunto.id
                    ? "Main-h2--mostrar"
                    : "Main-h2--hidden"
                }`}
              >
                {conjunto.title}
              </h2>
            </NavLink>
          ))}
        </div>
      </div>
    </main>
  );
};
