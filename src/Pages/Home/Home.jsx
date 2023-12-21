import React, {useEffect} from "react";
import Hero from "../../Components/Home/Hero";
import Stack from "../../Components/Home/stack";
import Projects from "../../Components/Home/Projects";
import Testimonials from "../../Components/Home/Carousel";
import Shipped from "../../Components/Home/Shiiped";
import BackTop from "../../Components/Home/BackTop";

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
        <section className="hero-section pb-[4.5rem]">
          <Hero />
        </section>
        <section className="stack-section">
          <Stack />
        </section>
        <section className="flip-cards-section pb-[9rem] "></section>

        <section className="projects-section pb-9">
          <Projects />
        </section>

        <section className="Testimonials-section pb-16">
          <Testimonials />
        </section>

        <section className="shipped-than-baked-section pb-6">
          <Shipped />
        </section>
        <section className="back-top-section pb-8 ">
          <BackTop />
        </section>
      </div>
    </>
  );
};
export default Home;
