import React, { useState } from "react";
import { useSelector } from "react-redux";
import SuggestionTile from "../SuggestionTile";


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
            <button onClick={animalClick}>Animal Suggestions</button>
            <button onClick={regionClick}>Region Suggestions</button>
            <div className="all-suggestions">
                {showAnimals &&
                    animalSuggestions.map(suggestion =>
                        <div className="suggestion-div" key={suggestion?.id}>
                            <SuggestionTile suggestion={suggestion}/>
                        </div>
                )}

                {showRegions &&
                    regionSuggestions.map(suggestion =>
                        <div className="suggestion-div" key={suggestion?.id}>
                            <SuggestionTile suggestion={suggestion}/>
                        </div>
                )}
            </div>
        </>
    )
};

export default Suggestions;