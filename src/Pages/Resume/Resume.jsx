import React from "react";
import ViewResume from "../../Components/Resume/ViewResume";
import DownloadResume from "../../Components/Resume/DownloadResume";

const Resume = () => {
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
