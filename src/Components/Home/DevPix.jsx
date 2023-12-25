import React from "react";
import DP from "../../assets/images/devpix.png";

const Pix = () => {
    return (
        <>
            <div
                className="pix-container w-[fixed] p-2 flex flex-col justify-center items-center bg-gradient-to-br from-red to-violet-950 border-2 rounded-[50%] border-grey ">
                <img className="dp-image w-[200px] h-auto rounded-full" src={DP} alt="dp-image" />
            </div>
        </>
    );
};
export  default Pix;