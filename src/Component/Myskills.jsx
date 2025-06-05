import React from "react";
import { motion } from "framer-motion";

const skills = [
  { name: "HTML", level: 95 },
  { name: "JavaScript", level: 70 },
  { name: "React", level: 80 },
  { name: "Tailwind CSS", level: 90 },
  { name: "Next.js", level: 40 },
  {name:'Node js', level: 50}
];

const barVariants = {
  initial: { width: 0 },
  animate: (level) => ({
    width: `${level}%`,
    transition: { duration: 1, ease: "easeOut" },
  }),
};

const Myskills = () => {
  return (
    <section id="skills" className="py-16 bg-white dark:bg-gray-900  dark:bg-[url('bg1.png')]  md:dark:bg-[url('bg1.png')] bg-fixed bg-cover bg-center bg-no-repeat">
      <div className=" mx-auto px-6 sm:px-12">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-10">
          My Skills
        </h2>
        <div className="space-y-6 md:grid grid-cols-3 gap-10">
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
              <div className="w-full h-4 bg-gray-300 dark:bg-gray-700 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-cyan-500 rounded-full"
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
