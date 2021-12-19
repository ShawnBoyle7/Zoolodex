import React from "react";

const AnimalTile = ({ animal }) => {

    return (
        <div className="animal-div">
            <div className="gallery-image-div">
                <img className="gallery-image" src={animal.imgUrl} alt="animal"/>
                {/* <div className="gallery-image" style={{ backgroundImage: `url(${animal?.imgUrl})` }}></div> */}
            </div>
            <div className="tile-name">
                <h2>{animal.subSpecies}</h2>
            </div>
        </div>
    )
}

export default AnimalTile