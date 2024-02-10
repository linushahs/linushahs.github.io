import React, { useState, useEffect } from "react";

interface ProjectSection {
  image: string;
  title: string;
  description: string;
  rating?: string;
  buttons?: { name: string }[];
}

function Projects(): JSX.Element {
  const projectSections: ProjectSection[] = [
    {
      image: "/course-card.png",
      title: "Build a Spotify Connected App",
      description:
        "Video course that teaches how to build a web app with the Spotify Web API. Topics covered include the principles of REST APIs, user mouth flows, Node, Express, React, Styled Components, and more.",
      rating: "599",
      buttons: [
        { name: "React" },
        { name: "Express" },
        { name: "Spotify API" },
        { name: "Heroku" },
      ],
    },
    {
      image: "/spotify-profile.png",
      title: "Spotify Profile",
      description:
        "We ap for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.",
      rating: "599",
      buttons: [
        { name: "Gatsby" },
        { name: "Styled Components" },
        { name: "Netlify" },
      ],
    },
    {
      image: "/halcyon.png",
      title: "Halcyon Theme",
      description:
        "Minimal dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more.",
      rating: "100k+ Installs",
    },
    {
      image: "/spotify-profile.png",
      title: "linushahs.com (v4)",
      description:
        "And old portfolio site built with Gatsby with 6k+ stars and 3k+ forks.",
      rating: "6,975",
      buttons: [
        { name: "Gatsby" },
        { name: "Styled Components" },
        { name: "Netlify" },
      ],
    },
  ];

  const [aspectRatio, setAspectRatio] = useState<number | null>(null);
  const [flexBasisWidth, setFlexBasisWidth] = useState<number>(0);

  useEffect(() => {
    const firstImage = new Image();
    firstImage.onload = () => {
      setAspectRatio(firstImage.width / firstImage.height);
    };
    firstImage.src = projectSections[0].image;

    const gap = 8; // Adjust according to your design
    const totalGapWidth = gap * (projectSections.length - 1);
    const containerWidth =
      document.getElementById("projects")?.offsetWidth ?? 0;
    const flexBasisWidth =
      (containerWidth - totalGapWidth) / projectSections.length; // Equal width for each item
    setFlexBasisWidth(flexBasisWidth);
  }, [projectSections]);

  return (
    <div id="projects" className="mt-[120px] flex flex-col gap-10">
      {projectSections.map((section, index) => (
        <section
          key={index}
          className="hover:bg-gray-800 rounded py-4 px-5 cursor-pointer flex gap-8 justify-center items-center"
        >
          <div className="w-[30%] self-start">
            {aspectRatio && (
              <img
                src={section.image}
                alt={section.title}
                className="w-full h-auto rounded border-gray-600 border-2"
                style={{ aspectRatio, width: flexBasisWidth }}
              />
            )}
          </div>
          <div
            className="flex flex-col gap-3 flex-1"
            style={{ width: `calc(70% - ${flexBasisWidth}px)` }}
          >
            <h1 className="text-white opacity-[85%] text-lg">
              {section.title}
            </h1>
            <div>
              <p className="text-white opacity-[60%] text-sm">
                {section.description}
              </p>
            </div>
            {section.rating && (
              <div className="text-gray-300 font-semibold text-sm">
                {section.rating}
              </div>
            )}
            {section.buttons && (
              <div className="flex flex-wrap gap-2">
                {section.buttons.map((button, i) => (
                  <div key={i}>
                    <button className="bg-gray-700 text-[13px] text-[#43A59C] font-semibold rounded-full px-3 py-1">
                      {button.name}
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      ))}
      <a href="#" className="pl-4 text-gray-300 text-md font-semibold">
        {" "}
        View Full Project Archive
      </a>
    </div>
  );
}

export default Projects;
