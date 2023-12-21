import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faFacebook,
  faLinkedin,
  faSkype,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const Feat = () => {
  return (
    <>
      <div className="feat-container flex flex-col justify-center items-center gap-2 p-2  ">
        <Link to="/">
          <div className="my-log p-2 bg-gradient-to-br from-red  to-violet-950 rounded-[50%] font-bold text-[32px] font-passion text-white">
            EA
          </div>
        </Link>
       

        <div className="icons-section flex flex-row gap-3 p-2 text-white font-bold text-2xl">
          <Link to="">
            <FontAwesomeIcon icon={faLinkedin} Linkedin-icon />
          </Link>
          <Link to="">
            <FontAwesomeIcon icon={faGithub} Github-icon />
          </Link>
          <Link to="">
            <FontAwesomeIcon icon={faSkype} Skype-icon />
          </Link>
          <Link to="">
            <FontAwesomeIcon icon={faFacebook} Facebook-icon />
          </Link>
        </div>

         <div className="copy-right-text text-white font-bold  font-serif text-2xl text-opacity-30">
          &copy; Emmanuel Abuo
        </div>
      </div>
    </>
  );
};
export default Feat;
