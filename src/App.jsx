import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from '../src/Pages/Home/Home';
import Projects from "../src/Pages/Projects/Projects";
import Resume from '../src/Pages/Resume/Resume';

function App() {
  return (
    <div className="App">
   
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />}/>
        
      
      </Routes>
    
    
    </div>
  );
}

export default App;