import React from "react";
import { username, city, image } from "../data/user";

function Home() {
  return (
    <div id="home">
      <h1>
        {username} is a Web Developer from {city}
      </h1>
      <img src={image} alt={`${username}'s profile`} />
    </div>
  );
}

export default Home;
