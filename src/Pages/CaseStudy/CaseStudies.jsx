import React, { useState, useEffect } from "react";
import BackTop from "../../Components/Home/BackTop";
import Hero from "../../Components/Projects-Case-Study/CaseHero";
import PreviousPage from "../../Components/Projects-Case-Study/Previous";
import SubHero from "../../Components/Projects-Case-Study/CaseSubHero";
import Hero2 from "../../Components/Projects-Case-Study/CaseHero2";

const CaseStudies = () => {
  const handleScroll = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    handleScroll();
  }, []);

  return (
    <>
      <div className=" home-container bg-secondary_black h-[fixed] w-full ">
        <section className="prev-section pb-12">
          <PreviousPage />
        </section>
        <section className="hero-section pb-12">
          <Hero />
        </section>
        <section className="sub-hero-section bg-[#C1C5CA] h-[fixed] p-2 pb-12">
          <SubHero />
        </section>

        <section className="hero-section pb-12">
          <Hero2 />
        </section>

        <section className="">
          <BackTop />
        </section>
      </div>
    </>
  );
};

export default CaseStudies;
