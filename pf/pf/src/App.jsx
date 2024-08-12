import "./App.css";
import About from "./comp/About";
import Fotter from "./comp/Fotter";
import Headder from "./comp/Headder";
import MainBody from "./comp/MainBody";
import Projects from "./comp/Projects";
import Resume from "./Resume";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Headder />
        <Routes>
          <Route path="/" element={<MainBody />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          {/* <Route path="/certificates" element={<Cirt />} /> */}
          <Route path="/resume" element={<Resume />} />
        </Routes>

        {/* <About /> */}
        {/* <Projects /> */}
        {/* <Resume /> */}
        <Fotter />
      </Router>
    </>
  );
}

export default App;
