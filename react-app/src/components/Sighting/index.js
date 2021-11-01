import React from "react"
import { useSelector } from "react-redux"

const Sighting = ({ sighting }) => {
    // const animals = Object.values(useSelector(state => state.animals))
    // const animal = animals.find(animal => animal.id === animalId)

    console.log("SIGHTING =", sighting)
    
    return (
        <>
            <div className="sighting-container">
                {/* <span className="animal-seen">{animal.subSpecies}</span> */}
                {/* <span className="date-seen">{sighting.dateSeen}</span> */}
                <div className="sighting-description">
                    Test
                </div>
                <div className="sighting-images">

                </div>
            </div>
        </>
    )
        
}

export default Sighting;