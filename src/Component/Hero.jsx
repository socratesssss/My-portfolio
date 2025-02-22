import React from 'react'
import NorthEastIcon from '@mui/icons-material/NorthEast';
import { Email } from '@mui/icons-material';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

function Hero() {
    const Mobile = "0183-9528923"
    const email = "sijanfgtdn@gamil.com"
    return (
        <div className='flex flex-col md:flex-row mt-16 md:mt-28 '>

            {/* left Section */}
            <div className="">
                <div>
                    <div className="z-10 relative  md:mx-20 mx-10 text-5xl md:text-6xl md:w-[400px]">
                        <h1>My name is <span className='font-bold '>Mohammad Sijan...</span></h1>

                    </div>
                    <img
                        className="absolute  w-30 md:-mt-48 -mt-36 ml-6 md:ml-14"
                        src="./Vector (2).png"
                        alt="Decorative vector"
                    />
                </div>
                <div className='md:mx-20 mx-10 mt-8 md:mt-6'>
                    <p className='md:text-2xl text-xl'><span className='font-bold italic'>Web Developer </span>based in Bangladesh</p>
                    <button className='bg-black text-white md:px-6 px-3 py-1 md:py-2 md:mt-10 mt-8 flex items-center'>Let’s talk with me <NorthEastIcon sx={{ fontSize: 18, marginLeft: "8px" }} className='text-white   bg-gradient-to-r from-[#FFB147] via-[#FF6C63] to-[#B86ADF]' /></button>
                    <div className='flex flex-col md:flex-row gap-4 justify-between mt-8 md:mt-16 '>
                        <p className='font-bold'><LocalPhoneIcon className='bg-gray-300 p-1 rounded-full'/>+{Mobile}</p>
                        <p className='font-bold'><Email className='bg-gray-300 p-1 rounded-full'/> {email}</p>
                    </div>

                </div>
            </div>
            {/* right section */}

            <div>
                <img src="Img.png" className=' ' alt="Img.png" />
            </div>

        </div>
    )
}

export default Hero