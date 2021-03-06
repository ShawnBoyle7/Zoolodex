import React, { useState } from "react";
import { useSelector } from "react-redux";
import SuggestionTile from "../SuggestionTile";
import './Suggestions.css'

const Suggestions = () => {

    const suggestions = Object.values(useSelector(state => state.suggestions))
    const animalSuggestions = suggestions.filter(suggestion => suggestion.type === "animal").reverse()
    const regionSuggestions = suggestions.filter(suggestion => suggestion.type === "region").reverse()

    const [showAnimals, setShowAnimals] = useState(true)
    const [showRegions, setShowRegions] = useState(false)

    const animalClick = () => {
        setShowAnimals(true)
        setShowRegions(false)
    };

    const regionClick = () => {
        setShowAnimals(false)
        setShowRegions(true)
    };

    return(
        <>
            <div className="background-image-div"><img src="https://thimages.co.uk/wildfoot-page/wildfootpage-29/page-image-44340.jpg" alt="background"/></div>
                <div className="suggestion-conditional-buttons-div">
                    <button className={`${showAnimals ? "selected" : ""}`} onClick={animalClick}>Animal Suggestions</button>
                    <button className={`${showRegions ? "selected" : ""}`} onClick={regionClick}>Region Suggestions</button>
                </div>
                <div className="all-suggestions">
                    {showAnimals &&
                        animalSuggestions?.map((suggestion, idx) =>
                        <SuggestionTile suggestion={suggestion} key={idx} flipped={idx % 2 !== 0}/>
                    )}

                    {showRegions &&
                        regionSuggestions?.map((suggestion, idx) =>
                        <SuggestionTile suggestion={suggestion} key={idx} flipped={idx % 2 !== 0}/>
                    )}
                </div>
        </>
    )
};

export default Suggestions;