import { useState } from "react";
import { listOfProjects } from "../constants";
import { twMerge } from "tailwind-merge";
import Title from "./Title";

function Projects() {
  const [hoveredItem, setHoveredItem] = useState("");
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = (title: string) => {
    setIsHovered(true);
    setHoveredItem(title);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setHoveredItem("");
  };

  return (
    <div id="projects" className="mt-[120px] flex flex-col gap-14 sm:gap-10">
      <Title title="Projects" link="#" />
      {listOfProjects.map(
        ({ title, image, description, rating, skills }, index) => (
          <section
            key={index}
            onMouseEnter={() => handleMouseEnter(title)}
            onMouseLeave={handleMouseLeave}
            className={twMerge(
              "group rounded sm:py-4 sm:px-5 cursor-pointer flex flex-col-reverse sm:flex-row gap-8 justify-center items-center transition-all duration-500 ease-in-out",
              isHovered
                ? hoveredItem === title
                  ? "sm:bg-gray-800"
                  : "sm:opacity-60"
                : "sm:opacity-100"
            )}
          >
            <div className="w-2/3 sm:w-[25%] self-start">
              <img
                src={image}
                alt={title}
                className="w-full h-auto rounded border-gray-600 border-2"
              />
            </div>
            <div className="flex flex-col gap-3 flex-1">
              <Title title={title} link="#" />
              <div>
                <p className="text-white opacity-[60%] text-sm">
                  {description}
                </p>
              </div>
              {rating && (
                <div className="text-gray-300 font-semibold text-sm">
                  {rating}
                </div>
              )}
              {skills && (
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, i) => (
                    <div key={i}>
                      <button className="bg-gray-700 text-[13px] text-primary font-semibold rounded-full px-3 py-1">
                        {skill.name}
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </section>
        )
      )}
      <a href="#" className="pl-4 text-gray-300 text-md font-semibold">
        {" "}
        View Full Project Archive
      </a>
    </div>
  );
}

export default Projects;
