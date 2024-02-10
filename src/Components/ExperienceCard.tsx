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
  return (
    <div id="experience" className="mt-[120px] flex flex-col gap-4">
      {experiences.map((experience, index) => (
        <div
          key={index}
          className="hover:bg-gray-800 rounded py-4 px-5 cursor-pointer flex gap-8"
        >
          <div className="text-gray-500 font-semibold text-sm text-nowrap pt-1">
            {experience.date}
          </div>
          <div>
            <div className="flex flex-col gap-4">
              <div>
                <h1 className="text-white opacity-[85%] text-lg">
                  {experience.title}
                </h1>
                {experience.role &&
                  experience.role.map((role, i) => (
                    <p key={i} className="text-white opacity-[40%] text-md">
                      {role}
                    </p>
                  ))}
              </div>
              <div>
                <p className="text-white opacity-[60%] text-sm">
                  {experience.description}
                </p>
              </div>
              {experience.links && (
                <div className="flex gap-4 text-[14.5px] text-white opacity-[75%]">
                  {experience.links.map((link, i) => (
                    <a key={i} href="#" className="hover:text-[#43A59C]">
                      {link}
                    </a>
                  ))}
                </div>
              )}
              <div className="flex flex-wrap gap-2">
                {technologies[experience.technologiesIndex].map((tech, i) => (
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
      ))}
      <a href="#" className="pl-4 pt-4 text-gray-300 font-semibold">
        {" "}
        View Full Resume
      </a>
    </div>
  );
}

export default ExperienceCard;
