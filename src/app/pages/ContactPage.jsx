import { FormComponent } from "../components/FormComponent";

export const ContactPage = () => {
  return (
    <FormComponent
      title={"Login"}
      btnRegistro={true}
      btnTitle1={"Login"}
      btnTitle2={"Registrate"}
      to1={"registro"}
      formExtra={false}
    />
  );
};
