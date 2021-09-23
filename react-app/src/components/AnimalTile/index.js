import React from "react";
import { useHistory } from "react-router-dom";

const AnimalTile = ({ animal }) => {
    const history = useHistory();
    console.log(animal)

    return (
        <div className="animal-div" onClick={history.push(`/animals/${animal.id}`)}>
            <div className="animal-image">
                <img src={animal.imgUrl} alt="animal"/>
            </div>

            <div className="animal-name">
                <h2>{animal.subSpecies}</h2>
            </div>
        </div>
    )
}

export default AnimalTile