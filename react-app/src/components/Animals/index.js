import React from "react";
import { useSelector } from "react-redux";
import { Route } from "react-router-dom";
import Animal from "../Animal";
import AnimalTile from "../AnimalTile";
import { Link } from "react-router-dom";
import './Animal.css'

const Animals = () => {
    const animals = Object.values(useSelector(state => state.animals))

    return (
        <>  
            <Route exact path="/animals">
                <div className="animals-page">
                    {animals.map(animal =>
                        <Link to={`/animals/${animal.id}`} key={animal.id}>
                            <AnimalTile animal={animal}/>
                        </Link>
                    )}
                </div>
            </Route>

            <Route path="/animals/:animalId">
                <Animal/>
            </Route>
        </>
    )
}

export default Animals