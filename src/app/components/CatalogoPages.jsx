import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useHoverId } from "../hooks/useHoverId";

export const CatalogoPages = ({ title, catalogType }) => {
  const { hoveredConjuntoId, onToggleShowh2, onToggleHiddenh2 } = useHoverId();
  const { tiger, cream, paranoia, momoney, accesorios } =
    useContext(AuthContext);

  const [selectedCloths, setSelectedCloths] = useState({});
  const navigate = useNavigate();

  let caseValue;
  switch (catalogType) {
    case "tiger":
      caseValue = tiger;
      break;
    case "cream":
      caseValue = cream;
      break;
    case "paranoia":
      caseValue = paranoia;
      break;
    case "momoney":
      caseValue = momoney;
      break;
    case "accesorios":
      caseValue = accesorios;
      break;
    default:
      caseValue = [];
      break;
  }

  const handleClothClick = (data) => {
    setSelectedCloths(data);
    navigate("/cloths", { state: { clothData: data } });
  };

  return (
    <main className="Main Wrapper">
      <section className="Main-catalogo Catalogo">
        <h2 className="Catalogo-h2">{title}</h2>
        <div className="Catalogo-global">
          {caseValue.map((element) => {
            const {
              src1,
              src2,
              src3,
              src4,
              title,
              precio,
              id,
              alt,
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
            } = element;
            const srcImg =
              hoveredConjuntoId === element.id ? element.src2 : element.src1;
            return (
              <div
                className="Catalogo-cards"
                key={element.id}
                onMouseEnter={() => onToggleShowh2(id)}
                onMouseLeave={onToggleHiddenh2}
                onClick={() =>
                  handleClothClick({
                    id,
                    title,
                    precio,
                    src1,
                    src2,
                    src3,
                    src4,
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
                  })
                }
              >
                <img src={srcImg} alt={alt} className="Catalogo-img " />
                <div className="Catalogo-text">
                  <h3 className="Catalogo-h3">{title}</h3>
                  <span className="Catalogo-precio">{precio}€</span>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
};
