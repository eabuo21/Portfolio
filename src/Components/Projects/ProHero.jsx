import React from "react";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";

const ProHero = () => {
  return (
    <>
      <div className="hero-wrapper p-2   md:flex  md:justify-between  md:px-16  md:items-start  md:flex-row ">
        <section className="caption-section-text flex flex-col gap-2 pb-8    ">
          <h1 className="text-white font-bold font-serif text-[32px]   md:text-[48px]">
            Projects
          </h1>
          <div className="animated-text-container flex flex-row gap-4 relative mr-auto ">
            <h3 className="text-white font-serif text-base    md:text-[26px]">
              FOR:
            </h3>

            <h3 className="text-white font-serif text-base    md:text-[26px]">
              {/* typed animation for animated text */}
              <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed out once, initially
                  "technical support,",
                  1000, // wait 1s before replacing "Mice" with "Hamsters"
                  "software development,",
                  1000,
                  "and general systems administration,",
                  1000,
                  "I engineer solutions ",
                  1000,
                  " that create lasting impacts.",
                  1000,
                ]}
                wrapper="span"
                speed={20}
                style={{ display: "inline-block" }}
                repeat={Infinity}
              />
            </h3>
          </div>
        </section>

        <section className="gradient-text-section  md:relative md:top-[4.5rem]">
          <Link
            to="https://github.com/eabuo21"
            target="_blank"
            className="font-bold text-xl text-transparent bg-clip-text bg-gradient-to-br from-red    to-violet-950  md:text-[24px]"
          >
            Check out my github
          </Link>
        </section>
      </div>
    </>
  );
};
export default ProHero;
