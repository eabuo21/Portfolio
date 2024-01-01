import React from "react";
import "../../../src/App.css";
import { useNavigate } from "react-router-dom";

const PreviousPage = () => {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <>
      <div className="prev-container">
        <button
          onClick={() => handleGoBack()}
          className="prev-button text-white font-bold font-pap text-xl  text-left"
        >
          &larr; Prev Page
        </button>
      </div>
    </>
  );
};

export default PreviousPage;
