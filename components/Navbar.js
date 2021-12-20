import React, { useState } from "react";
import Button from "./Button";
import Image from 'next/image'
import menuItems from "./MenuItems";
import DiscordLogo from '../images/DiscordLogo.png'
import { BeakerIcon, CogIcon, MenuIcon } from '@heroicons/react/solid'

const Navbar = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <header className=" navbar  flex justify-evenly text-black pt-10 pb-10 bg-white fixed  z-20 w-full">
      <div className=" items-left justify-items-center w-32 invisible lg:visible">
       <Image src={DiscordLogo} className=" scale-75" width={80} height={80}/>
      </div>
      <div className="menu-icon" onClick={handleClick}>
       {active ? <MenuIcon className="w-8 h-8"/> : <BeakerIcon className="w-8 h-8"/>}
      </div>
      <ul className={active ? "nav-menu flex active items-center" : "nav-menu space-x-4 font-Krona font-light text-sm "}>
        {menuItems.map((item, index) => {
          return (
            <li key={index}>
              <a href={item.url} className={item.cName}>
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
      <div className=" invisible lg:visible bg-gray-100 p-3 font-Krona text-sm shadow-md rounded-xl bg-gradient-to-l from-orange-300">
        Login
      </div>

 
    </header>
  );
};

export default Navbar;
