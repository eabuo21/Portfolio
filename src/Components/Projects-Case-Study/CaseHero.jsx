import React from "react";

const Hero = () => {
  return (
    <>
      <div className="hero-container p-2 flex flex-col gap-6 justify-start items-start mx-auto   md:px-16">
        <section
          className="first-hero-section flex flex-col gap-3 justify-center items-start  p-2  pb-8     
      "
        >
          <h4
            className=" font-dm text-white font-[500] text-3xl text-left     
          md:text-6xl  md:font-semibold   "
          >
            Design and Development of a Business Development Website for
            Tongston entrepreneurship Group
          </h4>
          <h6 className="text-white font-sm font-[24px] text-left text-opacity-20">
            Tongston Holdings
          </h6>
        </section>

        <section className="second-hero-section flex flex-col gap-3 justify-center items-start  p-2    md:w-[80%] md:mx-auto">
          <h4 className=" font-dm text-white font-normal text-xl text-left pb-6   md:text-2xl  md:w-full">
            Tongston is a multi-award winning group focused on entrepreneurial
            education, enterprise, finance and media leveraging on technology
            for people, government and institutions to drive global sustainable
            socio-economic development.
          </h4>

          <content
            className="multiple-items-container flex flex-col gap-4 p-2 justify-start items-start    
          md:flex-row  md:justify-between  md:gap-0 flex-shrink-0 md:items-start   md:w-full "
          >
            <div className="1st-div  flex flex-col gap-3 justify-start items-start ">
              <h2 className=" text-white font-dm text-2xl text-left ">Role</h2>
              <h3 className=" text-white font-dm text-2xl text-left text-opacity-20">
                Software Developer
              </h3>
            </div>

            <div className="2nd-div  flex flex-col gap-3 justify-start items-start ">
              <h2 className=" text-white font-dm text-2xl text-left">Client</h2>
              <h3 className=" text-white font-dm text-2xl text-left  text-opacity-20">
                Tongston Group
              </h3>
            </div>

            <div className="3rd-div  flex flex-col gap-3 justify-start items-start ">
              <h2 className=" text-white font-dm text-2xl text-left">Date</h2>
              <h3 className=" text-white font-dm text-2xl text-left  text-opacity-20">
                April-12-2023 <span className="text-red">to </span> June-21-2023
              </h3>
            </div>
          </content>
        </section>
      </div>
    </>
  );
};

export default Hero;
