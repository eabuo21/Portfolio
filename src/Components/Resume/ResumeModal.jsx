import React, { useState } from "react";
import { Document, Page } from "react-pdf";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CV from "../../assets/file/Abuo Emmanuel Cv.pdf";

const Modal = ({ onClose }) => {
  return (
    <>
      <div className="  ">
        <div className="form-container fixed inset-0 z-50 flex items-center justify-center bg-transparent  ">
          <div className="absolute inset-0 bg-gray-300 opacity-100  p-4 mx-auto   ">
            <button
              onClick={() => onClose()}
              className="close-button  sticky z-20 bg-gradient-to-br from-red to-[#990d99] rounded-[50%] 
                          ml-auto  hover:bg-gradient-to-br  hover:from-blue-200 hover:to-blue-700
                          flex justify-center items-center p-2 "
            >
              <FontAwesomeIcon
                icon={faTimes}
                close-icon
                className="text-white text-2xl font-bold "
              />
                      </button>
                      
                      <div className="pdf-viewer-content-iframe  ">
                          <iframe
                              className=" flex flex-col mx-auto justify-center items-center 
                              w-[fixed]"
                              src={CV} width="100%" height="500px" />
                      </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Modal;
