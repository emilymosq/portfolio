import React, { useRef, useState } from "react";
import "../styles/contact.css";
import { motion } from "framer-motion";
import { useForm } from "../hooks/useForm";
import Swal from "sweetalert2";
import emailjs from "@emailjs/browser";

const initialForm = {
  name: "",
  email: "",
  message: "",
};

const validationsForm = (formContact) => {
  let errors = {};
  let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
  let regexMessage = /^.{1,400}$/;

  if (!formContact.name.trim()) {
    errors.name = "This field cannot be empty.";
  } else if (!regexName.test(formContact.name.trim())) {
    errors.name = "This field accepts only letters and blanks.";
  }

  if (!formContact.email.trim()) {
    errors.email = "This field cannot be empty.";
  } else if (!regexEmail.test(formContact.email.trim())) {
    errors.email = "This field is invalid.";
  }

  if (!formContact.message.trim()) {
    errors.message = "This field cannot be empty.";
  } else if (!regexMessage.test(formContact.message.trim())) {
    errors.message = "This field doesn't accept more than 400 characters.";
  }
  return errors;
};

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_083gmeb",
        "template_13znpe9",
        e.target,
        "ISLM8vtLC_W9Hggus"
      )
      .then(
        (result) => {
          console.log(result.text);
          Swal.fire({
            icon: "success",
            title: "Message Sent Successfully",
            color: "#E6F1FF",
            background: "#1b003a",
            confirmButtonColor: "#f988ff",
          });
        },
        (error) => {
          console.log(error.text);
          Swal.fire({
            icon: "error",
            title: "Ooops, something went wrong",
            text: error.text,
            color: "#E6F1FF",
            background: "#1b003a",
            denyButtonColor: "#f988ff",
          });
        }
      );
    e.target.reset();
  };

  const { formContact, errors, handleChange, handleBlur } = useForm(
    initialForm,
    validationsForm
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ y: [-50, 0], opacity: 1 }}
      transition={{ duration: 1 }}
      className="contact__container"
      id="contact"
    >
      <div className="contact__title">
        <h2>Contact</h2>
        <h4>Get In Touch</h4>
        <p>
          Got a question or proposal, or just want to say hello? I’d love to
          hear from you! Fill in your info in the form below and I look forward
          to hearing from you!
        </p>
      </div>
      <div className="form__container">
        <form className="form" autoComplete="off" onSubmit={handleSubmit}>
          <div className="form__group">
            <label for="name" className="form__label">
              Name
            </label>
            <input
              type="name"
              name="name"
              className="form__input"
              placeholder="Insert your name"
              onBlur={handleBlur}
              onChange={handleChange}
              value={formContact.name}
              required
            />
            {errors.name && (
              <span className="error__message">{errors.name}</span>
            )}
          </div>
          <div className="form__group">
            <label for="email" className="form__label">
              Email
            </label>
            <input
              type="email"
              name="email"
              className="form__input"
              placeholder="Insert your email"
              onBlur={handleBlur}
              onChange={handleChange}
              value={formContact.email}
              required
            />
            {errors.email && (
              <span className="error__message">{errors.email}</span>
            )}
          </div>
          <div className="form__group">
            <label for="message" className="form__label">
              Message
            </label>
            <textarea
              type="message"
              name="message"
              className="form__input area"
              placeholder="Insert your message"
              onBlur={handleBlur}
              onChange={handleChange}
              value={formContact.message}
              required
            />
            {errors.message && (
              <span className="error__message">{errors.message}</span>
            )}
          </div>
          <input type="submit" value="Shoot!" className="form__submit" />
        </form>
      </div>
    </motion.div>
  );
}
