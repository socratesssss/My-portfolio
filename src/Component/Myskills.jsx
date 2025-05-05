import React from "react";
import { motion } from "framer-motion";
import SchoolIcon from "@mui/icons-material/School";

function Myskills() {
  const img = [
    "/html.png",
    "/css.png",
    "/javascript.png",
    "/bootsrap.png",
    "/tailwind.png",
    "/reactjs.png",
    "/typescript.png",
    "/nextjs.png",
    "/frammer.png",
    "/mui.jpg",
  ];

  return (
    <section className="dark:bg-[#374d6b] py-3">
      <div className="mx-4 md:mx-20 ">
        <div className="flex justify-center items-center py-3">
          <h1 className="text-2xl md:text-3xl dark:text-white font-bold">
            My Skills <SchoolIcon sx={{ marginBottom: "6px" }} />
          </h1>
        </div>

        <div className="grid grid-cols-4  gap-10 my-3 md:my-10 md:grid-cols-5">
          {img.map((info, i) => (
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
                src={info}
                className="w-auto h-10 md:h-20 object-cover"
                alt={`skill-${i}`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Myskills;
