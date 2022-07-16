import React from "react";
import {Username} from  "../data/user";
import {city} from "../data/user"
function Home() {
  return (
    <div id="home">
      <h1>
        {Username} is a Web Developer from {city}
      </h1>
    </div>
  );
} 
export default Home