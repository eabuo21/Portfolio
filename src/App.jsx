
import { Route, Routes } from "react-router-dom";

import "./App.css";
import Home from "../src/Pages/Home/Home";
import Projects from "../src/Pages/Projects/Projects";
import Contact from "../src/Pages/Contact/Contact";
import Resume from "../src/Pages/Resume/Resume";
import CaseStudy from "../src/Pages/CaseStudy/CaseStudies";
import Feat from "../src/Components/Footer/Footer";
import { ToastContainer } from "react-toastify";
import Head from "../src/Components/Nav/Head";

function App() {
  return (
    <div className="App">
      <section className="nav-section  sticky top-0 z-50">
        <Head />
      </section>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/case_study" element={<CaseStudy />} />
      </Routes>
      <ToastContainer />
      <section className="footer-section  bg-secondary_black h-[fixed] p-3">
        <Feat />
      </section>
    </div>
  );
}

export default App;
