import React, { useState } from 'react';

export default function ActionAreaCard({ name, img, link }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="w-full bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl md:hover:scale-110 transition-all duration-300">
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="cursor-pointer relative"
      >
        <img
          src={img}
          alt={name}
          className="w-full h-full object-cover"
        />
        <div className="px-3 bg-white rounded-4xl top-2 right-2 absolute">
          <h2 className="md:text-base capitalize shadow-xl drop-shadow-2xl font-semibold text-gray-600">
            { name}
          </h2>
        </div>
{
  isHovered &&         <div className='hidden md:flex absolute items-center justify-center  w-full h-full bg-gray-500/50   top-0'>
  <h1 className='text-white  text-3xl font-semibold '> Click</h1>
  
          </div>
}
      </a>
    </div>
  );
}
