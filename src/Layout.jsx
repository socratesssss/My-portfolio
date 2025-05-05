// src/components/Layout.jsx
import React from "react";


import { Outlet } from "react-router-dom";
import Navbar from "./Component/Navbar";

function Layout({toggleDarkMode}) {
  return (
    <div className="md:grid grid-cols-12">
 
    <Navbar toggleDarkMode={toggleDarkMode} />
    
  
    <Outlet />
  
</div>

  );
}

export default Layout;