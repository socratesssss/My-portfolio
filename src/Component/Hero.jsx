import React from "react";
import Nav from "./MobileNav";
import NorthEastIcon from "@mui/icons-material/NorthEast";
import { Email } from "@mui/icons-material";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import WebsiteShow from "./WebsiteShow";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import Myskills from "./Myskills";
import Footer from "./Footer";

function Hero() {
  const Mobile = "880 183952641";
  const email = "mohammadsijan381@gamil.com";

  const openPDF = () => {
    window.open("/Resume.pdf", "_blank");
  };
  return (
    <section className="md:col-span-10 container mx-auto">
      <Nav/>
      <div>
        <div className="flex flex-col md:flex-row pt-14 md:pt-0  md:mt-20 ">
          {/* left Section */}
          <div className="">
            <div>
              <div className="z-10 relative md:inline-block  md:ml-20 mx-10 text-5xl md:text-6xl md:w-[400px]">
                <h1 className="">
                  My name is{" "}
                  <span className="font-bold ">Mohammad Sijan...</span>
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
                className="bg-black text-white md:px-6 px-3 shadow-2xl md:hover:scale-110 transition-all duration-300 drop-shadow-2xl cursor-pointer py-1 md:py-2 md:mt-10 mt-8 flex items-center"
              >
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
                <a href={`mailto:${email}`} className="font-semibold">
                  <Email className="bg-gray-300 p-1 rounded-full" /> {email}
                </a>
              </div>

              <div className=" flex py-14 gap-4">
                <a
                  href="https://www.linkedin.com/in/mohammad-sijan-883205341/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block"
                >
                  <LinkedInIcon sx={{ color: "primary", fontSize: 30 }} />
                </a>

                <a
                  href="https://github.com/socratesssss"
                  target="_blank"
                  rel="noreferrer"
                >
                  <GitHubIcon sx={{ color: "primary", fontSize: 30 }} />
                </a>
                <a
                  href={`mailto:${email}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <AlternateEmailIcon sx={{ color: "primary", fontSize: 30 }} />
                </a>
              </div>
             
            </div>
          </div>
          {/* right section */}

          <div className="md:-mt-10">
            <img src="/Img.png" className="w-full " alt="Img.png" />
          </div>
        </div>
      </div>
      <div>
        <Myskills/>
      </div>
      <div className="">
        <WebsiteShow />
      </div>
      <div>
        <Footer/>
      </div>
    </section>
  );
}

export default Hero;
