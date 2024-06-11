import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const BackTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="back-to--container flex flex-col gap-2 justify-center items-center p-2">
        <Link
          to="#" onClick={()=>scrollToTop()}
          className="text-white font-normal font-serif text-xl flex flex-col gap-2"
        >
          <FontAwesomeIcon
            icon={faChevronUp}
            className=" arrow-up text-white font-bold text-2xl animate-bounce transition-all ease-in-out duration-900"
          />
          Back to top
        </Link>
      </div>
    </>
  );
};
export default BackTop;
