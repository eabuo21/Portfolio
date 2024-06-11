import React, { useEffect } from "react";
import ProHero from "../../Components/Projects/ProHero";
import ProCards from "../../Components/Projects/ProDemoCards";
import BackTop from "../../Components/Home/BackTop";
import Projectsbg from   "../../assets/images/Projects-pix/projectsbackground.jpg";

const Projects = () => {
      const handleScroll = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    handleScroll();
  }, []);
  return (
    <>
      <div className=" projects-container bg-secondary_black h-[fixed] w-full p-4  bg-no-repeat" style={{
       background: `linear-gradient(rgba(4, 1, 2, 0.9), rgba(4, 1, 2, 0.9)), url(${Projectsbg})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}>
        <section className="projects-hero-section  pb-8">
          <ProHero />
              </section>
              
              <section className="projects-demos-section pb-12">
                  <ProCards/>
              </section>

              <section className="back-to-top-section">
                  <BackTop/>
              </section>
      </div>
    </>
  );
};
export default Projects;
