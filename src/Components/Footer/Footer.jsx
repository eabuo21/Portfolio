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
  const CurrentYear = new Date().getUTCFullYear();
  return (
    <>
      <div className="feat-container flex flex-col justify-center items-center gap-2 p-2  ">
        <Link to="/">
          <div className="my-log p-2 bg-gradient-to-br from-red  to-violet-950 rounded-[50%] font-bold text-[32px] font-passion text-white">
            EA
          </div>
        </Link>

        <div className="icons-section flex flex-row gap-3 p-2 text-white font-bold text-2xl">
          <Link
            to="https://linkedin.com/in/emmanuel-abuo-b41453206

"
            target="_blank"
          >
            <FontAwesomeIcon icon={faLinkedin} Linkedin-icon />
          </Link>
          <Link to="https://github.com/eabuo21" target="_blank">
            <FontAwesomeIcon icon={faGithub} Github-icon />
          </Link>
          <Link to="https://join.skype.com/invite/OU5I1nkewm74" target="_blank">
            <FontAwesomeIcon icon={faSkype} Skype-icon />
          </Link>
          <Link to="https://www.facebook.com/praise.lynx.12" target="_blank">
            <FontAwesomeIcon icon={faFacebook} Facebook-icon />
          </Link>
        </div>

        <div className="copy-right-text text-white font-bold  font-serif text-2xl text-opacity-30">
          &copy; Emmanuel Abuo {CurrentYear}
        </div>
      </div>
    </>
  );
};
export default Feat;
