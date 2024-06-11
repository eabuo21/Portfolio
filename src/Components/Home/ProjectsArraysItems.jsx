import React from "react";
import Projectsx from "./Projects";
//projects images import
import Tholdings from "../../assets/images/Projects-pix/holdings.png";
import Ventures from "../../assets/images/Projects-pix/ventures.png";
import George from "../../assets/images/Projects-pix/georgecyber.png";
import Url from "../../assets/images/Projects-pix/Urld.png";
import Logbook from "../../assets/images/Projects-pix/logbook.jpg";
import Email1 from "../../assets/images/Projects-pix/abc1.png";
import Email2 from "../../assets/images/Projects-pix/abc2.png";
import Underdev from  "../../assets/images/Projects-pix/underdev.jpg";

const Cards = () => {
  const card = [
    {
      image: Tholdings,
      title: "Tongston Holdings ",
      //   desc: "A website for a business development company, implemented html5, css3, react-js and email js for form data collection, react-GA fr google analytics. perfect design implementation and  markup implementation modify and make professional",
      route: "https://tongston.com",
      route2: "https://github.com/eabuo21/T-holdings--Website",
      button: "View Website",
      button2: "View Code",
    },
    {
      image: Ventures,
      title: "Tongston Ventures ",
      // desc: "describtion sample",
      route: "https://t-ventures.tongston.com",
      route2: "https://github.com/eabuo21/T-Venyures-Website",
      button: "View Website",
      button2: "View Code",
    },
    {
      image: George,
      title: "George Cyber Clone ",
      // desc: "describtion sample",
      route: "https://eabuo21.github.io/GeorgeCyber.com/",
      route2: "https://github.com/eabuo21/GeorgeCyber.com",
      button: "View Website",
      button2: "View Code",
    },

    {
      image: Url,
      title: "Url Shortener",
      // desc: "describtion sample",
      route: "https://github.com/eabuo21/Url-Shorten",
      route2: "https://github.com/eabuo21/Url-Shorten",
      button: "View Website",
      button2: "View Code",
    },

    {
      image: Logbook,
      title: "E-Siwes",
      // desc: "describtion sample",
      route: "https://github.com/eabuo21/Final-Year-Bsc-Project",
      route2: "https://github.com/eabuo21/Final-Year-Bsc-Project",
      button: "View Website",
      button2: "View Code",
    },

    {
      image: Underdev,
      title: "SOSF Website",
      // desc: "describtion sample",
      route: "#",
      route2: "#",
      button: "View Website",
      button2: "View Code",
    },

    {
      image: Email2,
      title: "Email Migration for SOSF",
      // desc: "describtion sample",
      route: "*",
      route2: "*",
      button: "View Website",
      button2: "View Code",
    },

    {
      image: Email1,
      title: "Email Services for ABC Cortage",
      // desc: "describtion sample",
      route: "*",
      route2: "*",
      button: "Service",
    },

    {
      image: Email2,
      title: "Project Mgt  for ABC Cortage",
      // desc: "describtion sample",
      route: "*",
      route2: "*",
      button: "Service",
    },

    //   {
    //     image: "",
    //     title: "Title",
    //     desc: "describtion sample",
    //     route: "/",
    //     route2: '/',
    //     button: "View Website",
    //     button2: 'View Code',
    //   },

    //   {
    //     image: "",
    //     title: "Title",
    //     desc: "describtion sample",
    //     route: "/",
    //     route2: '/',
    //     button: "View Website",
    //     button2: 'View Code',
    //   },
  ];

  return (
    <div
      className="projects-items-container  flex flex-col justify-center items-center gap-7  p-2 
    md:flex md:flex-row  md:flex-wrap    "
    >
      {card.map((card, index) => (
        <div
          key={index}
          className="items-container-central  h-[fixed] shadow-current shadow-md  hover:scale-110 transition-transform duration-700 transform-gpu "
        >
          <Projectsx
            image={card.image}
            title={card.title}
            desc={card.desc}
            route={card.route}
            route2={card.route2}
            button={card.button}
            button2={card.button2}
          />
        </div>
      ))}
    </div>
  );
};
export default Cards;
