import React from "react";
import { useSelector } from "react-redux"
import { useHistory } from "react-router-dom"
import "./Splash.css"

const Splash = () => {
    const history = useHistory();

    const animals = Object.values(useSelector(state => state.animals));
    const randomAnimalId = Math.floor(Math.random() * animals.length)

    const randomAnimalHandler = (e) => {
        e.preventDefault()
        console.log("animal", randomAnimalId)
        history.push(`/animals/${+randomAnimalId}`);
    }

    return (
        <>
            <div className="splash-image-div">
                <img src="https://i.imgur.com/hAyBurr.jpg" alt="home-background"/>
            </div>

            <div className="splash-header-div">
                <h1>Welcome to Zoolodex!</h1>
                <p>
                    Do you find yourself entranced by the beauty nature and wildlife has to offer us, but haven't the time to learn more about it?
                    Are you curious but uncertain about where to begin with the vast amount of life on our planet?
                </p>

                <p>
                    With Zoolodex, we want you to help you not only enjoy, but love the life around us.
                    Explore our informative pages for animals and regions to find your passion.
                </p>

                <div className="splash-random-div">
                    <p>
                        Not sure where to start? Click below!
                    </p>
                        <button onClick={randomAnimalHandler}>
                            Explore
                        </button>
                </div>
            </div>
        </>
    )
};

export default Splash;