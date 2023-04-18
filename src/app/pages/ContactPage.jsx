import { FormComponent } from "../components/FormComponent";

export const ContactPage = () => {
  return (
    <FormComponent
      title={"Iniciar sesión"}
      btnRegistro={true}
      btnTitle1={"Iniciar sesión"}
      btnTitle2={"Registrate"}
      to1={"conectado"}
      to2={"registro"}
    />
  );
};
