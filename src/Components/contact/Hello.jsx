import React from "react";
import emailjs from "@emailjs/browser";

const Hello = () => {
  return (
    <>
      <div className="hello-container">
        <h1 className="hello-text font-normal font-serif text-[90px] text-transparent bg-clip-text bg-gradient-to-b  from-[#fff]  via-[#fff]  to-gray-400 text-center">
          Say Hello
        </h1>
        <section className="contact-form-section flex flex-col gap-3  justify-center items-center relative bottom-12 ">
          <div className="form-container p-4 w-[fixed]  h-[723.19px]  border border-grey  bg-opacity-10 bg-tertiary_gray rounded-[16px] shadow-current shadow-xl ">
            <p className="font-normal font-serif text-base text-white py-5 ">
              Want to have a chat with me about a project? 
            </p>

            <p className="text-white font-normal fon-serif text-base ">
              GET IN TOUCH by filling the form.
              <h1 className="text-[33.32px] font-bold font-serif text-white  py-4">
                Get in touch
              </h1>
              <form className="contact-form-fields  flex flex-col gap-8 justify-center items0center  py-6">
                <input
                  className="bg-transparent border-0 border-b-2 border-b-secondary_grey outline-0 focus:border-b-secondary_grey p-2 text-white"
                  type="text"
                  value=""
                  placeholder="Full Name"
                  required
                />

                <input
                  className="bg-transparent border-0 border-b-2 border-b-secondary_grey outline-0 focus:border-b-secondary_grey p-2 text-white"
                  type="email"
                  value=""
                  placeholder="Email"
                  required
                />

                <textarea
                  className="bg-transparent border-0 border-b-2 border-b-secondary_grey outline-0 focus:border-b-secondary_grey p-2 text-white h-[25vh]"
                  type="text"
                  value=""
                  placeholder="Info about project"
                  required
                ></textarea>

                <div className="submit-button ">
                  <button className="submit-b p-2 w-[15vh]  flex flex-col justify-center items-center text-center  font-serif text-base text-white bg-gradient-to-br from-red to-violet-950 rounded-[12px] ">
                    Submit
                  </button>
                </div>
              </form>
            </p>
          </div>
        </section>
      </div>
    </>
  );
};
export default Hello;
