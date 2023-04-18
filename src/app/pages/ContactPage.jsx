import { NavLink } from "react-router-dom";
import BtnComponent from "../components/BtnComponent";
import { RegistroPage } from "./RegistroPage";

export const ContactPage = () => {
  return (
    <main className="Main Wrapper">
      <section className="Main-contact Contact">
        <h2 className="Contact-h2">Iniciar sesión</h2>
        <form action="#" className="Contact-form">
          <label htmlFor="" className="Contact-label">
            Correo electronico
          </label>
          <input type="email" name="" className="Contact-input" />
          <label htmlFor="" className="Contact-label">
            Contraseña
          </label>
          <input type="password" name="" className="Contact-input" />
          <BtnComponent value={"Iniciar sesión"} />
        </form>
        <div className="Contact-container--rotate"></div>

        <NavLink to={"/registro"}>
          <BtnComponent value={"Registrate"} />
        </NavLink>
      </section>
    </main>
  );
};
