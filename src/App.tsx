import ExperienceCard from "./components/ExperienceCard";
import About from "./components/About";
import Profile from "./components/Profile";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="container flex flex-col lg:flex-row pt-14 sm:pt-[110px]">
      <div className="lg:w-[45%]">
        <Profile />
      </div>
      <div className="flex-1 flex flex-col">
        <About />

        <ExperienceCard />

        <div>
          <Projects />
        </div>
      </div>
    </div>
  );
}

export default App;
