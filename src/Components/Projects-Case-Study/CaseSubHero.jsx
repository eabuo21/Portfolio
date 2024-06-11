import React from "react";
// import Holdd from "../../assets/images/Projects-pix/Holdd.png";
// import Holdm from "../../assets/images/thm.png";


function SubHero() {
    return (
        <>
            {/*sub  hero section*/}
            <div className="sub-herp-section  flex flex-row justify-center items-center p-2  md:flex-row ">
                <img src={Holdd} alt="section-image"
                    className="w-[200px] h-[100px]   md:w-[800px] md:h-[600px]" />
                
                    <img src={Holdm} alt="section-image"
                    className="w-[50px] h-auto   md:w-[300px] md:h-auto" />
            </div>
        </>
    );
};

export default SubHero;

