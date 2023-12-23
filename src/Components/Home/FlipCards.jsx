import React from "react";
import FlipCards from "../../Components/Home/Flip";
import Nipc from "../../assets/images/nipc.jpeg";
import Coffey from "../../assets/images/coffeycrown.png";
import Tongs from "../../assets/images/tlogo.png";

function Cards() {
  const card = [
    {
      frontTitle: Nipc,
      Description: "Nigerian Investment Promotion  Commission Abuja",
      backContent:
        "My journey in the tech world has been marked by a deep expertise in frontend software development, ensuring that user experiences are not only seamless but exceptional.",
    },

    {
      frontTitle: Coffey,
      Description: "CoffeyCrown Healthcare Services Toronto ON",
      backContent:
        "I am committed to achieving results and have consistently demonstrated my ability to meet and exceed project goals and deadlines.",
    },

    {
      frontTitle: Tongs,
      Description: "Tongston Entrepreneurship group Abuja",
      backContent:
        "Adept at project management, I have a track record of successfully leading teams to create and deliver outstanding software solutions.",
    },
    {
      frontTitle: Nipc,
      Description: "B-J Technologies Calabar",
      backContent:
        "I am not only a professional but also a true tech enthusiast, staying at the forefront of emerging technologies to ensure my clients receive the best solutions.",
    },
  ];

  return (
    <div className=" flex flex-col gap-5  justify-center items-center                           md:justify-center md:flex-row md:flex-wrap  ">
      {card.map((card, index) => (
        <div
          data-aos="zoom-out-up"
          data-aos-easing="ease-in-linear"
          data-aos-duration="3000"
          data-aos-anchor-placement="top-center"
          data-aos-delay="50"
          data-aos-once="true"
          key={index}
          className=" "
        >
          <FlipCards
            frontTitle={card.frontTitle}
            Description={card.Description}
            backContent={card.backContent}
          />
        </div>
      ))}
    </div>
  );
}
export default Cards;
