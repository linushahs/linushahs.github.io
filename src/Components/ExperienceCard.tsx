import { useState } from "react";
import { twMerge } from "tailwind-merge";
import Title from "./Title";

const technologies = [
  [
    "JavaScript",
    "TypeScript",
    "HTML & CSS",
    "React",
    "Next.js",
    "React Native",
    "WordPress",
    "Contentful",
    "Node.js",
    "PHP",
  ],
  ["Ember SCSS", "SCSS", "JavaScript", "MusicKit.js"],
  ["Jekyll", "SCSS", "JavaScript", "WordPress"],
  ["Cordova", "Backbone", "JavaScript", "CSS"],
  ["HTML", "CSS", "JavaScript", "jQuery"],
];

const experiences = [
  {
    date: "2018-PRESENT",
    title: "Lead Engineer - Upstatement",
    role: ["Senior Engineer", "Engineer"],
    description:
      "Build, style, and ship high-quality websites, design systems, mobile apps, and digital experiences for various clients. Provide leadership within engineering department.",
    technologiesIndex: 0,
  },
  {
    date: "JULY-DEC 2017",
    title: "UI Engineer Co-op - Apple",
    description: "Developed and styled interactive web apps for Apple Music.",
    links: ["MusicKit.js", "9to5Mac", "The Verge"],
    technologiesIndex: 1,
  },
  // Add more experiences here...
];

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
    <div id="experience" className="mt-[120px] flex flex-col gap-12 ">
      <Title title="Experience" link="#" />
      {experiences.map(
        (
          { title, role, description, date, links, technologiesIndex },
          index
        ) => (
          <div
            key={index}
            onMouseEnter={() => handleMouseEnter(title)}
            onMouseLeave={handleMouseLeave}
            className={twMerge(
              "sm:hover:bg-gray-800 group transition-all rounded sm:py-4 sm:px-5 sm:cursor-pointer flex flex-col gap-2 sm:flex-row sm:gap-8",
              isHovered
                ? hoveredItem === title
                  ? "sm:bg-gray-800"
                  : "sm:opacity-60"
                : "sm:opacity-100"
            )}
          >
            <div className="text-gray-500 font-semibold text-sm text-nowrap pt-1">
              {date}
            </div>
            <div>
              <div className="flex flex-col gap-4">
                <Title title={title} link="#" />
                <div>
                  <p className="text-white opacity-[60%] text-sm">
                    {description}
                  </p>
                </div>
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
                  {technologies[technologiesIndex].map((tech, i) => (
                    <div key={i}>
                      <button className="bg-gray-700 text-[13px] text-[#43A59C] font-semibold rounded-full px-3 py-1">
                        {tech}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )
      )}
      <Title title="View full resume" link="#" />
    </div>
  );
}

export default ExperienceCard;
