import React from "react";
import { motion } from "framer-motion";
import Nav from "./MobileNav";
import NorthEastIcon from "@mui/icons-material/NorthEast";
import { Email } from "@mui/icons-material";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import WebsiteShow from "./WebsiteShow";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import Myskills from "./Myskills";
import Footer from "./Footer";


import WhatsAppIcon from "@mui/icons-material/WhatsApp";
function Hero({toggleDarkMode,isDark}) {
  const Mobile = "880 183952641";
  const email = "mohammadsijan381@gamil.com";

  const openPDF = () => {
    window.open("/Resume.pdf", "_blank");
  };
 
 

// whatapp
  const phone = '8801839528641'; // your phone number with country code
  const message = 'Hello! I found your website.';
  const whatsappLink = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  return (
    <section className="md:col-span-10 bg-white dark:bg-[#0B192C] container mx-auto">
      <Nav isDark={isDark} toggleDarkMode={toggleDarkMode} />
      <div>
        <div className="flex flex-col md:flex-row pt-14 md:pt-0 md:mt-20">
          {/* Left Section */}
          <div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -50 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7 }}
            >
              <div className="z-10 relative md:inline-block text-gray-950 dark:text-gray-100 md:ml-20 mx-10 text-5xl md:text-6xl md:w-[400px]">
                <h1>
                  My name is <span className="font-bold">Mohammad Sijan...</span>
                </h1>
 
              </div>
              <img
                className="absolute dark:hidden w-30 md:-mt-48 -mt-36 ml-6 md:ml-14"
                src="./Vector (2).png"
                alt="Decorative vector"
              />
            </motion.div>

            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 30 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="md:ml-20 mx-10 mt-8 md:mt-6"
            >
              <p className="md:text-2xl text-black dark:text-white text-xl">
                <span className="font-bold italic">Web Developer </span>based in Bangladesh
              </p>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={openPDF}
                className="bg-slate-950 dark:bg-white text-white dark:text-black font-semibold md:px-6 px-3 shadow-2xl transition-all duration-300 drop-shadow-2xl cursor-pointer py-1 md:py-2 md:mt-10 mt-8 flex items-center"
              >
                See Resume
                <NorthEastIcon
                  sx={{ fontSize: 18, marginLeft: "8px" }}
                  className="text-white bg-gradient-to-r from-[#FFB147] via-[#FF6C63] to-[#B86ADF]"
                />
              </motion.button>

              <motion.div
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-col md:flex-row gap-4 md:w-[120%] justify-between mt-8 md:mt-16"
              >
                <a href={`tel:${Mobile}`} className="font-semibold text-black  dark:text-white">
                  <LocalPhoneIcon  sx={{color:'black'}} className="bg-gray-100 p-1 rounded-full" />+{Mobile}
                </a>
                <a href={`mailto:${email}`} className="font-semibold text-black dark:text-white">
                  <Email className="bg-gray-100 p-1 rounded-full" sx={{color:'black'}} /> {email}
                </a>
              </motion.div>

              <motion.div
                whileInView={{ opacity: 1, scale: 1 }}
                initial={{ opacity: 0, scale: 0.9 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, delay: 0.6 }}
                className="flex py-14 gap-4"
              >
                <a
                  href="https://www.linkedin.com/in/mohammad-sijan-883205341/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block border-b dark:border-white"
                >
                  <LinkedInIcon    className="text-[#1469C9] " sx={{ fontSize: 30 }} />
                </a>
                <a href="https://github.com/socratesssss" target="_blank"   className="inline-block  dark:border-white border-b" rel="noreferrer">
                  <GitHubIcon sx={{ fontSize: 30 }} className="text-black dark:text-white" />
                </a>
                <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
                className="inline-block  dark:border-white border-b "
           
            >
              <WhatsAppIcon sx={{ fontSize: 30,
                color:"green"
               }} />
            </a>
                <a href={`mailto:${email}`} target="_blank" rel="noreferrer"   className="inline-block border-b  dark:border-white">
                  <AlternateEmailIcon sx={{ fontSize: 30 }}  className="text-black dark:text-white"  />
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
            className="md:-mt-10"
          >
            <img src="/Img.png" className="w-full" alt="Img.png" />
          </motion.div>
        </div>
      </div>

      <div>
        <Myskills />
      </div>
      <div>
        <WebsiteShow />
      </div>
      <div>
        <Footer />
      </div>
    </section>
  );
}

export default Hero;
