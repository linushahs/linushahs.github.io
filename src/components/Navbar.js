import React from "react";
import { HiOutlineMoon } from "react-icons/hi";
import { GrAppsRounded } from "react-icons/gr";
import { RiAppsLine } from "react-icons/ri";

function Navbar() {
  return (
    <div className="z-20">
      {/* mobile layout size -------------------->  */}
      {/* ------------------------------------------------ > */}
      <div className="lg:hidden fixed bottom-0 w-full py-4 px-8 border-t-[1px] border-gray-200 bg-white flex items-center justify-between">
        <h3 className="font-medium">Linushahs</h3>

        {/* Navbar section goes here ------------------->  */}
        <div className="flex gap-3 items-center">
          <HiOutlineMoon className="cursor-pointer text-2xl hover:text-blue-500" />
          <RiAppsLine className="cursor-pointer text-2xl hover:text-blue-500" />
        </div>
      </div>

      {/* large screen layout size --------------------->  */}
      {/* ------------------------------------------------>  */}
      <header className="hidden lg:flex h-[68px] items-center shadow py-4 ">
        <nav className="header-container px-8 flex items-center justify-between">
          <h3 className="text-[#333] font-medium">Linushahs</h3>
          <ul className="flex gap-8">
            {["Home", "About", "Skills", "Projects", "Contact me"].map(
              (menu) => (
                <li className="hover:text-blue-500 text-[#333] cursor-pointer font-medium">
                  {menu}
                </li>
              )
            )}
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
