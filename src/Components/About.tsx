import { aboutContent } from "../constants";

function About() {
  return (
    <div id="about" className="h-full flex flex-col gap-4 justify-center">
      <h3 className="lg:hidden uppercase font-semibold text-[15px] tracking-wider text-white">
        About
      </h3>

      <div className="text-gray-400 flex flex-col gap-5 ">
        <p
          className="text-base [&>b]:text-white"
          dangerouslySetInnerHTML={{ __html: aboutContent }}
        ></p>
      </div>
    </div>
  );
}

export default About;
