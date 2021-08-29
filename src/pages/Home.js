import React, {useEffect} from 'react';
import './Home.css';
import { Link } from "react-router-dom";


const Home = () => {

  useEffect(() => {
    document.title = "Ostyn Sy"
  }, [])

  return (
    
    <div class="container">
      
      <div class="topnav">
        <img id="logo-image" src={process.env.PUBLIC_URL + "images/logo.png"} width="40" height="40"/>
        <a href="#sec-intro">About</a>
        <a href="#sec-exp">Experience</a>
        <a href="#sec-proj">Projects</a>
        <a href="#sec-res">Resume</a>
      </div>

      <section id="sec-intro">
        <img id="intro-image" src={process.env.PUBLIC_URL + "/images/me.jpg"} width="300" height="400"/>
        <div id="intro-title"><strong>Hello!</strong></div>
        <div id="intro-name">My name is <strong>Ostyn Sy</strong>.</div>
        <div id="intro-desc">I'm a fulltime student at <strong>San Francisco State University</strong> working on my <strong>Computer Science Major</strong>. Currently, I am focused on Software Engineering as a <strong>Fullstack Developer</strong>.</div>
        <button id="button-contactme"> Contact Me</button>
      </section>

      <section id="sec-aboutme">
        <h1>About Me</h1>
      </section>

      <section id="sec-exp">
        <h1>Experience</h1>
      </section>

      <section id="sec-proj">
      <h1>Projects</h1>
      </section>

      <footer>
        <div>footer</div>
      </footer>
    </div>   
  ); 
};

export default Home;
