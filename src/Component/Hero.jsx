import React from "react";
import NorthEastIcon from "@mui/icons-material/NorthEast";
import { Email } from "@mui/icons-material";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

function Hero() {
  const Mobile = "0183952641";
  const email = "mohammadsijan381@gamil.com";

  const openPDF = () => {
    window.open("/Resume.pdf", "_blank");
  };
  return (
 
    <section className="md:col-span-10">
     <div>
     <div className="flex flex-col md:flex-row pt-14 md:pt-0  md:mt-20 ">
        {/* left Section */}
        <div className="">
          <div>
            <div className="z-10 relative md:inline-block  md:ml-20 mx-10 text-5xl md:text-6xl md:w-[400px]">
              <h1 className="">
                My name is <span className="font-bold ">Mohammad Sijan...</span>
              </h1>
            </div>
            <img
              className="absolute  w-30 md:-mt-48 -mt-36 ml-6 md:ml-14"
              src="./Vector (2).png"
              alt="Decorative vector"
            />
          </div>
          <div className="md:ml-20 mx-10 mt-8 md:mt-6">
            <p className="md:text-2xl text-xl">
              <span className="font-bold italic">Web Developer </span>based in
              Bangladesh
            </p>
            <button
              onClick={openPDF}
             className="bg-black text-white md:px-6 px-3 cursor-pointer py-1 md:py-2 md:mt-10 mt-8 flex items-center">
             See Resume
              <NorthEastIcon
                sx={{ fontSize: 18, marginLeft: "8px" }}
                className="text-white   bg-gradient-to-r  from-[#FFB147] via-[#FF6C63] to-[#B86ADF]"
              />
            </button>
    
        
            <div className="flex flex-col md:flex-row gap-4 md:w-[120%] justify-between mt-8 md:mt-16 ">
              <a href={`tel:${Mobile}`} className="font-semibold">
                <LocalPhoneIcon className="bg-gray-300 p-1 rounded-full" />+
                {Mobile}
              </a>
              <a  href={`mailto:${email}`} className="font-semibold">
                <Email className="bg-gray-300 p-1 rounded-full" /> {email}
              </a>
            </div>
          </div>
        </div>
        {/* right section */}

        <div className="-mt-10" >
          <img src="/Img.png" className="w-full " alt="Img.png" />
        </div>
      </div>
     </div>
    </section>
  
  
   
  )
}

export default Hero;