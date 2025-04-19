import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navItem = ["Home", "About", "Services", "Works", "Blogs", "Contact"];

  return (
    <section className="md:col-span-2 md:w-full md:bg-[#141213]">
      <div className="z-50  absolute md:relative min-h-screen">
        {/* Mobile Toggle Button */}
        <div className="w-full absolute bg-amber-300">
          {mobileOpen ? (
            <button
              className="fixed top-4 right-0 z-50"
              onClick={handleDrawerToggle}
            >
              <CloseIcon
                sx={{ fontSize: 32, marginRight: 20, color: "white" }}
              />
            </button>
          ) : (
            <button
              className="absolute top-4 left-4 md:hidden z-50"
              onClick={handleDrawerToggle}
            >
              {" "}
              <MenuIcon sx={{ fontSize: 32, color: "black" }} />
            </button>
          )}
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

        {/*Mobile Sidebar */}
        <div
          className={`${
            mobileOpen ? "block" : "hidden"
          } md:hidden text-white fixed top-0 left-0 min-h-screen h-full bg-[#141213] w-60   px-6 pt-4 transition-all duration-300 ease-in-out`}
        >
          <header>
            <h3 className="text-2xl font-bold">SZN</h3>
          </header>

          {/* Navigation Links */}
          <nav className="mt-10">
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
          <footer className="mt-auto pt-10 flex flex-col gap-4">
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
            <p className=" absolute bottom-3 text-white    font-light text-xs md:text-sm">
              Copyright ©2024 Mohammad Sijan. All rights reserved.
            </p>
          </footer>
        </div>
      </div>
    </section>
  );
}

export default Navbar;
