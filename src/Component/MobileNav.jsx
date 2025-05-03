import React, { useState } from 'react';
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navItem = ["Home", "About", "Services", "Works", "Blogs", "Contact"];

  return (
    <div>
      {/* Top Navbar with transition */}
      <div
        className={`
          fixed top-0 left-0 w-full z-50 md:hidden bg-white p-2 md:px-4 flex justify-between items-center
          transition-all duration-300 ease-in-out
          ${mobileOpen ? "opacity-0 -translate-y-full pointer-events-none" : "opacity-100 translate-y-0"}
        `}
      >
        <h3 className="text-2xl mx-2 font-bold">SZN</h3>
        {!mobileOpen && (
          <button className="md:hidden" onClick={handleDrawerToggle}>
            <MenuIcon sx={{ fontSize: 32, color: "black" }} />
          </button>
        )}
      </div>

      {/* Overlay */}
      {mobileOpen && (
        <div
          onClick={handleDrawerToggle}
          className="fixed top-0 left-0 w-full h-full bg-black opacity-40 z-40 md:hidden transition-opacity duration-300"
        ></div>
      )}

      {/* Mobile Sidebar */}
      <div
        className={`
          fixed z-50 top-0 left-0 min-h-screen h-full w-60 bg-[#141213] px-6 pt-4
          transform transition-transform duration-300 ease-in-out md:hidden
          ${mobileOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <button
          className="absolute top-4 right-4 z-50"
          onClick={handleDrawerToggle}
        >
          <CloseIcon sx={{ fontSize: 32, color: "white" }} />
        </button>

        <header>
          <h3 className="text-2xl font-bold text-white">SZN</h3>
        </header>

        {/* Navigation Links */}
        <nav className="mt-10">
          <ul className="flex flex-col gap-4">
            {navItem.map((text, index) => (
              <li key={index}>
                <button className="text-white text-sm cursor-pointer border-b border-white md:border-none hover:text-gray-400 transition">
                  {text}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Footer Social Icons */}
        <footer className="mt-auto pt-10 absolute bottom-6 flex gap-4">
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
  );
}

export default Nav;
