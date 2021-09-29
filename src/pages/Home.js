import React, {useEffect} from 'react';
import { Link } from "react-router-dom";

import { Layout } from '../layout/Layout';
import Intro from '../components/Intro/Intro';
import Projects from '../components/Projects/Projects';

const Home = () => {

  useEffect(() => {
    document.title = "Ostyn Sy"
  }, [])


  return (
    
    <Layout>
      <Intro />
      <Projects />
    </Layout>
    /*
    <div class="container">
      <div class="topnav">
        <img id="logo-image" src={process.env.PUBLIC_URL + "images/logo.png"} width="40" height="40"/>
        <a href="#sec-exp">Experience</a>
        <a href="#sec-proj">Projects</a>
        <a href="#sec-res">Resume</a>
      </div>


      <section id="intro-sec">
        <div id="intro-grid-container">
          <img id="intro-image" src={process.env.PUBLIC_URL + "/images/me.jpg"} width="240" height="320"/>
          <div id="intro-title"><strong>Hello!</strong></div>
          <div id="intro-name">My name is <strong>Ostyn Sy</strong>.</div>
          <div id="intro-desc">I'm a full-time student at <strong>San Francisco State University</strong> working on my <strong>Computer Science Major</strong>. Currently, I am focused on Software Engineering as a <strong>Fullstack Developer</strong>.</div>
          <a id="button-contactme" href="mailto:ostynsy@gmail.com"> Contact Me</a>
        </div>
      </section>
      
      <section id="sec-aboutme">
        <div id="aboutme-grid-container">
          <h1>About Me</h1>
          <p>Some languages that I know and industry tools</p>
        </div>
        
      </section>

      <section id="sec-exp">

        <h1>Experience</h1>
        <div id="exp-grid-container">
          <p> Work experience</p>
        </div>

      </section>

      <section id="sec-proj">
      <h1>Projects</h1>
        <div id="proj-grid-container">
          <p>Personal Projects that I have done</p>
        </div>
      </section>

      <footer>
        <div>footer</div>
      </footer>
    </div>
    */
  ); 
};

export default Home;
