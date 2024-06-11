import React from "react";
import { Link } from "react-router-dom";
import Resume  from "../../assets/files/Emmanuel-Abuo-Resume.pdf";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

function DownloadResume() {
  // const handleDownload = () => {
  //   //here we create a virtual link to the file of which to be downloaded
  //   const a = document.createElement("a");
  //   a.href = "/file/AbuoEmmanuelCv.pdf";
  //   a.download = "AbuoEmmanuelCv.pdf";
  //   document.body.appendChild(a);
  //   a.click();
  //   document.body.removeChild(a);
  // };
  return (
    <>
      <div className="  ">
        <button
          // onClick={handleDownload}
          
          className="bg-gradient-to-br from-red to-[#900690] p-3 w-[45vh] h-[10vh] rounded-md  text-white font-bold font-serif text-xl
                hover:bg-gradient-to-br  hover:from-blue-200 hover:to-blue-700"
        >
          <a href={Resume} download>
             Download  <FontAwesomeIcon icon={faDownload} />
          </a>
         
        </button>
      </div>
    </>
  );
}
export default DownloadResume;
