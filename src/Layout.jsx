// src/components/Layout.jsx
import React from "react";


import { Outlet } from "react-router-dom";
import Navbar from "./Component/Navbar";

function Layout() {
  return (
    <div  className='w-full  md:grid grid-cols-12 min-h-screen bg-[#FFFFFF]  '>
      <Navbar/>
   
      <Outlet/>
     
    
    </div>
  );
}

export default Layout;
