import React, { useState, useEffect } from "react";
import ViewResume from "../../Components/Resume/ViewResume";
import DownloadResume from "../../Components/Resume/DownloadResume";
import Cvbg from "../../assets/images/Projects-pix/cv.jpg";

const Resume = () => {
  const handleScroll = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    handleScroll();
  }, [1]);

  return (
    <>
      <div
        className="resume-container bg-norepeat  p-2 bg-secondary_black h-screen  w-full  flex flex-col gap-6 justify-center items-center "
        style={{
          background: `linear-gradient(rgba(4, 1, 0, 0.9), rgba(4, 1, 0, 0.9)), url(${Cvbg})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <ViewResume />
        <DownloadResume />
      </div>
    </>
  );
};
export default Resume;
