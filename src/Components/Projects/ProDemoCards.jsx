import React from "react";
import ProDemo from "../../Components/Projects/ProDemo";
import Tongston from "../../assets/images/tongston.png";

function Procards() {
  const Cards = [
    {
      image: Tongston,
      text: "Tonngston",
      link: "#",
    },

    {
      image: Tongston,
      text: "Demo",
      link: "#",
    },

    {
      image: Tongston,
      text: "Demo",
      link: "#",
    },

    {
      image: Tongston,
      text: "Demo",
      link: "#",
    },
  ];

  return (
    <>
      <div className="flex        flex-col  gap-3    justify-center items-center     ">
        {Cards.map((card, index) => (
          <div key={index} className=" ">
            <ProDemo image={card.image} link={card.link} text={card.text} />
          </div>
        ))}
      </div>
    </>
  );
}
export default Procards;
