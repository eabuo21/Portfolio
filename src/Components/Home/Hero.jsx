import React from "react";


const Hero = () => {
  return (
    <>
      <div className="hero-container flex flex-col gap-2 p-2 mr-3 ml-3 pb-6 pt-16 justify-center items-start   md:">
        <section className="hero-section-padding pb-16 ">
          <h2 className="hero-heading font-bold  text-white font-serif text-[32px] pb-6">
            I’m Emmanuel, a Frontend
            <span className="multi-gradient-text  bg-clip-text text-transparent bg-gradient-to-r from-[#a21111] via-[#904290]  to-[#F00] ">
              {" "}
              Developer
            </span>{" "}
            that creates interactive{" "}
            <span className="multi-gradient-text  bg-clip-text text-transparent bg-gradient-to-r from-[#dd06dd]  via-[#dd06dd]  to-[#dd06dd]">
              {" "}
              web{" "}
            </span>
            applications
          </h2>
          <h4 className="sub-heading-text font-normal text-base text-white font-serif  ">
            A passionate dev, making things the right way.
          </h4>
        </section>
        <section className="center-text  flex flex-col  justify-center items-center w-full">
          <h1 className="stack-text font-bold text-4xl font-serif   bg-clip-text text-transparent bg-gradient-to-b from-[red]  via-[#a22e2e] to-[violet]">
            My Stack
          </h1>
        </section>

      
      </div>
    </>
  );
};
export default Hero;
