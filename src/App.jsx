import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from '../src/Pages/Home/Home';
import Projects from "../src/Pages/Projects/Projects";
import Contact from "../src/Pages/Contact/Contact";
import Resume from '../src/Pages/Resume/Resume';
import Feat from "../src/Components/Footer/Footer";

function App() {
  return (
    <div className="App">
   
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/resume" element={<Resume />}/>
        
      
      </Routes>
      <section className="footer-section  bg-secondary_black h-[fixed] p-3">
        <Feat/>
    </section>
    
    </div>
  );
}

export default App;