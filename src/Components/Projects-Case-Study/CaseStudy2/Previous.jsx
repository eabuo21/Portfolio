import React from "react";
import { Link as RouterLink } from "react-router-dom";
import "../../../src/App.css";

const PreviousPage = () => {
  return (
    <>
      <div className="prev-container">
        <RouterLink
          to="/projects"
          className="prev-button text-white font-bold font-pap text-xl  text-left"
        >
          &larr; Prev Page
        </RouterLink>
      </div>
    </>
  );
};

export default PreviousPage;
