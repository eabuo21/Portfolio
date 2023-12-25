import React, { useEffect } from "react";
import Hero from "../../Components/Home/Hero";
import Stack from "../../Components/Home/stack";
import Projects from "../../Components/Home/Projects";
import Testimonials from "../../Components/Home/Carousel";
import Shipped from "../../Components/Home/Shiiped";
import BackTop from "../../Components/Home/BackTop";
import FlipsC from "../../Components/Home/FlipCards";
import Guiz from "../../assets/images/guz.png";
import DP from "../../Components/Home/DevPix";

const Home = () => {
  const handleScroll = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    handleScroll();
  }, []);

  return (
    <>
      <div className=" home-container bg-secondary_black h-[fixed] w-full p-4 ">
        <section
          data-aos="zoom-in"
          data-aos-easing="ease-out-linear"
          data-aos-duration="2000"
          data-aos-anchor-placement="top-center"
          data-aos-delay="50"
          className="hero-section flex   justify-center items-center flex-col gap-1  pb-[8.5rem] md:justify-center   md:gap-0 md:items-center"
        >
          <Hero />
          <DP />
        </section>

        <section className="stack-section pb-16  h-[fixed] p-2  md:pb-[12rem] ">
          <Stack />
        </section>

        <section
          className="flip-cards-section p-4 h-[fixed] pb-[10rem] mx-4  flex flex-col gap-8  "
          style={{
            background: `url(${Guiz})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <section className="heading-section font-bold font-serif text-3xl text-center  ">
            <h1 className="text-transparent bg-clip-text bg-gradient-to-br from-white  via-white to-red">
              Organizations i've Worked  With & Capacity of  Work Done
            </h1>
          </section>
          <FlipsC />
        </section>

        <section className="projects-section pb-9    md:pb-[8rem]">
          <Projects />
        </section>

        <section className="Testimonials-section pb-16 md:pb-[8rem]">
          <Testimonials />
        </section>

        <section
          data-aos="zoom-in-down"
          data-aos-anchor-placement="center-bottom"
          data-aos-easing="ease-linear"
          data-aos-duration="2000"
          className="shipped-than-baked-section pb-6"
        >
          <Shipped />
        </section>
        <section
          data-aos="fade-in"
          data-aos-anchor-placement="center-bottom"
          data-aos-easing="ease-linear"
          data-aos-duration="3000"
          className="back-top-section pb-8 "
        >
          <BackTop />
        </section>
      </div>
    </>
  );
};
export default Home;
