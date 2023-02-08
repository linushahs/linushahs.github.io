import React from "react";
import { HiOutlineCloudDownload } from "react-icons/hi";

function About() {
  return (
    <div className="container px-8 pt-14 sm:py-8 mt-6 h-screen flex flex-col items-center">
      <h1 className="text-2xl lg:text-[34px] font-medium">About Me</h1>
      <h3 className="text-gray-600 mt-1 mb-3">My Introduction</h3>

      <main className="flex flex-col sm:flex-row gap-10 items-center mt-8">
        <img
          src="./about.jpg"
          alt="My picture"
          className="w-[200px] h-[160px] rounded-lg lg:w-[300px] lg:h-[200px]"
        />
        <div className="flex flex-col items-center sm:items-start">
          <p className=" text-gray-700 text-center sm:text-left">
            Web developer, with extensive knowledge and years of experience,
            working in web technologies and UI / UX design, delivering quality
            work.
          </p>

          <div className="w-full flex gap-4 justify-between pt-8">
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
      </main>
    </div>
  );
}

export default About;
