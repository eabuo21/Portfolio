import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import "./App.css";
import Home from "../src/Pages/Home/Home";
import Projects from "../src/Pages/Projects/Projects";
import BlogPost from "../src/Pages/BlogPost/Blogs";
import Contact from "../src/Pages/Contact/Contact";
import Resume from "../src/Pages/Resume/Resume";
import CaseStudy from "../src/Pages/CaseStudy/CaseStudies";
import Feat from "../src/Components/Footer/Footer";
import { ToastContainer } from "react-toastify";
import CaseStudy2 from "../src/Pages/CaseStudy2/CaseStudies";
import Head from "../src/Components/Nav/Head";
import { RiseLoader } from "react-spinners";
import Chatbot from "./Components/Open-AI/Chat";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from "@fortawesome/free-solid-svg-icons";

function App() {
  const [loading, setLoading] = useState(true);

  //dynamic chat rendering

  const [openaichat, setOpenaichat] = useState(false);
  const Openchat = () => {
    setOpenaichat(true);
  };

  const Closechat = () => {
    setOpenaichat(false);
  };

  useEffect(() => {
    simulateWebsiteLoading()
      .then(() => {
        setLoading(false);
      })
      .catch((error) => {
        console.error("Loading error:", error);
        setLoading(false);
      });
  }, []);

  const simulateWebsiteLoading = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, 2500);
    });
  };
  return (
    <div className="App">
      {loading ? (
        <div className="loader-container   flex  justify-center items-center fixed top-0 left-0 right-0 bottom-0  z-50 h-[100vh]">
          <RiseLoader
            color={"red"}
            loading={true}
            size={25}
            speedMultiplier={0.5}
          />
        </div>
      ) : (
        <>
          <section className="nav-section  sticky top-0 z-50">
            <Head />
          </section>

          <div className="chat-container fixed top-[85%]  left-[90%]      md:left-[95%] transform -translate-y-1/2 -translate-x-1/2 z-50">
            <button
              onClick={() => Openchat()}
              // onMouseLeave={()=>Closechat()}

              className="chat-button relative rounded-[50%] bg-blue-700 text-white h-[60px] w-[60px] flex justify-center items-center p-2 transition-transform duration-300 ease-in-out"
            >
              <FontAwesomeIcon icon={faComment} className="text-4xl" />
            </button>

            {openaichat && <Chatbot onClose={Closechat} />}
          </div>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            {/* <Route path="/blogs" element={<BlogPost />} /> */}
            <Route path="/contact" element={<Contact />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/case_study" element={<CaseStudy />} />
            <Route path="/t-ventures_case_study" element={<CaseStudy2 />} />
          </Routes>
          <ToastContainer />

          <section className="footer-section  bg-secondary_black h-[fixed] p-3">
            <Feat />
          </section>
        </>
      )}
    </div>
  );
}

export default App;
