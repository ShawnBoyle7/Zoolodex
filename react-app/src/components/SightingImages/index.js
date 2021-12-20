import React from "react"
import "./SightingImages.css"

const SightingImages = ({ sightingImages }) => {

    return (
        <>
            <img className="sighting-image" src={`${sightingImages.sightingOne}`}/>
            <img className="sighting-image" src={`${sightingImages.sightingTwo}`}/>
            <img className="sighting-image" src={`${sightingImages.sightingThree}`}/>
        </>
    )

}

export default SightingImages;