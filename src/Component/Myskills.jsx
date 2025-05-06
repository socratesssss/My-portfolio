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
    { src: "/mui.jpg", name: "MUI" }
  ];

  return (
    <section className="dark:bg-[#374d6b] py-3">
      <div className="mx-4 md:mx-20 ">
        <div className="flex justify-center items-center py-3">
          <h2 className="text-2xl md:text-3xl dark:text-white font-bold">
            My Skills <SchoolIcon sx={{ marginBottom: "6px" }} />
          </h2>
        </div>

        <div className="grid grid-cols-4  gap-10 my-3 md:my-10 md:grid-cols-5">
          {skills.map((info, i) => (
            <motion.div
              key={i}
              className="w-full h-auto flex justify-center items-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.5,
                delay: i * 0.05,
              }}
            >
              <img
                src={info.src}
                className="w-auto h-10 md:h-20 object-cover"
                alt={info.name}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Myskills;
