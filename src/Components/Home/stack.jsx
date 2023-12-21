import React from "react";
import Stackbg from "../../assets/images/devbg.png";
import dicon from "../../assets/icons/pcicon.png";
import Reacticon from "../../assets/icons/reacticon.png";

const Stack = () => {
  return (
    <>
      <div
        className="stack-section flex flex-col justify-center items-center  mr-6 ml-6  pt-7"
        style={{
          background: `url(${Stackbg})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "75vh",
        }}
      >
        <section className="stack-section-flex flex flex-col p-2 gap-10     md:flex-row md:gap-0 ">
          <div className="first-section  border-2 border-grey bg-secondary_black w-[300px] h-[fixed]  flex flex-col gap-6 justify-start items-start p-6">
            <section className="icon-text-con flex flex-row gap-5 justify-between items-start">
              <img className="dstp-icon" src={dicon} alt="desktop-stack" />
              <div className="2-text-section flex flex-col gap-2">
                <tex className="font-semibold text-white  font-serif text-2xl">
                  <p> Software</p>
                  <div className="border-[#930e93] border-4 w-[20vh] " />
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
                Experienced in both functional and OOP: MySql, and JavaScript,
              </p>
            </section>
          </div>
          {/*section 2*/}

          <div className="first-section  border-2 border-grey bg-secondary_black w-[300px] h-[fixed]  flex flex-col gap-6 justify-start items-start p-6">
            <section className="icon-text-con flex flex-row gap-5 justify-between items-start">
              <img className="dstp-icon" src={Reacticon} alt="desktop-stack" />
              <div className="2-text-section flex flex-col gap-2">
                <tex className="font-semibold text-white  font-serif text-2xl">
                  <p> Frontend Dev</p>
                  <div className="border-[#4129cb] border-4 w-[20vh] " />
                  <p>React, NextJS</p>
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
                Over 2 years of development experience in HTML, CSS, JS and
                React
              </p>
            </section>
          </div>
        </section>
      </div>
    </>
  );
};
export default Stack;
