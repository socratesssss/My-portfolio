// import React from 'react'
// import Layout from './Layout';
// import Hero from './Component/Hero'
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import WebsiteShow from './Component/WebsiteShow';
// import Home from './Component/Home';
// import Navbar from './Component/Navbar';

// function App() {
//   return (
//     <div className='w-full md:grid md:grid-cols-12 min-h-screen bg-[#FFFFFF]  '>
//       <Navbar/>
//      <Home/>
//     </div>
//
//   )
// }

// export default App


// import React from 'react'
// import Hero from './Hero'
// import WebsiteShow from './WebsiteShow'

// function Home() {
//   return (
//   <section>
//     <Hero/>
//     <WebsiteShow/>
//   </section>
//   )
// }

// export default Home

import React from 'react'
import Layout from './Layout';
import Hero from './Component/Hero'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
   

    <Router>
    <Routes>
      {/* Common layout wrapper */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Hero/>} />
     
      </Route>
    </Routes>
  </Router>
  )
}

export default App