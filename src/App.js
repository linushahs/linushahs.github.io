import "./App.css";
import Landingpage from "./components/Landingpage";
import Navbar from "./components/Navbar";
import About from "./components/About";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* Landing page ------------------------>  */}
      <Landingpage />
      {/* About page ------------------------------>  */}
      <About />
    </div>
  );
}

export default App;
