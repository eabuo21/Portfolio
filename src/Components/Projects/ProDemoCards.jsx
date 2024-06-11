import React from "react";
import ProDemo from "../../Components/Projects/ProDemo";
// Dynamic images import for the projects completed
import Holdings from "../../assets/images/Projects-pix/holdings.png";
import Ventures from "../../assets/images/Projects-pix/ventures.png";
import George from "../../assets/images/Projects-pix/georgecyber.png";
import Url from "../../assets/images/Projects-pix/Urld.png";
import Logbook from "../../assets/images/Projects-pix/logbook.jpg";
import Email1 from "../../assets/images/Projects-pix/abc1.png";
import Email2 from "../../assets/images/Projects-pix/abc2.png";
import Undercon from "../../assets/images/Projects-pix/underdev.jpg";

const Cards = () => {
  const card = [
    {
      image: Holdings,
      title: "Tongston Holdings ",
      desc: "This website was crafted for a business development company, utilizing HTML5, CSS3, React.js, Email.js for form data collection, and React-GA for Google Analytics integration. It showcases impeccable design and markup implementation.",
      route: "https://tongston.com",
      route2: "https://github.com/eabuo21/T-holdings--Website",
      button: "View Website",
      button2: "View Code",
    },
    {
      image: Ventures,
      title: "Tongston Ventures ",
      desc: "This bespoke website was developed for a prominent business development firm based in Nigeria, aimed at highlighting its brand and extending its organizational reach. Leveraging HTML5, CSS3, and Tailwind CSS, alongside tools such as Email.js for efficient form data management, Google reCAPTCHA for enhanced security against bots, and React-GA for insightful Google Analytics integration, the platform stands as a testament to modern web development standards. ",
      route: "https://t-ventures.tongston.com",
      route2: "https://github.com/eabuo21/T-Venyures-Website",
      button: "View Website",
      button2: "View Code",
    },
    {
      image: George,
      title: "George Cyber Clone ",
      desc: "This project involved creating a website replica as a reference for a cybersecurity company in Canada. Built using WordPress and Elementor, it served as a blueprint for the final website design.",
      route: "https://eabuo21.github.io/GeorgeCyber.com/",
      route2: "https://github.com/eabuo21/GeorgeCyber.com",
      button: "View Website",
      button2: "View Code",
    },

    {
      image: Url,
      title: "Url Shortener",
      desc: "In this project, I crafted a sophisticated URL shortening web application. Utilizing HTML5 for robust markup, Tailwind CSS for elegant styling, and React JS for seamless client-side implementation, I ensured a polished user experience. Integration of the Bitly API facilitated efficient link shortening, while the incorporation of React QR Code enabled instant QR code generation for simplified sharing and scanning.",
      route: "https://github.com/eabuo21/Url-Shorten",
      route2: "https://github.com/eabuo21/Url-Shorten",
      button: "View Website",
      button2: "View Code",
    },

    {
      image: Logbook,
      title: "E-Siwes",
      desc: "This marks the culmination of my final year project at the university. The goal was to develop an electronic logbook tailored for SIWES (Students Industrial Work Experience Scheme) participants in higher education institutions, streamlining their activities. The project was meticulously constructed with HTML5 and CSS3 for frontend design, PHP for server-side management, MySQL for database integration, and PHPMyAdmin for efficient database administration.",
      route: "https://github.com/eabuo21/Final-Year-Bsc-Project",
      route2: "https://github.com/eabuo21/Final-Year-Bsc-Project",
      button: "View Website",
      button2: "View Code",
    },


    {
      image: Undercon,
      title: "SOSF Website",
      desc: "Under Development",
      route: "*",
      route2: '*',
      button: "View Website",
      button2: 'View Code',
    },

    {
      image: Email2,
      title: "Email Migration for SOSF",
      desc: "This project was undertaken for a professional body based in Abuja, Nigeria. The primary objective was to seamlessly migrate their email services and server infrastructure to a new platform. Initially hosted on cPanel with email services through Webmail, the task involved transitioning their emails and mail server to Zoho Mail. The project was successfully executed within a week, ensuring minimal disruption to their communication channels.",
      route: "*",
      route2: "*",
      button: "View Website",
      button2: "View Code",
    },

    {
      image: Email1,
      title: "Email Services for ABC Cortage",
      desc: "This project was initiated for a multidisciplinary organization headquartered in Abuja, Nigeria. The primary goal was to establish a robust mail server and email infrastructure to enhance organizational communication with both clients and team members. Zoho Mail servers were selected for their cost-effectiveness and seamless integration capabilities with various third-party tools and services. The project was efficiently concluded within a week, ensuring smooth operational continuity for the organization.",
      route: "*",
      route2: "*",
      button: "Service",
    },

    {
      image: Email2,
      title: "Project Mgt  for ABC Cortage",
      desc: "This project aimed to implement a project management solution for ABC Multidisciplinary Consulting Services in Abuja, Nigeria. Using Zoho Projects and its suite of applications, including Connect, Cliq, and Tasks, we enhanced team collaboration and streamlined project management processes to improve efficiencies and track project progress. This cost-effective solution was seamlessly completed in under a week.",
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
  ];

  return (
    <div
      className="projects-items-container  flex flex-col justify-center items-center gap-7  p-2 
    md:flex md:flex-row  md:flex-wrap   "
    >
      {card.map((card, index) => (
        <div
          key={index}
          className="items-container-central  h-[fixed] shadow-current shadow-md  hover:scale-110 transition-transform duration-700 transform-gpu "
        >
          <ProDemo
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

// function Procards() {
//   const Cards = [
//     {
//       image: Holdd,
//       link2: "https://tongston.com",
//       text: "Tongston Holdings",
//       link: "/case_study",
//     },

//     {
//       image: Ventd,
//       link2: "https://t-ventures.tongston.com",
//       text: "Tongston Ventures",
//       link: "/t-ventures_case_study",
//     },

//     {
//       image: Logbook,
//       link2: "https://github.com/eabuo21/Final-Year-Bsc-Project",
//       text: "Electronic Logbook ",
//       link: "/e-logbook_case_study",
//     },

//     {
//       image: Urld,
//       link2: "https://github.com/eabuo21/Url-Shorten",
//       text: "Url Shortener",
//       link: "/url-shortener_case_study",
//     },

//         {
//       image: Cyber,
//       link2: "https://eabuo21.github.io/GeorgeCyber.com/",
//       text: "GeorgeCyber2000",
//       link: "#",
//     },

//   ];

//   return (
//     <>
//       <div className="flex        flex-col  gap-9    justify-center items-center   md:flex-row md:flex-wrap md:gap-6  ">
//         {Cards.map((card, index) => (
//           <div
//             data-aos="fade-in"
//             data-aos-easing="ease-out-linear"
//             data-aos-duration="1500"
//             data-aos-mirror="true"
//             data-aos-anchor-placement="center-bottom"
//             data-aos-delay="50"
//             data-aos-once="true"
//             key={index}
//             className="   "
//           >
//             <ProDemo
//               image={card.image}
//               link={card.link}
//               text={card.text}
//               link2={card.link2}
//             />
//           </div>
//         ))}
//       </div>
//     </>
//   );
// }
// export default Procards;
