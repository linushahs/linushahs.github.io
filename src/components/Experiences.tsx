import { useState } from "react";
import { twMerge } from "tailwind-merge";
import Title from "./Title";
import { experiences } from "../constants";

function ExperienceCard() {
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
    <div id="experience" className="pt-[80px] lg:pt-[100px] ">
      <h3 className="section-title mb-6">Experience</h3>

      <div className="flex flex-col gap-10 sm:gap-6 ">
        {experiences.map(
          ({ title, link, description, date, technologies, links }, index) => (
            <div
              key={index}
              onMouseEnter={() => handleMouseEnter(title)}
              onMouseLeave={handleMouseLeave}
              className={twMerge(
                " group transition-all duration-500 ease-in-out rounded-md sm:p-5 sm:cursor-pointer flex flex-col gap-2 sm:flex-row sm:gap-8",
                isHovered
                  ? hoveredItem === title
                    ? "sm:bg-gray-800/50"
                    : "sm:opacity-40"
                  : "sm:opacity-100"
              )}
            >
              <div className="w-[23%] text-gray-500 font-semibold uppercase text-sm text-nowrap pt-1">
                {date}
              </div>

              <div className="flex-1 flex flex-col gap-4 pb-2">
                <Title title={title} link={link} />
                <p className="text-white opacity-[60%] font-normal text-sm tracking-wide">
                  {description}
                </p>
                {links && (
                  <div className="flex gap-4 text-[14.5px] text-white opacity-[75%]">
                    {links.map((link, i) => (
                      <a key={i} href="#" className="hover:text-[#43A59C]">
                        {link}
                      </a>
                    ))}
                  </div>
                )}
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech, i) => (
                    <div key={i}>
                      <button className="skill-btn">{tech}</button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )
        )}
      </div>

      <Title
        title="View full resume"
        link="#"
        className="pt-8 lg:px-5 lg:pt-7"
      />
    </div>
  );
}

export default ExperienceCard;
