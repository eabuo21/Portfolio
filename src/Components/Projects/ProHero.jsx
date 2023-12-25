import React from "react";
import { Link } from "react-router-dom";

const ProHero = () => {
  return (
    <>
      <div className="hero-wrapper p-2   md:flex  md:justify-around  md:items-start  md:flex-row">
        <section className="caption-section-text flex flex-col gap-2 pb-8    ">
          <h1 className="text-white font-bold font-serif text-[32px]   md:text-[48px]">
            Projects
          </h1>
          <h3 className="text-white font-serif text-base    md:text-[24px]">
            I develop unforgettable experiences that leave a lasting impression.
          </h3>
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
