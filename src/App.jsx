import React from 'react'
import Layout from './Layout';
import Hero from './Component/Hero'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    // <div className='w-full grid grid-cols-12 min-h-screen bg-[#FFFFFF]  '>
    //   <Navbar/>
    //   <Hero/>
    // </div>
    <Router>
    <Routes>
      {/* Common layout wrapper */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Hero />} />
     
      </Route>
    </Routes>
  </Router>
  )
}

export default App