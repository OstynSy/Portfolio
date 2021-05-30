import React from 'react';
import './Home.css';
import { Link } from "react-router-dom";

const Home = () => {
  return (   
    <div>
      
      <div class="grid-container">
        <div id="grid-item1">

          <div class="neon-wrapper">
            <span class="txt" >Welcome!</span>
            <span class="gradient"></span>
            <span class="dodge"></span>
          </div>

          <div>
            My name is Ostyn Sy and I am a CS Major.
          </div>

          <a class="arrow down" href="#grid-item2"></a>
        </div>

        <div id="grid-item2"> 
          Mid 
        </div>    

        <div id="grid-item3">
          Bot
        </div>

      </div>
    </div>
  );
};

export default Home;
