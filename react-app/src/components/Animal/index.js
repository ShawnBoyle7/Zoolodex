import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import AnimalTile from "../AnimalTile";

const Animal = () => {
    const animals = Object.values(useSelector(state => state.animals))
    const { animalId } = useParams();
    const animal = animals.find(animal => animal.id === +animalId)
    const article = JSON.parse(animal?.article)
    
    const [showOrigins, setShowOrigins] = useState(false)
    const [showTraits, setShowTraits] = useState(false)
    const [showEcosystemInfluence, setShowEcosystemInfluence] = useState(false)
    
    const tabSwitch = (e) => {
        setShowOrigins(false)
        setShowTraits(false)
        setShowEcosystemInfluence(false)

        switch (e.target.value) {
            case "origins":
                setShowOrigins(true);
                break;
            case "traits":
                setShowTraits(true);
                break;
            case "ecosystemInfluence":
                setShowEcosystemInfluence(true);
                break;
            default:
                break;
        }
    }

    return (
        <>
            <div className="animal-name">
                <h1>{animal.subSpecies}</h1>
            </div>

            <div className="animal-image">
                <img src="https://untamedanimals.com/wp-content/uploads/2021/01/Do-Leopards-Live-In-The-Jungle.jpg"/>
            </div>

            <button onClick={tabSwitch} value="origins" className="origins-tab">Origins</button>
            <button onClick={tabSwitch} value="traits" className="traits-tab">Traits</button>
            <button onClick={tabSwitch} value="ecosystemInfluence" className="ecosystem-influence-tab">Ecosystem Influence</button>

            {showOrigins && 
                <div>
                    {article.origins}
                </div>
            }

            {showTraits && 
                <div>
                    {article.traits}
                </div>
            }

            {showEcosystemInfluence && 
                <div>
                    {article.ecosystemInfluence}
                </div>
            }
        </>
    )
}

export default Animal