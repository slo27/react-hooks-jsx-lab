import React from "react";
import { name, city, color } from "../data/data.js";

function Home(props) {
  // update the JSX being returned!
  return (
    <div id="home">
      <h1 style={{color}}> 
        {name} is a Web Developer from {city}
      </h1>
    </div>
  );
};

export default Home;
