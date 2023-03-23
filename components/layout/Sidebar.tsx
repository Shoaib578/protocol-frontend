import React, { useRef } from "react";
import classNames from "classnames";
import Link from "next/link";
import Image from "next/image";
import { defaultNavItems } from "./defaultNavItems";
import { useOnClickOutside } from "usehooks-ts";
// define a NavItem prop
export type NavItem = {
  label: string;
  href: string;
  icon: React.ReactNode;
};
// add NavItem prop to component prop
type Props = {
  open: boolean;
  navItems?: NavItem[];
  setOpen(open: boolean): void;
};
const Sidebar = ({ open, navItems = defaultNavItems, setOpen }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  useOnClickOutside(ref, (e) => {
    setOpen(false);
  });
  return (
    <div
      className={classNames({
        "flex flex-col justify-between": true, // layout
        "bg-[#c1c5c4] text-zinc-50": true, // colors
        "md:w-full md:sticky md:top-16 md:z-0 top-0 z-20 fixed": true, // positioning
        "md:h-[calc(100vh_-_64px)] h-full w-[300px]": true, // for height and width
        "transition-transform .3s ease-in-out md:-translate-x-0": true, //animations
        "-translate-x-full ": !open, //hide sidebar to the left when closed
      })}
      ref={ref}
    >
      <nav className="md:sticky top-0 md:top-16">
        {/* nav items */}
        <ul className="py-2 flex flex-col gap-2">
             {/* account  */}
      <div className="border-t border-t-[#c1c5c4]-800 p-4">
        <div className="flex gap-4 items-center">
          <Image
            src={require('./cat.jpeg')}
            height={36}
            width={36}
            alt="profile image"
            className="rounded-full"
          />
          <div className="flex flex-col ">
            <span className="text-black my-0">Tom Cook</span>
           
          </div>
        </div>
      </div>
          {navItems.map((item, index) => {
            return (
              <Link key={index} href={item.href}>
                <li
                  className={classNames({
                    "text-black hover:bg-white": true, //colors
                    "flex gap-4 items-center ": true, //layout
                    "transition-colors duration-300": true, //animation
                    "rounded-md p-2 mx-2": true, //self style
                  })}
                >
                  {item.icon} {item.label}
                </li>
              </Link>
            );
          })}
        </ul>
      </nav>
   
    </div>
  );
};
export default Sidebar;
