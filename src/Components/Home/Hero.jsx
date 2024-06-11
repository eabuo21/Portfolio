import React from "react";

const Hero = () => {
  return (
    <>
      <div className="hero-container flex flex-col gap-2 p-2 mr-3 ml-3 pb-6 pt-16    ">
        <section className="hero-section-padding pb-16    md:flex md:flex-col md:justify-center md:items-center    ">
          <h2 className="hero-heading font-bold  text-white font-serif text-[32px] pb-6       md:text-[48px]  md:w-[62%] ">
            I’m Emmanuel, a Software
            <span className="multi-gradient-text  bg-clip-text text-transparent bg-gradient-to-br from-[#a21111] via-[#904290]  to-[#F00] ">
              {" "}
              Developer
            </span>{" "}
            that build's interactive{" "}
            <span className="multi-gradient-text  bg-clip-text text-transparent bg-gradient-to-br from-[#dd06dd]  via-[#dd06dd]  to-[#dd06dd]">
              {" "}
              web{" "}
            </span>
            applications
          </h2>
          <h4 className="sub-heading-text font-normal text-base text-white font-serif   md:text-xl  text-left    md:w-[62%]">
            A dedicated and enthusiastic developer who approaches software
            development with a strong commitment to best practices and precision
            in crafting solutions.
          </h4>
        </section>
      </div>
    </>
  );
};
export default Hero;





