import React from "react-router-dom";
// import Navbar from "./Navbar";
import "./About.css";

//components
const About = () => {
  return (
    <div className="abouthead">
      <h1>About this Project:</h1>
      <section className="aboutproject">
        <div className="projectpara">
          <p>
            The Team of Luke Kinoshi, Sabrina Escobar, and Spencer Simon have
            brought upon you the newest technology in video searching.
          </p>
        </div>
      </section>

      <h1 className="aboutdev">About the Developers</h1>
      <section className="aboutsection">
        <div className="dev1">
          <div className="devimg">
            <img src="https://i.imgur.com/gI4DNHk.jpg" alt="lukeKinoshi" />
          </div>
          <h1>Luke Kinoshi</h1>
        </div>

        <div className="dev2">
          <div className="devimg">
            <img src="https://i.imgur.com/kJEl99K.jpg" alt="sabrina" />
          </div>
          <h1>Sabrina Escobar Flores</h1>
        </div>

        <div className="dev3">
          <div className="devimg">
            <img src="https://i.imgur.com/HLbLikW.jpg" alt="spencer" />
          </div>
          <h1>Spencer Simon</h1>
        </div>
      </section>
    </div>
  );
};

export default About;