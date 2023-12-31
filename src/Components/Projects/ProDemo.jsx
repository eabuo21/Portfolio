import React from "react";
import { Link } from "react-router-dom";

const ProDemo = ({ image, text, link, link2 }) => {
  return (
    <>
      <div className="projects-demo-container flex flex-col gap-4 justify-center items-start ">
       <div className="container-background bg-blue-400 p-2 flex flex-col justify-start items-start  rounded-md">
        <Link to={link2} target="_blank">
          
        <img
          className="project-image w-full h-auto pb-2  rounded-md md:w-[350px]     lg:w-[550px]"
          src={image}
          alt="projects-image"
          />
        </Link>
        </div>
        <div className="flex flex-row gap-2 mx-3">
          <Link to={link} className="flex flex-row gap-2 text-white font-bold ">
            <h3 className="text-white font-bold text-xl font-serif  hover:text-red hover:transition-all hover:ease-in-out hover:duration-1000 ease-in-out duration-1000 transition-all">{text}</h3>
            <span className="slant-arrow  transform -rotate-45 ">
              &rarr;{" "}
            </span>
          </Link>
        </div>
      </div>
    </>
  );
};
export default ProDemo;
