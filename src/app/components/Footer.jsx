import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export const Footer = () => {
  const { footerLeft, footerRight } = useContext(AuthContext);
  return (
    <footer className="Footer Wrapper">
      <div className="Footer-global">
        <div className="Footer-container">
          {footerLeft.map((element) => (
            <span key={element.id} className="Footer-copy">
              {" "}
              {element.title}{" "}
            </span>
          ))}
        </div>
        <ul className="Footer-ul">
          {footerRight.map((element) => (
            <li className="Footer-li" key={element.id}>
              <a href={element.href} className="Footer-enlace" target="_blank">
                {" "}
                {element.title}{" "}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};
