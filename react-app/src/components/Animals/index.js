import React from "react";
import { useSelector } from "react-redux";
import { Route } from "react-router-dom";
import Animal from "../Animal";
import AnimalTile from "../AnimalTile";

const Animals = () => {
    const animals = Object.values(useSelector(state => state.animals))

    return (
        <>  
            <Route exact path="/animals">
                <div>
                    {animals.map(animal => 
                        <AnimalTile animal={animal} key={animal.id}/>
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