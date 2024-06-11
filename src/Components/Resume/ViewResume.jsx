import React, { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "../../Components/Resume/ResumeModal";

function ViewResume() {
  const [showmodal, setShowModal] = useState(false);
  const handleView = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className="  ">
        <button
          onClick={() => handleView()}
          className="bg-gradient-to-br from-red to-[#900690] p-3 w-[45vh] h-[10vh] rounded-md  text-white font-bold font-serif text-xl
          hover:bg-gradient-to-br  hover:from-blue-200 hover:to-blue-700"
        >
          View Resume
        </button>

        {showmodal && <Modal onClose={() => handleCloseModal()} />}
      </div>
    </>
  );
}
export default ViewResume;
