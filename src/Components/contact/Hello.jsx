import React, { useState } from "react";
import ContactModal from "../../Components/contact/ContactModal";
import emailjs from "@emailjs/browser";
import {
  showErrorNotification,
  showSuccessNotification,
} from "../Notifications/Notify";

const Hello = () => {
  //setting email js functionality for mailing in code
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  //logic to handle the modal display

  const [showcontactmodal, setShowContactModal] = useState(false);
  const handleContactModal = () => {
    setShowContactModal(true);
  };
  const handleCloseContactModal = () => {
    setShowContactModal(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);

    // send email using emailjs
    const templateParams = {
      name: name,
      email: email,
      message: message,
    };

    // Access environment variables
    //const serviceId = import.meta.env.VITE_REACT_APP_EMAILJS_SERVICE_ID;
    //const templateId = import.meta.env.VITE_REACT_APP_EMAILJS_TEMPLATE_ID;
    //const userId = import.meta.env.VITE_REACT_APP_EMAILJS_USER_ID;

    emailjs
      .send(
        "service_m0sgj2s",
        "template_ahwj8fl",
        templateParams,
        "NPd7Wszo4kPAco2ad"
      )
      .then((response) => {
        setLoading(false);
        showSuccessNotification(" Submitted ");
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((error) => {
        setLoading(false);
        showErrorNotification("Submission Failed, please try again");
      });
  };

  return (
    <>
      <div className="hello-container">
        <h1
          data-aos="fade-left"
          data-aos-anchor-placement="right-top"
          data-aos-easing="ease-in-linear"
          data-aos-duration="2000"
          className="hello-text font-normal font-serif   text-[40px]  text-transparent bg-clip-text bg-gradient-to-b  from-[#fff]  via-[#fff]  to-gray-400 text-center   md:text-[150px]  md:text-opacity-30 
          relative  bottom-[1.4rem] md:bottom-0"
        >
         Leave a Message
        </h1>
        <section
          data-aos="fade-down"
          data-aos-anchor-placement="center-bottom"
          data-aos-easing="ease-cubic"
          data-aos-duration="3000"
          className="contact-form-section flex flex-col gap-3  justify-center items-center relative bottom-12    md:fle-row md:gap-5   md:bottom-20"
        >
          <div className="form-container p-4 w-[fixed]  flex flex-col gap-4 h-[723.19px]  border border-grey  bg-opacity-30  bg-neutral-800 rounded-[16px] shadow-current shadow-xl   md:mx-auto   md:w-[auto] md:h-[auto]  md:flex-row md:gap-0 ">
            <div className="text-items-section flex flex-col gap-8  md:gap-[10rem]     ">
              <p className="font-normal font-serif text-base text-white py-5 ">
                Want to have a chat with me about a project?  GET IN TOUCH by
                filling the form.
              </p>

              <h1 className="text-[33.32px] font-bold font-serif text-white  py-4">
                Get in touch
              </h1>
            </div>
            <form
              onSubmit={handleSubmit}
              className="contact-form-fields  flex flex-col gap-8 justify-center items-start  py-6  md:w-[60%] "
            >
              <input
                className="bg-transparent w-full border-0 border-b-2 border-b-secondary_grey outline-0 focus:border-b-secondary_grey p-2 text-white   "
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder="Full Name"
                required
              />

              <input
                className="bg-transparent w-full border-0 border-b-2 border-b-secondary_grey outline-0 focus:border-b-secondary_grey p-2 text-white"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Email"
                required
              />

              <textarea
                className="bg-transparent w-full border-0 border-b-2 border-b-secondary_grey outline-0 focus:border-b-secondary_grey p-2 text-white h-[25vh]    md:h-auto"
                type="text"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                placeholder="Info about project"
                required
              ></textarea>

              <div className="submit-button ">
                <button className="submit-b p-2 w-[15vh]  flex flex-col justify-center items-center text-center  font-serif text-base text-white bg-gradient-to-br from-red to-violet-950 rounded-[12px] ">
                  {loading ? (
                    <b className="text-sm animate-pulse text-center ease-in-out duration-1000 transition-all">
                      submitting....
                    </b>
                  ) : (
                    <b>Submit </b>
                  )}
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
    </>
  );
};
export default Hello;
