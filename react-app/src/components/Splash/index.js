import React from "react";
import "./Splash.css"

const Splash = () => {

        return (
            <>
                <div className="splash-image-div">
                    <img src="https://i.imgur.com/06Xe3q7.jpg" alt="home-background"/>
                </div>

                <div className="splash-header-div">
                    <h1>Zoolodex</h1>
                    <p className="splash-text">
                    PITCH
                    <br/>
                    Do you find yourself entranced by the beauty nature and wildlife has to offer us, but haven't the time to learn more about it?
                    <br/>
                    Are you curious but uncertain about where to begin with the vast amount of life on our planet?
                    <br/>
                    With Zoolodex, we want you to help you not only enjoy, but love the life around us.
                    <br/>
                    Explore our informative and interactive pages for animals and regions to learn more about their history, life, climate, and ecosystem.
                    <br/>
                    AUTH FEATURES AND CALL TO ACTION
                    <br/>
                    Something missing that you'd like us to cover? Submit a suggestion and we just might do so!
                    <br/>
                    Have you seen amazing wildlife out on your travels? Tell us about your sighting!
                    <br/>
                    Get started
                    <br/>
                    CALL TO ACTION
                    <br/>
                    Curiosity is meant to be enlightened.
                    </p>
                    <button>Explore Your Curiosity</button>
                </div>
            </>
        )
};

export default Splash;