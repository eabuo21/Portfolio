import React from "react";
import History from "../../Components/Resume/WKH";
import Edu from '../../Components/Resume/EDX';

const ResumeHero = () => {
  return (
    <>
      <div className="resume-hero flex flex-col justify-center items-center">
        <div className=" flex flex-col  w-full h-[fixed] p-6 py-4 mx-3 rounded-md shadow-md  relative top-7   md:w-[90%]  overflow-hidden ">
          <div className="bg-slate-800 w-full h-[15vh]          md:h-[20vh]">
            <p className="text-white font-sans text-xl font-bold text-left  px-4 py-4    md:text-5xl  ">
              EMMANUEL ABUO
            </p>
            <p className="text-sm font-normal font-sans text-left  text-white px-4   md:text-2xl">
              IT Support / software Developer
            </p>
          </div>
          <section className="bg-white  pt-6                             md:h-[40vh]  md:w-[40%]">
            <p className="text-black font-sans font-semibold           md:text-left  md:tracking-wide md:text-xl ">
              Knowledgeable Technical Consultant with quality-driven and
              methodical approach to completing daily tasks and solving complex
              problems. Excellent communication and analytical abilities.
            </p>
          </section>
                  <History />
              <Edu />    
        </div>
      </div>
    </>
  );
};
export default ResumeHero;
