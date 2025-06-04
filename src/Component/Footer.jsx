import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 dark:bg-[#122239] text-white py-2 md:py-4 mt-10">
      <div className="flex flex-col items-center justify-center max-w-6xl px-4 mx-auto md:flex-row">
        <p className="text-sm md:text-base">
          &copy; {new Date().getFullYear()} Mohammad Sijan. All rights reserved.
        </p>
       </div>
    </footer>
  );
}

export default Footer;
