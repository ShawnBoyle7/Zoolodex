import React, { } from "react";

const SuggestionTile = ({ suggestion }) => {
    
    return (
        <div className="suggestion-div">
            <div className="suggestion-tile-title">
                <h2>{suggestion.title}</h2>
            </div>
            <div className="suggestion-tile-image">
                <img src={suggestion.imgUrl} alt="suggestion"/>
            </div>
            <div className="suggestion-tile-description">
                <h2>{suggestion.description}</h2>
            </div>
        </div>
    )
}

export default SuggestionTile