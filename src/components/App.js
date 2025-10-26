import React from "react";
// Default imports for the three components
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";

function App() {
  return (
    <div>
      {/* ADD THESE LINES */}
      <NavBar />
      <Home />
      <About />
    </div>
  );
}