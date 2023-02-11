import "./App.css";
import Landingpage from "./components/Landingpage";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/skills/Skills";

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

      {/* ---Made few changes for contribution ----- */}
      {/* ----Learning so many stuffs ----------------  */}
      {/* --Learned graphql, routing and other basic stuffs --------------->  */}
    </div>
  );
}

export default App;
