import React from "react";
import ProDemo from "../../Components/Projects/ProDemo";
import Tongston from "../../assets/images/tongston.png";

function Procards() {
  const Cards = [
    {
      image: Tongston,
      link2: "",
      text: "View Case Study",
      link: "/case_study",
    },

    {
      image: Tongston,
      link2: "",
      text: "View Case Study",
      link:"/case_study",
    },

    {
      image: Tongston,
      link2: "",
      text: "View Case Study",
      link:"/case_study",
    },

    {
      image: Tongston,
      link2: "",
      text: "View Case Study",
      link:"/case_study",
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
