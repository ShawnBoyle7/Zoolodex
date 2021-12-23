import React from "react"
import { useSelector } from "react-redux"
import SightingImagesModal from "../SightingImagesModal"

const Sighting = ({ sighting, showSightingImagesModal, setShowSightingImagesModal }) => {
    const animals = Object.values(useSelector(state => state.animals))
    const animal = animals.find(animal => animal.id === sighting.animalId)
    const sightingImages = {"sightingOne": sighting.imgUrl1, "sightingTwo": sighting.imgUrl2, "sightingThree": sighting.imgUrl3}

    return (
        <>
            <div className="sighting-container">
                {showSightingImagesModal && 
                    <SightingImagesModal sightingImages={sightingImages} showSightingImagesModal={showSightingImagesModal} setShowSightingImagesModal={setShowSightingImagesModal} />
                }

                <span className="animal-seen">I saw a {animal?.subSpecies}!</span>
                <span className="date-seen">{sighting?.sightingDate}</span>
                <div className="sighting-description">
                    This tortoise was huge!
                </div>
                <button className="sighting-images-button" onClick={() => setShowSightingImagesModal(true)}>Images</button>
            </div>
        </>
    )
        
}

export default Sighting;