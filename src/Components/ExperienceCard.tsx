import { useState } from "react";
import { twMerge } from "tailwind-merge";

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
    <div id="experience" className="mt-[120px] flex flex-col gap-4 ">
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
              "hover:bg-gray-800 group transition-all rounded py-4 px-5 cursor-pointer flex gap-8",
              isHovered
                ? hoveredItem === title
                  ? "bg-gray-800"
                  : "opacity-60"
                : "opacity-100"
            )}
          >
            <div className="text-gray-500 font-semibold text-sm text-nowrap pt-1">
              {date}
            </div>
            <div>
              <div className="flex flex-col gap-4">
                <div>
                  <div className="flex gap-2 relative">
                    <h1 className="text-white opacity-[85%] transition-all group-hover:text-primary text-lg">
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
                  {role &&
                    role.map((role, i) => (
                      <p key={i} className="text-white opacity-[40%] text-md">
                        {role}
                      </p>
                    ))}
                </div>
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
      <a href="#" className="pl-4 pt-4 text-gray-300 font-semibold">
        {" "}
        View Full Resume
      </a>
    </div>
  );
}

export default ExperienceCard;
