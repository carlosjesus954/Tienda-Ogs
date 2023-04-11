import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";
import { useHoverId } from "../hooks/useHoverId";

export const CatalogoPages = ({ title, catalogType }) => {
  const { hoveredConjuntoId, onToggleShowh2, onToggleHiddenh2 } = useHoverId();
  const { tiger, cream, beerAndChurros, ogs, accesorios } =
    useContext(AuthContext);

  let caseValue;
  switch (catalogType) {
    case "tiger":
      caseValue = tiger;
      break;
    case "cream":
      caseValue = cream;
      break;
    case "beerAndChurros":
      caseValue = beerAndChurros;
      break;
    case "ogs":
      caseValue = ogs;
      break;
    case "accesorios":
      caseValue = accesorios;
      break;
    default:
      caseValue = [];
      break;
  }

  return (
    <main className="Main Wrapper">
      <section className="Main-catalogo Catalogo">
        <h2 className="Catalogo-h2">{title}</h2>
        <div className="Catalogo-global">
          {caseValue.map((element) => {
            const srcImg =
              hoveredConjuntoId === element.id ? element.src2 : element.src1;
            return (
              <Link
                className="Catalogo-cards"
                key={element.id}
                to={element.to}
                onMouseEnter={() => onToggleShowh2(element.id)}
                onMouseLeave={onToggleHiddenh2}
              >
                <img src={srcImg} alt={element.alt} className="Catalogo-img " />
                <div className="Catalogo-text">
                  <h3 className="Catalogo-h3">{element.title}</h3>
                  <span className="Catalogo-precio">{element.precio}</span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </main>
  );
};
