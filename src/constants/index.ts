
interface ProjectSection {
    image: string;
    title: string;
    link: string;
    description: string;
    rating?: string;
    skills?: { name: string }[];
}

export const listOfProjects: ProjectSection[] = [
    {
        image: "/moviestream.png",
        title: "MovieStream Info App",
        link: "https://moviestreaminfo.vercel.app/",
        description:
            "A web-based app offers comprehensive browsing and search functionalities for movies and series. Users can easily add or remove items from favorites for quick access. Integration with Google accounts allows for personalized experiences and cross-device synchronization of preferences.",
        skills: [
            { name: "React" },
            { name: "Typescript" },
            { name: "Tailwind CSS" },
            { name: "Firebase" },
            { name: "React Router" },
            { name: "Recoil" },
            { name: "shadcn ui" },
            { name: "Swiper" },
        ],
    },
    {
        image: "/nexus.png",
        title: "Nexus Marketers' Website",
        link: "https://nexus-marketers.vercel.app/",
        description:
            "Nexus Marketers: Your digital growth partner. We craft compelling websites, employ innovative strategies, and master advanced SEO for elevated brand visibility and business success. Join us to amplify your online presence!",
        skills: [
            { name: "Nextjs" },
            { name: "Tailwind CSS" },
            { name: "GSAP" },
            { name: "Sanity" },
            { name: "Framer Motion" },
            { name: "Typescript" },
            { name: "Swiper" },
        ],
    },
    {
        image: "/kalodhunga.png",
        title: "Kalodhunga Creations' Website",
        link: "https://www.kalodhunga.com/",
        description:
            "Kalodhunga Creation is a company dedicated to creating cutting-edge software solutions, emphasizing innovation and accessibility",
        skills: [
            { name: "Nextjs" },
            { name: "Tailwind CSS" },
            { name: "GSAP" },
            { name: "Sanity" },
            { name: "Framer Motion" },
            { name: "Typescript" },
            { name: "Swiper" },
        ]
    },
    {
        image: "/mstodo.png",
        title: "Microsoft Todo Clone (In Progress 🚧)",
        link: "https://microsoft-todo-clone-sepia.vercel.app/",
        description:
            "A React-based clone of Microsoft To-Do, providing a user-friendly interface for task management with features like list organization, due dates, and Microsoft account integration.",
        skills: [
            { name: "React" },
            { name: "Tailwind CSS" },
            { name: "Typescript" },
            { name: "Redux Toolkit" },
            { name: "Firebase" },
            { name: "Framer Motion" },
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
        date: "Mar 2024 - Present",
        title: "Mid-level React Developer - Shotcoder Tech",
        link: "https://www.shotcoder.com/",
        description: "ShotCoder Tech is a tech company that was established in 2019. It is a young and dynamic organization dedicated to developing innovative solutions for businesses and providing reliable hosting solutions to its clients.",
        technologies: [
            "Typescript",
            "Tailwind CSS",
            "Nextjs",
            "React",
            "SWR",
            "Zustand",
            "Tanstack"
        ]
    },
    {
        date: "Oct 2023 - Mar 2024",
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