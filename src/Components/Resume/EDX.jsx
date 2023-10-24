import React from "react";

const Education = () => {
  return (
    <>
      <div className="history-container  flex flex-col        ">
        <p className="text-black font-bold font-sans        md:text-2xl">
          EDUCATION
        </p>
        <hr className=" border-2"></hr>
        <div className="container-items  h-[fixed]   flex flex-row gap-1 justify-around w-full pb-4">
          <p className="text-black font-bold font-sans    md:w-[30%]   md:text-xl">
            Nov-2017
            <br />
            N0v-2022
          </p>
          <div className="flex flex-col gap-2 w-full ">
            <p className="text-black font-bold font-sans  w-full    md:text-2xl">
              BSC COMPUTER SCIENCE
            </p>
            <p className="text-black font-normal font-sans     md:text-2xl">
              Cross River University of Technology [CRUTECH] Calabar
            </p>
          </div>
        </div>
        {/*section 2 */}
        <div className="container-items  h-[fixed]   flex flex-row gap-1 justify-around w-full pb-4">
          <p className="text-black font-bold font-sans    md:w-[30%]   md:text-xl">
            Oct-2014
            <br />
            Mar-2015
          </p>
          <div className="flex flex-col gap-2 w-full ">
            <p className="text-black font-bold font-sans  w-full    md:text-2xl">
              Computer Operations [Diploma]
            </p>
            <p className="text-black font-normal font-sans     md:text-2xl">
              Sadem Computer Institute Akwa Ibom
            </p>
          </div>
        </div>

        {/*section 3 */}
        <div className="container-items  h-[fixed]   flex flex-row gap-1 justify-around w-full pb-4">
          <p className="text-black font-bold font-sans    md:w-[30%]   md:text-xl">
            Sept-2000 <br />
            July-2014
          </p>
          <div className="flex flex-col gap-2 w-full ">
            <p className="text-black font-bold font-sans  w-full    md:text-2xl">
              Senior Secondary Certificate Examination [SSCE]
            </p>
            <p className="text-black font-normal font-sans     md:text-2xl">
              Glado Computer Science College Okuku
            </p>
          </div>
        </div>

        <section className=" social-links section ">
          <p className="text-black font-bold font-sans        md:text-2xl">
            SOCIAL LINKS
          </p>
          <hr className=" border-2"></hr>
          <div className=" flex flex-col gap-4">
            <p className="text-black font-bold fot-sans text-xl text-left">
              Linkedin
            </p>
            <p>
              <a
                href="https://www.linkedin.com/in/emmanuel-abuo-b41453206"
                className="text-blue-600  font-cur hover:text-red hover:font-pap hover:scale-150 animate-pulse "
                target="_blank"
              >
                https://www.linkedin.com/in/emmanuel-abuo-b41453206
              </a>
            </p>
          </div>
        </section>
      </div>
    </>
  );
};
export default Education;
