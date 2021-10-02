import React from "react";
import './About.css'

const About = () => {
    
    return(
        <div className="about-div">
            <div className="about-text">
                <h3 className="about-paragraph">Hello! I'm Shawn, thank you for checking out my project Zoolodex!</h3>
                <p>
                    My inspiration for this website came from my passion for animals and nature.
                    <br/>
                    I've wanted to share that passion in an effective medium for those who aren't
                    <br/>
                    as familiar by providing content that is easy to navigate and consume for anyone.
                    <br/>
                    I encourage you to visit my <a href="https://github.com/ShawnBoyle7/Zoolodex">repository</a> for this project to read all about the details.
                </p>
                <p className="about-final">Enjoy your exploration!</p>
            </div>

            <div className="about-links">
                <a href="https://github.com/ShawnBoyle7"><i className="fab fa-github-square fa-5x"></i></a>
                <a href="https://www.linkedin.com/in/shawn-boyle-59570b19b/"><i className="fab fa-linkedin fa-5x"></i></a>
            </div>
            
        </div>
    )
}

export default About