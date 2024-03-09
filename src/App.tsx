import ExperienceCard from "./components/Experiences";
import About from "./components/About";
import Profile from "./components/Profile";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="container flex flex-col lg:flex-row">
      <div className="lg:w-[45%] pt-14 sm:pt-[100px]">
        <Profile />
      </div>
      <div className="flex-1 flex flex-col">
        <About />

        <ExperienceCard />

        <div>
          <Projects />
        </div>

        <footer className="[&>b]:text-white [&>b]:font-normal text-[15px] text-gray-400 py-10 sm:w-2/3 sm:px-5 opacity-70">
          Built with <b>React</b> and <b>Tailwind CSS</b>, deployed with{" "}
          <b>Vercel</b>. Inspiration from <b> Brittany Chiang</b>.
        </footer>
      </div>
    </div>
  );
}

export default App;
