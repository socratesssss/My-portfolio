// components/SendEmail.jsx
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion, useInView } from "framer-motion";

const inputAnimation = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.5 },
  }),
};

const SendEmail = () => {
  const form = useRef(null);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const sendEmail = (e) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(
        "your_service_id",     // Replace with your EmailJS service ID
        "your_template_id",    // Replace with your EmailJS template ID
        form.current,
        "your_user_id"         // Replace with your EmailJS public key
      )
      .then(
        () => {
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          alert("Failed to send the message. Please try again.");
          console.error(error);
        }
      );
  };

  return (
    <div ref={containerRef} className="max-w-2xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold mb-6 text-center dark:text-white">Send Us a Message</h2>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="space-y-4 bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md"
      >
        {[0, 1, 2, 3, 4].map((i) => {
          const commonProps = {
            className:
              "w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-black dark:text-white p-3 rounded-md",
            required: i !== 2,
          };

          if (i === 0)
            return (
              <motion.input
                key={i}
                custom={i}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={inputAnimation}
                type="text"
                name="user_name"
                placeholder="Your Name"
                {...commonProps}
              />
            );
          if (i === 1)
            return (
              <motion.input
                key={i}
                custom={i}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={inputAnimation}
                type="email"
                name="user_email"
                placeholder="Your Email"
                {...commonProps}
              />
            );
          if (i === 2)
            return (
              <motion.input
                key={i}
                custom={i}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={inputAnimation}
                type="text"
                name="subject"
                placeholder="Subject"
                {...commonProps}
              />
            );
          if (i === 3)
            return (
              <motion.textarea
                key={i}
                custom={i}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={inputAnimation}
                name="message"
                rows="5"
                placeholder="Your Message"
                {...commonProps}
              />
            );
          if (i === 4)
            return (
              <motion.button
                key={i}
                custom={i}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={inputAnimation}
                type="submit"
                className="text-white w-full bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg  px-5 py-2.5 text-center me-2 mb-2"
              >
                Send Email
              </motion.button>
            );

          return null;
        })}
      </form>
    </div>
  );
};

export default SendEmail;
