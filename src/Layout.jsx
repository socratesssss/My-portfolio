// src/components/Layout.jsx
import React from "react";


import { Outlet } from "react-router-dom";
import Navbar from "./Component/Navbar";

function Layout() {
  return (
    <div className="md:grid grid-cols-12">
 
    <Navbar />
  
    <Outlet />
  
</div>

  );
}

export default Layout;