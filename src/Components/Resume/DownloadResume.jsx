import React from "react";
import { Link } from "react-router-dom";
import CV from "../../assets/file/Abuo Emmanuel Cv.pdf";

function DownloadResume() {
  const handleDownload = () => {
    //here we create a virtual link to the file of which to be downloaded
    const a = document.createElement("a");
    a.href =
      "/src/assets/file/Abuo Emmanuel Cv.pdf ";
    a.download = "Abuo Emmanuel Cv.pdf";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };
  return (
    <>
      <div className="  ">
        <button
          onClick={handleDownload}
          className="bg-gradient-to-br from-red to-[#900690] p-3 w-[45vh] h-[10vh] rounded-md  text-white font-bold font-serif text-xl
                hover:bg-gradient-to-br  hover:from-blue-200 hover:to-blue-700"
        >
          Download Resume
        </button>
      </div>
    </>
  );
}
export default DownloadResume;
