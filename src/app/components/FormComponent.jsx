import { NavLink } from "react-router-dom";
import BtnComponent from "../components/BtnComponent";

import { useClickId } from "../hooks/useClickId";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useForm } from "../hooks/useForm";

export const FormComponent = (props) => {
  const { contact, contactExtra } = useContext(AuthContext);
  const { onClickShow, onClickHidden, clickId } = useClickId();
  const { formState, onInputChange } = useForm();
  const onValidateForm = () => {
    console.log("de momento no esta validado");
  };
  return (
    <main className="Main Wrapper">
      <section className="Main-contact Contact">
        <h2 className="Contact-h2">{props.title}</h2>
        <form action="#" className="Contact-form">
          {contact.map((inp) => {
            const { type, label, id } = inp;
            return (
              <div className="Contact-container" key={id}>
                <label
                  htmlFor={id}
                  className={`Contact-label ${
                    formState[id] || clickId === id
                      ? "Contact-label--filled"
                      : ""
                  }`}
                >
                  {label}
                </label>
                <input
                  type={type}
                  id={id}
                  name={id}
                  value={formState[id] || ""}
                  className="Contact-input"
                  onChange={onInputChange}
                  onClick={() => onClickShow(id)}
                  onBlur={() => onClickHidden(id, formState)}
                />
              </div>
            );
          })}
          {props.formExtra &&
            contactExtra.map((inpu) => {
              const { type, label, id } = inpu;

              return (
                <div className="Contact-container" key={id}>
                  <label
                    htmlFor={id}
                    className={`Contact-label ${
                      formState[id] || clickId === id
                        ? "Contact-label--filled"
                        : ""
                    }`}
                  >
                    {label}
                  </label>
                  <input
                    type={type}
                    id={id}
                    name={id}
                    value={formState[id] || ""}
                    className="Contact-input"
                    onChange={onInputChange}
                    onClick={() => onClickShow(id)}
                    onBlur={() => onClickHidden(id, formState)}
                  />
                </div>
              );
            })}
        </form>
        <NavLink to={props.to1}>
          <BtnComponent value={props.btnTitle1} funcion={null} />
        </NavLink>
        {props.btnRegistro && (
          <>
            <div className="Contact-container--rotate"></div>
            <NavLink to={props.to2}>
              <BtnComponent
                value={props.btnTitle2}
                funcion={() => onValidateForm()}
              />
            </NavLink>
          </>
        )}
      </section>
    </main>
  );
};
