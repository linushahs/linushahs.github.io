import React, { useState } from "react";
import { HiAcademicCap } from "react-icons/hi";
import { IoBriefcaseOutline } from "react-icons/io5";
import { FaCalendarAlt } from "react-icons/fa";

export default function Qualification() {
  const [selectedType, setSelectedType] = useState("education");

  const [education, setEducation] = useState([
    {
      field: "TSEE-Computer Stream",
      institute: "Pokhariya School",
      date: "2017-2021",
    },
    {
      field: "Bachelor in IT",
      institute: "ISMT College",
      date: "2022 (currently reading)",
    },
  ]);

  const [work, setWork] = useState([
    {
      field: "HTML/CSS Intern",
      institute: "Binwary",
      date: "2019-2020",
    },
    {
      field: "Frontend Intern",
      institute: "Binwary",
      date: "2021-2022",
    },
    {
      field: "Frontend Developer",
      institute: "Internsathi",
      date: "2023 (currently working)",
    },
  ]);
  return (
    <div className="container px-8  flex flex-col items-center">
      <h1 className="text-2xl lg:text-[34px] font-medium">Qualification</h1>
      <h3 className="text-gray-600 mt-1 mb-8 ">My Personal Journey</h3>

      {/* header ---------------->  */}
      <div className="flex  gap-6 mb-12 ">
        <span
          onClick={() => setSelectedType("education")}
          className={`${
            selectedType === "education" ? "text-blue-500" : " text-gray-600"
          } flex gap-2 items-center cursor-pointer font-medium text-xl hover:text-blue-500`}
        >
          <HiAcademicCap className="text-2xl " /> Education
        </span>
        <span
          onClick={() => setSelectedType("work")}
          className={`${
            selectedType === "work" ? "text-blue-500" : " text-gray-600"
          } flex gap-2 items-center cursor-pointer font-medium text-xl hover:text-blue-500`}
        >
          <IoBriefcaseOutline className="" /> Work
        </span>
      </div>

      {/* main section -------------------->  */}
      {selectedType === "education" ? (
        <div className=" flex mb-8 relative">
          <div className="pr-14 border-r-[1px] border-blue-500">
            <div>
              <h1 className="text-lg">TSEE-Computer Stream</h1>
              <p className="text-gray-600">Pokhariya School</p>
              <p className="flex items-center gap-2 text-gray-400 mt-2">
                <FaCalendarAlt /> 2018-2021
              </p>
            </div>
          </div>
          {/* circle element --------------->  */}
          <span className="w-4 h-4 absolute left-[47.8%] rounded-full bg-blue-500"></span>
          <span className="w-4 h-4 absolute top-[80px] left-[47.8%] rounded-full bg-blue-500"></span>
          <span className="w-4 h-4 absolute top-[160px] left-[47.8%] rounded-full bg-blue-500"></span>
          <div className="pl-14 pt-[80px]">
            <div>
              <h1 className="text-lg">Bachelor in IT</h1>

              <p className="text-gray-600">ISMT College</p>
              <p className="flex items-center gap-2 text-gray-400 mt-2">
                <FaCalendarAlt /> 2022 (currently reading)
              </p>
            </div>
          </div>
        </div>
      ) : (
        //   work experience section ---------------------->
        <div className=" flex mb-8 relative">
          {/* left section ------------------->  */}
          {/* <----------------------------------------> */}
          <div className="pr-14 flex flex-col border-r-[1px] border-blue-500">
            <div>
              <h1 className="text-lg">HTML/CSS Intern</h1>
              <p className="text-gray-600">Binwary</p>
              <p className="flex items-center gap-2 text-gray-400 mt-2">
                <FaCalendarAlt /> 2019-2020
              </p>
            </div>
            <div className="pt-[80px]">
              <h1 className="text-lg">Frontend Developer</h1>
              <p className="text-gray-600">Internsathi</p>
              <p className="flex items-center gap-2 text-gray-400 mt-2">
                <FaCalendarAlt /> 2023 (currently working)
              </p>
            </div>
          </div>

          {/* circle element --------------->  */}
          <span className="w-4 h-4 absolute left-[50.8%] rounded-full bg-blue-500"></span>
          <span className="w-4 h-4 absolute top-[80px] left-[50.8%] rounded-full bg-blue-500"></span>
          <span className="w-4 h-4 absolute top-[160px] left-[50.8%] rounded-full bg-blue-500"></span>
          <span className="w-4 h-4 absolute top-[240px] left-[50.8%] rounded-full bg-blue-500"></span>

          {/* right section ------------------->  */}
          {/* <----------------------------------------> */}
          <div className="px-14 pt-[80px]">
            <div>
              <h1 className="text-lg">Frontend Intern</h1>

              <p className="text-gray-600">Binwary</p>
              <p className="flex items-center gap-2 text-gray-400 mt-2">
                <FaCalendarAlt />
                2021-2022
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
