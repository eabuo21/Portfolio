import React from "react";
import { Link } from "react-router-dom";
import Tongston from "../../assets/images/tongston.png";
import Thd from "../../assets/images/thd.png";
import Thm from "../../assets/images/thm.png";
import Tvd from "../../assets/images/tvd.png";
import Tvm from "../../assets/images/tvm.png";
import Urld from "../../assets/images/urlshortd.jpg";
import Urlm from "../../assets/images/urshortm.jpg";
import Logbook from "../../assets/images/logbook.jpg";

const Projects = () => {
  return (
    <>
      <div className="main-container  flex flex-col gap-2 justify-start items-start p-2 mx-3 bg-secondary_black h-[fixed]  pb-9  ">
        {/*project 1*/}

        <div
    
          className="main-wrapper flex flex-col  gap-3    md:flex-row md:gap-0"
        >
          <div className="second-wrapper md:relative md:left-[2rem]  md:pb-16">
            <h1 className="heading-text font-bold text-white font-serif text-[32px]      ">
              Tongston Website
            </h1>
            <p className=" font-normal text-white text-base font-serif     md:w-[65%]  md:text-xl">
              As a dedicated Frontend Developer, I had the privilege of
              contributing to the creation of the Tongston website. I brought to
              life the vision of this dynamic company by crafting user-friendly
              interfaces. I played a pivotal role in making Tongston's online
              presence a true reflection of their innovative spirit.
            </p>

            <div className="buttons-section flex flex-row gap-1 justify-start items-start p-2  text-white text-base">
              <Link to="https://tongston.com" target="_blank">
                <button className="p-3 w-[fixed] flex justify-center items-center  bg-gradient-to-r from-[red] to-[#6f0b6f] rounded-[12px] ">
                  View Website
                </button>
              </Link>

              <Link to="https://tongston.netlify.app" target="blank">
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
          </div>

          <div className="flex flex-row gap-0 justify-start items0-start  md:relative md:mr-[8rem]  md:w-full ">
            <img
              className="project-image h-[177px] w-[auto]  pb-9    md:w-[473px] md:h-[250px]"
              src={Thd}
              alt="project-image  "
            />
          </div>
        </div>

        {/*project 2*/}
        <div
    
          className="main-wrapper flex flex-col gap-3 md:flex-row-reverse  md:gap-8    md:pb-16 "
        >
          <div className="second-wrapper md:relative md:left-[2rem]     md:ml-[15rem] ">
            <h1 className="heading-text font-bold text-white font-serif text-[32px] ">
              Tongston Ventures Website
            </h1>
            <p className=" font-normal text-white text-base font-serif     md:w-[75%]  md:text-xl    ">
              As a dedicated Frontend Developer, I had the privilege of
              contributing to the creation of the Tongston website. I brought to
              life the vision of this dynamic company by crafting user-friendly
              interfaces. I played a pivotal role in making Tongston's online
              presence a true reflection of their innovative spirit.
            </p>

            <div className="buttons-section flex flex-row gap-1 justify-start items-start p-2  text-white text-base">
              <Link to="https://t-ventures.tongston.com" target="_blank">
                <button className="p-3 w-[fixed] flex justify-center items-center  bg-gradient-to-r from-[red] to-[#6f0b6f] rounded-[12px] ">
                  View Website
                </button>
              </Link>

              <Link to="https://tongston-ventures.netlify.app" target="blank">
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
          </div>

          <div className="flex flex-row gap-0 justify-start items0-start  w-full      md:relative   md:p-4  ">
            <img
              className="project-image h-[177px] w-[auto]  pb-9      md:w-[473px] md:h-[250px] "
              src={Tvd}
              alt="project-image"
            />
          </div>
        </div>

        {/*project 3*/}
        <div
    
          className="main-wrapper flex flex-col gap-3 md:flex-row  md:gap-8   md:pb-16 "
        >
          <div className="second-wrapper md:relative  md:left-[2rem]">
            <h1 className="heading-text font-bold text-white font-serif text-[32px] ">
              E-Logbook for  SIWES
            </h1>
            <p className=" font-normal text-white text-base font-serif     md:w-[65%]  md:text-xl">
              As a dedicated Frontend Developer, I had the privilege of
              contributing to the creation of the Tongston website. I brought to
              life the vision of this dynamic company by crafting user-friendly
              interfaces. I played a pivotal role in making Tongston's online
              presence a true reflection of their innovative spirit.
            </p>

            <div className="buttons-section flex flex-row gap-1 justify-start items-start p-2  text-white text-base">
              <Link to="https://github.com/eabuo21/Final-Year-Bsc-Project" target="_blank">
                <button className="p-3 w-[fixed] flex justify-center items-center  bg-gradient-to-r from-[red] to-[#6f0b6f] rounded-[12px] ">
                  View Code
                </button>
              </Link>
            </div>

            <section className="impact-section flex flex-col justify-start items-start gap-1 border-l-grey border border-r-0 border-t-0 border-b-0  h-[15vh]  pt-8 p-3  pb-16  md:flex-row">
              <div className="impact-text-percentage flex flex-col gap-1 justify-center items-start text-white font-serif font-semibold text-4xl">
                <h3>8%</h3>
                <p className="text-base">Increase in SEO ranking</p>
              </div>
            </section>
          </div>
          <div className="flex flex-row gap-0 justify-start items0-start  w-full      md:relative md:mr-[8rem]  md:w-full    ">
            <img
              className="project-image h-[177px] w-[400px]  pb-9        md:w-[473px] md:h-[250px]   "
              src={Logbook}
              alt="project-image"
            />
          </div>
        </div>
  
        {/*project 4*/}
        <div
    
          className="main-wrapper flex flex-col gap-3 md:flex-row-reverse  md:gap-8   md:pb-16  "
        >
          <div className="second-wrapper md:relative       md:ml-[15rem]">
            <h1 className="heading-text font-bold text-white font-serif text-[32px] ">
                Url Shortener With Qr Code
            </h1>
            <p className=" font-normal text-white text-base font-serif     md:w-[75%]  md:text-xl">
              As a dedicated Frontend Developer, I had the privilege of
              contributing to the creation of the Tongston website. I brought to
              life the vision of this dynamic company by crafting user-friendly
              interfaces. I played a pivotal role in making Tongston's online
              presence a true reflection of their innovative spirit.
            </p>

            <div className="buttons-section flex flex-row gap-1 justify-start items-start p-2  text-white text-base">
              <Link to="https://github.com/eabuo21/Url-Shorten" target="_blank">
                <button className="p-3 w-[fixed] flex justify-center items-center  bg-gradient-to-r from-[red] to-[#6f0b6f] rounded-[12px] ">
                  View Code
                </button>
              </Link>
            </div>
            <section className="impact-section flex flex-col justify-start items-start gap-1 border-l-grey border border-r-0 border-t-0 border-b-0  h-[15vh]  pt-8 p-3  pb-16  md:flex-row">
              <div className="impact-text-percentage flex flex-col gap-1 justify-center items-start text-white font-serif font-semibold text-4xl">
                <h3>8%</h3>
                <p className="text-base">Increase in SEO ranking</p>
              </div>
            </section>
          </div>
          <div className="flex flex-row gap-0 justify-start items0-start  w-full      md:relative   md:p-4  ">
            <img
              className="project-image h-[177px] w-[400px]  pb-9   "
              src={Urld}
              alt="project-image"
            />
          </div>
        </div>

        {/*project 5
        <div
    
          className="main-wrapper flex flex-col gap-3 md:flex-row  md:gap-8   "
        >
          <div className="second-wrapper md:relative     md:left-[2rem]">
            <h1 className="heading-text font-bold text-white font-serif text-[32px] ">
              Url Shortener With Qr Code
            </h1>
            <p className=" font-normal text-white text-base font-serif    md:w-[65%]  md:text-xl">
              As a dedicated Frontend Developer, I had the privilege of
              contributing to the creation of the Tongston website. I brought to
              life the vision of this dynamic company by crafting user-friendly
              interfaces. I played a pivotal role in making Tongston's online
              presence a true reflection of their innovative spirit.
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
          </div>

          <div className="flex flex-row gap-0 justify-start items0-start  w-full         md:relative md:mr-[8rem]  md:w-full ">
            <img
              className="project-image h-[177px] w-[auto]  pb-9        md:w-[473px] md:h-[250px] "
              src={Urld}
              alt="project-image"
            />
          </div>
  
        </div>
  */}
        <div
        data-aos="fade-up"
              data-aos-easing="ease-in-linear"
              data-aos-duration="3000"
              data-aos-anchor-placement="bottom-bottom"
              data-aos-delay="50"
              data-aos-once="true"
              data-aos-debounce="1"
          className="more-projects-button flex flex-col justify-center items-center text-transparent bg-clip-text bg-gradient-to-r from-[red] via-[red] to-[#d007d0] text-2xl font-bold font-serif w-full">
          <Link to="/projects">See more projects</Link>
        </div>
      </div>
    </>
  );
};
export default Projects;
