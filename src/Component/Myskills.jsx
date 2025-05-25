import React from "react";
import { motion } from "framer-motion";
import SchoolIcon from "@mui/icons-material/School";

function Myskills() {
  const skills = [
    { src: "/html.png", name: "HTML" },
    { src: "/css.png", name: "CSS" },
    { src: "/javascript.png", name: "JAVASCRIPT" },
    { src: "/bootsrap.png", name: "BOOTSTRAP" },
    { src: "/tailwind.png", name: "TAILWIND" },
    { src: "/reactjs.png", name: "REACT" },
    { src: "/typescript.png", name: "TYPESCRIPT" },
    { src: "/nextjs.png", name: "NEXTJS" },
    { src: "/frammer.png", name: "FRAMER" },
    { src: "/mui.jpg", name: "MUI" },
  ];

  return (
    <section className="dark:bg-[#0f172a] bg-gray-50 py-10 container mx-auto transition-colors duration-500">
      <div className="mx-4 md:mx-20">
        <div className="flex justify-center items-center py-3">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white flex items-center gap-2">
            My Skills <SchoolIcon sx={{ marginBottom: "4px" }} />
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 mt-6">
          {skills.map((info, i) => (
            <motion.div
              key={i}
              className="flex flex-col items-center justify-center p-4 bg-white dark:bg-[#1e293b] rounded-lg shadow hover:shadow-md dark:hover:shadow-blue-800 transition duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.4,
                delay: i * 0.08,
              }}
            >
              <img
                src={info.src}
                alt={info.name}
                className="h-10 md:h-16 object-contain"
              />
              <p className="mt-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                {info.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Myskills;
