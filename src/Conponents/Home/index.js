import React from "react";
import "./style.scss";
import Typed from "react-typed";
import Particles from "react-particles-js";

const Home = () => {
  return (
    <div className="header-wraper">
      <Particles
        params={{
          particles: {
            number: {
              value: 50,
            },
            size: {
              value: 3,
            },
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: "repulse",
              },
            },
          },
        }}
      />
      <div className="main-info">
        <h1>web development and websites promotion</h1>
        <Typed
          className="typed-text"
          strings={["Web Design", "Web Development", "Google Ads"]}
          typeSpeed={50}
          backSpeed={50}
          loop
        />
        
        <a href="/contact" className="btn btn-outline-light">contact me</a>

      </div>
    </div>
  );
};

export default Home;
