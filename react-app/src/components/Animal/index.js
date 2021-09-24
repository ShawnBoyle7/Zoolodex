import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import CommentForm from "../CommentForm";
import Comments from "../Comments";

const Animal = () => {
    // const article = JSON.parse(animal?.article)

    const animals = Object.values(useSelector(state => state.animals))
    const { animalId } = useParams();
    const animal = animals.find(animal => animal.id === +animalId)
    
    const [showOrigins, setShowOrigins] = useState(true)
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
                <img src="https://untamedanimals.com/wp-content/uploads/2021/01/Do-Leopards-Live-In-The-Jungle.jpg" alt="animal"/>
            </div>

            <button onClick={tabSwitch} value="origins" className="origins-tab">Origins</button>
            <button onClick={tabSwitch} value="traits" className="traits-tab">Traits</button>
            <button onClick={tabSwitch} value="ecosystemInfluence" className="ecosystem-influence-tab">Ecosystem Influence</button>

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

            {showEcosystemInfluence && 
                <div>
                    {animal.ecosystemInfluence}
                </div>
            }
            <div>
                {/* Sighting placeholder */}
                <h2>Comments</h2>
                <CommentForm animal={animal} sighting={null}/>
                <Comments animalId={animal.id}/>
            </div>
        </>
    )
}

export default Animal