import React, { useState } from 'react';
import './Hero.css';
import samar from '../../assets/samar.png';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import resume_samar from '../../assets/resume_samar.pdf';

const Hero = () => {
  const [menu, setMenu] = useState("home");
  return (
    <div id="home" className="hero">
       {/* Ajout de la classe hero-img */}
       <img src={samar} alt="Hero" className="hero-img" />

       <h1><span>I'm Samar Arrouj,</span> fullstack developer </h1>
       <p>
         I am a full stack developer from Tunisia, I develop robust and modern web and mobile applications.
       </p>

       <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink
            className={`anchor-link ${menu === "contact" ? "active" : ""}`}
            offset={50}
            href="#contact"
            onClick={() => setMenu("contact")}
          >
            Connect With Me
          </AnchorLink>
        </div>
        <div className="hero-resume">
    
          <a
            className="anchor-link"
            href={resume_samar}   
            download="resume_samar.pdf"  
          >
            My Resume
          </a>
        </div>

       </div>
    </div>
  );
};

export default Hero;
