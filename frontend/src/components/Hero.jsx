import React from "react";

const Hero = ({ title, imageUrl }) => {
  return (
    <>
      <div className="hero container">
        <div className="banner">
          <h1>{title}</h1>
          <p>
          Welcome to MediConnect, the future of healthcare at your fingertips! </p>
      <p>
          MediConnect is a cutting-edge app designed to revolutionize how you access hospital services. 
          Whether you're facing an emergency, need a routine check-up, or seeking the best treatment options, we've got you covered. 
          With MediConnect, booking hospital beds, finding top doctors, and exploring nearby treatments has never been easier or faster.</p>
          <p>Our app connects you directly to hospitals in real-time, allowing you to check bed availability, compare treatments, and book appointments all from the comfort of your home. 
          No more rushing from one hospital to another; MediConnect ensures you get the care you need, when and where you need it, effortlessly.
          MediConnect is more than just an app it's your personal gateway to accessible, quality healthcare. 
          Experience peace of mind knowing that the best medical facilities are just a tap away.
          </p>
        </div>
        <div className="banner">
          <img src={imageUrl} alt="hero" className="animated-image" />
          <span>
            
            <img src="/Vector.png" alt="vector" />
          </span>
        </div>
      </div>
    </>
  );
};

export default Hero;