import React, {useState} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Tongst from "../../assets/images/tongston.png";
import icon1 from "../../assets/icons/reacticon.png";

const Testimonial = () => {
   const [activeIndex, setActiveIndex] = useState(0);
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,

    adaptiveHeight: false,
    accessibility: true,
    autoplay: true,
    autoplaySpeed: 7000,
    pauseOnHover: true,
    pauseOnDotsHover: true,

    useCss: true,
    useTransform: true,
     beforeChange: (current, next) => setActiveIndex(next),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
    customPaging: function (i) {
      return (
        <div
          key={i}
          className={`custom-dot flex flex-col justify-center items-center hover:border-2 hover:border-red border-2 border-white  rounded-[50%] h-[20px] p-2 transition-all transition-duration-800 ease-in-out ${
            i === activeIndex ? 'active' : 'bg-gradient-to-r from-[red] to-violet-950  border-t-blue-950 border-2 border-b-red border-l-violet-950 border-r-red transition-all transition-duration-800 ease-in-out'  // Add a class for the active dot
          }`}
        ></div>
      );
    },
  };

  return (
    <>
      <div className="main-slider-container p-1 flex flex-col justify-center items-center pb-8">
        <h1 className="testimonial-heading font-bold font-serif text-2xl text-white">
          Testimonials
        </h1>
        <p className="text-white  text-base font-serif text-center">
          People I've worked with have said some nice things...
        </p>
        <Slider
          {...settings}
          className="w-full h-[fixed] flex flex-row justify-center items-center gap-2 md:gap-9  p-2"
        >
          <div className="slide-1 flex flex-col gap-3 justify-center items-center w-full p-2  ">
            <div className="image-container w-full flex flex-row justify-center items-center p-1 ">
            <img
              className="rounded-[50%] w-[150px] h-[150px] "
              src={Tongst}
              alt="testimonial-image"
              />
              </div>
            <p className="text-base font-serif text-white text-center pb-6">
              <span className="quotation font-bold text-transparent bg-clip-text bg-gradient-to-b from-[red] via-violet-950 to-[violet] font-sans text-4xl ">
                {" "}
                “
              </span>
              Emma was a real pleasure to work with and we look forward to
              working with him again. He’s definitely the kind of developer you
              can trust with a project from start to finish.
              <span className="quotation font-bold text-transparent bg-clip-text bg-gradient-to-b from-[red] via-violet-950 to-[violet] font-sans  ">
                ”
              </span>
            </p>
              <h3 className="text-base font-bold font-serif text-center text-white ">
              First name last name
            </h3>
            <h5 className=" text-sm font-serif text-white font-normal text-center">
              Position, company
            </h5>
          </div>

          {/*slide  2*/}
          
          <div className="slide-1 flex flex-col gap-3 justify-center items-center w-full p-2  ">
            <div className="image-container w-full flex flex-row justify-center items-center p-1 ">
            <img
              className="rounded-[50%] w-[150px] h-[150px] mx-[4rem]"
              src={icon1}
              alt="testimonial-image"
            />
            </div>
            <p className="text-base font-serif text-white text-center pb-6">
              <span className="quotation font-bold text-transparent bg-clip-text bg-gradient-to-b from-[red] via-violet-950 to-[violet] font-sans text-4xl">
                {" "}
                “
              </span>
              Emma was a real pleasure to work with and we look forward to
              working with him again. He’s definitely the kind of developer you
              can trust with a project from start to finish.
              <span className="quotation font-bold text-transparent bg-clip-text bg-gradient-to-b from-violet-950  via-[red] to-[violet] font-sans ">
                ”
              </span>
            </p>
            <h3 className="text-base font-bold font-serif text-center text-white ">
              First name last name
            </h3>
            <h5 className=" text-sm font-serif text-white font-normal text-center">
              Position, company
            </h5>
          </div>
        </Slider>
      </div>
    </>
  );
};

export default Testimonial;
