import React from "react";
import Logbook from "../../assets/images/logbook.jpg";
import { Link } from "react-router-dom";

const Hero2 = () => {
  return (
    <>
      <div className="hero-container p-2 flex flex-col gap-6 justify-start items-start mx-auto space-x-auto     md:px-16">
        <section className="first-hero-section flex flex-col gap-3 justify-center items-start  p-2  pb-8">
          <h4 className=" font-dm text-white font-[500] text-3xl text-left   md:text-6xl md:font-semibold ">
            Enhancing Service Page for Improved Performance and Reduced Costs
          </h4>
        </section>

        <section className="second-hero-section flex flex-col gap-3 justify-center items-start  p-2   pb-16">
          <h4 className=" font-dm text-white font-normal text-xl text-left pb-6   md:text-2xl">
            Tongston is a multi-award winning group focused on entrepreneurial
            education, enterprise, finance and media leveraging on technology
            for people, government and institutions to drive global sustainable
            socio-economic development.
          </h4>
        </section>

        <section className="second-hero-section flex flex-col gap-3 justify-center items-start  p-2">
          <h4 className=" font-dm text-white font-normal text-3xl text-left pb-6  md:text-4xl  md:font-semibold">
            Tongston is a multi-award winning group focused on entrepreneurial
            education, enterprise, finance and media leveraging on technology
            for people, government and institutions to drive global sustainable
            socio-economic development.
          </h4>
        </section>

        <section className="white-bg-section    bg-white h-[55vh]  w-full p-2   pb-6"></section>

        <h1 className="text-white text-center mx-auto font-bold text-opacity-40 font-passion  text-2xl  pb-12">
          Old Website
        </h1>

        <section className="second-2nd-hero-section p-2  pb-8  md:pb-16">
          <h2 className="text-white font-bold text-2xl text-left pb-6">
            Key Findings
          </h2>
          <ul
            className="text-white font-normal text-xl font-dm  list-disc  px-4  flex flex-col 
           gap-6 justify-center items-start  md:px-6"
          >
            <li>
              All services and their descriptions were consolidated onto a
              single page.
            </li>

            <li>
              {" "}
              Moreover, this setup raised SEO concerns, as bundling all services
              onto one page can hinder the visibility and search engine ranking
              for individual services.
            </li>

            <li>
              {" "}
              This consolidation posed challenges for users attempting to
              discern the range of services offered by Tongston, potentially
              leading to a frustrating experience.
            </li>
          </ul>
        </section>

        <section className="second-hero-section flex flex-col gap-3 justify-center items-start  p-2 pb-8">
          <h4 className=" font-dm text-white font-normal text-3xl text-left pb-6  md:text-4xl md:font-bold md:text-center  md:w-[70%]  md:mx-auto">
            After presenting my findings and gaining stakeholder approval, I
            created a moodboard for shared understanding.
          </h4>

          <section className="white-bg-section    bg-white h-[55vh]  w-full p-2  pb-12 "></section>
        </section>

        <section className="white-bg-section    bg-white h-[75vh]  w-full p-2 pb-16 "></section>

        <content className="contents-section flex flex-col justify-center items-start p-2 gap-6
        md:w-[65%]">
          <h1 className="text-white font-dm text-3xl text-left ">
            So what exactly was accomplished?
          </h1>

          <p className="text-white font-dm text-xl  tex-left  pb-5">
            After three months, the business pages on the Tongston Group website
            were launched as separate entities, resulting in a significant
            enhancement of overall website performance, surging from 23% to an
            impressive 75%. This strategic move also led to a substantial 40%
            boost in organic traffic while reducing monthly inquiries.
          </p>

          <p className="text-white font-dm text-xl">
            On a different note, I departed from the company before the launch
            of Tongston Investment and Ventures.
          </p>
          
            <button className="p-3  text-white font-semibold text-xl   bg-red  w-auto h-auto rounded-md    hover:bg-black hover:border shadow-current 
           hover:border-red transition-all ease-in-out  duration-1000  hover:transition-all hover:ease-in-out hover:duration-1000">
            <Link to="#">
               Visit Live Website
           </Link>
            </button>
           
        </content>
      </div>
    </>
  );
};

export default Hero2;
