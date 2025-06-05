import React from "react";
import { motion } from "framer-motion";

const ActionCard = ({ image, name, link, des }) => {
  return (
    <motion.a
      href={link || "#"}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="relative block rounded-xl h-50 overflow-hidden shadow-md hover:shadow-xl dark:hover:shadow-cyan-500/30 transition-shadow duration-300 group max-w-sm mx-auto"
    >
      {/* Background Image */}
      <img
        src={image}
        alt={name || "Project"}
        className="w-full h-50 object-cover transform group-hover:scale-110 transition-transform duration-500"
      />

      {/* Overlay Content */}
      <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-center p-4 space-y-3">
        <h3 className="text-white text-xl font-bold">{name || "Project Title"}</h3>
        <p className="text-gray-200 text-sm line-clamp-3">
          {des ||
            "This is a professional web design created with modern tools and beautiful interaction."}
        </p>
        <button className="mt-2 bg-cyan-500 hover:bg-cyan-600 text-white text-sm font-medium px-4 py-2 rounded-full transition-colors duration-300">
          View Website
        </button>
      </div>
    </motion.a>
  );
};

export default ActionCard;
