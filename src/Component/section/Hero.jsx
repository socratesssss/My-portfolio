import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Nav from "../navigatin/MobileNav";
import NorthEastIcon from "@mui/icons-material/NorthEast";
import { Email } from "@mui/icons-material";
import { MdOutlineEmail } from "react-icons/md";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import WebsiteShow from "./WebsiteShow";
import Myskills from "./Myskills";
import FaqSection from "./Faq";
import Footer from "./Footer";
import ReviewSection from "./Review";
import SendEmail from "./Email";
import AboutSection from "./About";


function Hero({ toggleDarkMode, isDark }) {
  const Mobile = "8801839528641";
  const email = "mohammadsijan381@gmail.com";
  const message = "Hello! I found you on your website.";
  const whatsappLink = `https://wa.me/${Mobile}?text=${encodeURIComponent(
    message
  )}`;

  const openPDF = () => {
    window.open("/Resume.pdf", "_blank");
  };

  const fullText = " Mohammad Sijan";
  const [displayText, setDisplayText] = useState("");
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (!started) return;

    let index = 0;
    const typeLetter = () => {
      if (index < fullText.length) {
        setDisplayText((prev) => prev + fullText.charAt(index));
        index++;
        setTimeout(typeLetter, 100);
      }
    };
    typeLetter();
  }, [started]);

  useEffect(() => {
    setStarted(true);
  }, []);

  return (
    <section className="bg-white scrollbar-hidden dark:bg-[#0B192C] w-full">
      <Nav isDark={isDark} toggleDarkMode={toggleDarkMode} />
      {/* <Ai isDark={isDark} toggleDarkMode={toggleDarkMode} /> */}

      <div className="md:dark:bg-[url('/bg4.jpg')] bg-fixed   bg-cover bg-center bg-no-repeat">
        <div className="container mx-auto">
          <div className="flex flex-col pt-20 md:justify-between md:flex-row md:pt-20">
            {/* Left Section */}
            <div className="">
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -50 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7 }}
              >
                <div className="z-10 relative md:inline-block text-gray-950 dark:text-gray-200 md:ml-20 mx-5 text-5xl md:text-6xl md:w-[400px] min-h-[90px]">
                  <h3>Hello, I am...</h3>
                  <strong className="font-bold ">
                    {displayText}
                    <span className="animate-pulse">.</span>
                  </strong>
                </div>
                <img
                  className="absolute ml-6 dark:hidden w-30 md:-mt-48 -mt-36 md:ml-14"
                  src="./Vector (2).png"
                  alt="Decorative vector"
                />
              </motion.div>

              <motion.div
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 30 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mx-5 mt-8 md:ml-20 md:mt-6"
              >
                <p className="text-xl text-black md:text-2xl dark:text-white">
                  <strong className="italic font-bold ">Web Developer</strong>{" "}
                  based in Bangladesh
                </p>

                <motion.button
                  // onClick={openPDF}
                  onClick={()=> alert('No Resume found!')}
                  className="md:px-6 transition-all duration-300 md:py-2 md:mt-10 mt-8 text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg px-5 py-2.5 text-center mb-2"
                  id="mygig"
                >
                  See Resume
                  <NorthEastIcon
                    sx={{ fontSize: 18, marginLeft: "8px" }}
                    className="text-white bg-gradient-to-r rounded-sm from-[#FFB147] via-[#FF6C63] to-[#B86ADF]"
                  />
                </motion.button>

                <motion.div
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 20 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="flex flex-col md:flex-row gap-4 md:w-[115%] justify-between mt-8 md:mt-16"
                >
                  <a
                    href={`tel:${Mobile}`}
                    className="font-semibold text-black dark:text-white"
                    aria-label="My Number"
                  >
                    <LocalPhoneIcon
                      className="p-1 bg-[#00cfef] rounded-full"
                      sx={{ color: "white" }}
                    />
                    +{Mobile}
                  </a>
                  <a
                    href={`mailto:${email}`}
                    className="font-semibold text-black dark:text-white"
                    aria-label="My Email"
                  >
                    <Email
                      className="p-1 bg-[#00cfef] rounded-full"
                      sx={{ color: "white" }}
                    />{" "}
                    {email}
                  </a>
                </motion.div>

                <motion.div
                  whileInView={{ opacity: 1, scale: 1 }}
                  initial={{ opacity: 0, scale: 0.9 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.7, delay: 0.6 }}
                  className="flex gap-4 py-14"
                >
                  <a
                    href="https://www.linkedin.com/in/mohammad-sijan-883205341"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Linkedin"
                    className="inline-block border-b border-[#00BDDF] dark:border-white"
                  >
                    <LinkedInIcon
                      className="text-[#1469C9]"
                      sx={{ fontSize: 30 }}
                    />
                  </a>
                  <a
                    href="https://github.com/socratesssss"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub"
                    className="inline-block border-b border-[#00BDDF] dark:border-white"
                  >
                    <GitHubIcon
                      sx={{ fontSize: 30 }}
                      className="text-black dark:text-white"
                    />
                  </a>
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Whatsapp"
                    className="inline-block border-b border-[#00BDDF] dark:border-white"
                  >
                    <WhatsAppIcon sx={{ fontSize: 30, color: "green" }} />
                  </a>
                  <a
                    href={`mailto:${email}`}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Email"
                    className="inline-block border-b border-[#00BDDF] dark:border-white"
                  >
                    <MdOutlineEmail
                      sx={{ fontSize: 30 }}
                      className="text-[#CB0001] size-7 dark:text-white"
                    />
                  </a>
                </motion.div>
              </motion.div>
            </div>

            {/* Right Section */}
            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 50 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0 }}
              className="md:-mt-10 pb-14 sm:pb-0"
            >
              <img
                src="/sijan2.jpg"
                className="rounded-full  mx-auto   sm:w-full w-[70%] h-auto dark:border-white border-b-6 sm:border-l-6 grayscale sm:rounded-none sm:rounded-l-full"
                alt="Mohammad Sijan - Frontend Developer from Bangladesh"
              />
            </motion.div>
          </div>
        </div>
      </div>
   

      <Myskills />
      <WebsiteShow />
     
      <ReviewSection />
      <FaqSection />
   <AboutSection />
      <SendEmail />
      <Footer />
    </section>
  );
}

export default Hero;
