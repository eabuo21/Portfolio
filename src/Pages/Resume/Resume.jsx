import React, { useState, useEffect } from "react";
import ViewResume from "../../Components/Resume/ViewResume";
import DownloadResume from "../../Components/Resume/DownloadResume";

const Resume = () => {
  const handleScroll = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    handleScroll();
  }, [1]);

  return (
    <>
      <div className="resume-container p-2 bg-secondary_black h-screen  w-full  flex flex-col gap-6 justify-center items-center ">
        <ViewResume />
        <DownloadResume />
      </div>
    </>
  );
};
export default Resume;
