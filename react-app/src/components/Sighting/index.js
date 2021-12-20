import React from "react"
import { useSelector } from "react-redux"
import SightingImagesModal from "../SightingImagesModal"

const Sighting = ({ sighting, showSightingImagesModal, setShowSightingImagesModal }) => {
    const animals = Object.values(useSelector(state => state.animals))
    const animal = animals.find(animal => animal.id === sighting.animalId)
    const sightingImages = {"sightingOne": sighting.imgUrl1, "sightingTwo": sighting.imgUrl2, "sightingThree": sighting.imgUrl3}

    console.log(sighting)

    return (
        <>
            <div className="sighting-container">
                {showSightingImagesModal && 
                    <SightingImagesModal sightingImages={sightingImages} showSightingImagesModal={showSightingImagesModal} setShowSightingImagesModal={setShowSightingImagesModal} />
                }
                <span className="animal-seen">{animal?.subSpecies}</span>
                <span className="date-seen">{sighting?.sightingDate}</span>
                <div className="sighting-description">
                    Test
                </div>
                <div className="sighting-images">
                    <button className="sighting-images-button" onClick={() => setShowSightingImagesModal(true)}>Images</button>
                </div>
            </div>
        </>
    )
        
}

export default Sighting;