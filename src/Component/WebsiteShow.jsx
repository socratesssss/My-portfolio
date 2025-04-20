import React from 'react'
import ActionAreaCard from './Card'
function WebsiteShow() {
  const websites = [
    {
        id:1,
        name:"DISASTERS",
        img:'/website1.png',
        link:"https://disaster-website.netlify.app/"
    },
    {
        id:2,
        name:"governinDocs",
        img:"/website2.png",
        link:"https://ai-govs-docs.netlify.app/"
    },
    {
        id:3,
        name:"thicker ai",
        img:"/website3.png",
        link:"https://tailwind-project-123.netlify.app/"
    },
    {
        id:4,
        name:"wizia",
        img:"/wesite4.png",
        link:"https://wizia222.netlify.app/"
    },
    {
        id:5,
        name:"Degic",
        img:"/website5.png",
        link:"https://react-app-1345432.netlify.app/"
    },
]
  
  return (
 <section>
     <div className='py-10 border-b-2 mx-4  md:mx-20 outline-offset-4'>
            <h1 className='  font-bold text-xl md:text-3xl'>Some of my developed website</h1>
           
        </div>
    <div className='mx-4  md:mx-20 gap-6 md:gap-y-14 grid grid-cols-1 md:grid-cols-3 justify-between py-14'>
       
       {
        websites.map((info,index)=>(
          <ActionAreaCard key={index} link={info.link} name={info.name} img={info.img}/>
        ))
       }

       
    </div>
</section>
  )
}

export default WebsiteShow