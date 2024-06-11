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


      {/* <div className="items-container-projects  flex flex-col justify-start items-start p-2 gap-4 w-full h-[fixed] ">
        <div
          className="all-items-container flex flex-col gap-6  w-full h-[fixed]  
        
        hover:border hover:border-[violet]  
        hover:transition-all hover:duration-700 hover:ease-in-out  hover:shadow-current hover:shadow-2xl  rounded-md"
        >
          <img
            className="project-image-flip w-[300px] h-[200px] "
            src={image}
            alt="project image"
          />
          <h1 className="text-white font-bold font-dm text-white text-xl text-left">
            {title}
          </h1>
          <p className=" describtion-text-container text-white font-normal font-serif text-base text-left w-[20%]  ">
            {desc}
          </p> */}


      <div className="items-container-projects flex flex-col justify-start items-start p-2 gap-4 w-full h-[fixed]">
        <div className="all-items-container border border-black  flex flex-col gap-6 w-full h-[fixed] hover:border hover:border-[violet] hover:transition-all hover:duration-700 hover:ease-in-out hover:shadow-current hover:shadow-2xl rounded-md
        md:border-none
        ">
         
          <div className="front">
            <img
              className="project-image-flip w-[300px] h-[200px]"
              src={image}
              alt="project image"
            />
            <h1 className="text-white font-bold font-dm text-white text-xl text-left">
              {title}
            </h1>
          </div>
          <div className="back  flex flex-col justify-start items-start px-4 pt-4">
            <p className="describtion-text-container text-white font-normal font-serif text-[13.2px] text-center w-full ">
              {desc}
            </p>
          </div>

          <div className="buttons-container flex  flex-row gap-2 w-[300px] h-[fixed] bg-black shadow-current shadow-2xl ">
            {/* button number 1 */}
            <Link to={route} className="button-link-name  w-full h-[50%]" target="_blank">
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

            <Link to={route2} className="button-link-name w-full h-[50%]" target="_blank">
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

// import React from "react";
// import { Link } from "react-router-dom";

// const ProDemo = ({ image, text, link, link2 }) => {
//   return (
//     <>
//       <div className="projects-demo-container flex flex-col gap-4 justify-center items-start ">
//        <div className="container-background bg-blue-400 p-2 flex flex-col justify-start items-start  rounded-md">
//         <Link to={link2} target="_blank">

//         <img
//           className="project-image w-full h-auto pb-2  rounded-md md:w-[350px]     lg:w-[550px]"
//           src={image}
//           alt="projects-image"
//           />
//         </Link>
//         </div>
//         <div className="flex flex-row gap-2 mx-3">
//           <Link to={link} className="flex flex-row gap-2 text-white font-bold ">
//             <h3 className="text-white font-bold text-xl font-serif  hover:text-red hover:transition-all hover:ease-in-out hover:duration-1000 ease-in-out duration-1000 transition-all">{text}</h3>
//             <span className="slant-arrow  transform -rotate-45 ">
//               &rarr;{" "}
//             </span>
//           </Link>
//         </div>
//       </div>
//     </>
//   );
// };
// export default ProDemo;
