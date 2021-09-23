import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const AnimalTile = ({ animal }) => {
    const history = useHistory();

    return (
        <div className="animal-div" onClick={history.push(`/animals/${animal.id}`)}>
            
        </div>
    )
}

export default AnimalTile