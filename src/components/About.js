import React from "react-router-dom";
import Navbar from "./Navbar";
import "./About.css"

// Components

const About = () => {
  return (
    <div className="abouthead">
      <h1>About this Project:</h1>
      <section className="aboutproject">
        <div className="projectpara">
          <p>
            The Team of Luke Kinoshi, Sabrina Escobar, and Spencer Simon have brought upon you the newest technology in video searching. 
          </p>
        </div>
      </section>

      <h1 className="aboutdev">About the Developers</h1>
      <section className="aboutsection">
        <div className="dev1">
          <div className="devimg">
            <img src={lukeURL} alt="luke" />
          </div>
          <p>
            <h1>Luke Kinoshi</h1>
          INFO ABOUT LUKE!
          </p>
        </div>

        <div className="dev2">
          <div className="devimg">
            <img src={sabrinaURL} alt="sabrina" />
          </div>
          <p>
            <h1>SABRINA ESCOBAR</h1>
            INFO ON SPENCER
          </p>
        </div>

        <div className="dev3">
          <div className="devimg">
            <img src={spencerURL} alt="spencer" />
          </div>
          <p>
            <h1>Spencer Simon</h1>
            INFO ON SPENCER
          </p>
        </div>
      </section>
    </div>
  );
};





export default About;