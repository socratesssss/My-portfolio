// src/components/Layout.jsx
import React from "react";


import { Outlet } from "react-router-dom";
import Navbar from "./Component/Navbar";

function Layout({toggleDarkMode,isDark}) {
  return (
    <div className="md:flex">
 
    <Navbar isDark={isDark} toggleDarkMode={toggleDarkMode} />
    
  
    <Outlet />
  
</div>

  );
}

export default Layout;