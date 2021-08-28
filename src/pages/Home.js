import React from 'react';
import './Home.css';
import { Link } from "react-router-dom";

const Home = () => {

  return (
    
    <div class="container">
      <div class="topnav">
        <a class="active" href="#home">Home</a>
        <a href="#news">About</a>
        <a href="#contact">Experience</a>
        <a href="#about">Projects</a>
        <a href="#about">Resume</a>
      </div>

      <section id="sec-intro">
        <div id="intro-title"><strong>Hello!</strong></div>
        <div id="intro-name">My name is <strong>Ostyn Sy</strong>.</div>
        <div id="intro-desc">I'm a fulltime student at <strong>San Francisco State University</strong> working on my <strong>Computer Science Major</strong>. Currently, I am focused on Software Engineering as a <strong>Fullstack Developer</strong>.</div>
        <button id="button-contactme"> Contact Me</button>
      </section>

      <section id="sec-aboutme">

      </section>

      <footer>
        <div>footer</div>
      </footer>
    </div>   
  ); 
};

export default Home;
