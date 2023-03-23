import React from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import Image from "next/image";

import classNames from "classnames";
type Props = {
  onMenuButtonClick(): void;
};
const Navbar = (props: Props) => {
  return (
    <nav   className={classNames({
      "bg-white text-zinc-500": true, // colors
      "flex items-center": true, // layout
      "w-full fixed z-10 px-4 shadow-sm h-16": true, //positioning & styling
    })}>
    <div className="container flex flex-wrap items-center justify-between mx-auto">
    
        <span className="self-center text-xl font-semibold whitespace-nowrap hidden md:block dark:text-black">
          Protocol
        </span>
    
      <div className="flex items-center md:order-2 hidden md:block">
        <div className="flex flex-row">
        <button
          type="button"
          className=" flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
          id="user-menu-button"
          aria-expanded="false"
          data-dropdown-toggle="user-dropdown"
          data-dropdown-placement="bottom"
        >
          <span className="sr-only">Open user menu</span>
          <Image
            className="w-8 h-8 rounded-full"
            src={require('./cat.jpeg')}
            alt="user photo"
          />
        </button>


        <button
          type="button"
          className=" flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600 ml-3"
          id="user-menu-button"
          aria-expanded="false"
          data-dropdown-toggle="user-dropdown"
          data-dropdown-placement="bottom"
        >
          <span className="sr-only">Open user menu</span>
          <Image
            className="w-8 h-8 rounded-full bg-white"
            src={require('./github-mark.png')}
            alt="user photo"
          />
        </button>


        </div>
        


        
        {/* Dropdown menu */}
        <div
          className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
          id="user-dropdown"
        >
          <div className="px-4 py-3">
            <span className="block text-sm text-gray-900 dark:text-white">
              Bonnie Green
            </span>
            <span className="block text-sm font-medium text-gray-500 truncate dark:text-gray-400">
              name@flowbite.com
            </span>
          </div>
          <ul className="py-2" aria-labelledby="user-menu-button">
            <li>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
              >
                Account
              </a>
            </li>
         
            <li>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
              >
                Sign out
              </a>
            </li>
          </ul>
        </div>
       {/* open menu */}
      </div>
        <input placeholder="Search..." className="w-11/12 xl:w-4/12 border border-gray rounded-md p-2 justify-center align-middle"/>
    </div>

    <button className="md:hidden" onClick={props.onMenuButtonClick}>
<Bars3Icon className="h-6 w-6" />
</button> 
  </nav>
  );
};

export default Navbar;
