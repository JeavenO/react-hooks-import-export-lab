import React from "react";
// Named import for the 'username' and 'city' variables
import { username, city } from "../data/user"; 

function Home() {
  return (
    <div id="home">
      <h1>
        {/* username and city are used here */}
        {username} is a Web Developer from {city}
      </h1>
    </div>
  );
}

// Default export for the Home component
export default Home;
