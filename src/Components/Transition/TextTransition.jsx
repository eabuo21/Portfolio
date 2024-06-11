import React, { useState, useEffect } from 'react';


const phrases = ['Welcome to my website!', 'Explore the possibilities...', 'Engage with creativity.'];

const TextTransition = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    }, 3000); // Change phrase every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-transition-container">
      <div className="text-transition">
        {phrases.map((phrase, i) => (
          <span key={i} className={i === index ? 'visible' : 'hidden'}>
            {phrase}
          </span>
        ))}
      </div>
    </div>
  );
};

export default TextTransition;
