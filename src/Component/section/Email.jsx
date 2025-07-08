import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const inputAnimation = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.5 },
  }),
};

const SendEmail = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={containerRef}
      className=" py-6  md:py-16  md:dark:bg-[url('/bg2.jpg')] bg-fixed dark:bg-[#0B192C]  bg-cover bg-bottom  bg-no-repeat"
      id="contact"
    >
          <h2 className="text-5xl hidden sm:block  font-bold py-8 text-[#00cfec] text-center  " ><span className="border-b-2 border-white ">Get in touch</span></h2>

  <div className="gap-10 mx-4 md:mx-10 md:flex md:items-start">
        {/* Left Contact Info */}
      <motion.div
        className="flex flex-col items-center mb-10 md:w-1/2 md:mb-0 md:items-start "
        initial={{ opacity: 0, x: -40 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <h2 className="text-3xl font-bold mb-4 text-[#00cfef]">
          Contact Information
        </h2>
        <p className="mb-6 text-lg text-center text-gray-600 dark:text-gray-300 md:text-start">
          Feel free to reach out to me for any project inquiries or
          collaborations. I'm always excited to discuss new ideas!
        </p>

        <ul className="space-y-4 text-[#00cfef] text-center md:text-start dark:text-gray-300 text-base">
          <li>
           <EmailIcon/>{" "}
            <a
              href="mailto:mohammadsijan381@gmail.com"
              className="text-gray-600 dark:text-gray-300 hover:underline"
            >
             mohammadsijan381@gmail.com
            </a>
          </li>
      
            <li className="">
            <LocalPhoneIcon  />  <a href="#"
         className="text-gray-600 dark:text-gray-300 hover:underline"
         >
             (880) 1839528641
              </a>
          </li>
       
          <li>
            <LinkedInIcon/>{" "}
            <a
              href="https://www.linkedin.com/in/mohammad-sijan-883205341"
              target="_blank"
              className="text-gray-600 dark:text-gray-300 hover:underline"
              rel="noopener noreferrer"
            >
              mohammad-sijan
            </a>
          </li>
          <li>
           <GitHubIcon/>{" "}
            <a
              href="https://github.com/socratesssss"
              target="_blank"
              className="text-gray-600 dark:text-gray-300 hover:underline"
              rel="noopener noreferrer"
            >
              socratesssss
            </a>
          </li>
        </ul>
      </motion.div>

      {/* Right Contact Form */}
      <motion.div
        className="md:w-1/2 "
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <h2 className="text-3xl font-bold mb-6 text-[#00cfef] text-center md:text-left">
          Send me a Message
        </h2>
        <form
          action="https://formspree.io/f/mwpbpakq"
          method="POST"
          className="p-6 space-y-4 bg-white rounded-lg shadow-md dark:bg-gray-900/70"
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
                  name="name"
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
                  name="email"
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
                  className="text-white w-full bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg px-5 py-2.5 text-center"
                >
                  Send Message
                </motion.button>
              );

            return null;
          })}
        </form>
      </motion.div>
  </div>
    </section>
  );
};

export default SendEmail;
