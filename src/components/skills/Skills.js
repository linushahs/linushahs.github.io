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
    {
      title: "Backend developer",
      experience: "Less than 1 year",
      active: false,
      skills: [
        { skillTitle: "Node Js", per: "30%" },
        {
          skillTitle: "Firebase",
          per: "30%",
        },
        {
          skillTitle: "GraphQL",
          per: "30%",
        },
        {
          skillTitle: "Mongo db",
          per: "20%",
        },
      ],
    },
    {
      title: "Designer",
      experience: "1 year",
      active: false,
      skills: [
        { skillTitle: "Figma", per: "60%" },
        {
          skillTitle: "Photoshop",
          per: "40%",
        },
        {
          skillTitle: "Adobe Xd",
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
    <div className="px-8 py-8 h-screen flex flex-col items-center">
      <h1 className="text-2xl font-medium">Skills</h1>
      <h3 className="text-gray-600 mt-1 mb-3">My technical level</h3>

      <div className="w-full flex flex-col my-4">
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
