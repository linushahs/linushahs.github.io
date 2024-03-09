import { aboutContent } from "../constants";

function About() {
  return (
    <div
      id="about"
      className="h-full flex flex-col gap-4 justify-center pt-8 lg:pt-[110px]"
    >
      <h3 className="section-title">About</h3>

      <div className="text-gray-400 flex flex-col gap-5 ">
        <p
          className="text-base [&>span]:text-white lg:px-5"
          dangerouslySetInnerHTML={{ __html: aboutContent }}
        ></p>
      </div>
    </div>
  );
}

export default About;
