import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const Animal = () => {
    const animals = Object.values(useSelector(state => state.animals))
    const { animalId } = useParams();
    const animal = animals.find(animal => animal.id === +animalId)
    
    const [showOrigins, setShowOrigins] = useState(false)
    const [showTraits, setShowTraits] = useState(false)
    const [ecosystemInfluence, setShowEcosystemInfluence] = useState(false)

    return (
        <>
            <button onClick={setShowOrigins(true)} className="origins-tab"></button>
            <button onClick={setShowTraits(true)} className="traits-tab"></button>
            <button onClick={setShowEcosystemInfluence(true)} className="ecosystem-influence-tab"></button>

            {showOrigins && 
                <div>
                    {animal.origins}
                </div>
            }

            {showTraits && 
                <div>
                    {animal.traits}
                </div>
            }

            {ecosystemInfluence && 
                <div>
                    {animal.ecosystemInfluence}
                </div>
            }
        </>
    )
}

export default Animal