import React from 'react';
import { Link } from 'react-router-dom';


const Hero = () => {
    return (
        <>
            <div className=' bg-black w-full h-[70vh]'>
                <p className='text-white font-bold text-5xl font-sans text-center'>
                    ENG EMMANUEL ABUO
                </p>
                <Link to="/resume" className='text-red font-bold text-3xl font-sans'>
                    Resume
                </Link>
                
            </div>
        </>
    );
};
export default Hero;