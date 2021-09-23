import React from "react";
import { useSelector } from "react-redux";
import Animal from "../Animal";

const Animals = () => {
    const animals = Object.values(useSelector(state => state.animals))

    return (
        <>  
            <Route exact path="/animals">
                <div className="animals-div">
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