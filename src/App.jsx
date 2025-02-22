import React from 'react'
import Navbar from './Component/Navbar'
import Hero from './Component/Hero'

function App() {
  return (
    <div className='w-full min-h-screen bg-[#FFFFFF] flex '>
      <Navbar/>
      <Hero/>
    </div>
  )
}

export default App