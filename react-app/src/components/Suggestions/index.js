import React from "react";
import { useSelector } from "react-redux";
import SuggestionTile from "../SuggestionTile";


const Suggestions = () => {

    const suggestions = Object.values(useSelector(state => state.suggestions))
    
    return(
        <>
            <div className="all-suggestions">
                {suggestions.map(suggestion =>
                    <div className="suggestion-div" key={suggestion?.id}>
                        <SuggestionTile suggestion={suggestion}/>
                    </div>
                )}
            </div>

            
        </>
    )
};

export default Suggestions;