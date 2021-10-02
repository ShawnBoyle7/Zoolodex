import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import CommentForm from "../CommentForm";
import Comments from "../Comments";
import './Animal.css'

const Animal = () => {
    const animals = Object.values(useSelector(state => state.animals))
    const { animalId } = useParams();
    const animal = animals.find(animal => animal?.id === +animalId)
    const comments = Object.values(useSelector(state => state.comments)).filter(comment => comment?.animalId === +animalId).reverse()
    const sessionUser = useSelector(state => state.session?.user)
    // const animalRegionId = animal?.regions[0]
    const animalHeaderImage = Object.values(useSelector(state => state.regions)).find(region => region?.id === animal?.regions[0]).imgUrl
    
    const [showOrigins, setShowOrigins] = useState(true)
    const [showTraits, setShowTraits] = useState(false)
    const [showEcosystemInfluence, setShowEcosystemInfluence] = useState(false)
    
    const tabSwitch = (e) => {
        const articleButtons= Array.from(document.querySelectorAll(".article-button"))
        articleButtons?.forEach(button => button.classList.remove("selected"))
        e.target?.classList.add("selected")
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
            <div className="background-image-div"><img src={animalHeaderImage} alt="background"/></div>
                <div className="animal-page">
                    <div className="animal-name">
                        <h1>{animal.subSpecies}</h1>
                    </div>

                    <div className="animal-image">
                        <img src={animal.imgUrl} alt="animal"/>
                    </div>

                    <div className="animal-conditional-buttons-div">
                        <button onClick={tabSwitch} value="origins" className="origins-tab article-button selected" >Origins</button>
                        <button onClick={tabSwitch} value="traits" className="traits-tab article-button" >Traits</button>
                        <button onClick={tabSwitch} value="ecosystemInfluence" className="ecosystem-influence-tab article-button" >Ecosystem</button>
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
                        <h2 className="animal-comments-header">{comments.length} Comments</h2>
                        {sessionUser &&
                            <div className="comment-form-div">
                                {sessionUser &&
                                    <>
                                        <img className="comment-form-image" src={sessionUser.imgUrl} alt="user"/>
                                        <div className="comment-form-text-div">
                                            <span className="comment-form-text">Comment as {sessionUser?.username}</span>
                                            <CommentForm animal={animal} sighting={null}/>
                                        </div>
                                    </>
                                }
                            </div>
                        }
                        <Comments animalId={animal.id}/>
                    </div>
                </div>
        </>
    )
}

export default Animal