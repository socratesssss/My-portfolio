// src/components/Layout.jsx
import React from "react";


import { Outlet } from "react-router-dom";
import Navbar from "./Component/Navbar";

function Layout() {
  return (
    <div className="md:grid grid-cols-12">
  <div className="md:col-span-2">
    <Navbar />
  </div>
  <main className="md:col-span-10">
    <Outlet />
  </main>
</div>

  );
}

export default Layout;
