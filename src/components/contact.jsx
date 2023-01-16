import React, { useRef, useState } from "react";
import "../styles/contact.css";
import { motion } from "framer-motion";
import Swal from "sweetalert2";
// import Swal from "@sweetalert2/theme-dark"
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_p7gbslw",
        "template_13znpe9",
        form.current,
        "ISLM8vtLC_W9Hggus"
      )
      .then(
        (result) => {
          console.log(result.text);
          Swal.fire({
            icon: "success",
            title: "The message was sent correctly! :)",
            background: "#1b003a",
            color: "#E6F1FF",
            confirmButtonColor: "#bc4ed8",
          });
        },
        (error) => {
          console.log(error.text);
          Swal.fire({
            icon: "error",
            title: "The message has not been sent",
          });
        }
      );
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ y: [-50, 0], opacity: 1 }}
      transition={{ duration: 1 }}
      className="contact__container"
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
        <form className="form" ref={form} onSubmit={sendEmail}>
          <div className="form__group">
            <label for="name" className="form__label">
              Name
            </label>
            <input
              type="name"
              className="form__input"
              placeholder="Insert your name"
            />
          </div>
          <div className="form__group">
            <label for="email" className="form__label">
              Email
            </label>
            <input type="email" className="form__input" placeholder="Insert your email"/>
          </div>
          <div className="form__group">
            <label for="message" className="form__label">
              Message
            </label>
            <textarea name="message" className="form__input area" placeholder="Insert your message"/>
          </div>
          <button type="submit" className="form__submit" value="Send">
            Shoot!
          </button>
        </form>
      </div>
    </motion.div>
  );
}
