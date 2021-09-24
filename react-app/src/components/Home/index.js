import React from "react"
import Splash from "../Splash";

const Home = ({ authenticated }) => {

    return(
        authenticated ?
        <>
            <h1>Home</h1>
        </>
        :
        <Splash/>
    )
};

export default Home;