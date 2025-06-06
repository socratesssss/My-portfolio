import React from "react";
import { motion } from "framer-motion";
import LocationOnIcon from '@mui/icons-material/LocationOn';


const container = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const AboutSection = () => {
  return (
    <section className="py-10 bg-gray-100 dark:bg-gray-900" id="about">
           <h2 className="text-4xl text-center font-bold mb-4 text-[#00cfef]">
            About Me
          </h2>
      <div className="container flex flex-col items-start px-6 py-6 mx-auto md:px-12 md:flex-row md:gap-14">
        
        {/* Text Content */}
        <motion.div
          className="md:w-1/2"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
       
          <p className="mb-4 text-lg text-gray-600 dark:text-gray-300">
            I'm Mohammad Sijan, a passionate Front-End Developer from Chittagong, Bangladesh. I specialize in building clean, fast, and responsive websites using React, Tailwind CSS, and modern web tools.
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            I love bringing designs to life and creating digital experiences that are both functional and beautiful. Whether it’s a personal brand, business website, or web app — I’m here to build it with care.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-2 gap-6 mt-10 text-center md:w-1/2"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="p-6 transition duration-300 bg-white shadow dark:bg-gray-800 rounded-xl hover:shadow-cyan-500/40">
            <h3 className="text-3xl font-bold text-[#00cfef]">1+</h3>
            <p className="mt-2 text-gray-700 dark:text-gray-300">Years Experience</p>
          </div>
          <div className="p-6 transition duration-300 bg-white shadow dark:bg-gray-800 rounded-xl hover:shadow-cyan-500/40">
            <h3 className="text-3xl font-bold text-[#00cfef]">10+</h3>
            <p className="mt-2 text-gray-700 dark:text-gray-300">Projects Completed</p>
          </div>
          <div className="p-6 transition duration-300 bg-white shadow dark:bg-gray-800 rounded-xl hover:shadow-cyan-500/40">
            <h3 className="text-3xl font-bold text-[#00cfef]">9+</h3>
            <p className="mt-2 text-gray-700 dark:text-gray-300">Happy Clients</p>
          </div>
          <div className="p-6 transition duration-300 bg-white shadow dark:bg-gray-800 rounded-xl hover:shadow-cyan-500/40">
            <h3 className="text-xl font-semibold text-[#00cfef] "><LocationOnIcon sx={{fontSize: 40}}/></h3>
            <p className="mt-2 text-gray-700 dark:text-gray-300">Bangladesh</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
