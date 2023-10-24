import React from "react";
import { Link } from 'react-router-dom';
import Cv from '../../Components/Resume/ResumeComp';

const Resume = () => {
    return (
        <>
            <div className="main flex flex-col">
                <Link to="/">
                <button className="bg-red rounded-md hover:bg-gold text-white font-bold text-sm h-auto relative left-10">
                    &larr; 
                    </button>
                    </Link>
                <Cv />
               
           </div>
        </>
    );
};
export default Resume;