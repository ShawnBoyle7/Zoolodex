import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import CommentForm from "../CommentForm";
import Comments from "../Comments";
import './Animal.css'

const Animal = () => {
    const animals = Object.values(useSelector(state => state.animals))
    const { animalId } = useParams();
    const animal = animals.find(animal => animal.id === +animalId)
    const comments = Object.values(useSelector(state => state.comments)).filter(comment => comment.animalId === +animalId).reverse()
    const sessionUser = useSelector(state => state.session.user)
    
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
            <div className="background-image"><img src="https://images.wallpaperscraft.com/image/single/lake_mountains_trees_129959_3840x2400.jpg"/></div>
            {/* <div className="page-content"> */}
                <div className="animal-page">
                    <div className="animal-name">
                        <h1>{animal.subSpecies}</h1>
                    </div>

                    <div className="animal-image">
                        <img src={animal.imgUrl} alt="animal"/>
                    </div>

                    <div className="animal-conditional-buttons-div">
                        <button onClick={tabSwitch} value="origins" className="origins-tab">Origins</button>
                        <button onClick={tabSwitch} value="traits" className="traits-tab">Traits</button>
                        <button onClick={tabSwitch} value="ecosystemInfluence" className="ecosystem-influence-tab">Ecosystem</button>
                    </div>

                    <p className="animal-content">
                        {showOrigins && 
                            animal.origins
                        }

                        {showTraits && 
                            animal.traits
                        }

                        {showEcosystemInfluence && 
                            animal.ecosystemInfluence
                        }
                    </p>

                    <div className="animal-comments-div">
                        {/* Sighting placeholder */}
                        <h2>{comments.length} Comments</h2>
                        {sessionUser ? 
                            <p>Comment as {sessionUser?.username}</p>
                            :
                            ""
                        }
                        <CommentForm animal={animal} sighting={null}/>
                        <Comments animalId={animal.id}/>
                    </div>
                </div>
            {/* </div> */}
        </>
    )
}

export default Animal