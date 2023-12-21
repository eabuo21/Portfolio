import React from "react";
import { Link } from "react-router-dom";
import Tongston from "../../assets/images/tongston.png";

const Projects = () => {
  return (
    <>
      <div className="main-container  flex flex-col gap-2 justify-start items-start p-2 mr-3 ml-3 bg-secondary_black h-[fixed]  pb-9">
        {/*project 1*/}
        <h1 className="heading-text font-bold text-white font-serif text-[32px] ">
          Tongston Website
        </h1>
        <p className=" font-normal text-white text-base font-serif">
          As a dedicated Frontend Developer, I had the privilege of contributing
          to the creation of the Tongston website. I brought to life the vision
          of this dynamic company by crafting user-friendly interfaces. I played
          a pivotal role in making Tongston's online presence a true reflection
          of their innovative spirit.
        </p>

        <div className="buttons-section flex flex-row gap-1 justify-start items-start p-2  text-white text-base">
          <Link to="#">
            <button className="p-3 w-[fixed] flex justify-center items-center  bg-gradient-to-r from-[red] to-[#6f0b6f] rounded-[12px] ">
              View Website
            </button>
          </Link>

          <Link to="/projects">
            <button className=" gradient-border p-3 w-[fixed] flex justify-center items-center border border-t-red border-r-[#a122a1] border-b-[#a122a1] border-l-red rounded-[12px]">
              View Demo
            </button>
          </Link>
        </div>
        <section className="impact-section flex flex-col justify-start items-start gap-1 border-l-grey border border-r-0 border-t-0 border-b-0  h-[15vh]  pt-8 p-3  pb-16  md:flex-row">
          <div className="impact-text-percentage flex flex-col gap-1 justify-center items-start text-white font-serif font-semibold text-4xl">
            <h3>8%</h3>
            <p className="text-base">Increase in SEO ranking</p>
          </div>
        </section>
        <img
          className="project-image h-[177px] w-[400px]  pb-9"
          src={Tongston}
          alt="project-image"
        />

        {/*project 2*/}

        <h1 className="heading-text font-bold text-white font-serif text-[32px] ">
          Tongston Ventures Website
        </h1>
        <p className=" font-normal text-white text-base font-serif">
          As a dedicated Frontend Developer, I had the privilege of contributing
          to the creation of the Tongston website. I brought to life the vision
          of this dynamic company by crafting user-friendly interfaces. I played
          a pivotal role in making Tongston's online presence a true reflection
          of their innovative spirit.
        </p>

        <div className="buttons-section flex flex-row gap-1 justify-start items-start p-2  text-white text-base">
          <Link to="#">
            <button className="p-3 w-[fixed] flex justify-center items-center  bg-gradient-to-r from-[red] to-[#6f0b6f] rounded-[12px] ">
              View Website
            </button>
          </Link>

          <Link to="#">
            <button className=" gradient-border p-3 w-[fixed] flex justify-center items-center border border-t-red border-r-[#a122a1] border-b-[#a122a1] border-l-red rounded-[12px]">
              View Demo
            </button>
          </Link>
        </div>
        <section className="impact-section flex flex-col justify-start items-start gap-1 border-l-grey border border-r-0 border-t-0 border-b-0  h-[15vh]  pt-8 p-3  pb-16  md:flex-row">
          <div className="impact-text-percentage flex flex-col gap-1 justify-center items-start text-white font-serif font-semibold text-4xl">
            <h3>8%</h3>
            <p className="text-base">Increase in SEO ranking</p>
          </div>
        </section>
        <img
          className="project-image h-[177px] w-[400px]  pb-9"
          src={Tongston}
          alt="project-image"
        />

        {/*project 3*/}
        <h1 className="heading-text font-bold text-white font-serif text-[32px] ">
          E-Learning system
        </h1>
        <p className=" font-normal text-white text-base font-serif">
          As a dedicated Frontend Developer, I had the privilege of contributing
          to the creation of the Tongston website. I brought to life the vision
          of this dynamic company by crafting user-friendly interfaces. I played
          a pivotal role in making Tongston's online presence a true reflection
          of their innovative spirit.
        </p>

        <div className="buttons-section flex flex-row gap-1 justify-start items-start p-2  text-white text-base">
          <Link to="#">
            <button className="p-3 w-[fixed] flex justify-center items-center  bg-gradient-to-r from-[red] to-[#6f0b6f] rounded-[12px] ">
              View Demo
            </button>
          </Link>
        </div>
        <section className="impact-section flex flex-col justify-start items-start gap-1 border-l-grey border border-r-0 border-t-0 border-b-0  h-[15vh]  pt-8 p-3  pb-16  md:flex-row">
          <div className="impact-text-percentage flex flex-col gap-1 justify-center items-start text-white font-serif font-semibold text-4xl">
            <h3>8%</h3>
            <p className="text-base">Increase in SEO ranking</p>
          </div>
        </section>
        <img
          className="project-image h-[177px] w-[400px]  pb-9"
          src={Tongston}
          alt="project-image"
        />

        {/*project 4*/}
        <h1 className="heading-text font-bold text-white font-serif text-[32px] ">
          E-logbook for SIWES
        </h1>
        <p className=" font-normal text-white text-base font-serif">
          As a dedicated Frontend Developer, I had the privilege of contributing
          to the creation of the Tongston website. I brought to life the vision
          of this dynamic company by crafting user-friendly interfaces. I played
          a pivotal role in making Tongston's online presence a true reflection
          of their innovative spirit.
        </p>

        <div className="buttons-section flex flex-row gap-1 justify-start items-start p-2  text-white text-base">
          <Link to="#">
            <button className="p-3 w-[fixed] flex justify-center items-center  bg-gradient-to-r from-[red] to-[#6f0b6f] rounded-[12px] ">
              View Demo
            </button>
          </Link>
        </div>
        <section className="impact-section flex flex-col justify-start items-start gap-1 border-l-grey border border-r-0 border-t-0 border-b-0  h-[15vh]  pt-8 p-3  pb-16  md:flex-row">
          <div className="impact-text-percentage flex flex-col gap-1 justify-center items-start text-white font-serif font-semibold text-4xl">
            <h3>8%</h3>
            <p className="text-base">Increase in SEO ranking</p>
          </div>
        </section>
        <img
          className="project-image h-[177px] w-[400px]  pb-9"
          src={Tongston}
          alt="project-image"
        />

        {/*project 5*/}
        <h1 className="heading-text font-bold text-white font-serif text-[32px] ">
          Url Shortener With Qr Code
        </h1>
        <p className=" font-normal text-white text-base font-serif">
          As a dedicated Frontend Developer, I had the privilege of contributing
          to the creation of the Tongston website. I brought to life the vision
          of this dynamic company by crafting user-friendly interfaces. I played
          a pivotal role in making Tongston's online presence a true reflection
          of their innovative spirit.
        </p>

        <div className="buttons-section flex flex-row gap-1 justify-start items-start p-2  text-white text-base">
          <Link to="#">
            <button className="p-3 w-[fixed] flex justify-center items-center  bg-gradient-to-r from-[red] to-[#6f0b6f] rounded-[12px] ">
              View Demo
            </button>
          </Link>
        </div>
        <section className="impact-section flex flex-col justify-start items-start gap-1 border-l-grey border border-r-0 border-t-0 border-b-0  h-[15vh]  pt-8 p-3  pb-16  md:flex-row">
          <div className="impact-text-percentage flex flex-col gap-1 justify-center items-start text-white font-serif font-semibold text-4xl">
            <h3>8%</h3>
            <p className="text-base">Increase in SEO ranking</p>
          </div>
        </section>
        <img
          className="project-image h-[177px] w-[400px]  pb-9"
          src={Tongston}
          alt="project-image"
        />
        <div className="more-projects-button flex flex-col justify-center items-center text-transparent bg-clip-text bg-gradient-to-r from-[red] via-[red] to-[#d007d0] text-2xl font-bold font-serif w-full">
          <Link to="#">See more projects</Link>
        </div>
      </div>
    </>
  );
};
export default Projects;
