import React from "react";
import { Link } from "react-router-dom";

const ProjectsShow = ({
  image,
  title,
  desc,
  route,
  route2,
  button,
  button2,
}) => {
  return (
    <>
      <div className=" flex flex-col justify-start items-start p-2 gap-4 w-full h-[fixed] ">
        <div
          className="all-items-container flex flex-col gap-6  w-full h-[fixed]  
        
        hover:border hover:border-[violet]   border border-black  md:border-none
        hover:transition-all hover:duration-700 hover:ease-in-out  hover:shadow-current hover:shadow-2xl  rounded-md"
        >
          <img
            className="project-image w-[300px] h-[200px] "
            src={image}
            alt="project image"
          />
          <h1 className="text-white font-bold font-dm text-white text-xl text-left">
            {title}
          </h1>
          <p className="text-white font-normal font-serif text-base text-left w-[20%]  ">
            {desc}
          </p>

          <div className="buttons-container flex  flex-row gap-2 w-[300px] h-[fixed] bg-black shadow-current shadow-2xl ">
            {/* button number 1 */}
            <Link to={route} className="w-full h-[50%]" target="_blank">
              <button className="project-view-button  h-[fixed] w-full p-8 rounded-md">
                <p
                  className="button-text-link text-white font-semibold font-sans text-[10px] md:text-sm  hover:text-blue-700
              "
                >
                  {button}
                </p>
              </button>
            </Link>

            {/* button number 2 */}

            <Link to={route2} className="w-full h-[50%]" target="_blank">
              <button className="project-view-button  h-[fixed] w-full p-8 rounded-md">
                <p
                  className="button-text-link text-white font-semibold font-sans  text-[10px] md:text-sm hover:text-blue-700
              "
                >
                  {button2}
                </p>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectsShow;

// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import Holdd from "../../assets/images/Projects-pix/Holdd.png";
// import Ventd from "../../assets/images/Projects-pix/Ventd.png";
// import Urld from "../../assets/images/Projects-pix/Urld.png";
// import Logbook from "../../assets/images/logbook.jpg";
// import Cyber from "../../assets/images/Projects-pix/georgecyber.png";
// const Projects = () => {
//   return (
//     <>
//       <div className="main-container  flex flex-col gap-2 justify-start items-start  mx-3 bg-secondary_black h-[fixed]  pb-9  ">
//         {/*project 1*/}

//         <div className="main-wrapper flex flex-col  gap-3    md:flex-row md:gap-0">
//           <div className="second-wrapper md:relative md:left-[2rem]  md:pb-16   md:flex-col  ">
//             <h1 className="heading-text pb-6  font-bold text-white font-serif text-[32px]      ">
//               Tongston Website
//             </h1>
//             <p className=" font-normal text-white text-base font-serif   pb-6  md:w-[65%]  md:text-xl  md:pb-6">
//               As a committed Frontend Developer, I played a key role in shaping
//               the Tongston website, translating the company's vision into
//               user-friendly interfaces. My contributions were instrumental in
//               aligning Tongston's online presence with their innovative spirit
//             </p>

//             <div className="buttons-section flex flex-row gap-3 pb-6 justify-start items-start   text-white text-base  md:gap-3  md:pb-6">
//               <Link to="https://tongston.com" target="_blank">
//                 <button
//                   className="p-3 w-[fixed] flex justify-center items-center  bg-gradient-to-r from-[red] to-[#6f0b6f] rounded-md
//                  hover:bg-gradient-to-r hover:from-blue-400  hover:to-blue-700 transition-colors ease-in-out duration-800  hover:transition-colors hover:ease-in-out hover:duration-800"
//                 >
//                   View Website
//                 </button>
//               </Link>

//               <Link to="https://tongston.netlify.app" target="blank">
//                 <button
//                   className=" gradient-border p-3 w-[fixed] flex justify-center items-center border border-t-red border-r-[#a122a1] border-b-[#a122a1]
//                 border-l-red rounded-md hover:border-t-blue-400  hover:border-l-blue-400  hover:border-b-blue-700 hover:border-r-blue-700"
//                 >
//                   View Demo
//                 </button>
//               </Link>
//             </div>
//             <section
//               className="impact-section flex flex-col justify-start items-start gap-1 border-l-grey border border-r-0 border-t-0 border-b-0  h-[15vh]
//              pt-8 p-3  pb-16  md:flex-row"
//             >
//               <div className="impact-text-percentage flex flex-col gap-1 justify-center items-start text-white font-serif font-semibold text-4xl">
//                 <h3>40%</h3>
//                 <p className="text-base">Increase in SEO ranking</p>
//               </div>
//             </section>
//           </div>

//           <div className="flex flex-row gap-0 justify-start items-start     md:relative md:mr-[8rem]  md:w-full ">
//             <img
//               className="project-image h-[177px] w-[400px]   pb-9    md:w-[473px] md:h-[250px]"
//               src={Holdd}
//               alt="project-image  "
//             />
//           </div>
//         </div>

//         {/*project 2*/}
//         <div className="main-wrapper flex flex-col gap-3 md:flex-row-reverse  md:gap-8    md:pb-16 ">
//           <div className="second-wrapper md:relative md:left-[2rem]     md:ml-[15rem] ">
//             <h1 className="heading-text pb-6  font-bold text-white font-serif text-[32px] ">
//               Tongston Ventures Website
//             </h1>
//             <p className=" font-normal text-white text-base font-serif  pb-6   md:w-[75%]  md:text-xl    md:pb-6 ">
//               As a committed Software Developer, I played a key role in the
//               Development of the Tongston-Ventures website, translating the
//               company's vision into user-friendly interfaces. My contributions
//               were instrumental in aligning Tongston's online presence with
//               their innovative spirit
//             </p>

//             <div className="buttons-section flex flex-row gap-1 justify-start items-start   text-white text-base gap-3 pb-6   md:gap-3  md:pb-6 ">
//               <Link to="https://t-ventures.tongston.com" target="_blank">
//                 <button
//                   className="p-3 w-[fixed] flex justify-center items-center  bg-gradient-to-r from-[red] to-[#6f0b6f] rounded-md
//                  hover:bg-gradient-to-r hover:from-blue-400  hover:to-blue-700 transition-colors ease-in-out duration-800
//                   hover:transition-colors hover:ease-in-out hover:duration-800 "
//                 >
//                   View Website
//                 </button>
//               </Link>

//               <Link to="https://tongston-ventures.netlify.app" target="blank">
//                 <button
//                   className=" gradient-border p-3 w-[fixed] flex justify-center items-center border border-t-red border-r-[#a122a1]
//                 border-b-[#a122a1] border-l-red rounded-md
//                 hover:border-l-blue-400  hover:border-b-blue-700 hover:border-r-blue-700 hover:border-t-blue-400"
//                 >
//                   View Demo
//                 </button>
//               </Link>
//             </div>
//             <section
//               className="impact-section flex flex-col justify-start items-start gap-1 border-l-grey border border-r-0 border-t-0 border-b-0
//              h-[15vh]  pt-8 p-3  pb-16  md:flex-row"
//             >
//               <div className="impact-text-percentage flex flex-col gap-1 justify-center items-start text-white font-serif font-semibold text-4xl">
//                 <h3>95%</h3>
//                 <p className="text-base">
//                   Increase in Web Security & Visibility(SEO- Ranking)
//                 </p>
//               </div>
//             </section>
//           </div>

//           <div className="flex flex-row gap-0 justify-start items-start  w-full       md:relative   md:p-4  ">
//             <img
//               className="project-image h-[177px] w-[400px]  pb-9      md:w-[473px] md:h-[250px] "
//               src={Ventd}
//               alt="project-image"
//             />
//           </div>
//         </div>

//         {/*project 3*/}
//         <div className="main-wrapper flex flex-col gap-3 md:flex-row  md:gap-8   md:pb-16 ">
//           <div className="second-wrapper md:relative  md:left-[2rem]">
//             <h1 className="heading-text pb-6  font-bold text-white font-serif text-[32px] ">
//               E-Logbook for SIWES
//             </h1>
//             <p className=" font-normal text-white text-base font-serif  pb-6   md:w-[65%]  md:text-xl  md:pb-6 ">
//               As my final year project, the SIWES Electronic Logbook showcases
//               my dedication to innovating student industrial training. Developed
//               with PHP and MySQL, it ensures secure digital logging and fosters
//               seamless intern-supervisor interaction
//             </p>

//             <div className="buttons-section flex flex-row gap-1 justify-start items-start   gap-3 pb-6  text-white text-base md:pb-6">
//               <Link
//                 to="https://github.com/eabuo21/Final-Year-Bsc-Project"
//                 target="_blank"
//               >
//                 <button
//                   className="p-3 w-[fixed] flex justify-center items-center  bg-gradient-to-r from-[red] to-[#6f0b6f] rounded-md
//                  hover:bg-gradient-to-r hover:from-blue-400  hover:to-blue-700 transition-colors ease-in-out duration-800
//                   hover:transition-colors hover:ease-in-out hover:duration-800  "
//                 >
//                   View Code
//                 </button>
//               </Link>
//             </div>

//             <section
//               className="impact-section flex flex-col justify-start items-start gap-1 border-l-grey border border-r-0 border-t-0 border-b-0
//              h-[15vh]  pt-8 p-3  pb-16  md:flex-row"
//             >
//               <div className="impact-text-percentage flex flex-col gap-1 justify-center items-start text-white font-serif font-semibold text-4xl">
//                 <h3>80%</h3>
//                 <p className="text-base">
//                   Increase in Supervisor-Intern Experience
//                 </p>
//               </div>
//             </section>
//           </div>
//           <div className="flex flex-row gap-0 justify-start items-start  w-full        md:relative md:mr-[8rem]  md:w-full    ">
//             <img
//               className="project-image h-[177px] w-[400px]  pb-9        md:w-[473px] md:h-[250px]   "
//               src={Logbook}
//               alt="project-image"
//             />
//           </div>
//         </div>

//         {/*project 4*/}
//         <div className="main-wrapper flex flex-col gap-3 md:flex-row-reverse  md:gap-8   md:pb-16  ">
//           <div className="second-wrapper md:relative       md:ml-[15rem]">
//             <h1 className="heading-text pb-6  font-bold text-white font-serif text-[32px] ">
//               Url Shortener With Qr Code
//             </h1>
//             <p className=" font-normal text-white text-base font-serif   pb-6  md:w-[75%]  md:text-xl  md:pb-6">
//               Discover simplicity with our advanced URL Shortener—transform
//               lengthy web addresses into concise links. Share seamlessly,
//               embracing clear and efficient messaging for an elevated online
//               presence
//             </p>

//             <div className="buttons-section flex flex-row gap-1 justify-start items-start   text-white text-base  pb-6   md:pb-6">
//               <Link to="https://github.com/eabuo21/Url-Shorten" target="_blank">
//                 <button
//                   className="p-3 w-[fixed] flex justify-center items-center  bg-gradient-to-r from-[red] to-[#6f0b6f] rounded-md
//                  hover:bg-gradient-to-r hover:from-blue-400  hover:to-blue-700 transition-colors ease-in-out duration-800
//                   hover:transition-colors hover:ease-in-out hover:duration-800  "
//                 >
//                   View Code
//                 </button>
//               </Link>
//             </div>
//             <section
//               className="impact-section flex flex-col justify-start items-start gap-1 border-l-grey border border-r-0 border-t-0 border-b-0
//              h-[15vh]  pt-8 p-3  pb-16  md:flex-row"
//             >
//               <div className="impact-text-percentage flex flex-col gap-1 justify-center items-start text-white font-serif font-semibold text-4xl">
//                 <h3>100%</h3>
//                 <p className="text-base">Link-Qr-Shortening Efficiency</p>
//               </div>
//             </section>
//           </div>
//           <div className="flex flex-row gap-0 justify-start items-start  w-full       md:relative   md:p-4  ">
//             <img
//               className="project-image h-[177px] w-[400px]  pb-9        md:w-[473px] md:h-[250px]"
//               src={Urld}
//               alt="project-image"
//             />
//           </div>
//         </div>

//         {/*project 5
//         <div

//           className="main-wrapper flex flex-col gap-3 md:flex-row  md:gap-8   "
//         >
//           <div className="second-wrapper md:relative     md:left-[2rem]">
//             <h1 className="heading-text pb-6  font-bold text-white font-serif text-[32px] ">
//               Url Shortener With Qr Code
//             </h1>
//             <p className=" font-normal text-white text-base font-serif    md:w-[65%]  md:text-xl">
//               As a dedicated Frontend Developer, I had the privilege of
//               contributing to the creation of the Tongston website. I brought to
//               life the vision of this dynamic company by crafting user-friendly
//               interfaces. I played a pivotal role in making Tongston's online
//               presence a true reflection of their innovative spirit.
//             </p>

//             <div className="buttons-section flex flex-row gap-1 justify-start items-start   text-white text-base">
//               <Link to="#">
//                 <button className="p-3 w-[fixed] flex justify-center items-center  bg-gradient-to-r from-[red] to-[#6f0b6f] rounded-md ">
//                   View Demo
//                 </button>
//               </Link>
//             </div>
//             <section className="impact-section flex flex-col justify-start items-start gap-1 border-l-grey border border-r-0 border-t-0 border-b-0  h-[15vh]  pt-8 p-3  pb-16  md:flex-row">
//               <div className="impact-text-percentage flex flex-col gap-1 justify-center items-start text-white font-serif font-semibold text-4xl">
//                 <h3>8%</h3>
//                 <p className="text-base">Increase in SEO ranking</p>
//               </div>
//             </section>
//           </div>

//           <div className="flex flex-row gap-0 justify-start items0-start  w-full         md:relative md:mr-[8rem]  md:w-full ">
//             <img
//               className="project-image h-[177px] w-[auto]  pb-9        md:w-[473px] md:h-[250px] "
//               src={Urld}
//               alt="project-image"
//             />
//           </div>

//         </div>
//   */}

//         <div className="main-wrapper flex flex-col  gap-3    md:flex-row md:gap-0">
//           <div className="second-wrapper md:relative md:left-[1rem]  md:pb-16   md:flex-col  ">
//             <h1 className="heading-text pb-6  font-bold text-white font-serif text-[32px]      ">
//               GeorgeCyber2000 Website
//             </h1>
//             <p className=" font-normal text-white text-base font-serif   pb-6  md:w-[65%]  md:text-xl  md:pb-6">
//               As a committed Frontend Developer, I played a key role in shaping
//               the GeorgeCyber2000 website, translating the company's vision into
//               user-friendly interfaces. My contributions were instrumental in
//               aligning GeorgeCyber2000's online presence with their innovative
//               spirit
//             </p>

//             <div className="buttons-section flex flex-row gap-3 pb-6 justify-start items-start   text-white text-base  md:gap-3  md:pb-6">
//               <Link to="#" target="_blank">
//                 <button
//                   className="p-3 w-[fixed] flex justify-center items-center  bg-gradient-to-r from-[red] to-[#6f0b6f] rounded-md
//                  hover:bg-gradient-to-r hover:from-blue-400  hover:to-blue-700 transition-colors ease-in-out duration-800  hover:transition-colors hover:ease-in-out hover:duration-800"
//                 >
//                   View Website
//                 </button>
//               </Link>

//               <Link to="https://eabuo21.github.io/GeorgeCyber.com/" target="blank">
//                 <button
//                   className=" gradient-border p-3 w-[fixed] flex justify-center items-center border border-t-red border-r-[#a122a1] border-b-[#a122a1]
//                 border-l-red rounded-md hover:border-t-blue-400  hover:border-l-blue-400  hover:border-b-blue-700 hover:border-r-blue-700"
//                 >
//                   View Demo
//                 </button>
//               </Link>
//             </div>
//             <section
//               className="impact-section flex flex-col justify-start items-start gap-1 border-l-grey border border-r-0 border-t-0 border-b-0  h-[15vh]
//              pt-8 p-3  pb-16  md:flex-row"
//             >
//               <div className="impact-text-percentage flex flex-col gap-1 justify-center items-start text-white font-serif font-semibold text-4xl">
//                 <h3>40%</h3>
//                 <p className="text-base">Increase in SEO ranking</p>
//               </div>
//             </section>
//           </div>

//           <div className="flex flex-row gap-0 justify-start items-start    md:relative md:mr-[4rem]  md:w-full ">
//             <img
//               className="project-image h-[177px] w-[400px]   pb-9    md:w-[473px] md:h-[250px]"
//               src={Cyber}
//               alt="project-image  "
//             />
//           </div>
//         </div>

//         <div
//           data-aos="fade-up"
//           data-aos-easing="ease-in-linear"
//           data-aos-duration="3000"
//           data-aos-anchor-placement="bottom-bottom"
//           data-aos-delay="50"
//           data-aos-once="true"
//           data-aos-debounce="1"
//           className="more-projects-button flex flex-col justify-center items-center text-transparent
//            bg-clip-text bg-gradient-to-r from-[red] via-[red] to-[#d007d0] text-2xl font-bold font-serif w-full"
//         >
//           <Link to="/projects">See more projects</Link>
//         </div>
//       </div>
//     </>
//   );
// };
// export default Projects;
