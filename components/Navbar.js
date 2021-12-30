import React, { useState } from "react";
import Button from "./Button";
import Image from 'next/image'
import menuItems from "./MenuItems";
import DiscordLogo from '../images/DiscordLogo.png'
import { BeakerIcon, CogIcon, LockClosedIcon, MenuIcon, PlusIcon } from '@heroicons/react/solid'
import Link from "next/link";

const Navbar = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <header className=" navbar  flex justify-evenly text-black pt-10 pb-10 bg-white   z-20 w-full">
      <div className=" items-left justify-items-center w-32 invisible lg:visible">
       <Link href="/">
       <Image src={DiscordLogo} className=" scale-75 cursor-pointer" width={80} height={80}/>
       </Link>
      </div>
      <div className="menu-icon" onClick={handleClick}>
       {active ? <MenuIcon className="w-8 h-8"/> : <PlusIcon className="w-8 h-8  rotate-45"/>}
      </div>
      <ul className={active ? "nav-menu flex active items-center bg-white" : "nav-menu space-x-6  font-Krona font-light text-sm  "}>
        {menuItems.map((item, index) => {
          return (
            <li 
            className="  hover:bg-secondary_color hover:transform transition-all duration-500 ease-in-out p-4 rounded-xl"
            key={index}>
              <a href={item.Link} className={item.cName}>
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
      <div className=" invisible lg:visible bg-gray-100 p-3 font-Krona text-sm shadow-md rounded-xl">
        Login
      </div>

 
    </header>
  );
};

export default Navbar;
