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
      className="relative block max-w-sm mx-auto overflow-hidden transition-shadow duration-300 shadow-md rounded-xl h-50 hover:shadow-xl dark:hover:shadow-cyan-500/30 group"
    >
      {/* Background Image */}
      <div className="relative">
          <img
        src={image}
        alt={name || "Project"}
        className="object-cover w-full transition-transform duration-500 transform h-50 group-hover:scale-110"
      />
      <div className="z-50 bg-white size-5 top-2 right-2">
        Click
        
      </div>
        
      </div>
    

      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center p-4 space-y-3 text-center transition-opacity duration-300 bg-gray-900/40 md:opacity-0 bg-opacity-60 md:group-hover:opacity-100">
        <h3 className="text-xl font-bold text-white">{name || "Project Title"}</h3>
        <p className="text-sm text-gray-200 line-clamp-3">
          {des ||
            "This is a professional web design created with modern tools and beautiful interaction."}
        </p>
        <button className="px-4 py-2 mt-2 text-sm font-medium text-white transition-colors duration-300 rounded-full bg-cyan-500 hover:bg-cyan-600">
          View Website
        </button>
      </div>
    </motion.a>
  );
};

export default ActionCard;
