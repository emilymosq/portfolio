import "./App.css";
import Navbar from "./components/navbar";
import Home from "./components/home";
import About from "./components/about";
import Skills from "./components/skills";
import Portfolio from "./components/portfolio";
import Contact from "./components/contact";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;
