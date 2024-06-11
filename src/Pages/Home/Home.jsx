import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Hero from "../../Components/Home/Hero";
import Stack from "../../Components/Home/stack";
import Projects from "../../Components/Home/ProjectsArraysItems";
import Testimonials from "../../Components/Home/Carousel";
import Shipped from "../../Components/Home/Shiiped";
import BackTop from "../../Components/Home/BackTop";
import FlipsC from "../../Components/Home/FlipCards";
import Guiz from "../../assets/images/guz.png";
import DP from "../../Components/Home/DevPix";
import Devbg from  "../../assets/images/Projects-pix/darkdeveloper.png";


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

        <section className="stack-section pb-16  h-[fixed] p-2  md:pb-[12rem]  ">
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
          <section className="heading-section font-bold font-serif text-xl text-center   pb-8">
            <h1 className="font-bold text-3xl font-serif   text-white">
             Professional  Experience
            </h1>
          </section>
          <FlipsC />
        



        </section>

        <section className="projects-section pb-9  bg-norepeat  md:pb-[8rem]" style={{
          background: `linear-gradient(rgba(4, 0, 1, 0.9), rgba(4, 0, 1, 0.9)), url(${Devbg})`,
          backgroundPosition: "center",
         
          backgroundSize: "auto",
         
        }}>
          <h2 className="heading-project-section font-bold text-3xl font-serif   text-white text-center pb-16">
            Projects
          </h2>
          <Projects />


                  {/* more projects voew button section 
         */}
         
         <div
           data-aos="fade-up"
           data-aos-easing="ease-in-linear"
           data-aos-duration="3000"
           data-aos-anchor-placement="bottom-bottom"
           data-aos-delay="50"
           data-aos-once="true"
           data-aos-debounce="1"
           className="more-projects-button flex flex-col justify-center items-center text-transparent
            bg-clip-text bg-gradient-to-br from-[red] via-blue-700 to-[red] text-2xl font-bold font-serif w-full pt-9"
         >
           <Link to="/projects">Learn More</Link>
         </div>
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
