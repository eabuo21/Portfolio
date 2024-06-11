import React from "react";
import FlipCards from "../../Components/Home/Flip";
import Nipc from "../../assets/images/nipc.jpeg";
import Coffey from "../../assets/images/coffeycrown.png";
import Tongs from "../../assets/images/tlogo.png";
import Bj from "../../assets/images/bjtech.jpeg";

function Cards() {
  const card = [

    {
      frontTitle: Tongs,
      Description: " IT Graduate Officer/ Web Developer ",
      backContent:
        "Tongston, a multi-award-winning group, specializes in entrepreneurial education, enterprise, finance, and media, using technology to drive global sustainable socio-economic development for individuals, government, and institutions. I am a dual-role IT Graduate Consultant Officer and Web Developer at Tongston.",
    },

    {
      frontTitle: Coffey,
      Description: "Web Developer /Social Media Manager",
      backContent:
        "CoffeyCrown excels in turnkey staffing solutions, enabling clients to focus on their core business. I served as a Web Developer and Social Media Manager for 9 months under a contract..",
    },

    {
      frontTitle: Bj,
      Description: "Web Developer /IT Consultant",
      backContent:
        "BJ Technologies is an award-winning IT firm specializing in crafting software solutions and implementing IT projects for clients and governments. I served as a Web Developer and IT Consultant for one year.",
    },

    {
      frontTitle: Nipc,
      Description: "Technical Support Engr (SIWES)",
      backContent:
        "I interned at the Nigerian Investment Promotion Commission for six months. The commission, established by the Nigerian Investment Promotion Act Chapter N117 Laws of the Federation of Nigeria 2004, aims to encourage, promote, and coordinate investments in the Nigerian economy.",
    },

 

  

  
  ];

  return (
    <div className=" flex flex-col gap-5  justify-center items-center  lg:grid lg:grid-cols-4                         md:justify-center md:flex-row md:flex-wrap  ">
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
