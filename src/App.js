import "./App.css";
import Landingpage from "./components/Landingpage";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/skills/Skills";
import Qualification from "./components/Qualification";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* Landing page ------------------------>  */}
      <Landingpage />
      {/* About page ------------------------------>  */}
      <About />
      {/* SKills page -----------------------------> */}
      <Skills />
      {/* Qualification page ----------------------------->  */}
      <Qualification />
    </div>
  );
}

export default App;
