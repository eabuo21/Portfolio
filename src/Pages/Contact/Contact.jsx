import React, { useState, useEffect } from "react";
import Hello from "../../Components/contact/Hello";



const Contact = () => {
      const handleScroll = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    handleScroll();
  }, []);
    return (
        <>
            <div className=" home-container bg-secondary_black h-[fixed] w-full p-4 ">
                <section className="hello-section  pb-2">
                    <Hello/>
                </section>

            </div>
        </>
    );
};
export default Contact;