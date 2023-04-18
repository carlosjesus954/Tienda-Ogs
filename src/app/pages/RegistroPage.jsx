import { FormComponent } from "../components/FormComponent";

export const RegistroPage = () => {
  return (
    <FormComponent
      title={"Crea tu cuenta"}
      btnRegistro={false}
      btnTitle1={"Registrate"}
      to1={"contact"}
    />
  );
};
