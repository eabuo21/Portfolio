import React from "react";
import { Link } from "react-router-dom";

const Shipped = () => {
  return (
    <>
      <div className="shipped-main flex flex-col gap-0 justify-center items-center p-2 ">
        <div className="texts-container pb-6">
          <h1 className="text-white font-bold font-serif text-[32px] text-center ">
            Shipped is better than great.
          </h1>
          <h4 className="text-[32px] text-grey font-bold font-serif text-center opacity-25">
            Why not both, though?
          </h4>
        </div>
        {/*send email button*/}
        <Link to="/contact">
          <button className="email-button  p-3 w-[25vh] bg-gradient-to-br from-red via-red to-violet-950 rounded-[12px] text-white
          hover:bg-gradient-to-br  hover:from-blue-200 hover:to-blue-700">
            Send me an email
          </button>
        </Link>
      </div>
    </>
  );
};
export default Shipped;
