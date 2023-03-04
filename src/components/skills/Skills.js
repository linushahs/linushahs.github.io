import { useState } from "react";
import SkillPosition from "./SkillPosition";

function Skills() {
  const [listOfSkills, setListOfSkills] = useState([
    {
      title: "Frontend developer",
      experience: "More than 2 years",
      active: true,
      skills: [
        { skillTitle: "HTML/CSS", per: "90%" },
        {
          skillTitle: "Javascript",
          per: "70%",
        },
        {
          skillTitle: "React Js",
          per: "60%",
        },
        {
          skillTitle: "Next Js",
          per: "50%",
        },
      ],
    },
  ]);

  const handleSkillSet = (id) => {
    const refArr = [...listOfSkills];

    refArr.map((obj) => {
      obj.active = false;
      return { ...obj };
    });

    console.log(refArr);
    refArr[id].active = true;

    setListOfSkills(refArr);
  };

  return (
    <div className="container px-8 py-[150px] flex flex-col items-center">
      <h1 className="text-2xl lg:text-[34px] font-medium">Skills</h1>
      <h3 className="text-gray-600 mt-1 mb-3">My technical level</h3>

      <div className="w-full pt-6 flex justify-center  mt-4">
        {listOfSkills.map((skillset, id) => (
          <SkillPosition
            key={id}
            skillDetails={skillset}
            skillNo={id}
            handleSkillSet={handleSkillSet}
          />
        ))}
      </div>
    </div>
  );
}

export default Skills;
