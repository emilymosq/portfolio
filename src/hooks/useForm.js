import { useState } from "react";

export const useForm = (initialForm, validateForm) => {
  const [formContact, setFormContact] = useState(initialForm);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormContact({
      ...formContact,
      [name]: value,
    });
  };
  const handleBlur = (e) => {
    handleChange(e);
    setErrors(validateForm(formContact));
  };

  return {
    formContact,
    errors,
    handleChange,
    handleBlur,
  };
};
