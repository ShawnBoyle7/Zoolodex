import React from "react";

const AnimalTile = ({ animal }) => {

    return (
        <div className="animal-div">
            <div className="animal-tile-image">
                <img src={animal.imgUrl} alt="animal"/>
            </div>
            <div className="tile-name">
                <h2>{animal.subSpecies}</h2>
            </div>
        </div>
    )
}

export default AnimalTile