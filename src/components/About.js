import React from "react";
// 1. Named import for the 'image' variable from the data file
import { image } from "../data/user"; 

function About() {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>I Made This</p>
      {/* The image variable is used here, so it must be imported */}
      <img src={image} alt="I made this" />
    </div>
  );
}

// 2. Default export for the About component
export default About;