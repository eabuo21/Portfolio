import React from "react";
import "../../../src/App.css";
import Stackbg from "../../assets/images/devbg.png";
import dicon from "../../assets/icons/pcicon.png";
import Reacticon from "../../assets/icons/reacticon.png";

const Stack = () => {
  return (
    <>
      <div
        className="stack-section flex flex-col justify-center items-center   pt-7   h-[fixed]  mx-auto "
        style={{
          background: `url(${Stackbg})`,
          backgroundPosition: "center",
          backgroundSize: "auto",
          backgroundRepeat: "no-repeat",
        }}
      >
        <section className="stack-section-flex flex flex-col p-2 gap-10     md:flex-col md:gap-8 ">
          <section className="center-text  flex flex-col  justify-center items-center w-full">
            <h1 className="stack-text font-bold text-4xl font-serif   bg-clip-text text-transparent bg-gradient-to-b from-[red]  via-[#a22e2e] to-[violet]">
              My Stack
            </h1>
          </section>
          <section className="flex flex-col gap-10       md:flex-row   md:flex-wrap  md:justify-center md:items-center md:gap-3">
            {/*section 1*/}
            <div
              data-aos="zoom-out-up"
              data-aos-easing="ease-in-linear"
              data-aos-duration="1000"
              data-aos-anchor-placement="top-center"
              data-aos-delay="20"
              data-aos-once="true"
              className="first-section  border-2 border-grey bg-secondary_black w-[300px]  h-[fixed]  flex flex-col gap-6 justify-start items-start p-6   md:hover:shadow-current  md:shadow-2xl md:hover:scale-75 md:hover:transition-all   md:hover:duration-1000  md:hover:ease-in-out transition-all duration-1000 ease-in-out   md:w-[400px]"
            >
              <section className="icon-text-con flex flex-row gap-5 justify-between items-start">
                <img className="dstp-icon" src={dicon} alt="desktop-stack" />
                <div className="2-text-section flex flex-col gap-2">
                  <tex className="font-semibold text-white  font-serif text-2xl">
                    <p> Software</p>
                    <div className="str-line border-[#930e93] border-4 w-[20vh]  md:w-[10vh]  lg:w-[20vh]   " />
                    <p>Development</p>
                  </tex>
                </div>
              </section>

              <section className="line-code-text-con flex flex-row gap-2">
                <div className="code-line flex flex-col gap-2 justify-around items-start text-white font-serif text-opacity-25">
                  <pre>
                    <code>
                      &lt;h3&gt;
                      <div className="line-str border-2 h-[20vh]  w-[5px] bg-grey ml-4  opacity-25"></div>
                      &lt;/h3&gt;
                    </code>
                  </pre>
                </div>
                <p className="text-white font-serif text-base">
                  Experienced in both functional and OOP: MySql,
                  Google-Security, GCP, Data-Structures & Algorithms
                </p>
              </section>
            </div>
            {/*section 2*/}

            <div
              data-aos="zoom-out-up"
              data-aos-easing="ease-in-linear"
              data-aos-duration="1000"
              data-aos-anchor-placement="top-center"
              data-aos-delay="20"
              data-aos-once="true"
              className="first-section  border-2 border-grey bg-secondary_black w-[300px] h-[fixed]  flex flex-col gap-6 justify-start items-start p-6     md:hover:shadow-current  md:shadow-2xl md:hover:scale-75 md:hover:transition-all   md:hover:duration-1000  md:hover:ease-in-out transition-all duration-1000 ease-in-out    md:w-[400px]"
            >
              <section className="icon-text-con flex flex-row gap-5 justify-between items-start">
                <img
                  className="dstp-icon"
                  src={Reacticon}
                  alt="desktop-stack"
                />
                <div className="2-text-section flex flex-col gap-2">
                  <tex className="font-semibold text-white  font-serif text-2xl">
                    <p> Frontend Dev</p>
                    <div className="str-line-2 border-[#4129cb] border-4 w-[20vh]  md:w-[10vh]  lg:w-[20vh]   " />
                    <p>React, React-Native</p>
                  </tex>
                </div>
              </section>

              <section className="line-code-text-con flex flex-row gap-2">
                <div className="code-line flex flex-col gap-2 justify-around items-start text-white font-serif text-opacity-25">
                  <pre>
                    <code>
                      &lt;h3&gt;
                      <div className="line-str border-2 h-[20vh]  w-[5px] bg-grey ml-4  opacity-25"></div>
                      &lt;/h3&gt;
                    </code>
                  </pre>
                </div>
                <p className="text-white font-serif text-base">
                  Over 2 years of development experience in HTML5, CSS3,
                  JAvascript(ES6+), React-Js, Webpack, Babel-Js, Saas/Less,
                  Tailwind-Css
                </p>
              </section>
            </div>

            {/*section 3*/}

            <div
              data-aos="zoom-out-up"
              data-aos-easing="ease-in-linear"
              data-aos-duration="1000"
              data-aos-anchor-placement="top-center"
              data-aos-delay="20"
              data-aos-once="true"
              className="first-section  border-2 border-grey bg-secondary_black w-[300px] h-[fixed]  flex flex-col gap-6 justify-start items-start p-6     md:hover:shadow-current  md:shadow-2xl md:hover:scale-75 md:hover:transition-all   md:hover:duration-1000  md:hover:ease-in-out transition-all duration-1000 ease-in-out     md:w-[400px]"
            >
              <section className="icon-text-con flex flex-row gap-5 justify-between items-start">
                <img className="dstp-icon" src={dicon} alt="desktop-stack" />
                <div className="2-text-section flex flex-col gap-2">
                  <tex className="font-semibold text-white  font-serif text-2xl">
                    <p> Search Engine</p>
                    <div className="border-[#21db91] border-4 w-[20vh]  md:w-[10vh]  lg:w-[20vh]   " />
                    <p>Optimization</p>
                  </tex>
                </div>
              </section>

              <section className="line-code-text-con flex flex-row gap-2">
                <div className="code-line flex flex-col gap-2 justify-around items-start text-white font-serif text-opacity-25">
                  <pre>
                    <code>
                      &lt;h3&gt;
                      <div className="line-str border-2 h-[20vh]  w-[5px] bg-grey ml-4  opacity-25"></div>
                      &lt;/h3&gt;
                    </code>
                  </pre>
                </div>
                <p className="text-white font-serif text-base">
                  Proficient in SEO tools, including Google Search Console,
                  XML-Site-Mapping, Google Indexing, Google Analytics
                </p>
              </section>
            </div>

            {/*section 4*/}

            <div
              data-aos="zoom-out-up"
              data-aos-easing="ease-in-linear"
              data-aos-duration="1000"
              data-aos-anchor-placement="top-center"
              data-aos-delay="20"
              data-aos-once="true"
              className="first-section  border-2 border-grey bg-secondary_black w-[300px] h-[fixed]  flex flex-col gap-6 justify-start items-start p-6     md:hover:shadow-current  md:shadow-2xl md:hover:scale-75 md:hover:transition-all   md:hover:duration-1000  md:hover:ease-in-out transition-all duration-1000 ease-in-out   md:w-[400px]"
            >
              <section className="icon-text-con flex flex-row gap-5 justify-between items-start">
                <img className="dstp-icon" src={dicon} alt="desktop-stack" />
                <div className="2-text-section flex flex-col gap-2">
                  <tex className="font-semibold text-white  font-serif text-2xl">
                    <p> CICD </p>
                    <div className="border-[#930e93] border-4 w-[20vh]  md:w-[10vh]  lg:w-[20vh]   " />
                    <p>Pipeline </p>
                  </tex>
                </div>
              </section>

              <section className="line-code-text-con flex flex-row gap-2">
                <div className="code-line flex flex-col gap-2 justify-around items-start text-white font-serif text-opacity-25">
                  <pre>
                    <code>
                      &lt;h3&gt;
                      <div className="line-str border-2 h-[20vh]  w-[5px] bg-grey ml-4  opacity-25"></div>
                      &lt;/h3&gt;
                    </code>
                  </pre>
                </div>
                <p className="text-white font-serif text-base">
                  Rest APIs, 3rd party APIs Integrations, CICD (Github Actions),
                  Jest, Version Control (Git & Git-Bash)
                </p>
              </section>
            </div>

            {/*section 5*/}

            <div
              data-aos="zoom-out-up"
              data-aos-easing="ease-in-linear"
              data-aos-duration="1000"
              data-aos-anchor-placement="top-center"
              data-aos-delay="20"
              data-aos-once="true"
              className="first-section  border-2 border-grey bg-secondary_black w-[300px] h-[fixed]  flex flex-col gap-6 justify-start items-start p-6    md:hover:shadow-current  md:shadow-2xl md:hover:scale-75 md:hover:transition-all   md:hover:duration-1000  md:hover:ease-in-out transition-all duration-1000 ease-in-out     md:w-[400px]"
            >
              <section className="icon-text-con flex flex-row gap-5 justify-between items-start">
                <img className="dstp-icon" src={dicon} alt="desktop-stack" />
                <div className="2-text-section flex flex-col gap-2">
                  <tex className="font-semibold text-white  font-serif text-2xl">
                    <p> Software Deployment & </p>
                    <div className="border-[#4129cb] border-4 w-[20vh]  md:w-[10vh]  lg:w-[20vh]   " />
                    <p>Integrations</p>
                  </tex>
                </div>
              </section>

              <section className="line-code-text-con flex flex-row gap-2">
                <div className="code-line flex flex-col gap-2 justify-around items-start text-white font-serif text-opacity-25">
                  <pre>
                    <code>
                      &lt;h3&gt;
                      <div className="line-str border-2 h-[20vh]  w-[5px] bg-grey ml-4  opacity-25"></div>
                      &lt;/h3&gt;
                    </code>
                  </pre>
                </div>
                <p className="text-white font-serif text-base">
                  Over 2 years of deployment experience using C-panel,
                  Hostinger, Go-daddy 000webhost & Netlify
                </p>
              </section>
            </div>

            {/*section 6*/}

            <div
              data-aos="zoom-out-up"
              data-aos-easing="ease-in-linear"
              data-aos-duration="1000"
              data-aos-anchor-placement="top-center"
              data-aos-delay="20"
              data-aos-once="true"
              className="first-section  border-2 border-grey bg-secondary_black w-[300px] h-[fixed]  flex flex-col gap-6 justify-start items-start p-6     md:hover:shadow-current  md:shadow-2xl md:hover:scale-75 md:hover:transition-all   md:hover:duration-1000  md:hover:ease-in-out transition-all duration-1000 ease-in-out    md:w-[400px]"
            >
              <section className="icon-text-con flex flex-row gap-5 justify-between items-start">
                <img className="dstp-icon" src={dicon} alt="desktop-stack" />
                <div className="2-text-section flex flex-col gap-2">
                  <tex className="font-semibold text-white  font-serif text-2xl">
                    <p> CMS</p>
                    <div className="border-[#21db91] border-4 w-[20vh]  md:w-[10vh]  lg:w-[20vh]   " />
                    <p>CDN </p>
                  </tex>
                </div>
              </section>

              <section className="line-code-text-con flex flex-row gap-2">
                <div className="code-line flex flex-col gap-2 justify-around items-start text-white font-serif text-opacity-25">
                  <pre>
                    <code>
                      &lt;h3&gt;
                      <div className="line-str border-2 h-[20vh]  w-[5px] bg-grey ml-4  opacity-25"></div>
                      &lt;/h3&gt;
                    </code>
                  </pre>
                </div>
                <p className="text-white font-serif text-base">
                  Wordpress.com/Elementor, Wordpress.org(with php), Wix, Webflow
                </p>
              </section>
            </div>
          </section>
        </section>
      </div>
    </>
  );
};
export default Stack;
