import React from "react";
import { Link } from "react-router-dom";

const ProDemo = ({ image, text, link }) => {
  return (
    <>
      <div className="projects-demo-container flex flex-col gap-4 justify-center items-start ">
        <img
          className="project-image w-full h-auto "
          src={image}
          alt="projects-image"
              />
              <div className="flex flex-row gap-2 mx-3">
        <Link to={link} className="flex flex-row gap-2 text-white font-bold">
          <h3 className="text-white font-bold text-xl font-serif ">{text}</h3>
          <span className="slant-arrow  rotate-95 ">&rarr; </span>
                  </Link>
                  </div>
      </div>
    </>
  );
};
export default ProDemo;
