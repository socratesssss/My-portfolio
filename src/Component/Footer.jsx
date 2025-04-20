import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-2 md:py-6 mt-10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-center items-center">
        <p className="text-sm md:text-base">
          &copy; {new Date().getFullYear()} Mohammad Sijan. All rights reserved.
        </p>
       </div>
    </footer>
  );
}

export default Footer;
