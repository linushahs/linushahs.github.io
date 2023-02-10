import React from "react";
import { SlSocialLinkedin } from "react-icons/sl";
import { FiGithub } from "react-icons/fi";
import { RxTwitterLogo } from "react-icons/rx";
import { CgArrowBottomRightR } from "react-icons/cg";

function Landingpage() {
  return (
    <div className="header-container relative px-8 h-screen pt-[120px]">
      {/* //social icons (in sidebar) ----------------->  */}
      <div className="absolute top-[260px] left-[32px] flex flex-col gap-6">
        <SlSocialLinkedin className="text-xl text-blue-500 cursor-pointer" />
        <FiGithub className="text-xl text-blue-500 cursor-pointer" />
        <RxTwitterLogo className="text-xl text-blue-500 cursor-pointer" />
      </div>

      <div className="container flex flex-col-reverse  sm:flex-row">
        {/* profile description -------------------------->  */}
        <div className="pt-[28px] sm:pl-[40px] sm:pt-[100px]">
          <h1 className="text-3xl lg:text-[48px] font-bold ">
            Hi, I'm Sunil Shah
          </h1>
          <h3 className="text-gray-700 font-medium text-lg lg:text-2xl pt-3">
            Frontend Developer
          </h3>
          <p className="text-sm lg:text-lg text-gray-500 pt-5">
            High level experience in web design and development knowledge,
            producing quality work.
          </p>

          <button className="mt-8 py-3 px-4 flex gap-3 items-center bg-blue-500 text-white rounded-lg">
            Contact me <CgArrowBottomRightR className="text-xl" />
          </button>
        </div>

        {/* picture section ------------------>  */}
        <div className="pt-[60px] pl-[90px] lg:pt-[55px] lg:pr-[10px] sm:pl-0 sm:pt-[80px]">
          <img
            src="./profile-picture.png"
            alt=""
            className="w-[280px] h-[280px] sm:w-[240px] sm:h-[200px] lg:w-[380px] lg:h-[280px]"
          />
        </div>
      </div>
    </div>
  );
}

export default Landingpage;
