import { NavLink } from "react-router-dom";
import BtnComponent from "../components/BtnComponent";

export const FormComponent = (props) => {
  return (
    <main className="Main Wrapper">
      <section className="Main-contact Contact">
        <h2 className="Contact-h2">{props.title}</h2>
        <form action="#" className="Contact-form">
          <label htmlFor="email" className="Contact-label">
            Correo electrónico
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="Contact-input"
          />
          <label htmlFor="password" className="Contact-label">
            Contraseña
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="Contact-input"
          />
        </form>
        <NavLink to={props.to1}>
          <BtnComponent value={props.btnTitle1} />
        </NavLink>
        {props.btnRegistro && (
          <>
            <div className="Contact-container--rotate"></div>
            <NavLink to={props.to2}>
              <BtnComponent value={props.btnTitle2} />
            </NavLink>
          </>
        )}
      </section>
    </main>
  );
};
