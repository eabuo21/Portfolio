import React from "react";
import ProDemo from "../../Components/Projects/ProDemo";
import Holdd from "../../assets/images/Projects-pix/Holdd.png";
import Ventd from "../../assets/images/Projects-pix/Ventd.png";
import Logbook from "../../assets/images/logbook.jpg";
import Urld from "../../assets/images/Projects-pix/Urld.png";

function Procards() {
  const Cards = [
    {
      image: Holdd,
      link2: "https://tongston.com",
      text: "Tongston Holdings",
      link: "/case_study",
    },

    {
      image: Ventd,
      link2: "https://t-ventures.tongston.com",
      text: "Tongston Ventures",
      link: "/case_study",
    },

    {
      image: Logbook,
      link2: "https://github.com/eabuo21/Final-Year-Bsc-Project",
      text: "Electronic Logbook ",
      link: "/case_study",
    },

    {
      image: Urld,
      link2: "https://github.com/eabuo21/Url-Shorten",
      text: "Url Shortener",
      link: "/case_study",
    },

  ];

  return (
    <>
      <div className="flex        flex-col  gap-9    justify-center items-center   md:flex-row md:flex-wrap md:gap-6  ">
        {Cards.map((card, index) => (
          <div
            data-aos="fade-in"
            data-aos-easing="ease-out-linear"
            data-aos-duration="1500"
            data-aos-mirror="true"
            data-aos-anchor-placement="center-bottom"
            data-aos-delay="50"
            data-aos-once="true"
            key={index}
            className=" "
          >
            <ProDemo
              image={card.image}
              link={card.link}
              text={card.text}
              link2={card.link2}
            />
          </div>
        ))}
      </div>
    </>
  );
}
export default Procards;
