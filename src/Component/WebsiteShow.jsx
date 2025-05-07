import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import ActionAreaCard from "./Card";

function WebsiteShow() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });

  const websites = [
    {
      id: 1,
      name: "DISASTERS",
      img: "/website1.png",
      link: "https://disaster-website.netlify.app/",
    },
    {
      id: 2,
      name: "governinDocs",
      img: "/website2.png",
      link: "https://ai-govs-docs.netlify.app/",
    },
    {
      id: 3,
      name: "thicker ai",
      img: "/website3.png",
      link: "https://tailwind-project-123.netlify.app/",
    },
    {
      id: 4,
      name: "wizia",
      img: "/wesite4.png",
      link: "https://wizia222.netlify.app/",
    },
    {
      id: 5,
      name: "Degic",
      img: "/website5.png",
      link: "https://react-app-1345432.netlify.app/",
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section ref={sectionRef} className="container mx-auto">
      <div className="py-10 border-b-2 dark:border-white mx-4 md:mx-20 outline-offset-4">
        <h3 className="font-bold dark:text-white text-xl md:text-3xl">
          Some of my developed websites
        </h3>
      </div>

      <motion.div
        className="mx-4 md:mx-20 gap-6 md:gap-y-14 grid grid-cols-1 md:grid-cols-3 justify-between py-14"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {websites.map((info, index) => (
          <motion.div key={info.id} variants={cardVariants}>
            <ActionAreaCard link={info.link} name={info.name} img={info.img} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default WebsiteShow;
