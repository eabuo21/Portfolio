import React, { useState } from "react";
import CardFlip from "react-card-flip";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const FlipCard = ({ frontTitle, Description, backContent }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <CardFlip
      isFlipped={isFlipped}
      flipDirection="vertical"
      flipSpeedFrontToBack={2}
      flipSpeedBackToFront={2}
      flipOnHover={true}
      wrapperStyle={{ border: "1px solid #ccc" }}
      frontStyle={{ backgroundColor: "#3498db" }}
      backStyle={{ backgroundColor: "#e74c3c" }}
      perspective={2000}
      clickAction="click"
    >
      <div
        onClick={handleCardFlip}
        className="front-card  w-[300px] h-[260px]  bg-gradient-to-b from-black  to-black   border-t-red border-l-red  border-b-violet-950  border-r-violet-950 justify-center items-center  flex cursor-pointer rounded-md shadow-current shadow-xl md:w-[40vh] "
      >
        <div className="image-container w-full flex flex-col gap-3 justify-center items-center p-1 ">
          <img
            className="rounded-[50%] w-[150px] h-[150px] shadow-current shadow-xl "
            src={frontTitle}
            alt="testimonial-image"
          />

          <FontAwesomeIcon
            icon={faChevronUp}
            arrow-up
            className="text-white  text-xl transition-all ease-in-out duration-1000 animate-bounce font-bold"
          />
        </div>
      </div>

      <div
        onClick={handleCardFlip}
        className="back-card  w-[300px] h-[260px] bg-black justify-center items-center flex flex-col gap-2 cursor-pointer rounded-md shadow-current shadow-lg  md:w-[40vh]"
      >
        <h2 className=" font-passion text-white font-bold text-base  text-center">
          {Description}
        </h2>
        <p className="text-white text-center font-serif  text-sm  ">
          {backContent}
        </p>
        <FontAwesomeIcon
          icon={faChevronDown}
          arrow-down
          className="text-red  text-xl transition-all ease-in-out duration-1000 animate-bounce font-bold"
        />
      </div>
    </CardFlip>
  );
};

export default FlipCard;
