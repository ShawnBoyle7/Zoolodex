import React from "react"
import Splash from "../Splash";
import './Home.css'

const Home = ({ authenticated }) => {

    return(
        authenticated ? 
        <>
            <div className="home-image">
                <img src="https://i.imgur.com/lJtekW9.jpg" alt="home-background"/>
            </div>

            <div className="home-header">
                <h1>Home</h1>
            </div>
        </>
        :
        <Splash/>
    )
};

export default Home;