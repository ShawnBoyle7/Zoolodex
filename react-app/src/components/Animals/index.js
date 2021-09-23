import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom"

const Animals = () => {
    const animals = Object.values(useSelector(state => state.animals))

    return (
        <>
            <div className="animals-div">
                {animals.map(animal => 
                    <div className="animal-link" key={animal.id}>
                        <Link to={`animals/${animal.id}`}>
                            <div className="animal-name">
                                {animal.subSpecies}
                            </div>
                        </Link>
                    </div>
                )}
            </div>
        </>
    )
}

export default Animals