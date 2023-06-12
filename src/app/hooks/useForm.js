import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const useForm = (initialForm, validateForm) => {
  const [formState, setFormState] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const navigate = useNavigate();
  const [clickId, setClickId] = useState({
    1: false,
    2: false,
    3: false,
    4: false,
  });

  const onClickShow = (inputId) => {
    setClickId(() => ({
      ...clickId,
      [inputId]: true,
    }));
  };

  const onClickHidden = (name, formState, id, e) => {
    handleChange(e);
    const formErrors = validateForm(formState);
    setErrors(formErrors);
    if (formState[name].length === 0) {
      setClickId(() => ({
        ...clickId,
        [id]: false,
      }));
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(errors);
    if (Object.keys(errors).length === 0) {
      navigate(`/`);
    }
  };

  return {
    formState,
    errors,
    loading,
    response,
    handleChange,
    handleSubmit,
    clickId,
    onClickShow,
    onClickHidden,
  };
};
