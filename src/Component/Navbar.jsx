import React, { useState } from "react";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

function Navbar({toggleDarkMode}) {


  const navItem = ["Home", "About", "Services", "Works", "Blogs", "Contact"];
  
  const phone = '8801839528641'; // your phone number with country code
  const message = 'Hello! I found your website.';
  const whatsappLink = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  return (
    <section className="col-span-2 z-50 bg-gray-900  dark:bg-[#122239] border-r border-white">
      <div className=" md:relative z-50  fixed min-h-screen">
        {/* hh */}
        <div
          className={` justify-between
          hidden md:flex md:flex-col text-white fixed top-0 px-3 left-0 min-h-screen h-full  w-52 pt-4 transition-all duration-300 ease-in-out`}
        >
          <header className="flex w-full justify-between ">

            <img src="/logo2.png" className="w-[35px]" alt="" />
            <button onClick={toggleDarkMode}>
              <DarkModeIcon  sx={{ color: "white", fontSize: 30 }} />
            </button>
          </header>

          {/* Navigation Links */}
          <nav className="">
            <ul className="flex flex-col gap-4">
              {navItem.map((text, index) => (
                <li key={index}>
                  <button className=" text-sm cursor-pointer border-b border-white md:border-none hover:text-gray-400 transition">
                    <del>{text}</del>
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Footer Social Icons */}
          <footer className="mb-5 flex flex-col gap-4">
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
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
           
            >
              <WhatsAppIcon sx={{ fontSize: 30, color: "white" }} />
            </a>
          </footer>
        </div>
      </div>
    </section>
  );
}

export default Navbar;
