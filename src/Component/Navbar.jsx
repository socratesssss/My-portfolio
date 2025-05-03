import React, { useState } from "react";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navItem = ["Home", "About", "Services", "Works", "Blogs", "Contact"];

  return (
    <section className="md:col-span-2  z-50  md:bg-[#141213]">
      <div className=" md:relative z-50  fixed min-h-screen">
        {/* Mobile Toggle Button */}
        <div className="w-full relative  bg-white ">
         
       
        </div>

        {/* hh */}
        <div
          className={`
          hidden md:inline-block text-white fixed top-0 left-0 min-h-screen h-full    px-6 pt-4 transition-all duration-300 ease-in-out`}
        >
          <header>
            <h3 className="text-2xl font-bold">SZN</h3>
          </header>

          {/* Navigation Links */}
          <nav className="mt-20">
            <ul className="flex flex-col gap-4">
              {navItem.map((text, index) => (
                <li key={index}>
                  <button className="text-white text-sm cursor-pointer border-b border-white md:border-none hover:text-gray-400 transition">
                    <del>{text}</del>
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Footer Social Icons */}
          <footer className="mt-auto absolute bottom-6 flex flex-col gap-4">
            <a
              href="https://www.linkedin.com/in/mohammad-sijan-883205341/"
              target="_blank"
              rel="noreferrer"
              className="inline-block"
            >
              <LinkedInIcon sx={{ color: "white", fontSize: 30 }} />
            </a>

            <a
              href="https://github.com/socratesssss"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon sx={{ color: "white", fontSize: 30 }} />
            </a>

          </footer>
        </div>

      
      </div>
    </section>
  );
}

export default Navbar;
