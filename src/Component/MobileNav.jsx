import React, { useState, useEffect } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import NightlightIcon from "@mui/icons-material/Nightlight";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import GitHubIcon from "@mui/icons-material/GitHub";
function Nav({ toggleDarkMode, isDark }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navItem = ["Home", "About", "Services", "Works", "Blogs", "Contact"];

  // Optional: lock scroll when sidebar is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [mobileOpen]);
  const phone = "8801839528641"; // your phone number with country code
  const message = "Hello! I found you on your website.";
  const whatsappLink = `https://wa.me/${phone}?text=${encodeURIComponent(
    message
  )}`;
  return (
    <div>
      {/* Top Navbar with transition */}
      <div
        className={`
          fixed top-0 left-0 w-full z-50 md:hidden bg-white dark:bg-[#122239] opacity-50 p-2 md:px-4 flex justify-between items-center
          transition-all duration-300 ease-in-out drop-shadow-sm
          ${
            mobileOpen
              ? "opacity-0 -translate-y-full pointer-events-none"
              : "opacity-100 translate-y-0"
          }
        `}
      >
        <button onClick={toggleDarkMode}  aria-label="Sunny-mode">
          {isDark ? (
            <WbSunnyIcon
              className="text-white"
              sx={{
                fontSize: 28,
              }}
            />
          ) : (
            <NightlightIcon
              className="text-black"
               aria-label="Dark-icon"
              sx={{
                fontSize: 28,
              }}
            />
          )}
        </button>

        {!mobileOpen && (
          <div className="flex gap-2">
            <button className="md:hidden"  aria-label="Menu" onClick={handleDrawerToggle}>
              <MenuIcon
                className="text-black dark:text-white"
                sx={{ fontSize: 32 }}
              />
            </button>
          </div>
        )}
      </div>

      {/* Overlay */}
      {mobileOpen && (
        <div
          onClick={handleDrawerToggle}
          className="fixed top-0 left-0 w-full h-full bg-[#000000] opacity-40 z-40 md:hidden transition-opacity duration-300"
        ></div>
      )}

      {/* Mobile Sidebar */}
      <div
        className={`
          fixed inset-0 z-50 w-60 bg-gray-900 dark:bg-[#122239] px-6 pt-4 overflow-y-auto
          transform transition-transform duration-300 ease-in-out md:hidden
          ${mobileOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <header>
          <img src="/logo2.png" className="w-[34px]" alt="" />
          <button
            className="absolute z-50 top-4 right-4"
            onClick={handleDrawerToggle}
          >
            <CloseIcon sx={{ fontSize: 32, color: "white" }}
            
 aria-label="Close"             />
          </button>
        </header>

        {/* Navigation Links */}
        <nav className="mt-10">
          <ul className="flex flex-col gap-4">
            {navItem.map((text, index) => (
              <li key={index}>
                <button className="text-sm text-white line-through transition border-white cursor-pointer md:border-none hover:text-gray-400">
                  {text}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Footer Social Icons */}
        <footer className="absolute flex gap-4 pt-10 mt-auto bottom-6">
          <a
            href="https://www.linkedin.com/in/mohammad-sijan-883205341"
            target="_blank"
            rel="noreferrer"
            className="inline-block"
              aria-label="Visit my LInkedIn"
          >
            <LinkedInIcon sx={{ color: "white", fontSize: 30 }} />
          </a>
          <a
            href="https://github.com/socratesssss"
            target="_blank"
            rel="noreferrer"
              aria-label="Visit my GitHub"
          >
            <GitHubIcon sx={{ color: "white", fontSize: 30 }} />
          </a>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block "
              aria-label="My WhatssApp"
          >
            <WhatsAppIcon sx={{ fontSize: 30, color: "white" }} />
          </a>
        </footer>
      </div>
    </div>
  );
}

export default Nav;
