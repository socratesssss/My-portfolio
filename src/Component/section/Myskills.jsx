import React from "react";
import { motion } from "framer-motion";

const skills = [
  { name: "JavaScript", level: 70 },
  { name: "React", level: 80 },
   { name: "Next.js", level: 60 },
  { name: "Tailwind CSS", level: 90 },
  {name:'Node js', level: 60},
  {name:'Mongo DB',level:65},
    { name: "Express js", level: 75 },
];

const barVariants = {
  initial: { width: 0 },
  animate: (level) => ({
    width: `${level}%`,
    transition: { duration: 0.5, ease: "easeOut" },
  }),
};

const Myskills = () => {
  return ( 
    <section id="skills" className="py-16 bg-gray-100 dark:bg-[#0B192C]   bg-fixed  md:dark:bg-[url('/bg3.jpg')] bg-cover bg-center bg-no-repeat"> 
      <div className="px-6 mx-auto sm:px-12">
        <h2 className="mb-10 text-3xl font-bold text-center text-[#00cfec]">
          My Skills
        </h2>
        <div className="grid-cols-3 gap-10 space-y-6 md:grid">
          {skills.map((skill, index) => (
            <div key={index}>
              <div className="flex justify-between mb-1">
                <span className="text-lg font-medium text-gray-700 dark:text-white">
                  {skill.name}
                </span>
                <span className="text-sm font-medium text-gray-500 dark:text-gray-300">
                  {skill.level}%
                </span>
              </div>
              <div className="w-full h-4 overflow-hidden bg-gray-300 rounded-full dark:bg-gray-700">
                <motion.div
                  className="h-full rounded-full bg-linear-to-r from-cyan-500 to-cyan-800"
                  custom={skill.level}
                  variants={barVariants}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Myskills;
