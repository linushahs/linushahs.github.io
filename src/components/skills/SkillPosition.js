import { useState } from "react";
import { HiOutlineChevronUp, HiOutlineChevronDown } from "react-icons/hi2";

function SkillPosition({ skillDetails, handleSkillSet, skillNo }) {
  const { title, experience, active, skills } = skillDetails;

  return (
    <div className="w-full lg:w-[50%] pr-4">
      <div className="flex items-center justify-between">
        <div className="flex gap-3 items-center">
          <img src="./curly-bracket.png" alt="" className="w-12 h-12" />
          {/* middle section ----->  */}
          <div>
            <h2>{title}</h2>
            <p className="text-sm text-gray-500">{experience}</p>
          </div>
        </div>
        {active ? (
          <HiOutlineChevronUp className="cursor-pointer" />
        ) : (
          <HiOutlineChevronDown
            onClick={() => handleSkillSet(skillNo)}
            className="cursor-pointer"
          />
        )}
      </div>

      {/* dropdown container ------------------>  */}
      <ul className={`${active ? "block" : "hidden"} pl-[60px] pt-4`}>
        {skills.map((skill, id) => (
          <li className="mb-4" key={id}>
            <div className="flex justify-between">
              <h3>{skill.skillTitle}</h3>
              <span className="text-gray-500">{skill.per}</span>
            </div>
            <div className="mt-1.5 h-2 w-full relative -z-10 rounded-full bg-gray-100">
              <span
                className={`w-[${skill.per}] block absolute h-2 rounded-full top-0 left-0 bg-blue-500`}
              ></span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SkillPosition;
