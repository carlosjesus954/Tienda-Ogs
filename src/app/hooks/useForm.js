import { useState } from "react";
// import { useNavigate } from "react-router-dom"

export const useForm = (initialForm, validateForm) => {
  const [formState, setFormState] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);
  // const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };
  // const handleBlur = (e) => {
  //   handleChange(e);
  //   setErrors(validateForm(formState));
  // };
  const handleSubmit = (e) => {
    console.log(errors);
    e.preventDefault();
    handleChange(e);
    setErrors(validateForm(formState));
    // navigate(`/`);
  };

  return {
    formState,
    errors,
    loading,
    response,
    handleChange,
    // handleBlur,
    handleSubmit,
  };
};
