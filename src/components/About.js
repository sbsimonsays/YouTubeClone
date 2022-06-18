import React from "react-router-dom";
import "./About.css"

// Components
import Navbar from "./Navbar";

const About = () => {
  return (
    <div className="about">
      <Navbar />

      <h2>About the Project:</h2>
      <section className="aboutproject">
      <div className="projectdes">
        <p>Three talented developers have come together to create this application. This YouTube clone is created using Javascript, the React library, the YouTube API, and CSS styling. </p>
      </div>
      </section>


      <div className="aboutdev">
        <h2>Developers</h2>

        <section className="dev1">
          {/* <img></img> */}
          <h3>Luke Kinoshi</h3>
          <p>BIOGRAPHY OF LUKE</p>
        </section>

        <section className="dev2">
          {/* <img></img> */}
          <h3>Sabrina Escobar</h3>
          <p>BIOGRAPHY OF SABRINA</p>
        </section>

        <section className="dev3">
          {/* <img></img> */}
          <h3>Spencer Simon</h3>
          <p>BIOGRAPHY OF SPENCER</p>
        </section>

      </div>
    </div>
  );
};

export default About;
