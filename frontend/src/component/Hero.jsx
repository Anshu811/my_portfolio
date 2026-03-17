// Hero.jsx
import React from "react";
import heroImage from "../assets/hero.png"; // ya jo bhi aapne image ka naam rakha hai

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Hello, I'm Anshu</h1>
        <h2>Frontend Developer</h2>
        <p>I build modern web applications using React.</p>
      </div>
      <div className="hero-image">
        <img 
          src={heroImage} 
          alt="Anshu - Frontend Developer" 
          className="profile-img"
        />
      </div>
    </section>
  );
};

export default Hero;