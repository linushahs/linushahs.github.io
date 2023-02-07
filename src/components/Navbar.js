import React from "react";
import { HiOutlineMoon } from "react-icons/hi";
import { GrAppsRounded } from "react-icons/gr";
import { RiAppsLine } from "react-icons/ri";

function Navbar() {
  return (
    <div>
      {/* mobile layout size -------------------->  */}
      <div className="fixed bottom-0 w-full py-4 px-8 border-t-[1px] border-gray-200 bg-white flex items-center justify-between">
        <h3 className="font-medium">Linushahs</h3>
        <div className="flex gap-3 items-center">
          <HiOutlineMoon className="cursor-pointer text-2xl hover:text-blue-500" />
          <RiAppsLine className="cursor-pointer text-2xl hover:text-blue-500" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
