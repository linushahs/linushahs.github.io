import "./App.css";
import ExperienceCard from "./Components/ExperienceCard";
import About from "./Components/About";
import Profile from "./Components/Profile";
import Projects from "./Components/Projects";

function App() {
  return (
    <div className="container h-screen flex basis-[50%]">
      <div className="w-full">
        <Profile />
      </div>
      <div className="w-full flex flex-col">
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
