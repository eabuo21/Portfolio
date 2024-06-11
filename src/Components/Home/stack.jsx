import React from "react";
import "../../../src/App.css";
import Stackbg from "../../assets/images/devbg.png";
// Dynamic icons import
import dicon from "../../assets/icons/pcicon.png";
import Reacticon from "../../assets/icons/reacticon.png";
import Searchengine from "../../assets/icons/iicon1.svg";
import { Link } from "react-router-dom";
// dynamic fontawesome import
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGlobe,
  faMagnifyingGlass,
  faSnowflake,
} from "@fortawesome/free-solid-svg-icons";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { faGears } from "@fortawesome/free-solid-svg-icons/faGears";
// import { faSnowflake } from "@fortawesome/free-solid-svg-icons";

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
        <section className="stack-section-flex flex flex-col p-2 gap-10   justify-between   md:flex-col md:gap-8 ">
          <section className="center-text  flex flex-col  justify-center items-center w-full">
            <h1 className="stack-text font-bold text-3xl font-serif   text-white">
              Expertise
            </h1>
          </section>
          <section className="flex flex-col gap-10       lg:grid   lg:grid-cols-3  lg:justify-center lg:items-center lg:gap-3 md:grid md:grid-cols-2 md:mx-auto">
            {/*section 1*/}
            <div
              data-aos="zoom-out-up"
              data-aos-easing="ease-in-linear"
              data-aos-duration="1000"
              data-aos-anchor-placement="top-center"
              data-aos-delay="20"
              data-aos-once="true"
              className="first-section   border-2 border-grey bg-secondary_black w-[300px]  h-[fixed]  flex flex-col gap-6 justify-start items-start p-6   md:hover:shadow-current  md:shadow-2xl md:hover:scale-110 transition-transform duration-300 transform-gpu  md:w-[400px]"
            >
              <section className="icon-text-con  flex flex-row gap-5 justify-between items-start">
                <img className="dstp-icon" src={dicon} alt="desktop-stack" />
                <div className="2-text-section flex flex-col gap-2">
                  <tex className="font-semibold text-white  font-serif text-2xl">
                    <p> Technical</p>
                    <div className="str-line border-[#930e93] border-4 w-[20vh]  md:w-[10vh]  lg:w-[20vh]   " />
                    <p>Support</p>
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
                  Experienced in server migration, cloud solutions
                  implementation , email migration and automation, system
                  administration, remote workplace setup and integrations,
                  software troubleshooting and maintenance
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
              className="first-section  border-2 border-grey bg-secondary_black w-[300px] h-[fixed]  flex flex-col gap-6 justify-start items-start p-6     md:hover:shadow-current  md:shadow-2xl md:hover:scale-110 transition-transform duration-300 transform-gpu   md:w-[400px]"
            >
              <section className="icon-text-con flex flex-row gap-5 justify-between items-start">
                <img
                  className="dstp-icon"
                  src={Reacticon}
                  alt="desktop-stack"
                />
                <div className="2-text-section flex flex-col gap-2">
                  <tex className="font-semibold text-white  font-serif text-2xl">
                    <p> Software Dev</p>
                    <div className="str-line-2 border-[#4129cb] border-4 w-[20vh]  md:w-[10vh]  lg:w-[20vh]   " />
                    <p>React-Js, React-Native</p>
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
                  Over 3 years of development experience in HTML5,
                  CSS3,(Tailwind Css), Javascript(ES6+), Typescript, React-Js,
                  Webpack, Babel-Js, Saas/Less,
                  {/* linkedin-view button */}
                  {/* <button className="view-linkedin-buton   text-sm font-bold text-white hover:text-blue-700 pt-12">
                  <Link to=""> View Linkedin Profile </Link>
                </button> */}
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
              className="first-section  border-2 border-grey bg-secondary_black w-[300px] h-[fixed]  flex flex-col gap-6 justify-start items-start p-6     md:hover:shadow-current  md:shadow-2xl md:hover:scale-110 transition-transform duration-300 transform-gpu    md:w-[400px]"
            >
              <section className="icon-text-con flex flex-row gap-5 justify-between items-start">
                {/* <img className="dstp-icon" src={Searchengine} alt="desktop-stack" width="100" height="100"/> */}
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  flyinfglass-icon
                  className=" dstp-icon text-white text-5xl"
                />
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
                  XML-Site-Mapping, Google Indexing, Google Analytics and
                  Website reporting
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
              className="first-section  border-2 border-grey bg-secondary_black w-[300px] h-[fixed]  flex flex-col gap-6 justify-start items-start p-6     md:hover:shadow-current  md:shadow-2xl md:hover:scale-110 transition-transform duration-300 transform-gpu  md:w-[400px]"
            >
              <section className="icon-text-con flex flex-row gap-5 justify-between items-start">
                {/* <img className="dstp-icon" src={dicon} alt="desktop-stack" /> */}
                <FontAwesomeIcon
                  icon={faGear}
                  flyinfglass-gear-icon
                  className=" dstp-icon text-white text-5xl"
                />
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
              className="first-section  border-2 border-grey bg-secondary_black w-[300px] h-[fixed]  flex flex-col gap-6 justify-start items-start p-6    md:hover:shadow-current  md:shadow-2xl md:hover:scale-110 transition-transform duration-300 transform-gpu    md:w-[400px]"
            >
              <section className="icon-text-con flex flex-row gap-5 justify-between items-start">
                {/* <img className="dstp-icon" src={dicon} alt="desktop-stack" /> */}
                <FontAwesomeIcon
                  icon={faGears}
                  flyinfglass-gear-icon
                  className=" dstp-icon text-white text-5xl"
                />
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
                  Experienced in Software deployment and third party
                  integrations, and also experienced in software automation and
                  Google Appscript, with over 3 years of experience
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
              className="first-section  border-2 border-grey bg-secondary_black w-[300px] h-[fixed]  flex flex-col gap-6 justify-start items-start p-6     md:hover:shadow-current  md:shadow-2xl md:hover:scale-110 transition-transform duration-300 transform-gpu   md:w-[400px]"
            >
              <section className="icon-text-con flex flex-row gap-5 justify-between items-start">
                {/* <img className="dstp-icon" src={dicon} alt="desktop-stack" /> */}
                <FontAwesomeIcon
                  icon={faSnowflake}
                  snow--icon
                  className=" dstp-icon text-white text-5xl"
                />
                <div className="2-text-section flex flex-col gap-2">
                  <tex className="font-semibold text-white  font-serif text-2xl">
                    <p> CMS</p>
                    <div className="border-[#21db91] border-4 w-[20vh]  md:w-[10vh]  lg:w-[20vh]   " />
                    <p>CDN-Js </p>
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
                  Hands on Experience crafting solutions with content delivery
                  networks like Wordpress, Wix and Webflow. lso experienced in
                  using cdn links to implement dynamic properties like AOS
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
