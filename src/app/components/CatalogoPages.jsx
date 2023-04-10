import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";

export const CatalogoPages = ({ title, catalogType }) => {
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
          {caseValue.map((element) => (
            <Link className="Catalogo-cards" key={element.id} to={element.to}>
              <img
                src={element.src1}
                alt={element.alt}
                className="Catalogo-img"
              />
              <div className="Catalogo-text">
                <h3 className="Catalogo-h3">{element.title}</h3>
                <span className="Catalogo-precio">{element.precio}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
};
