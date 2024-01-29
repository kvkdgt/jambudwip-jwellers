import React, { useState } from "react";
import heroBG from "../Assets/heroBG.jpg"
import sareeModel from "../Assets/sareeModel.png"
import "./Hero.css"

const Hero = () => {
  return (
    <div className="hero">
    <div className="hero-text">
      <h1>Welcome to Your own <span className="saree-store"> Saree Store</span></h1>
      <p>Discover the best deals on your favorite products.</p>
    </div>
    <div className="hero-image">
      <img src={sareeModel} style={{height:'100%'}} alt="" />
    </div>
  </div>
  );
};

export default Hero;
