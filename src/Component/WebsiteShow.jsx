import React from 'react'
import ActionAreaCard from './Card'

function WebsiteShow() {
  return (
 <section>
     <div className='py-10 border-b-2 mx-4  md:mx-20 outline-offset-4'>
            <h1 className='  font-bold text-xl md:text-3xl'>Some of my designed website</h1>
           
        </div>
    <div className='mx-4  md:mx-20 gap-6 md:gap-y-14 grid grid-cols-1 md:grid-cols-3 justify-between py-14'>
       
        <ActionAreaCard/>
        <ActionAreaCard/>
        <ActionAreaCard/>
        <ActionAreaCard/>
        <ActionAreaCard/>

       
    </div>
</section>
  )
}

export default WebsiteShow