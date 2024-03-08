
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


export const aboutContent = "Back in 2012, I decided to try my hand at creating custom Tumblr        themes and tumbled head first into the rabbit hole of coding and web development.Fast - <b>forward</b> to today, and I’ve had the privilege of building software for an advertising agency, a start - up, a student - led         design studio., and a huge cooperation.<br><br>       My main focus these days is building products and leading projects for          our clients at Upstatement.I most enjoy building software in the          sweet spot where design and engineering meet — things that look good          but are <b>also built</b> well under the hood.In my free time, I've also          released an online video course that covers everything you need to          know to build a web app with the Spotify API.<br> <br>       When I’m not at the computer, I’m usually rock climbing, reading,    hanging out with my wife and two cats, or running around Hyrule          searching for Korok seeds Korok seeds."