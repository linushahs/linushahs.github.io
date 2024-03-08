import { useState } from "react";
import { listOfProjects } from "../constants";
import { twMerge } from "tailwind-merge";

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
    <div id="projects" className="mt-[120px] flex flex-col gap-10">
      {listOfProjects.map(
        ({ title, image, description, rating, skills }, index) => (
          <section
            key={index}
            onMouseEnter={() => handleMouseEnter(title)}
            onMouseLeave={handleMouseLeave}
            className={twMerge(
              "group rounded py-4 px-5 cursor-pointer flex gap-8 justify-center items-center transition-all duration-500 ease-in-out",
              isHovered
                ? hoveredItem === title
                  ? "bg-gray-800"
                  : "opacity-60"
                : "opacity-100"
            )}
          >
            <div className="w-[25%] self-start">
              <img
                src={image}
                alt={title}
                className="w-full h-auto rounded border-gray-600 border-2"
              />
            </div>
            <div className="flex flex-col gap-3 flex-1">
              <div className="flex gap-2 relative">
                <h1 className="group-hover:text-primary transition-colors duration-150 ease-in text-white opacity-[85%] text-lg">
                  {title}
                </h1>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="text-white w-[14px] top-2 h-[14px] relative group-hover:text-primary transition-all group-hover:translate-x-1 group-hover:-translate-y-1"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                    />
                  </svg>
                </span>
              </div>
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
