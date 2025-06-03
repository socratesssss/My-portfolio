import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Nav from "./MobileNav";
import NorthEastIcon from "@mui/icons-material/NorthEast";
import { Email } from "@mui/icons-material";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import WebsiteShow from "./WebsiteShow";
import Myskills from "./Myskills";
import FaqSection from "./Faq";
import Footer from "./Footer";
import ReviewSection from "./Review";
import SendEmail from "./Email";
import Ai from "./Ai";

function Hero({ toggleDarkMode, isDark }) {
  // Contact details
  const Mobile = "880 183952641";
  const email = "mohammadsijan381@gamil.com";
  const phone = "8801839528641";
  const message = "Hello! I found your website.";
  const whatsappLink = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  // Open resume PDF
  const openPDF = () => {
    window.open("/Resume.pdf", "_blank");
  };

  // Full text for typewriter effect
  const fullText = " Mohammad Sijan";
  const [displayText, setDisplayText] = useState(""); // State for typed text
  const [started, setStarted] = useState(false); // State to start the typing effect

  // Start typing effect on mount
  useEffect(() => {
    if (!started) return;

    let index = 0;
    const typeLetter = () => {
      if (index < fullText.length) {
        setDisplayText((prev) => prev + fullText.charAt(index));
        index++;
        setTimeout(typeLetter, 100); // Delay before next letter
      }
    };
    typeLetter();
  }, [started]);

  // Trigger the typing effect once component is mounted
  useEffect(() => {
    setStarted(true);
  }, []);

  // seo0--------------------
 useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Mohammad Sijan",
      "url": "https://portfolio-sijan.netlify.app/",
      "sameAs": [
        "https://www.linkedin.com/in/mohammad-sijan-883205341/",
        "https://github.com/socratesssss",
        "https://wa.me/8801839528641"
      ],
      "email": "mailto:mohammadsijan381@gmail.com",
      "telephone": "+8801839528641"
    });
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <section className=" bg-white scrollbar-hidden dark:bg-[#0B192C] w-full">
      <Nav isDark={isDark} toggleDarkMode={toggleDarkMode} />
      <Ai isDark={isDark} toggleDarkMode={toggleDarkMode} />
      <div className="container mx-auto">
        <div className="flex flex-col mt-10 md:flex-row pt-14 md:pt-0 md:mt-20">
          {/* Left Section */}
          <div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -50 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7 }}
            >
              <div className="z-10 relative md:inline-block text-gray-950 dark:text-gray-100 md:ml-20 mx-10 text-5xl md:text-6xl md:w-[400px] min-h-[90px]">
                <h3>Hello, I am...</h3>
               

                <strong className="font-bold">
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
              className="mx-10 mt-8 md:ml-20 md:mt-6"
            >
              <p className="text-xl text-black md:text-2xl dark:text-white">
                <strong className="italic font-bold">Web Developer </strong>based in Bangladesh
              </p>

              <motion.button
                // whileHover={{ scale: 1.05 }}
                // whileTap={{ scale: 0.95 }}
                onClick={openPDF}
                 className=" md:px-6 transition-all duration-300   md:py-2 md:mt-10 mt-8 text-white  bg-gradient-to-r  from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br sm:focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg  px-5 py-2.5 text-center me-2 mb-2  "
                // className="flex items-center px-3 py-1 mt-8 font-semibold text-white transition-all duration-300 shadow-2xl cursor-pointer bg-slate-950 dark:bg-white dark:text-black md:px-6 drop-shadow-2xl md:py-2 md:mt-10"
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
                className="flex flex-col md:flex-row gap-4 md:w-[120%] justify-between mt-8 md:mt-16"
              >
                <a
                  href={`tel:${Mobile}`}
                  className="font-semibold text-black dark:text-white"
                >
                  <LocalPhoneIcon
                    sx={{ color: "#00BDDF" }}
                    className="p-1 bg-gray-300 rounded-full"
                  />
                  +{Mobile}
                </a>
                <a
                  href={`mailto:${email}`}
                  className="font-semibold text-black dark:text-white"
                >
                  <Email
                    className="p-1 bg-gray-300 rounded-full"
                    sx={{ color: "#00BDDF" }}
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
                  href="https://www.linkedin.com/in/mohammad-sijan-883205341/"
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
                  <AlternateEmailIcon
                    sx={{ fontSize: 30 }}
                    className="text-black dark:text-white"
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
            transition={{ duration: 0.8, delay: 0.5 }}
            className=" md:-mt-10"
          >
          <img src="/sijan2.jpg" className="rounded-full mx-auto sm:w-full w-[70%] dark:border-white border-b-6 sm:border-l-6 grayscale sm:rounded-none sm:rounded-l-full " alt="Mohammad sijan" />
          </motion.div>
        </div>
      </div>

      <Myskills />
      <WebsiteShow />
      <FaqSection />
      <ReviewSection/>
      <SendEmail/>
      <Footer />
    </section>
  );
}

export default Hero;
