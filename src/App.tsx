import "./App.css";
import ExperienceCard from "./components/ExperienceCard";
import About from "./components/About";
import Profile from "./components/Profile";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="container flex pt-[110px]">
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
