import React from "react";
import { HiOutlineCloudDownload } from "react-icons/hi";

function About() {
  return (
    <div className="px-8 py-8 h-screen flex flex-col items-center">
      <h1 className="text-2xl font-medium">About Me</h1>
      <h3 className="text-gray-600 mt-1 mb-3">My Introduction</h3>

      <img src="" alt="" />

      <p className="text-center text-gray-700">
        Web developer, with extensive knowledge and years of experience, working
        in web technologies and UI / UX design, delivering quality work.
      </p>

      <div className="flex gap-4 w-[80%] justify-center pt-8">
        <div className="flex flex-col items-center">
          <h2 className="text-2xl font-medium">08+</h2>
          <h3 className="text-sm text-gray-600 text-center">
            Years of experience
          </h3>
        </div>
        <div className="flex flex-col items-center">
          <h2 className="text-2xl font-medium">20+</h2>
          <h3 className="text-sm text-gray-600 text-center">
            Completed Projects
          </h3>
        </div>
        <div className="flex flex-col items-center">
          <h2 className="text-2xl font-medium">05+</h2>
          <h3 className="text-sm text-gray-600 text-center">
            Companies worked
          </h3>
        </div>
      </div>

      {/* download cv -------------->  */}
      <button className="py-3 px-4 bg-blue-500 text-white rounded-lg mt-8 flex items-center gap-2">
        Download CV <HiOutlineCloudDownload className="text-xl" />
      </button>
    </div>
  );
}

export default About;
