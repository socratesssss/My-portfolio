import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

function Navbar() {
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
      setMobileOpen((prevState) => !prevState);
    };
  const navItem = ["Home", "About", "Services", "Works", "Blogs", "Contact"];
  return (
    <div className='' >
        <button className='inline md:hidden absolute  ' onClick={handleDrawerToggle}>
            {mobileOpen ? <CloseIcon sx={{fontSize:40,marginLeft:'55px', color:'white'}}/>:<MenuIcon sx={{fontSize:40, marginLeft:'10px'}}/> }
        </button>
        <div className={`${mobileOpen ? 'inline-block' : 'hidden'} w-full md:w-80 min-h-screen px-4 md:px-6 bg-[#141313]`}>
  <header className="pt-10">
        <h3 className="text-2xl md:text-3xl font-bold text-white">SZN</h3>
      </header>
      
      <nav className="mt-20">
        <ul className="flex flex-col gap-3">
          {navItem.map((text, index) => (
            <li key={index}>
              <button className="text-white text-base md:text-lg hover:text-gray-400 transition-colors">
                {text}
              </button>
            </li>
          ))}
        </ul>
      </nav>
      
      <footer className="mt-20 pt-10">
        <div className="flex flex-col gap-4">
          <button>
            <img className="w-8 md:w-10" src="./Goggle.png" alt="Google" />
          </button>
          <button>
            <img className="w-8 md:w-10" src="./icon.png" alt="Icon" />
          </button>
          <button>
            <img className="w-8 md:w-10" src="./Instagram.png" alt="Instagram" />
          </button>
        </div>
        <p className="mt-6 text-white font-light text-xs md:text-sm">
          Copyright ©2024 Mohammad Sijan. All rights reserved.
        </p>
      </footer>
  </div>
    </div>
  );
}

export default Navbar;