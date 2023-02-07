import React from "react";
import { SlSocialLinkedin } from "react-icons/sl";
import { FiGithub } from "react-icons/fi";
import { RxTwitterLogo } from "react-icons/rx";
import { CgArrowBottomRightR } from "react-icons/cg";

function Landingpage() {
  return (
    <div className="relative px-8 h-screen">
      {/* //social icons (in sidebar) ----------------->  */}
      <div className="absolute top-[150px] left-[32px] flex flex-col gap-6">
        <SlSocialLinkedin className="text-xl text-blue-500 cursor-pointer" />
        <FiGithub className="text-xl text-blue-500 cursor-pointer" />
        <RxTwitterLogo className="text-xl text-blue-500 cursor-pointer" />
      </div>

      {/* picture section ------------------>  */}
      <div className="pt-[60px] pl-[100px]">
        <img
          src="./profile-picture.png"
          alt=""
          className="w-[280px] h-[280px]"
        />
      </div>

      {/* profile description -------------------------->  */}
      <div className="pt-[28px]">
        <h1 className="text-3xl font-medium ">Hi, I'am Sunil Shah</h1>
        <h3 className="text-gray-600 text-lg pt-1">
          Frontend React Js developer
        </h3>
        <p className="text-sm text-gray-700 pt-3">
          High level experience in web design and development knowledge,
          producing quality work.
        </p>

        <button className="mt-4 py-3 px-4 flex gap-3 items-center bg-blue-500 text-white rounded-lg">
          Contact me <CgArrowBottomRightR className="text-xl" />
        </button>
      </div>
    </div>
  );
}

export default Landingpage;
