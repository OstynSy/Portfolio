import React from 'react';
import './Home.css';
import { Link } from "react-router-dom";

const Home = () => {
  return (   
    <div>
      
      <div class="grid-container">
        <div id="grid-item1">
          Top 
          <a class="arrow down" href="#grid-item2"></a>
        </div>

        <div id="grid-item2"> 
          Mid 
          <a class="arrow down" href="#grid-item2"></a>
        </div>    

        <div id="grid-item3">
          Bot
        </div>

      </div>
    </div>
  );
};

export default Home;
