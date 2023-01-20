import { useState } from "react";
import { helpHttp } from "../helpers/helpHttp";

export const useForm = (initialForm, validateForm) => {
  const [formContact, setFormContact] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

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

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     setErrors(validateForm(formContact));

  //     if (Object.keys(errors).length === 0) {
  //         Swal.fire({
  //             icon: "success",
  //             title: "Sending your message.",
  //             background: "#1b003a",
  //             color: "#E6F1FF",
  //             confirmButtonColor: "#f988ff"
  //           })
  //       setLoading(true);
  //       helpHttp()
  //         .post("https://formsubmit.co/ajax/emilymosq4@gmail.com", {
  //             body: formContact,
  //             headers: {
  //                 "Content-Type":"application/json",
  //                 Accept:"application/json",
  //             },
  //         })
  //         .then((res) => {
  //             setLoading(false);
  //             setResponse(true);
  //             setFormContact(initialForm);
  //         });
  //     } else {
  //       return;
  //     }
  //   };

  return {
    formContact,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    // handleSubmit
  };
};
