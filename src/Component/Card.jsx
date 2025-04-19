import React from 'react';

export default function ActionAreaCard() {
  return (
    <div className="max-w-[300px] w-full bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="cursor-pointer">
        <img
          src="/website1.png"
          alt="green iguana"
          className="w-full h-full object-cover"
        />
        <div className="px-4 py-2">
          <h2 className="md:text-xl font-semibold text-gray-800">Disester web site</h2>
          {/* <p className="text-sm text-gray-600 mt-2">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica.
          </p> */}
        </div>
      </div>
    </div>
  );
}

