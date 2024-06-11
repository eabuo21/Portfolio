import React, { useState, useEffect } from "react";
import Hello from "../../Components/contact/Hello";
import  Conbg from  "../../assets/images/Projects-pix/ContactFrom_v18.jpg";



const Contact = () => {
      const handleScroll = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    handleScroll();
  }, []);
    return (
        <>
            <div className=" Contact-container bg-secondary_black h-[fixed] w-full p-4  bg-norepeat" style={{
             background: `linear-gradient(rgba(4, 0, 1, 0.9), rgba(4, 0, 1, 0.9)), url(${Conbg})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
             
              height: '100%',
              width: '100%',

            }}>
                <section className="hello-section  pb-2">
                    <Hello/>
                </section>

            </div>
        </>
    );
};
export default Contact;