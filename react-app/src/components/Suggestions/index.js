import React from "react";
import { useSelector } from "react-redux";
import SuggestionTile from "../SuggestionTile";

const Suggestions = () => {

    const suggestions = Object.values(useSelector(state => state.suggestions)) 
    
    return(
        <>
            <div>
                {suggestions.map(suggestion =>
                    <SuggestionTile suggestion={suggestion} key={suggestion.id}/>
                )}
            </div>
        </>
    )
};

export default Suggestions;