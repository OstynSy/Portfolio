import React from 'react';
import "./Skills.css"

const Skills = () => {
    return(
        <div id="skills-sec">
            <div id="skills-grid-container">
                My main skills are
                <div id="skill-cards">
                    
                    <a>
                        <img id="logo-image" src={process.env.PUBLIC_URL + "images/javascript.png"} width="40" height="40"/>
                        Javascript
                    </a>
                    <a>Python</a>
                    <a>HTML</a>
                </div>
            </div>
        </div>
    )
    };

export default Skills;