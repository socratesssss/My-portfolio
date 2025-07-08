// src/components/Layout.jsx
import React from "react";


import { Outlet } from "react-router-dom";
import Navbar from "./Component/navigatin/Navbar";

function Layout({toggleDarkMode,isDark}) {
  return (
    <div className="md:flex dark:bg-[#122239] ">
 
    <Navbar isDark={isDark} toggleDarkMode={toggleDarkMode} />
    
  
    <Outlet />
  
</div>

  );
}

export default Layout;