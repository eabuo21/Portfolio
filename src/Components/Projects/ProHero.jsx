import React from "react";
import { Link } from "react-router-dom";

const ProHero = () => {
  return (
    <>
      <div className="hero-wrapper p-2">
        <section className="caption-section-text flex flex-col gap-2 pb-8 ">
          <h1 className="text-white font-bold font-serif text-[32px]">
            Projects
          </h1>
          <h3 className="text-white font-serif text-base">
            I develop unforgettable experiences that leave a lasting impression.
          </h3>
        </section>

        <section className="gradient-text-section ">
          <Link to="#">
            <h4 className="font-bold text-xl text-transparent bg-clip-text bg-gradient-to-br from-red  via-rose-700 to-violet-950">
              Check out my github
            </h4>
          </Link>
        </section>
      </div>
    </>
  );
};
export default ProHero;
