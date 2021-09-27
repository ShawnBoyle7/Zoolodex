import React, { useRef } from "react";
import { Rerousel } from 'rerousel';
import { useSelector } from "react-redux";
import "./Splash.css"

const Splash = () => {

        return (
            <>
                <div className="splash-image">
                    <img src="https://i.imgur.com/EgUQclC.jpg"/>
                </div>

                <div className="splash-header">
                    <h1>Splash</h1>
                    <p>All of the content goes in here</p>
                </div>

                
            </>
        )
};

export default Splash;


{/* <Rerousel itemRef={thing} interval={7000}>
    {regions.map(region => 
            <div className="carousel-image-div" ref={thing}>
                <img className="carousel-image" src={region.imgUrl1} key={region.id}/>
            </div>
    )}
</Rerousel> */}