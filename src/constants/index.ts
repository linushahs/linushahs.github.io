
interface ProjectSection {
    image: string;
    title: string;
    description: string;
    rating?: string;
    skills?: { name: string }[];
}

export const listOfProjects: ProjectSection[] = [
    {
        image: "/course-card.png",
        title: "Build a Spotify Connected App",
        description:
            "Video course that teaches how to build a web app with the Spotify Web API. Topics covered include the principles of REST APIs, user mouth flows, Node, Express, React, Styled Components, and more.",
        rating: "599",
        skills: [
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
        skills: [
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
        skills: [
            { name: "Gatsby" },
            { name: "Styled Components" },
            { name: "Netlify" },
        ],
    },
];


export const aboutContent = "As a frontend developer with over 1.5 years of experience, I specialize in crafting dynamic user interfaces that seamlessly integrate with backend systems. My proficiency lies in <span>API integration</span> and <span>state management</span>, ensuring smooth communication between the frontend and backend layers of applications.<br><br>I am skilled in a variety of technologies and frameworks, including <span>React</span>, <span>Next.js</span>, and <span>TypeScript</span>, which I leverage to build robust and scalable web applications.Additionally, I have expertise in state management solutions such as Redux and Recoil, enabling efficient handling of application data and state transitions.<br><br>    Furthermore, my experience extends to working with GraphQL APIs, facilitating flexible and efficient data fetching and manipulation.With a strong foundation in frontend development and a keen eye for detail, I am dedicated to delivering high - quality solutions that meet both user needs and business objectives."

interface ExperienceCard {
    date: string;
    title: string;
    link: string;
    description: string;
    technologies: string[];
    links?: string[]
}

export const experiences: ExperienceCard[] = [
    {
        date: "Oct 2023 - PRESENT",
        title: "Frontend Engineer - Kalodhunga Creations",
        link: "https://kalodhunga.com/",
        description:
            "I've led the development of notable websites like the company's site and Nexus Marketers' branding sites. Leveraging technologies like React and Next.js, I crafted visually appealing and functional web experiences. Additionally, I've mentored and guided two frontend interns, aiding in their skill development and team growth.",
        technologies: [
            "JavaScript",
            "TypeScript",
            "Tailwind CSS",
            "React",
            "Next.js",
            "Redux",
            "Sanity"
        ],
    },
    {
        date: "Jan 2023 - Aug 2023",
        title: "Jr. Frontend Developer - InternSathi",
        link: "https://internsathi.com/",
        description: "I developed responsive admin, user, and recruiter dashboards, prioritizing adaptability and visual appeal. I seamlessly integrated GraphQL APIs and utilized Recoil and tanstack@react-query for efficient data management, enhancing user experience and optimizing data handling processes for the company's platforms.",
        technologies: ["Typescript", "Next.js", "Tailwind CSS", "JavaScript", "Recoil", "GraphQL", "Figma"],
    },
    {
        date: "Apr 2022 - Aug 2022",
        title: "Web Developer - TechPatro",
        link: "https://www.facebook.com/TechPatro/",
        description: "I created seamless UI designs and developed functional web applications using popular React libraries like react-pdf and react-router. Additionally, I utilized WordPress to build dynamic websites, contributing to the company's digital presence and delivering high-quality solutions.",
        technologies: ["Javascript", "React", "Wordpress", "SCSS", "HTML & CSS"],
    },
];