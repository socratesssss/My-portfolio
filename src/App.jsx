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
import { useEffect, useState } from 'react';
import React from 'react'
import Layout from './Layout';
import Hero from './Component/Hero'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MessageBox from './Component/Massage';


function App() {
   // dark
   const [isDark, setIsDark] = useState(false);

   useEffect(() => {
     const root = document.documentElement;
     if (isDark) {
       root.classList.add('dark');
     } else {
       root.classList.remove('dark');
     }
   }, [isDark]);
 
   const toggleDarkMode = () => {
     setIsDark(prev => !prev)
   }
  return (
   

    <Router>
    <Routes>
      {/* Common layout wrapper */}
      <Route path="/" element={<Layout  toggleDarkMode={toggleDarkMode} />}>
        <Route index  element={<Hero isDark={isDark} toggleDarkMode={toggleDarkMode}/>} />
        <Route path="/massage" element={<MessageBox/>} />
     
      </Route>
    </Routes>
  </Router>
  )
}

export default App