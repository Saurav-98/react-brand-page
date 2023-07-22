import React from "react";
import amazon from "../assets/amazon.png";
import flipkart from "../assets/flipkart.png";
import shoe from "../assets/shoe_image.png";
import "./hero.css";

const Hero = () => {
  return (
    <main className="hero container">
      <div className="hero--content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND
          WE’RE HERE TO HELP YOU WITH OUR SHOES.
        </p>

        <div className="hero--btn__container">
          <button className="btn btn--primary">Shop Now</button>
          <button className="btn  ">Category</button>
        </div>
        <div className="hero--shopping">
          <p>Also Available On</p>
          <div className=" brands-container">
            <img src={amazon} alt="amazon logo" className="brands-logo" />
            <img src={flipkart} alt="flipkart logo" className="brands-logo" />
          </div>
        </div>
      </div>
      <div className="hero--image">
        <img src={shoe} alt="hero shoe" />
      </div>
    </main>
  );
};

export default Hero;
